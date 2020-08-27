console.log('DMS');

var checkTemperatuur = function () {
	this.tempHigh.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.High;
	this.temperatuurHighHigh.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.HighHigh;
	this.temperatuur_hoog.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.High;
	this.temperatuur_hoog.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.High;
}

aim.extend({
	// client: {
	// 	//system: { id: 3487430, uid: "C00C5B73-4565-4046-8CFE-1DDAF9CEAE82" },
	// 	//domain: { id: 3487430, uid: "C00C5B73-4565-4046-8CFE-1DDAF9CEAE82" },
	//
	// 	//system: { id: 3490367, uid: "0882B695-88BB-41D4-B991-79223B1AFE70" },
	//
	// },
	stereotype: {
		configuratie_element: {
			label: 'Configuratie elementen',
		},
		commando: {
			label: "Commando's",
		},
		toestandsvariabele: {
			label: 'Toestandsvariabelen',
		},
		variabele: {
			label: 'Variabelen',
		},
		bediening: {
			label: 'Bedieningen',
		},
		besturing: {
			label: 'Besturingen',
		},
		signalering: {
			label: 'Signaleringen',
		},
		autonoom_proces: {
			label: 'Autonoom processen',
		}
	},
	// config: {
	// },
	api:{
		components:{
			definitions: {
				ConstanteStroomRegelaar: {
					properties: {
						temperatuur_gemeten: {
							stereotype: 'variabele',

						},
						temperatuur_actueel: {
							stereotype: 'variabele',

						},
						//temperatuur_hoog: {
						//	stereotype: 'signalering',
						//	conditie: function () {
						//		return this.temperatuur_actueel.Value > this.temperatuur_actueel.High;
						//		//return this.temperatuur_actueel > this.attribute.temperatuur_actueel.High;
						//	},
						//	action: function () {

						//	}

						//},
					},
					operations: {
						autoTemp: { js: checkTemperatuur, }
					}
				},
				TemperatuurMeting: {
					//3487650
					properties: {
						TempVochtSensor: {

						},
						temperatuur_raw: {
							label: "DMS",
							onchange: function (event) {
								this.item.setAttribute('temperatuur', this.value / 10);
								console.log(this);
							},
						},
						temperatuur: {
							label: "DMS",
							onchange: function (event) {

								console.log(this);
							},
						},

						vochtigheid: {
							label: "DMS",
							onchange: function (event) {
								console.log(this);
							},
						},

						alarm_setpoint: {
							label: "DMS",

						},
						alarm_hoog: {
							conditie: function () {
								return this.TempVochtSensor.temperatuur > this.TempVochtSensor.temperatuur_max;
							}
						},
					},
					operations: {
						autoproc: {
							autoTemp: { js: checkTemperatuur, },
							em: function () {
								this.temperatuur_actueel = this.TempVochtSensor.temperatuur / this.TempVochtSensor.factor;
								this.alarm_hoog = this.TempVochtSensor.temperatuur > this.TempVochtSensor.temperatuur_max;
							}
						},
					},
				},
				TempVochtSensor: {
					properties: {
						factor: {
							initdefaulvalue: 10,
						},
						ReadRegisterStart: {
							initdefaulvalue: 48,
						},
						ReadRegisterLength: {
							initdefaulvalue: 2,
						},
						temperatuur_min: {
							label: "DMS",

						},
						temperatuur_max: {
							label: "DMS",
						},
						temperatuur: {
							label: "DMS",
						},
						vochtigheid: {
							label: "DMS",
						},
					},
					operations: {
					},
				},
				//ATAL308: {
				//	properties: {
				//		ReadRegisterStart: {
				//			initdefaulvalue: 32,
				//		},
				//		ReadRegisterLength: {
				//			initdefaulvalue: 9,
				//		},
				//		temperatuur: {
				//			label: "DMS",
				//			ReadRegister: 4,
				//		},
				//		vochtigheid: {
				//			label: "DMS",
				//			ReadRegister: 8,
				//		},
				//	},
				//},

				dms_Location: {
					className: 'Location',
					properties: {
						intLocationID: { label: "DMS Location", placeholder: "LocationID", idname: "tag" },
						strLocation: { placeholder: "Location", kop: 0, default: 1 },
						intRelease: { placeholder: "Release" },
						blnValidated: { placeholder: "Validated" },
						blnAccepted: { placeholder: "Accepted" },

						CriticalFailure: {},
						NonCriticalFailure: {},
						Locking: {},
						Maintenance: {},
						Running: {},
						RunningMode: {},
						Security: {},
						PreWarning_1: {},
						PreWarning_2: {},
						PreWarning_3: {},
						MeasurementErrorFlag: {},

					}
				},
				dms_Group: {
					className: 'share',
					properties: {
						intGroupID: { label: "DMS Group", placeholder: "GroupID", idname: "tag" },
						intLocationID: { placeholder: "LocationID" },
						strGroupName: { placeholder: "Groupname", kop: 0, default: 1 },
						intParentID: { placeholder: "ParentID" },
						strDescription: { placeholder: "Description" },

						CriticalFailure: {},
						NonCriticalFailure: {},
						Locking: {},
						Maintenance: {},
						Running: {},
						RunningMode: {},
						Security: {},
						PreWarning_1: {},
						PreWarning_2: {},
						PreWarning_3: {},
						MeasurementErrorFlag: {},


					},
				},
				dms_Place: {
					properties: {
						intPlaceID: { label: "Place", placeholder: "PlaceID", idname: "tag" },
						strPlace: { placeholder: "Place", kop: 0, default: 1 },
						strDescription: { placeholder: "Description" },
					},
				},
				dms_ModbusTCPDevice: {
					className: "Product",
					properties: {
						intModbusTCPDeviceID: { label: "Modbus TCP Device", placeholder: "ModbusTCPDeviceID", idname: "tag" },
						strIPAddress: { placeholder: "IP address", kop: 0, default: 1 },
						intPortNr: { placeholder: "Port number", type: "number", kop: 0 },
						intConnectionTimeout: { placeholder: "Connection Timeout", type: "number" },
						intResponseTimeout: { placeholder: "Response Timeout", type: "number" },
						intUnitID: { placeholder: "UnitID" },
					},
				},
				dms_SNMPDevice: {
					className: "Product",
					properties: {
						intSNMPDeviceID: { label: "SNMP Device", placeholder: "SNMPDeviceID", idname: "tag" },
						strIPAddress: { placeholder: "IP address", kop: 0, default: 1 },
						intPortNr: { placeholder: "Port number", type: "number", kop: 0 },
						intTimeoutMS: { placeholder: "Timeout MS", type: "number" },
						strCommunity: { placeholder: "Community", kop: 2 },
					},
				},
				dms_System: {
					className: 'System',
					attributes: {
						intSystemID: { label: "DMS System", placeholder: "SystemID", idname: "tag", },
						strSystemName: { placeholder: "System Name", kop: 0, default: 1 },
						strEndianess: { placeholder: "Endianess", options: { Little: { title: "Little" }, Big: { title: "Big" } } }, // Little, Big >> Byteswap
						strDescription: { placeholder: "Description", kop: 1, },
						intVersion: { placeholder: "Version", type: "number" },
						blnValidated: { placeholder: "Validated", type: "checkbox" },
						blnAccepted: { placeholder: "Accepted", type: "checkbox" },
						intPlaceID: { placeholder: "PlaceID" },
					},
				},
				dms_SystemInstance: {
					className: 'System',
					properties: {
						intSystemInstanceID: { label: "System Instance", placeholder: "SystemInstanceID", idname: "tag" },
						intGroupID: { placeholder: "GroupID" },
						intsystemID: { placeholder: "SystemID", schema: "dms_System", idname: "srcID" },
						intPlaceID: { placeholder: "PlaceID" },
						strSystemInstanceName: { placeholder: "System Instance Name", kop: 0 },
						intModbusTCPDeviceID: { placeholder: "ModbusTCPDeviceID" },
						intSNMPDeviceID: { placeholder: "SNMPDeviceID" },
					},
				},
				dms_SetpointAlarmSetting: {
					properties: {
						intSetpointAlarmSettingID: { label: "Setpoint Alarm", placeholder: "SetpointAlarmSettingID", idname: "tag" },
						intSetPointAlarmID: { placeholder: "SetPointAlarmID" },
						intSystemInstanceID: { placeholder: "SystemInstanceID" },
						fltBoundaryValue: { placeholder: "BoundaryValue", type: "number" },
						fltHysteresis: { placeholder: "Hysteresis", type: "number" },
					},
				},
				dms_Tag: {
					className: 'attribute',
					properties: {
						intTagID: { label: "Tag", placeholder: "TagID", idname: "tag" },
						intSystemID: { placeholder: "SystemID", schema: "dms_System", itemAttribute: "tag" },//itemID:2134132412341,
						strTagName: { placeholder: "Tagname", kop: 0 },
						strTagType: { placeholder: "Tagtype" },
						intSharedMemoryOffset: { placeholder: "Shared Memory Offset", type: "number" },
						intSharedMemoryBit: { placeholder: "Shared Memory Bit", type: "number" },
						strTextEnumeration: { placeholder: "Text enumeration" },
						strDescription: { placeholder: "Description", kop: 1 },
						bitPassthrough: { placeholder: "Passthrough" },
						fltMinRawValue: { placeholder: "Min Raw Value", type: "number" },
						fltMaxRawValue: { placeholder: "Max Raw Value", type: "number" },
						fltMinEngValue: { placeholder: "Min Engineering Value", type: "number" },
						fltMaxEngValue: { placeholder: "Max Engineering Value", type: "number" },
						strUnit: { placeholder: "Unit" },
						intFraction: { placeholder: "Fraction", type: "number" },
						strIOType: { placeholder: "IO Type" },
						chkInvert: { placeholder: "Invert" },
						strAlarmText: { placeholder: "Alarm Text" },
						intCategory: { placeholder: "Category" },
						fltHysteresis: { placeholder: "Hysteresis", type: "number" },
						strStandardOutput: { placeholder: "Standard Output" },
						intModbusAddress: { placeholder: "Modbus Address", type: "number" },
						intModbusAddressBit: { placeholder: "Modbus Address Bit", type: "number" },
						strRangeName: { placeholder: "Range Name" },
					},
				},
				dms_ModbusTCPRange: {
					className: "iomodule",
					properties: {
						intModbusTCPRangeID: { label: "Modbus TCP Range", placeholder: "ModbusTCPRangeID", idname: "tag" },
						intSystemID: { placeholder: "SystemID" },
						strRangeName: { placeholder: "Range Name", kop: 0 },
						chrReadWriteMode: { placeholder: "ReadWriteMode" },
						intModbusTCPStartAddress: { placeholder: "Modbus TCP StartAddress", type: "number" },
						intDataLength: { placeholder: "Data Length", type: "number" },
						intSharedMemoryOffset: { placeholder: "Shared Memory Offset", type: "number" },
						strDescription: { placeholder: "Description", kop: 0 },
						intPollIntervalMS: { placeholder: "Poll Interval MS", type: "number" },
						intUnitID: { placeholder: "UnitID" },
						intMemoryBank: { placeholder: "MemoryBank" },
					},
				},
				dms_tblSetPointAlarm: {
					properties: {
						intSetPointAlarmID: { label: "Setpoint Alarm ID", placeholder: "SetPointAlarmID", idname: "tag", kop: 0 },
						strDescription: { placeholder: "Description", kop: 1 },
						intSourceTagID: { placeholder: "SourceTagID" },
						intDestinationTagID: { placeholder: "DestinationTagID" },
						strType: { placeholder: "Type" },
					},
				},
				dms_SNMPItem: {
					properties: {
						intSNMPItemID: { label: "SNMP Item ID", placeholder: "SNMPItemID", idname: "tag", kop: 0 },
						intSystemID: { placeholder: "SystemID" },
						strOID: { placeholder: "OID" },
						strDescription: { placeholder: "Description", kop: 1 },
						intSharedMemoryOffset: { placeholder: "Shared Memory Offset", type: "number" },
						intPollInterval: { placeholder: "Poll Interval", type: "number" },
						strSNMPType: { placeholder: "SNMP Type" },
						intColumnNumber: { placeholder: "Column Number" },
						strSNMPRange: { placeholder: "SNMP Range" },
					},
				},


				//dmsProduct: {
				//	title: "System",
				//	properties: {
				//		SystemName: { label: "DMS Product", placeholder: "System Name", kop: 0, default: 1 },
				//		Description: { placeholder: "Description", kop: 1 },
				//		//"Endianess": { placeholder: "Endianess", select: {Little:} },
				//		Version: { placeholder: "Version", type: "number" },
				//		Validated: { placeholder: "Validated", type: "checkbox" },
				//		Accepted: { placeholder: "Accepted", type: "checkbox" },
				//	},
				//},
				//dmsModbusTCPRange: {
				//	title: "Modbus TCP Range",
				//	properties: {
				//		SystemName: { label: "Modbus TCP Range", placeholder: "System Name", kop: 0, schema: "dmsSystem", idname: "masterID" },
				//		Description: { placeholder: "Description", kop: 1 },
				//		ModbusDataType: { placeholder: "Modbus Data Type", options: { input: { title: "Input Register" }, holding: { title: "Holding Register" } } },
				//		Offset: { placeholder: "Offset", type: "number", min: 1, max: 999 },
				//		DataLength: { placeholder: "Data Length", type: "number", min: 1, max: 99 },
				//		PollInterval: { placeholder: "Poll Interval", type: "number", min: 1000, max: 10000, step: 500, unit: "ms", initvalue: 1000 },
				//	},
				//},
				//dmsTag: {
				//	title: "Tag",
				//	properties: {
				//		TagName: { label: "Configured Tags", placeholder: "Tag Name", kop: 0, default: 1 },
				//		ModbusTCPRange: { placeholder: "ModbusTCPRange", kop: 2, schema: "dmsModbusTCPRange", idname: "masterID" },
				//		Description: { placeholder: "Description", kop: 1 },
				//		Type: { placeholder: "Type", options: { alarm: { title: "Alarm" }, measurement: { title: "Measurement" }, status: { title: "Status" } } },

				//		ModbusAddress: { placeholder: "Modbus Address", schema: "dmsModbusTCPRange" }, // Hoe de selectie van een specifiek adres in de modbus range?

				//		MemoryBit: { label: "Alarm/Status", labelvisible: function () { return ['alarm', 'status'].indexOf(this.getAttribute('Type')) != -1; }, placeholder: "Memory Bit", type: "number", min: 0, max: 15, step: 1, },
				//		InvertInputSignal: { placeholder: "Invert Input Signal", type: "checkbox", checkvisible: function () { return this.getAttribute('Type') == 'alarm'; } },
				//		AlarmText: { placeholder: "Alarm Text", checkvisible: function () { return this.getAttribute('Type') == 'alarm'; } },
				//		TextEnumeration: {
				//			placeholder: "Text Enumeration", checkvisible: function () { return this.getAttribute('Type') == 'status'; }, options: {
				//				enum1: { title: "0=Not Active|!1=Active" },
				//				enum2: { title: "!0=Not Active|1=Active" },
				//				enum3: { title: "!0=Active|1=Not Active" },
				//				enum4: { title: "0=Active|!1=Not Active" },
				//				enum5: { title: "0=Local|!1=Remote" },
				//				enum6: { title: "0=Hand|!1=Auto" },
				//				enum7: { title: "0=Remote_Operation|!1=Remote_Tech" },
				//				enum8: { title: "0=Off|1=Step1|2=Step 2|3=Step 3|4=Step 4" },
				//				enum9: { title: "!0=Not running|1=Running" },
				//			},
				//		},

				//		MinRawValue: { label: "Measurement", labelvisible: function () { return this.getAttribute('Type') == 'measurement'; }, placeholder: "Min. Raw Value", type: "number" },
				//		MaxRawValue: { placeholder: "Max. Raw Value", type: "number" },
				//		MinEngValue: { placeholder: "Min. Eng. Value", type: "number" },
				//		MaxEngValue: { placeholder: "Max. Eng. Value", type: "number" },
				//		Resolution: { placeholder: "Resolution", type: "number", min: 0 },
				//		Unit: { placeholder: "Unit" },
				//		Fraction: { placeholder: "Fraction", type: "number", min: 0 },
				//		IOtype: {
				//			placeholder: "IO Type", options: {
				//				int8: { title: "int8" },
				//				uint8: { title: "uint8" },
				//				int16: { title: "int16" },
				//				uint16: { title: "uint16" },
				//				int32: { title: "int32" },
				//				uint32: { title: "uint32" },
				//				float4: { title: "float4" },
				//				inversefloat4: { title: "inversefloat4" },
				//				float8: { title: "float8" },
				//				inversefloat8: { title: "inversefloat8" },
				//			},
				//		},

				//		StandardOutput: {
				//			label: "Doormelding", placeholder: "Standard Output", options: function () {
				//				var options = {
				//					alarm: {
				//						not_applicable: { title: "not_applicable" },
				//						prewarning_1: { title: "prewarning_1" },
				//						prewarning_2: { title: "prewarning_2" },
				//						prewarning_3: { title: "prewarning_3" },
				//						security: { title: "security" },
				//						maintenance: { title: "maintenance" },
				//						locking: { title: "locking" },
				//						running: { title: "running" },
				//						failure: { title: "failure" },
				//						failure_urgent: { title: "failure_urgent" },
				//					},
				//					measurement: {
				//						not_applicable: { title: "not_applicable" },
				//						measurment_3: { title: "measurment_3" },
				//						measurment_4: { title: "measurment_4" },
				//						measurment_5: { title: "measurment_5" },
				//					},
				//					status: {
				//						not_applicable: { title: "not_applicable" },
				//						prewarning_1: { title: "prewarning_1" },
				//						prewarning_2: { title: "prewarning_2" },
				//						prewarning_3: { title: "prewarning_3" },
				//						security: { title: "security" },
				//						maintenance: { title: "maintenance" },
				//						locking: { title: "locking" },
				//						running: { title: "running" },
				//						runningmode: { title: "runningmode" },
				//					}
				//				}
				//				return options[this.getAttribute('Type')];
				//			},
				//		},
				//	},
				//},
				//dmsSetpointAlarm: {
				//	title: "Setpoint Alarm",
				//	properties: {
				//		Description: { placeholder: "Description", kop: 1 },
				//		MeasurementTag: { placeholder: "Measurement Tag", schema: "dmsMeasurment" },
				//		AlarmTag: { placeholder: "Alarm Tag", schema: "dmsAlarm" },
				//		Type: {
				//			placeholder: "Type", select: {
				//				under: { title: "Under" },
				//				over: { title: "Over" },
				//			},
				//		},
				//		Boundary: { placeholder: "Boundary", type: "number" },
				//		Hysteresis: { placeholder: "Hysteresis", type: "number" },
				//	},
				//},
				//dmsStation: {
				//	title: "Station",
				//	properties: {
				//		StationName: { label: "DMS Station", placeholder: "Station Name", kop: 0 },
				//		Source: { placeholder: "Source", kop: 1, schema: "dmsProduct", idname: "srcID" },
				//		Release: { placeholder: "Release", type: "number" },
				//	},
				//},
				//dmsArea: {
				//	title: "Area",
				//	properties: {
				//		AreaName: { label: "DMS Area", placeholder: "Area Name", kop: 0 },
				//		Description: { placeholder: "Description", kop: 1 },
				//	},
				//},
				//dmsGroup: {
				//	title: "Group",
				//	properties: {
				//		GroupName: { label: "DMS Group", placeholder: "Area Name", kop: 0 },
				//		Description: { placeholder: "Description", kop: 1 },
				//		ParentName: { placeholder: "Parent Name", kop: 2, schema: "dmsGroup", idname: "masterID" }, // Ook relatie naar dmsStation???
				//	}
				//},
				//dmsSystem: {
				//	title: "System",
				//	properties: {
				//		SystemName: { label: "DMS System", placeholder: "System Name", kop: 0 },
				//		Description: { placeholder: "Description", kop: 1 },
				//		Product: { placeholder: "Product", schema: "dmsProduct", idname: "masterID" },
				//		GroupName: { placeholder: "Group Name", schema: "dmsGroup", idname: "masterID" },
				//		AreaName: { placeholder: "Area Name", schema: "dmsArea", idname: "masterID" },
				//		IPaddress: { placeholder: "IP address" },
				//		SlaveID: { placeholder: "Slave ID", type: "number", min: 1, max: 64, step: 1, initvalue: 1 },
				//	},
				//},
			},
		},
	},
	navleft: {
		items: {
			Start: {
				className: 'start', href: '#aim.start?', items: {
					Favorieten: { className: "fav", get: { q: "*", filter: "id+IN(SELECT+id+FROM+om.itemFav+WHERE+userID=" + aim.userID + ")" }, items: {} },
					Recent: { className: "History", get: { q: "*", filter: "id+IN(SELECT+id+FROM+om.itemuservisit+WHERE+userID=" + aim.userID + ")" }, items: {} },
					//Gedeeld: { className: "group", get: { q: "*", filter: "id+IN(SELECT+id+FROM+om.itemuservisit+WHERE+userID=" + aim.userID + ")" }, items: {} },
					//Prullenbak: { className: "trash", get: { q: "*", filter: "deletedDT+IS+NOT+NULL" }, items: {} },
				}
			},
			Website: {
				className: "Website", items: {
					"Websites": { className: "Website", title: "Web sites", get: { title: "Web sites", folder: 'Website', filter: "hostID<>1", q: "" } },
					"Webpages": { className: "Webpage", title: "Web pages", get: { title: "Web pages", folder: 'Webpage', filter: "hostID<>1", q: "" } },
					"Helppages": { className: "HelpPage", title: "Help pages", get: { title: "Help pages", folder: 'HelpPage', filter: "", q: "" } },
				}
			},
			Organisatie: {
				className: "crm", items: {
					"Contactpersonen": { className: "person", get: { title: 'Contact', folder: 'Contact', filter: "hostID<>1", q: '' }, },
					"Organisaties": { className: "company", get: { title: 'Company', folder: 'Company', filter: "hostID<>1", q: '' }, },
					//"Mailgroupen": { get: { folder: 'mailgroup', filter: "hostID<>1", q: '' } },
				}
			},
			SCADA: {
				title: "SCADA", className: "scada", items: {
					Alerts: { className: "alert", get: { title: "Alerts", folder: "alert", filter: "hostID<>1", q: "*", id: "" } },
				}
			},
			Engineering: {
				title: "Engineering", className: "se", items: {
					Signal: { className: "signal", get: { folder: 'signal', filter: "hostID<>1", q: '', id: '', title: 'Signals' } },
					SoftwareFunction: { className: "softwarefunction", get: { folder: 'softwarefunction', filter: "hostID<>1", q: '', id: '', title: 'Software functies' } },
					Instruments: { get: { folder: 'instrument', q: '' } },
					Products: { get: { title: 'Products', folder: 'system', filter: "hostID<>1+AND+srcID=masterID+AND+id+NOT+IN+(SELECT+masterID+FROM+api.items+WHERE+masterid=srcid)", q: '' } },
					Systems: { get: { title: 'Systems', folder: 'System', filter: "hostID<>1", q: '' } },
					IO: { get: { folder: 'io', filter: "hostID<>1", q: '' } },
					Document: { className: "document", get: { folder: 'document', filter: "hostID<>1", q: '', id: '', title: 'Documenten' } },
					Asset: { get: { folder: 'product', filter: "hostID<>1", q: '' } },
					Locations: { className: "location", get: { folder: 'location', filter: "hostID<>1", q: '', id: '', title: 'Locations' } },
				}
			},
			Work: {
				className: "taskboard", items: {
					"Taken": { className: "task", get: { folder: 'task', filter: "hostID<>1", q: '', id: '', title: 'Taken' } },
					"Mijn taken": { className: "task", get: { folder: 'task', filter: "hostID<>1+AND+ownerID=" + aim.userID, q: '', id: '', title: 'Mijn taken' } },
					"Alicon support": { className: "support", get: { folder: 'task', filter: "hostID<>1+AND+ownerID=2753253", q: '', id: '', title: 'Support taken' } },
				}
			},
			Administratie: {
				className: "administratie"
			},
			Outlook: {
				className: "crm", items: {
					Contacts: { className: "person", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'contacts', filter: '', q: '', id: '', title: 'Outlook contacten', select: 'DisplayName,EmailAddresses,MobilePhone1', } },
					Messages: { className: "company", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'messages', filter: '', q: '', id: '', title: 'Outlook berichten' } },
					Events: { className: "company", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'events', filter: '', q: '', id: '', title: 'Outlook gebeurtenissen' } },
					Calendar: { className: "company", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'calenderview', filter: '', q: '', id: '', title: 'Outlook calendar' } },
				}
			},
			Admin: {
				className: "config", items: {
					"Groups": { className: "crm", get: { folder: 'groups', q: '', id: '', title: 'Groepen' } },
					"Keys": { className: "keys", get: { folder: 'keys', q: '', id: '', title: 'Keys' } },
					"License": { className: "License", get: { folder: 'License', q: '', id: '', title: 'License' } },
				}
			},
			DMSgeneric: {
				className: "se", title: "DMS Generic", items: {
					System: { title: "System", get: { title: "System", folder: "dms_System", id: '', q: '*', order: '' }, },
					Tag: { title: "Tag", get: { title: "Tag", folder: "dms_Tag", id: '', q: '*', order: '' }, },
					ModbusTCPRanges: { title: "ModbusTCPRanges", get: { title: "ModbusTCPRanges", folder: "dms_ModbusTCPRange", id: '', q: '*', order: '' }, },
					tblSetPointAlarm: { title: "tblSetPointAlarm", get: { title: "tblSetPointAlarm", folder: "dms_tblSetPointAlarm", id: '', q: '*', order: '' }, },
					SNMPItem: { title: "SNMPItem", get: { title: "SNMPItem", folder: "dms_SNMPItem", id: '', q: '*', order: '' }, },
				}
			},
			DMSspecific: {
				className: "se", title: "DMS Specific", items: {
					Location: { title: "Location", get: { title: "Location", folder: "dms_Location", id: '', q: '*', order: '' }, },
					Group: { title: "Group", get: { title: "Group", folder: "dms_Group", id: '', q: '*', order: '' }, },
					Place: { title: "Place", get: { title: "Place", folder: "dms_Place", id: '', q: '*', order: '' }, },
					ModbusTCPDevice: { title: "ModbusTCPDevice", get: { title: "ModbusTCPDevice", folder: "dms_ModbusTCPDevice", id: '', q: '*', order: '' }, },
					SNMPDevice: { title: "SNMPDevice", get: { title: "SNMPDevice", folder: "dms_SNMPDevice", id: '', q: '*', order: '' }, },
					SystemInstance: { title: "SystemInstance", get: { title: "SystemInstance", folder: "dms_SystemInstance", id: '', q: '*', order: '' }, },
					SetpointAlarmSetting: { title: "SetpointAlarmSetting", get: { title: "SetpointAlarmSetting", folder: "dms_SetpointAlarmSetting", id: '', q: '*', order: '' }, },
				}
			},
			DMS: {
				className: "se", title: "DMS", items: {
					dmsSystem: { title: "DMS Systems", get: { title: "DMS Systems", folder: "dmsSystem", id: '', q: '*', order: '' }, },
					dmsModbusTCPRange: { title: "DMS ModbusTCPRange", get: { title: "DMS ModbusTCPRange", folder: "dmsModbusTCPRange", id: '', q: '*', order: '' }, },
					dmsTag: { title: "DMS Tag", get: { title: "DMS Tag", folder: "dmsTag", id: '', q: '*', order: '' }, },
					dmsAlarm: { title: "DMS Alarm", get: { title: "DMS Alarm", folder: "dmsAlarm", id: '', q: '*', order: '' }, },
					dmsMeasurment: { title: "DMS Measurment", get: { title: "DMS Measurment", folder: "dmsMeasurment", id: '', q: '*', order: '' }, },
					dmsStatus: { title: "DMS Status", get: { title: "DMS Status", folder: "dmsStatus", id: '', q: '*', order: '' }, },
					dmsSetpointAlarm: { title: "DMS SetpointAlarm", get: { title: "DMS SetpointAlarm", folder: "dmsSetpointAlarm", id: '', q: '*', order: '' }, },
					dmsStation: { title: "DMS Station", get: { title: "DMS Station", folder: "dmsStation", id: '', q: '*', order: '' }, },
				}
			},
		}
	},
});
