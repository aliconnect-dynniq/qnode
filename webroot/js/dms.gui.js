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
		for (var i = 0, el, c = document.body.getElementsByClassName('his') ; el = c[i]; i++) el.removeAttribute('checked');
		document.getElementById(hisButtonId).setAttribute('checked', '');
		with (list) {
			innerText = '';
			AIM.listData.forEach(function (row) {
				var item = AIM.ref[row.id];
				if (!item || itemList.indexOf(Number(item.id)) == -1) return;
				if (!item.AttributeType || !AttributeTypeFilter[item.AttributeType] || AttributeTypeFilter[item.AttributeType].checked) {
					with (item.elTR = createElement('tr', { className: (hisButtonId === 'actueel' ? item.id : '') + ' ' + (AttributeTypeFilter[item.AttributeType] ? AttributeTypeFilter[item.AttributeType].filtertype || '' : '') })) {
						if (item.selected === 0) setAttribute('disabled', '');
						console.debug(item, item.schema, item.id, row.Value, item.AttributeType);
						createElement('TD', 'symbol Value',  { value: row.Value || 0, [item.AttributeType]: row.Value || 0 });
						createElement('TD', 'ModifiedDT', row.modifiedDT ? new Date(row.modifiedDT).toISOString().substr(0, 19).replace(/T/, ' ') : '' );
						for (var path = [], master = item; master && master.class != 'dms_Group'; master = master.master) path.push(master.Title);
						createElement('TD', '', path.reverse().join('.'));
						var value = 'TextualValue' in row ? Number(row.TextualValue) : (!row.values || !row.values.Value ? '#' : row.Value);
						setAttribute('value', value || 0);
						var value = (item.Enum ? item.Enum.split(',')[value] : (isNaN(value) ? value : Math.round(value * 100) / 100)) || value;
						with (createElement('TD')) { createElement('SPAN', 'Value', value); createElement('SPAN', '', item.Unit || ''); }
						createElement('TD', '', item.Title || '');
						createElement('TD', '', item.AttributeType || '');
					};
				}
			});
		}
		gui.setTree();
	}

	setfilter = {
		select(checked, arr) { for (var attributeName in AttributeTypeFilter) if (arr.indexOf(AttributeTypeFilter[attributeName].filtertype) != -1) AttributeTypeFilter[attributeName].checked = checked; },
		actueel: function (selectedItem) {
			hisButtonId = 'actueel';
			AIM.listData = [];
			(getItemAttributes = function (item) {
				if (item.schema == 'Device') return;
				if (item.schema == 'Attribute') AIM.listData.push(item);
				if (item.children) item.children.forEach(getItemAttributes);
			})(AIM.selectedItem = typeof selectedItem == 'object' ? selectedItem : AIM.selectedItem);
			writefilter();
		},
		history: function (filter) {
			AIM.load({
				src: '../../api/v1/acsm', get: { weblog: 1, filter: filter }, onload: function (event) {
					//console.debug('history load', this.src, event.data);
					AIM.listData = [];
					event.data.forEach(function (row) {
						if (!row) return;
						var attribute = api.Attribute[row.id];
						if (!attribute) return;
						AIM.listData.push(Object.assign(row, { TextualValue: row.Value, Name: attribute.Name, Title: attribute.Title, Unit: attribute.Unit, Enum: attribute.Enum, StandardOutput: attribute.StandardOutput }));
					});
					writefilter();
				}
			});
		},
		uur1: function () { hisButtonId = 'uur1'; setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=60'); },
		uur4: function () { hisButtonId = 'uur4'; setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=240'); },
		uur24: function () { hisButtonId = 'uur24'; setfilter.history('DATEDIFF(MINUTE, [LogDateTime], GETUTCDATE())<=1440'); },
		filter: function () {
			hisButtonId = 'filter';
			var submit = function (event) {
				this.el.style.display = 'none';
				return false;
			};
			if (!this.el) with (this.el = document.body.createElement('form', 'popupform col', {onsubmit: submit.bind(this) })) {
				with (createElement('DIV', 'row aco')) {
					with (createElement('DIV', 'col aco')) {
						createElement('DIV', 'Periode vanaf xxxxx:');
						createElement('DIV', 'Selecteer datum:');
						createElement('INPUT', {
							id: 'startDate', type: 'datetime-local', onchange: function () {
								//endDate.value = new Date(new Date(this.value).setDate(new Date(this.value).getDate() + 1)).toISOString().substr(0, 10);
							}
						});
					}
					with (createElement('DIV', 'col aco')) {
						createElement('DIV', '', 'Periode Tot:');
						createElement('DIV', '', 'Selecteer datum:');
						createElement('INPUT', { id: 'endDate', type: 'datetime-local' });
					}
				}
				with (createElement('DIV', 'row')) {
					createElement('BUTTON', '', 'OK', {
						onclick() {
							setfilter.history("[LogDateTime]>='" + AIM.makeDateValue(startDate.value) + "' AND [LogDateTime]<'" + AIM.makeDateValue(endDate.value) + "'");
						}
					});
					createElement('BUTTON', '', 'Cancel');
				}
				startDate.focus();
			}
			else {
				this.el.style.display = '';
				startDate.focus();
			}
		},
		alles: function (checked) {
			for (var attributeName in AttributeTypeFilter) AttributeTypeFilter[attributeName].checked = 1;
			alarm.setAttribute('checked', '');
			state.setAttribute('checked', '');
			measurement.setAttribute('checked', '');
		},
		alarm: function (checked) { setfilter.select(checked, ['alarm']); },
		state: function (checked) { setfilter.select(checked, ['state']); },
		measurement: function (checked) { setfilter.select(checked, ['measurement']); },
	}

	select = function (el) {
		if (el.name) for (var i = 0, e, c = el.parentElement.children; e = c[i]; i++) if (e.name === el.name) e.removeAttribute('checked');
		if (el.hasAttribute('checked')) el.removeAttribute('checked'); else el.setAttribute('checked', '');
		setfilter[el.id](el.hasAttribute('checked'));
		writefilter();
	}

	AIM.extend(gui = {
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
		onload: function (event) {
			console.debug('TOP', AIM.ref[AIM.aud]);
			folders.innerText = '';
			(writeNode = function (item, i) {
				if (item.schema === 'Attribute') return;
				if (item.schema === 'Device') return;
				with (item.elLI = this.createElement('li', {})) {
					createElement('ln');
					createElement('open', { onclick: function () { this.setAttribute('open', this.open ^= 1); this.nextElementSibling.setAttribute('open', this.open); } });
					with (item.elDIV = createElement('DIV', item.id + ' symbol ', { item: item, onclick: gui.tree.click, open: 0 })) {
						createElement('a', { name: item.id });
						if (item.detailID) {
							createElement('a', '', item.Title, { href: '#' + item.detailID });
						} else {
							createElement('SPAN', '', item.Title);
						}
					}
					if (item.Children) {
						item.elChildren = createElement('ul');
						item.Children.forEach(writeNode.bind(item.elChildren));
					}
					else item.elDIV.setAttribute('open', 2);
				}
			}).call(folders.createElement('UL'), AIM.ref[AIM.aud]);
			setfilter.actueel(AIM.ref[AIM.aud]);
			gui.setTree();
		},
		setTree: function () {
			if(!AIM.ref.Device) return;
			AIM.ref.Device.forEach(function (device, i) {
				if (!device.values || !device.values.State) return;
				var State = device.values.State.value;
				if (State == 'Connected') return; //MKA pleisetr, komt mee maar weet niet waarom.
				if (State == 'Disconnected') return; //MKA pleisetr, komt mee maar weet niet waarom.
				device.children.forEach(setState = function (child, i, children) {
					if (child.detailID) {
						(recursive = function (attribute) {
							attribute.State = State;
							attribute.children.forEach(recursive);
						})(items[child.detailID]);
					}
					child.children.forEach(setState);
				})
			});

			var treeAttributes = 'connect,connecting,error_read,disconnect,error,CriticalFailure,NonCriticalFailure,Warning'.split(',');
			for (var i = 0, el, c = folders.getElementsByTagName('DIV') ; el = c[i]; i++) treeAttributes.forEach(function (State) { el.removeAttribute(State); });
			AIM.ref.Attribute.forEach(function (attribute) {
				if (attribute.elTR && attribute.elTR.parentElement) attribute.elTR.setAttribute('state', attribute.State);
				for (var parent = attribute; parent; parent = parent.master) {
					if (parent.elDIV) {
						parent.elDIV.setAttribute(attribute.State, Number(parent.elDIV.getAttribute(attribute.State)) + 1);
					}
				}
				var attributeType = AttributeTypeFilter[attribute.AttributeType];
				if (!attributeType) return;
				var stateAttributeName = attributeType.stateButton;
				if (!stateAttributeName) return;
				if (!attribute.Value === 1) return;
				for (var parent = attribute; parent; parent = parent.master) {
					if (parent.elDIV) {
						parent.elDIV.setAttribute(stateAttributeName, Number(parent.elDIV.getAttribute(stateAttributeName)) + 1);
					}
				}
			});
		},
		on: {
			disconnect: function (event) {
				AIM.disconnected = true;
			},
			connect: function (data) {
				console.log(AIM.config.aim.auth.accessToken);
				AIM.aud = AIM.config.aim.auth.accessToken.aud;
				AIM.aud = 3549983;
				// console.debug('CONNECTED',aud,AIM.config.aim.auth.accessToken);
				let api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJzaGEyNTYifQ.eyJhdWQiOiIzNTQ5OTgzIiwic3ViIjoiMzU0OTk4MyIsInNjb3BlIjoiYWRtaW4ucmVhZCIsImlzcyI6InNjaGlwaG9sLmFsaWNvbm5lY3QubmwiLCJleHAiOjE1OTM2OTg2NTEsImlhdCI6MTU5MzY5NzkzMX0.9zmFnt3WPrDUHf7sM-jbS_J0hPDg9IggGMcgdK1LnXc';
				// AIM.httpRequest(AIM.config.aim.servers[0], {path:`/System(${AIM.aud})/children?level=20&select=*`}, (event) => {
				AIM.httpRequest(AIM.config.aim, {headers: {api_key: api_key }}, '/?request_type=control_data', (event)=>{
					console.debug(event.body, JSON.parse(event.target.responseText));
					AIM.onload();
				});
				return;
				ws.request({url:'items',method:'GET' }, (data) => {
					data.body.forEach(api.onload);
					console.debug('ws_respond',AIM.ref[AIM.aud]);
					AIM.onload();
				});
				return;
				console.debug('CONNECT', data);
				var value = data.value || [data];
				value.forEach(api.onload);
				AIM.onload();
			},
			message: function (event) {
				if (event.data) gui.setTree();
			},
		},
	});
	setInterval(function (event) { elementTime.innerText = 'UTC time: ' + new Date().toISOString().substr(0, 19).replace(/T/, ' ') }, 1000);
})();
