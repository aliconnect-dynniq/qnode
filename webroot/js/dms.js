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
