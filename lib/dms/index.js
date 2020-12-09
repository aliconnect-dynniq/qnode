require('@aliconnect/api');
console.log('DMS');



// require('@aliconnect/node/lib/js/def.js');
// require('./webroot/js/api.js');
// Object.assign(aim, require('./webroot/api.json'));
// aim.secret = require('./secret.json');
// require('@aliconnect/node');
//console.log(aim);


// var aim = require('@aliconnect/node').on('online', function() {
// 	console.log('online');
// 	new aim.sql.Request().query("SELECT 1 AS A", function (err, res) {
// 		console.log(res.recordsets[0]);
// 	});
// }).on('connected', function() {
// 	console.log('connected');
// }).on('dbConnect', function() {
// 	console.log('dbConnect');
// }).on('open', function() {
// 	console.log('open');
// }).on('dbConnect', function() {
// 	console.log('dbConnect');
// }).on('message', function(message) {
// 	console.log('message',message);
// });


//console.log("aaaaaaaaaa");
//http.request({},function(){});

// aim.extend ({
// 	api: {
// 		"paths": {
// 			"items1": {
// 				"GET": {
// 					operation: function(body) {
// 						console.log("Dit is mijn eigen GET");
// 					}
// 				},
// 			}
// 		}
// 	}
// });

var em = {
	acsm: {},
	acsmCount: 0,
	alarms: [],
	alarmNames: { CriticalFailure: {}, NonCriticalFailure: {}, Locking: {}, Maintenance: {}, Running: {}, RunningMode: {}, Security: {}, PreWarning_1: {}, PreWarning_2: {}, PreWarning_3: {}, MeasurementErrorFlag: {}, },
	logNames: { CriticalFailure: {}, NonCriticalFailure: {}, Locking: {}, Maintenance: {}, Running: {}, RunningMode: {}, Security: {}, PreWarning_1: {}, PreWarning_2: {}, PreWarning_3: {}, MeasurementErrorFlag: {}, Measurement_1: {}, Measurement_2: {}, Measurement_3: {}, Measurement_4: {}, Measurement_5: {} },
	WebLogItemArray: [],
	AcsmUpload: function (WebLogItem) {
		clearTimeout(em.AcsmUploadTimeout);
		if (WebLogItem) {
			em.WebLogItemArray.push(WebLogItem);
			em.AcsmUploadTimeout = setTimeout(em.AcsmUpload, 100);
			return;
		}
		return;
		AIM.load({
			protocol: 'http', options: { host: 'localhost', port: 80, path: '/sites/dms/api/v1/acsm/index.php?weblog', method: 'put' }, input: { WebLogItemArray: em.WebLogItemArray }, onload: function (event) {
				var State = this.data.Active ? 'connect' : 'disconnect';
				//console.log('UPLOAD ACSM', this.data, State);
				aim.setState(aim.items[aim.config.acmsHartbeatID], State);
				//if (em.acsm.Active != this.data.Active) {
				//	em.acsm.Active = this.data.Active;
				//	aim.setState(aim.items[aim.config.acmsHartbeatID], em.acsm.Active ? 'connect' : 'disconnect');
				//}
			}
		});
		em.WebLogItemArray = [];
	}
};

/**
	* Verstuur een attribute change naar het ACSM
	* @option Maak een verzamelmelding per StandaardOutput en stuur deze naar ACSM. Letop Een attribute kan onder een attribute liggen dus loop omhoog tot een systems instance. Bepaald onder een systeminstance van alle kinderen en kind-kinderen of er eenzelfde alarm actief is. Verstuur alleen een wijziging. Dit geld voor alarmNames
	* @author Max van Kampen (max.van.kampen@alicon.nl)
	* @global
	* @event On change of list of attributes
	* @param {string} somebody - lfkjhas djk falksjdhf jashdfa
	* @version 1.0.3
	*/
AIM.on('change', (value) => {
	//aim.log('change',value);
	value.forEach(function (row) {
		var item = aim.items[row.id];
		if (row.values) for (var attributeName in row.values) {
			var value = row.values[attributeName].value;
			//get dms_System-instance
			var system_instance = item;
			while (system_instance && system_instance.class != 'dms_System') system_instance = aim.items[system_instance.masterID];
			if (!system_instance) return;
			//bepaald system attribute type's via kinderen
			var sumattributes = {};
			system_instance.children.forEach(recursive = function (item) {
				if (em.logNames[item.AttributeType]) sumattributes[item.AttributeType] = sumattributes[item.AttributeType] || item.Value;
				item.children.forEach(recursive);
			});
			//verstuur gewijzigde attribute types
			//var LogTypeArray = { dms_Location: "LocationSO_", dms_Group: "GroupSO_", dms_System: "SystemInstanceSO_" };
			//var WebLogItem = {
			//	SystemInstanceID: 0, GroupID: 0, LocationID: 0, TagID: 0,
			//	LogType: String((LogTypeArray[item.class] || "") + (attributeName || "")).toLowerCase(),
			//	TextualValue: value,
			//	NumericValue: isNaN(value) ? "" : value,
			//	Quality: item.Quality || "",
			//	StandardOutput: String(attributeName || "").toLowerCase(),
			//}
			for (var parent = aim.items[system_instance.masterID]; parent; parent = aim.items[parent.masterID]) {
				if (parent.class == 'dms_Group') system_instance.GroupID = system_instance.GroupID || parent.id;
				else if (parent.class == 'dms_Location') system_instance.LocationID = system_instance.LocationID || parent.id;
			}
			for (var attributeName in sumattributes) if (sumattributes[attributeName] != system_instance[attributeName]) {
				//console.log('em.AcsmUpload', attributeName, sumattributes[attributeName], system_instance[attributeName]);
				em.AcsmUpload({
					SystemInstanceID: system_instance.id,
					StandardOutput: String(attributeName).toLowerCase(),
					TextualValue: system_instance[attributeName] = sumattributes[attributeName],
					LocationID: system_instance.LocationID,
					GroupID: system_instance.GroupID,
					TagID: 0,
					LogType: "",//String((LogTypeArray[item.class] || "") + (attributeName || "")).toLowerCase(),
					NumericValue: "",//isNaN(value) ? "" : value,
					Quality: "Valid",
				});

			}

			//if (['Measurement_1', 'Measurement_2', 'Measurement_3', 'Measurement_4', 'Measurement_5'].indexOf(item.AttributeType) != -1) {
			//	setAttribute(item, item.AttributeType, newvalue);
			//}

			//if (!em.logNames[attributeName]) return;
			//var idname = { dms_Location: "LocationID", dms_Group: "GroupID", dms_System: "SystemInstanceID", Attribute: "TagID" };
			//if (idname[item.class]) WebLogItem[idname[item.class]] = item.id;
			//em.AcsmUpload(WebLogItem);
		}
	})

});

setInterval(function () {
	return;
	if (em.acsmCount >= aim.config.acmsHartbeatMaxCount) em.acsmCount = 1; else em.acsmCount++;
	aim.setAttribute(aim.items[aim.config.acmsHartbeatID], 'Value', em.acsmCount);
	//em.AcsmUpload({ SystemInstanceID: 344, GroupID: 0, LocationID: 0, TagID: 0, LogType: "", TextualValue: "", NumericValue: em.acsmCount, Quality: "", StandardOutput: "Measurement_3", });
	em.AcsmUpload({ SystemInstanceID: 344, StandardOutput: "Measurement_3", TextualValue: em.acsmCount });
}, AIM.config.acmsHartbeatTimeout);
