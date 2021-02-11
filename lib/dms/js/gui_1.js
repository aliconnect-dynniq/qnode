(function() {
	const AttributeTypeFilter = {
		CriticalFailure: { filtertype: 'alarm', stateButton: 'CriticalFailure' },
		NonCriticalFailure: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
		Locking: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
		Maintenance: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
		Running: { filtertype: 'state', stateButton: 'Running' },
		RunningMode: { filtertype: 'state', stateButton: 'Running' },
		Security: { filtertype: 'alarm', stateButton: 'NonCriticalFailure' },
		PreWarning_1: { filtertype: 'alarm', stateButton: 'Warning' },
		PreWarning_2: { filtertype: 'alarm', stateButton: 'Warning' },
		PreWarning_3: { filtertype: 'alarm', stateButton: 'Warning' },
		Measurement_1: { filtertype: 'measurement', stateButton: '' },
		Measurement_2: { filtertype: 'measurement', stateButton: '' },
		Measurement_3: { filtertype: 'measurement', stateButton: '' },
		Measurement_4: { filtertype: 'measurement', stateButton: '' },
		Measurement_5: { filtertype: 'measurement', stateButton: '' },
		MeasurementErrorFlag: { filtertype: 'measurement', stateButton: '' },
	}
	for (var attributeName in AttributeTypeFilter) {
		AttributeTypeFilter[attributeName].checked = 1;
	}
	itemList = [];
	writefilter = function () {
		[...document.body.getElementsByClassName('his')].forEach(el => el.removeAttribute('checked'));
		document.getElementById(hisButtonId).setAttribute('checked', '');
		list.innerText = '';
		AIM.listData.forEach(row => {
			var item = AIM.ref[row.id];
			if (!item || itemList.indexOf(Number(item.id)) == -1) return;
			if (!item.AttributeType || !AttributeTypeFilter[item.AttributeType] || AttributeTypeFilter[item.AttributeType].checked) {
				with (item.elTR = createElement('tr', { className: (hisButtonId === 'actueel' ? item.id : '') + ' ' + (AttributeTypeFilter[item.AttributeType] ? AttributeTypeFilter[item.AttributeType].filtertype || '' : '') })) {
					if (item.selected === 0) setAttribute('disabled', '');
					// console.debug(item, item.schema, item.id, row.Value, item.AttributeType);
					createElement('TD', 'symbol Value',  { value: row.Value || 0, [item.AttributeType]: row.Value || 0 });
					createElement('TD', 'ModifiedDT', row.modifiedDT ? new Date(row.modifiedDT).toISOString().substr(0, 19).replace(/T/, ' ') : '' );
					for (var path = [], master = item; master && master.class !== 'dms_Group'; master = master.master) {
						path.push(master.Title);
					}
					createElement('TD', '', path.reverse().join('.'));
					var value = 'TextualValue' in row ? Number(row.TextualValue) : (!row.values || !row.values.Value ? '#' : row.Value);
					setAttribute('value', value || 0);
					var value = (item.Enum ? item.Enum.split(',')[value] : (isNaN(value) ? value : Math.round(value * 100) / 100)) || value;
					createElement('TD', [
						['SPAN', 'Value', value],
						['SPAN', '', item.Unit || ''],
					]);
					createElement('TD', '', item.Title || '');
					createElement('TD', '', item.AttributeType || '');
				};
			}
		});
		gui.setTree();
	}

	setfilter = {
		select(checked, arr) { for (var attributeName in AttributeTypeFilter) if (arr.indexOf(AttributeTypeFilter[attributeName].filtertype) != -1) AttributeTypeFilter[attributeName].checked = checked; },
		actueel: function (selectedItem) {
			hisButtonId = 'actueel';
			AIM.listData = [];
			(getItemAttributes = item => {
				if (item.schema === 'Device') {
					return;
				}
				if (item.schema === 'Attribute') {
					AIM.listData.push(item);
				}
				if (item.children) {
					item.children.forEach(getItemAttributes);
				}
			})(AIM.selectedItem = typeof selectedItem == 'object' ? selectedItem : AIM.selectedItem);
			writefilter();
		},
		history(filter, newHisButtonId) {
			hisButtonId = newHisButtonId || hisButtonId;
			new AIM.HttpRequest('../../api/v1/acsm').query({ weblog: 1, filter: filter }).get().then(event => {
				AIM.listData = [];
				event.data.forEach(row => {
					if (!row || !api.Attribute[row.id]) {
						return;
					}
					const attribute = api.Attribute[row.id];
					AIM.listData.push(Object.assign(row, {
						TextualValue: row.Value,
						Name: attribute.Name,
						Title: attribute.Title,
						Unit: attribute.Unit,
						Enum: attribute.Enum,
						StandardOutput: attribute.StandardOutput
					}));
				});
				writefilter();
			})
		},
		uur1: () => setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=60', 'uur1'),
		uur4: () => setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=240', 'uur4'),
		uur24: () => setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=1440', 'uur24'),
		filter() {
			hisButtonId = 'filter';
			function submit(event) {
				this.el.style.display = 'none';
				return false;
			};
			if (!this.el) {
				this.el = document.body.createElement('FORM', 'popupform col', {onsubmit: submit.bind(this) }, [
					['DIV', 'row aco', [
						['DIV', 'col aco', [
							['DIV', 'Periode vanaf xxxxx:'],
							['DIV', 'Selecteer datum:'],
							['INPUT', {id: 'startDate', type: 'datetime-local', onchange: function () {
								//endDate.value = new Date(new Date(this.value).setDate(new Date(this.value).getDate() + 1)).toISOString().substr(0, 10);
							}}]
						]],
						['DIV', 'col aco', [
							['DIV', 'Periode Tot:'],
							['DIV', 'Selecteer datum:'],
							['INPUT', {id: 'endDate', type: 'datetime-local'}]
						]],

					]],
					['DIV', 'row', [
						['BUTTON', '', 'OK', { onclick() {
							setfilter.history("[LogDateTime]>='" + AIM.makeDateValue(startDate.value) + "' AND [LogDateTime]<'" + AIM.makeDateValue(endDate.value) + "'");
						}}],
						['BUTTON', '', 'Cancel'],
					]],
				])
				startDate.focus();
			} else {
				this.el.style.display = '';
				startDate.focus();
			}
		},
		alles(checked) {
			for (var attributeName in AttributeTypeFilter) {
				AttributeTypeFilter[attributeName].checked = 1;
			}
			alarm.setAttribute('checked', '');
			state.setAttribute('checked', '');
			measurement.setAttribute('checked', '');
		},
		alarm(checked) {
			setfilter.select(checked, ['alarm']);
		},
		state(checked) {
			setfilter.select(checked, ['state']);
		},
		measurement(checked) {
			setfilter.select(checked, ['measurement']);
		},
	}

	select = function (el) {
		if (el.name) {
			[...el.parentElement.children].forEach(childElement => {
				if (childElement.name === el.name) {
					childElement.removeAttribute('checked');
				}
			});
		}
		if (el.hasAttribute('checked')) {
			el.removeAttribute('checked');
		} else {
			el.setAttribute('checked', '');
		}
		setfilter[el.id](el.hasAttribute('checked'));
		writefilter();
	}

	function createGui() {
		const item = AIM.getItem(AIM.auth.access.sub);
		console.debug('TOP', AIM.ref[AIM.auth.access.sub]);
		folders.innerText = '';
		(writeNode = function (item, i) {
			if (item.schema === 'Attribute') return;
			if (item.schema === 'Device') return;
			const elLI = item.elLI = this.createElement('LI', {});
			elLI.createElement('LN');
			elLI.createElement('OPEN', { onclick() {
				this.setAttribute('open', this.open ^= 1);
				this.nextElementSibling.setAttribute('open', this.open);
			} });
			const elDIV = item.elDIV = elLI.createElement('DIV', item.id + ' symbol ', { item: item, onclick: gui.tree.click, open: 0 });
			elDIV.createElement('A', { name: item.id });
			if (item.detailID) {
				elDIV.createElement('A', '', item.Title, { href: '#' + item.detailID });
			} else {
				elDIV.createElement('SPAN', '', item.Title);
			}
			if (item.children) {
				item.elChildren = elLI.createElement('UL');
				item.children.forEach(writeNode.bind(item.elChildren));
			} else {
				item.elDIV.setAttribute('OPEN', 2);
			}
		}).call(folders.createElement('UL'), item);
		setfilter.actueel(item);
		gui.setTree();
	}

	AIM.extend(gui = {
		config: {
			aim: {
				websocket: {
					servers: [{ url: document.location.origin.replace(/http/, 'ws') }],
					servers: [{ url: 'wss://aliconnect.nl:444' }],
				},
				servers: [{ url: document.location.origin + '/api' }]
			}
		},
		tree: {
			click: function () {
				for (var i = 0, e, c = folders.getElementsByTagName('DIV') ; e = c[i]; i++) e.removeAttribute('selected');
				this.setAttribute('selected', '');
				this.previousElementSibling.click();
				itemList = [];
				(recursive = function (item) {
					itemList.push(item.id);
					if (item.children) {
						item.children.forEach(recursive);
					}
				})(this.item);
				writefilter();
			}
		},
		client: {
			app: 'gui'
		},
		setTree: function () {
			if(!AIM.ref.Device) return;
			AIM.ref.Device.forEach((device, i) => {
				if (!device.values || !device.values.State) {
					return;
				}
				const State = device.values.State.value;
				// DEBUG: MKA pleisetr, komt mee maar weet niet waarom.
				if (State == 'Connected') {
					return;
				}
				// DEBUG: MKA pleisetr, komt mee maar weet niet waarom.
				if (State == 'Disconnected') {
					return;
				}
				if (Array.isArray(device.children)) {
					device.children.forEach(setState = (child, i, children) => {
						if (child.detailID) {
							(recursive = function (attribute) {
								attribute.State = State;
								attribute.children.forEach(recursive);
							})(items[child.detailID]);
						}
						child.children.forEach(setState);
					})
				}
			});

			var treeAttributes = 'connect,connecting,error_read,disconnect,error,CriticalFailure,NonCriticalFailure,Warning'.split(',');
			[...folders.getElementsByTagName('DIV')].forEach(el => {
				treeAttributes.forEach(State => el.removeAttribute(State) );
			})
			if (AIM.ref.Attribute) {
				AIM.ref.Attribute.forEach(attribute =>{
					if (attribute.elTR && attribute.elTR.parentElement) {
						attribute.elTR.setAttribute('state', attribute.State);
					}
					for (var parent = attribute; parent; parent = parent.master) {
						if (parent.elDIV && String(attribute.State)) {
							parent.elDIV.setAttribute(attribute.State, Number(parent.elDIV.getAttribute(attribute.State)) + 1);
						}
					}
					const attributeType = AttributeTypeFilter[attribute.AttributeType];
					if (!attributeType || !attributeType.stateButton || attribute.Value !== 1) {
						return;
					}
					const stateAttributeName = attributeType.stateButton;
					for (var parent = attribute; parent; parent = parent.master) {
						if (parent.elDIV) {
							parent.elDIV.setAttribute(stateAttributeName, Number(parent.elDIV.getAttribute(stateAttributeName)) + 1);
						}
					}
				});
			}
		},
		on: {
			disconnect(event) {
				AIM.disconnected = true;
			},
			init() {
				AIM.datainit(createGui);
				// DEBUG: MAX, tijdelijk uitgezet mbv return, later werkend maken
				return;
				ws.request({url:'items',method:'GET' }, (data) => {
					data.body.forEach(api.onload);
					console.debug('ws_respond',AIM.ref[AIM.auth.access.sub]);
					AIM.onload();
				});
				return;
				console.debug('CONNECT', data);
				var value = data.value || [data];
				value.forEach(api.onload);
				AIM.onload();
			},
			message(event) {
				if (event.data) {
					gui.setTree();
				}
			},
		},
	});
	setInterval(event => {
		elementTime.innerText = 'UTC time: ' + new Date().toISOString().substr(0, 19).replace(/T/, ' ');
	}, 1000);
})();
