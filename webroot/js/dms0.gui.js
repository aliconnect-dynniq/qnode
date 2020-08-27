(function() {

	//const Legenda = {
	//	Running: { title: 'Geen fouten' },
	//	CriticalFailure: { title: 'Storing urgent' },
	//	NonCriticalFailure: { title: 'Storing niet urgent' },
	//	Warning: { title: 'Voorwaarschuwing / ongewenste stand' },
	//	CommunicationFailure: { title: 'Communicatie fout' },
	//}
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

	for (var attributeName in AttributeTypeFilter) AttributeTypeFilter[attributeName].checked = 1;
	itemList = [];
	writefilter = function () {
		for (var i = 0, el, c = document.body.getElementsByClassName('his') ; el = c[i]; i++) el.removeAttribute('checked');
		document.getElementById(hisButtonId).setAttribute('checked', '');
		with (list) {
			innerText = '';
			AIM.listData.forEach(function (row) {
				var item = AIM.ref[row.id];
				if (!item || itemList.indexOf(Number(item.id)) == -1) return;
				if (!item.AttributeType || !AttributeTypeFilter[item.AttributeType] || AttributeTypeFilter[item.AttributeType].checked) with (item.elTR = appendTag('tr', { className: (hisButtonId == 'actueel' ? item.id : '') + ' ' + (AttributeTypeFilter[item.AttributeType] ? AttributeTypeFilter[item.AttributeType].filtertype || '' : '') })) {
					if (item.selected == 0) setAttribute('disabled', '');


					//setAttribute('hasControlObject', item.hasControlObject);

					console.debug(item, item.schema, item.id, row.Value, item.AttributeType);

					appendTag('td', { className: 'symbol Value', attr: { value: row.Value || 0, [item.AttributeType]: row.Value || 0 } });
					appendTag('td', { className: 'ModifiedDT', innerText: row.modifiedDT ? new Date(row.modifiedDT).toISOString().substr(0, 19).replace(/T/, ' ') : '' });
					for (var path = [], master = item; master && master.class != 'dms_Group'; master = master.master) path.push(master.title);
					appendTag('td', { innerText: path.reverse().join('.') });

					//console.debug(row);
					//if ('NumericValue' in row) {

					//}
					//if (!('NumericValue' in row)) {
					//	//setAttribute('State', item.State);
					//	if (item.connectState) setAttribute('Connected', item.connectState);
					//}

					//row.Value = row.Value !== undefined ? row.Value : row.NumericValue || row.TextualValue;
					var value = 'TextualValue' in row ? Number(row.TextualValue) : (!row.values || !row.values.Value ? '#' : row.Value);
					setAttribute('value', value || 0);

					//var value = (item.Enum ? item.Enum.split(',')[row.Value] : (isNaN(row.Value) ? row.Value : Math.round(row.Value * 100) / 100)) || '';
					var value = (item.Enum ? item.Enum.split(',')[value] : (isNaN(value) ? value : Math.round(value * 100) / 100)) || value;

					with (appendTag('td')) { appendTag('span', { className: 'Value', innerText: value }); appendTag('span', { innerText: item.Unit || '' }); }
					appendTag('td', { innerText: item.Title || '' });
					appendTag('td', { innerText: item.AttributeType || '' });
				};
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
						//if (attribute) Object.assign(row, { id: row.TagID, Name: attribute.Name, Title: attribute.Title, Unit: attribute.Unit, Value: row.TextualValue || row.NumericValue, Enum: attribute.Enum, StandardOutput: row.StandardOutput, Quality: row.Quality });
						AIM.listData.push(Object.assign(row, { TextualValue: row.Value, Name: attribute.Name, Title: attribute.Title, Unit: attribute.Unit, Enum: attribute.Enum, StandardOutput: attribute.StandardOutput }));
					});
					//console.debug('AIM.listData', AIM.listData);

					//AIM.listData = this.data.WebLogItemArray;
					//AIM.listData.forEach(function (row) {
					//	var attribute = api.Attribute[row.TagID];
					//	if (attribute) Object.assign(row, { id: row.TagID, Name: attribute.Name, Title: attribute.Title, Unit: attribute.Unit, Value: row.TextualValue || row.NumericValue, Enum: attribute.Enum, StandardOutput: row.StandardOutput, Quality: row.Quality });
					//});


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
			if (!this.el) with (this.el = document.body.appendTag('form', { className: 'popupform col', onsubmit: submit.bind(this) })) {
				with (appendTag('div', { className: 'row aco' })) {
					with (appendTag('div', { className: 'col aco' })) {
						appendTag('div', { innerText: 'Periode vanaf xxxxx:' });
						appendTag('div', { innerText: 'Selecteer datum:' });
						appendTag('input', {
							id: 'startDate', type: 'datetime-local', onchange: function () {
								//endDate.value = new Date(new Date(this.value).setDate(new Date(this.value).getDate() + 1)).toISOString().substr(0, 10);
							}
						});
					}
					with (appendTag('div', { className: 'col aco' })) {
						appendTag('div', { innerText: 'Periode Tot:' });
						appendTag('div', { innerText: 'Selecteer datum:' });
						appendTag('input', { id: 'endDate', type: 'datetime-local' });
					}
				}
				with (appendTag('div', { className: 'row' })) {
					appendTag('button', {
						innerText: 'OK', onclick: function () {
							setfilter.history("[LogDateTime]>='" + AIM.makeDateValue(startDate.value) + "' AND [LogDateTime]<'" + AIM.makeDateValue(endDate.value) + "'");
						}.bind(this)
					});
					appendTag('button', { innerText: 'Cancel', });
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
		if (el.name) for (var i = 0, e, c = el.parentElement.children; e = c[i]; i++) if (e.name == el.name) e.removeAttribute('checked');
		if (el.hasAttribute('checked')) el.removeAttribute('checked'); else el.setAttribute('checked', '');
		setfilter[el.id](el.hasAttribute('checked'));
		writefilter();
	}

	AIM.extend(gui = {
		// client: {
		// 	system: {
		// 		id: 3549983,
		// 		uid: 'e90969be-b793-4bc1-9355-031f019fc297'
		// 	}
		// },
		// deviceTopID: 3563194,
		// systemTopID: 3549983,

		//gui: gui = {
		tree: {
			click: function () {
				for (var i = 0, e, c = folders.getElementsByTagName('div') ; e = c[i]; i++) e.removeAttribute('selected');
				this.setAttribute('selected', '');
				this.previousElementSibling.click();
				itemList = [];
				(recursive = function (item) {
					itemList.push(item.id); if (item.children) item.children.forEach(recursive);
				})(this.item);
				//console.debug('itemList', this.item, itemList);
				writefilter();
			}
		},
		//},
		client: {
			app: 'gui'
		},
		onload: function (event) {
			console.debug('TOP', AIM.ref[AIM.config.aim.aud]);


			//(checkcontrolobject = function (item) {
			//	//console.debug(item.selected);
			//	if (item.selected == 0) console.debug(item);
			//	//if (item.detailID) {
			//	//	(setcontrolobject = function (item) {
			//	//		item.hasControlObject = true;
			//	//		item.children.forEach(setcontrolobject);
			//	//	})(AIM.ref[item.detailID])
			//	//}
			//	item.children.forEach(checkcontrolobject);
			//})(AIM.ref[AIM.deviceTopID]);

			//AIM.ref.forEach(function (item) {
			//	if (item.selected == 0) console.debug('UNSELECTED',item);
			//});



			folders.innerText = '';
			(writeNode = function (item, i) {

				//if ([3562944 ].indexOf(item.id) != -1) { console.debug('CriticalFailure', item.id, item.title,  item.CriticalFailure, item.values.CriticalFailure); }


				if (item.schema == 'Attribute') return;
				if (item.schema == 'Device') return;
				with (item.elLI = this.appendTag('li', {})) {
					appendTag('ln');
					appendTag('open', { onclick: function () { this.setAttribute('open', this.open ^= 1); this.nextElementSibling.setAttribute('open', this.open); } });
					with (item.elDIV = appendTag('div', { className: item.id + ' symbol ', item: item, event: { click: gui.tree.click }, attr: { open: 0 } })) {
						appendTag('a', { name: item.id });
						if (item.detailID) appendTag('a', { innerText: item.title, href: '#' + item.detailID });
						else appendTag('span', { innerText: item.title });

						//for (var attributeName in AttributeTypeFilter) item.elDIV.setAttribute(attributeName, item[attributeName] ? item[attributeName] : 0);

						//['State'].forEach(function (attributeName) {
						//	item.elDIV.setAttribute(attributeName, item[attributeName] || '');
						//});

						//['Connected', 'Disconnected', 'Disconnected', 'Disconnected'].forEach(function (attributeName) {
						//	item.elDIV.setAttribute(attributeName, item[attributeName] || 0);
						//});

					}
					if (item.children) {
						item.elChildren = appendTag('ul');
						item.children.forEach(writeNode.bind(item.elChildren));
					}
					else item.elDIV.setAttribute('open', 2);
				}
			}).call(folders.appendTag('ul'), AIM.ref[AIM.config.aim.aud]);
			setfilter.actueel(AIM.ref[AIM.config.aim.aud]);
			gui.setTree();
		},
		setTree: function () {
			//acsmconnect.innerText = 'ACSM Status: ' + (AIM.ref[AIM.config.acsm_id].values.State.value == 'connect' ? 'Online' : 'Offline');
			if(!AIM.api.Device) return;
			AIM.api.Device.forEach(function (device, i) {
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
			AIM.api.Attribute.forEach(function (attribute) {
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
				if (!attribute.Value == 1) return;
				for (var parent = attribute; parent; parent = parent.master) {
					if (parent.elDIV) {
						parent.elDIV.setAttribute(stateAttributeName, Number(parent.elDIV.getAttribute(stateAttributeName)) + 1);
					}
				}
			});

		},


		//setState: function () {
		//	//console.debug('setState');
		//	return;
		//	AIM.api.Device.forEach(function (device, i) {
		//		if (!device.values || !device.values.State) return;
		//		var state = device.values.State.value;
		//		device.children.forEach(setState = function (child, i, children) {
		//			child = items[child.detailID || child.id];
		//			child.State = state;
		//			child.children.forEach(setState);
		//		})
		//	});
		//	for (var i = 0, el, c = folders.getElementsByTagName('DIV') ; el = c[i]; i++) 'Connected Disconnected'.split(' ').forEach(function (State) { el.removeAttribute(State); });
		//	AIM.api.Attribute.forEach(function (item, i) {
		//		if (!item.State || 'Disconnected Disconnected Disconnected'.split(' ').indexOf(item.State) == -1) return;
		//		for (var parent = item; item.State && parent && parent.schema != 'Device'; parent = parent.master) {
		//			if (parent.elDIV) parent.elDIV.setAttribute('Disconnected', Number(parent.elDIV.getAttribute('Disconnected')) + 1);
		//		}
		//	});
		//},
		on: {
			disconnect: function (event) {
				AIM.disconnected = true;
				//if (AIM.wss.connected) document.location.reload();
			},
			connect: function (data) {

				AIM.config.aim.aud = AIM.config.aim.aud || AIM.access.sub;

				console.debug('CONNECTED',AIM.config.aim.aud);


				AIM.http.request(AIM.config.aim, {path:`/System(${AIM.config.aim.aud})/children?level=20&select=*`}, (event) => {
					console.debug(this.data);
					//console.debug('ws_respond',AIM.ref[AIM.config.aim.aud]);
					AIM.onload();

				});
				return;



				//if (AIM.disconnected) document.location.reload();
				ws.request({url:'items',method:'GET' }, (data) => {
					data.body.forEach(api.onload);
					console.debug('ws_respond',AIM.ref[AIM.config.aim.aud]);

					AIM.onload();
				});
				return;


				console.debug('CONNECT', data);
				//var data = event.data;
				var value = data.value || [data];

				//value.forEach(function (item) {

				//	if ([3562893, 3562891, 3562878, 3562876, 3549983].indexOf(item.id) != -1) { console.debug('CriticalFailure', item.id, item.title, item.CriticalFailure, item.values.CriticalFailure); }

				//});


				//value.forEach(function (item) {
				//	if ([ 3564680, 3564681, 3564682, 3564683].indexOf(item.masterID) != -1) { console.debug('child', item.masterID, item.id, item.title); }
				//	if ([3564680, 3564681, 3564682, 3564683].indexOf(item.id) != -1) { console.debug('master', item.id, item.title, item.children); }
				//});


				value.forEach(api.onload);



				AIM.onload();
				//AIM.setState();
			},
			message: function (event) {
				//console.debug('message gui',event.data);
				if (event.data) gui.setTree();
				//console.debug(event.data.value);
				//gui.setTree();


				//bereken, toon state disconnected

				//const calcState = function () {
				//	//var faultAttributes = 'Connected Disconnected Disconnected Disconnected'.split(' ');
				//	//Reset all state counters
				//	//items.forEach(function (item) {
				//	//	item.counters = [];
				//	//	faultAttributes.forEach(function (State) { item.counters[State] = 0; });
				//	//});
				//	//Count state counters
				//	var countItems = [];
				//	items.forEach(function (item) {
				//		if (item.schema == 'Attribute') {
				//			item.State = item.State || 'Disconnected';
				//			//if (item.State == 'Connected') return;
				//			(masterpath = function (master) {
				//				master = items[master.masterID];
				//				if (!master) return;
				//				if (master.schema == 'Device') return;
				//				countItems[master.id] = countItems[master.id] || 0;
				//				if (item.State != 'Connected') countItems[master.id]++;
				//				//[item.State] = countItems[master.id][item.State] || 0;
				//				//countItems[master.id][item.State] += 1;
				//				masterpath(master);
				//			})(item);
				//		}
				//	});
				//	//console.debug('setState.countItems', countItems);
				//	countItems.forEach(function (row, id) {
				//		var item = items[id];
				//		setAttribute(item, 'Disconnected', row);
				//		//faultAttributes.forEach(function (State) {
				//		//	if (item[State] != row[State]) {
				//		//		//console.debug('setState fault', State, item.title, item[State], row[State]);
				//		//		setAttribute(item, State, row[State] || 0);
				//		//	}
				//		//});
				//	});
				//}


				//var itemlist = [];
				//(recursive = function (child) {
				//	if (!child) return;
				//	//if (child.detailID) console.debug('setState.child', child.detailID, value, items[child.detailID || child.id].title, items[child.detailID || child.id].schema, items[child.detailID || child.id].class);
				//	child = items[child.detailID || child.id];
				//	setAttribute(child, 'State', value);
				//	child.children.forEach(recursive);
				//})(item);
				//calcState();


				//bereken cummulatieve boom
				//if (['CriticalFailure', 'NonCriticalFailure', 'Locking', 'Maintenance', 'Running', 'Security', 'PreWarning_1', 'PreWarning_2', 'PreWarning_3'].indexOf(item.AttributeType) != -1) {
				//	var cumvalue = Number(newvalue || 0) - Number(item[item.AttributeType] || 0);
				//	setAttribute(item, item.AttributeType, newvalue);
				//	for (var master = items[item.masterID]; master; master = items[master.masterID]) {
				//		setAttribute(master, item.AttributeType, Math.max(0, Number(master[item.AttributeType] || 0) + cumvalue));
				//		if (master.class == 'dms_Location') break;
				//	}
				//}




				//AIM.setState();
			},
			//message: function (event) {
			//	if (event.data.value) {
			//		for (var i = 0, row; row = event.data.value[i]; i++) if (row.values && row.values.State) return AIM.setState();
			//		console.debug('GUI.on.message', event.data);
			//	}
			//},
		},
	});
	setInterval(function (event) { elementTime.innerText = 'UTC time: ' + new Date().toISOString().substr(0, 19).replace(/T/, ' ') }, 1000);
})();
