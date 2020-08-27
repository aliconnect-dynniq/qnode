aim.extend({
	api: {
		components: {
			schemas: {
				Item: {

				},
				Attribute: {
					header: [
						["Name"], // title = titel
						["Title"], // subject = onderwerp
						["Description"], // summary = beschrijving / samenvatting
					],
					treeTitleAttributeName: "Name",
					"filterFieldnames": [],
					properties: {
						Name: { title: "Name", label: "Attribute", idname: "name" },
						Title: { title: "Title" },
						Description: { title: "Description" },
						State: { title: "State", idname: "state" },
						StateMessage: { title: "StateMessage" },
						//VALUES
						//Value: { title: "Value", idname: "value", format: "meter", attr: { minimum: 200, maximum: 350, optimum: 230, low: 220, high: 280, unit: "�C" } },
						Value: { title: "Value", },
						Quality: {
							title: "Quality", format: "radio",
							"options": {
								"Valid": { "title": "Valid", "color": "green" },
								"NotValid": { "title": "NotValid", "color": "orange" },
								"CommunicationError": { title: "CommunicationError", color: "red" },
								"UnInitialized": { title: "UnInitialized", color: "gray" }
							}
						},

						"AttributeType": {
							"label": "Type", "title": "Attribute type", "format": "select", "options": AttributeTypeOption = {
								CriticalFailure: { title: "Critical Failure", color: "red" },
								NonCriticalFailure: { title: "Non Critical Failure", color: "orange" },
								Locking: { title: "Locking", color: "yellow" },
								Maintenance: { title: "Maintenance", },
								Running: { title: "Running", color: "green" },
								RunningMode: { title: "Running mode", },
								Security: { title: "Security", },
								PreWarning_1: { title: "Pre warning 1", },//count
								PreWarning_2: { title: "Pre warning 2", },//count
								PreWarning_3: { title: "Pre warning 3", },//count
								Measurement_1: { title: "Measurement 1", },//count
								Measurement_2: { title: "Measurement 2", },//count
								Measurement_3: { title: "Measurement 3", },//count
								Measurement_4: { title: "Measurement 4", },//count
								Measurement_5: { title: "Measurement 5", },//count
								MeasurementErrorFlag: { title: "MeasurementErrorFlag", },//count
								NotApplicable: { title: "Not Applicable", },
								"": { title: "NULL", },
							}
						},
						ModifiedDT: { title: "Modified", idname: "modifiedDT" },
						Valueformat: {
							title: "Value type", format: "select", options: {
								text: { title: "String" },
								integer: { title: "Integer" },
								double: { title: "Double" },
								bool: { title: "Boolean" },
								date: { title: "Date" },
								time: { title: "Time" },
								datetime: { title: "Date and time" },
							}
						},
						//Enum: { title: "Options", format: "text", options: { 0: { title: "0=Not Active|!1=Active" }, 1: { title: "0=Active|1=Not Active" } } },
						Enum: { title: "Enummeration", format: "text" },
						Unit: { title: "Unit", format: "text" },
						Calc: { title: "Calculation function", format: "select", "options": { "OnlineHours": { "title": "OnlineHours()" } } },

						//DisplayMin: { label: "Display", title: "Min", format: "number" },
						//DisplayLow: { title: "Low", format: "number" },
						//DisplayOptimum: { title: "Optimum", format: "number" },
						//DisplayHigh: { title: "High", format: "number" },
						//DisplayMax: { title: "Max", format: "number" },

						Min: { label: "Display", title: "Min", format: "number" },
						Max: { title: "Max", format: "number" },
						multipleOf: { title: "Step", format: "number" },
						Optimum: { title: "Optimum", format: "number" },
						Low: { title: "Low", format: "number" },
						High: { title: "High", format: "number" },
						Hysteresis: { title: "Hysteresis", format: "number", multipleOf: 0.1 },

						//AlarmMax: { label: "Alarm", title: "Low Alarm Margin", format: "number", multipleOf:"0.1" },
						//AlarmMin: { title: "Low Alarm Margin", format: "number", multipleOf:"0.1" },

						//AlarmLow: { label: "Alarm", title: "Low Alarm Margin", format: "number", multipleOf:"0.1" },
						//AlarmLowAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmLowCount: { title: "Low Alarm Count", format: "number" },
						//AlarmLowWarning: { title: "Low Warning Margin", format: "number", multipleOf:"0.1" },
						//AlarmLowWarningAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmLowWarningCount: { title: "Low Warning Count", format: "number" },
						//AlarmHighWarning: { title: "High Warning Margin", format: "number", multipleOf:"0.1" },
						//AlarmHighWarningAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmHighWarningCount: { title: "High Warning Count", format: "number" },
						//AlarmHigh: { title: "High Alarm Margin", format: "number", multipleOf:"0.1" },
						//AlarmHighAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmHighCount: { title: "High Alarm Count", format: "number" },
						//AlarmHysteresis: { title: "Hysteresis", format: "number", multipleOf:"0.1" },
					},
				},
				Key: {
					treeTitleAttributeName: "Name",
					properties: {
						Name: { label: "Key", title: "Name" },
						Description: { title: "Description" },
						URL: { title: "URL" },
						Username: { title: "Username" },
						Password: { title: "Password" },
					},
				},
				License: {
					treeTitleAttributeName: "Name",
					properties: {
						Name: { label: "License", title: "Application name" },
						Description: { title: "Description", format: "textarea" },
						Licensekey: { title: "License key" },
						Instruction: { title: "Instruction", format: "div" },
					},
				},
				Alert: {
					treeTitleAttributeName: "Name",
					properties: {
						Name: { label: "Alert", title: "Name", idname: "name" },
						State: { title: "State", idname: "state" },

						//format: { title: "Type", options: { message: { title: "Message" }, warning: { title: "Warnning" }, alert: { title: "Alert" } }, filter: 1, },
						format: { title: "Type", filter: 1, },
						startDT: { title: "Start", format: "date-time" },
						finishDT: { title: "Finish", format: "date-time" },
						Title: { title: "Title" },
						Description: { title: "Description" },
						Tag: { title: "Tag", idname: "tag" },
						TagName: { title: "Tag", idname: "tagname" },
					},
				},
				Groups: {
					name: "groups", methods: ["edit"], ids: { masterID: "Master" },
					header: [
						{},
						{},
						{}
					],
					filter: [],
					view: [],
					properties: {
						Users: {
							format: "object"
						},
						Group: {
							label: "Group",
							title: "Groupname"
						},
						Master: {
							classID: 1103,
							title: "Valt onder"
						}
					}
				},
				Account: {
					title: "Persoon", className: "account", btns: [], files: {},
					//"filterFieldnames": ["state","Profession"],
					properties: {
						state: {
							label: "Persoon", format: "radio", filter: 1, send: 1, title: "Functie Status", hostID: 1, options: {
								offline: {
									title: "Offline", color: "rgb(130,130,130)"
								},
								online: {
									title: "Online", color: "rgb(50,50,200)"
								},
								focus: {
									title: "Focus", color: "rgb(50,50,200)"
								},
							}
						},
						Aanhef: { label: "Persoon", title: "Aanhef", options: ["De heer", "Mevrouw"] },
						Initials: { title: "Initialen" },
						GivenName: { kop: 0, title: "Roepnaam" },
						FirstName: { title: "Voornamen volluit" },
						MiddleName: { kop: 0, title: "Tussenvoegsel" },
						Surname: { kop: 0, title: "Achternaam" },
						EmailAddresses2Address: { label: "Priv� contactgegevens", title: "Email", format: "email" },
						HomePhones0: { title: "Priv� mobiel", format: "tel" },
						HomePhones1: { title: "Priv� telefoon", format: "tel" },
						Linkedin: { title: "Linkedin", format: "linkedin" },
						Twitter: { title: "Twitter", format: "twitter" },
						Spouse: { title: "Partner naam", classID: 1000 },
						Title: { title: "Titel" },
						Birthday: { title: "Geboorte datum" },
						PlaceOfBirth: { title: "Geboorte plaats" },
						Anniversary: { title: "Feestdag", format: "date" },

						Hobby: { title: "Hobby" },
						Profession: { format: "text", title: "Beroep", filter: 1 },

						HomeAddress: { label: "Priv� adresgegevens", title: "Priv� adres", format: "address", "location": "geolocatie" },
						HomeAddressStreet: { address: "HomeAddress", addressField: "Street" },
						HomeAddressNumber: { address: "HomeAddress", addressField: "Number" },
						HomeAddressAdd: { address: "HomeAddress", addressField: "Add" },
						HomeAddressPostalCode: { address: "HomeAddress", addressField: "PostalCode" },
						HomeAddressCity: { address: "HomeAddress", filter: 1, addressField: "City", title: "Woonplaats" },
						HomeAddressTown: { address: "HomeAddress", addressField: "Town" },
						HomeAddressState: { address: "HomeAddress", addressField: "State" },
						HomeAddressCountry: { address: "HomeAddress", addressField: "Country" },
						geolocatie: { format: "hidden" },

						Toelichting: { label: "Toelichting", format: "div" },

						id: { label: "Account", title: "ID", "view": 1 },
						KeyCode: { title: "Druppelcode", format: "numeric" },
						createdDT: { title: "Created", format: "date", readOnly: true },
						startDT: { title: "Start", format: "date" },
						endDT: { title: "Deadline", format: "date" },
						contractDt: { title: "Akkoord gebruikersovereenkomst", format: "date", readOnly: true },

						Arbeidsrelaties: {
							//"linkclassId": 1004, "link2classId": 1002
						}
					}
				},
				Contact: {
					btns: ["msg", "fav", "printmenu"], files: {}, title: "Contactpersoon", "listname": "Contactpersoon",
					apps: { mobile: {} },
					printmenu: {
						"obs": { title: "Organisation Breakdown Structure", src: "/api/" + aim.version + "/doctree.php", post: { "flds": "FirstName,LastName" } }
					},
					sort: function (a, b) {
						return String(a.title).split(" ").pop().localeCompare(String(b.title).split(" ").pop());
					},
					row: function (row) {
						var a = String(row.title).split(" ");
						a.push("<b>" + a.pop() + "</b>");
						row.innerHTML = a.join(" ");
						//row.findstr = accentsTidy(row.title);
					},
					header: [
						"{GivenName} {FirstName} {MiddleName} {Surname}",
						"{Department} {FirstName} {MiddleName} {Surname}",
						"{GivenName} {FirstName} {MiddleName} {Surname}",
					],
					properties: {
						state: {
							label: "Account", format: "radio", filter: 1, send: 1, title: "Functie Status", hostID: 1, options: {
								"offline": { title: "Offline", color: "rgb(130,130,130)" },
								"online": { title: "Online", color: "rgb(50,50,200)" },
								"focus": { title: "Focus", color: "rgb(50,50,200)" },
							}
						},
						Fav: { title: "Fav", format: "hidden" },

						Initials: { label: "Contactpersoon", title: "Initialen" },
						GivenName: { title: "Roepnaam" },
						FirstName: { title: "Voornamen volluit" },
						MiddleName: { title: "Tussenvoegsel" },
						Surname: { title: "Achternaam" },

						Company: { label: "Organisatie", title: "Organisatie", classID: 1002, idname: "masterID" },
						CompanyName: { title: "Organisatie naam" },
						OfficeLocation: { title: "Site/Vestiging" },
						Department: { title: "Afdeling", filter: 1, classID: 1007 },
						Manager: { title: "Manager", classID: 1004 },
						AssistantName: { title: "Assistent", hostID: 1, classID: 1004 },
						//"Company": { title: "Organisatie", filter: 1, classID: 1002, idname: "fromID" },

						JobTitle: { label: "Functie", title: "Functie titel", filter: 1 },
						startDT: { title: "Start datum", format: "date" },
						finishDT: { title: "Eind datum", format: "date" },
						Arbeidsrelatie: { title: "Contract", format: "radio", filter: 1, options: { "werknemer": { title: "Werknemer", color: "rgb(112,48,160)" }, "interim": { title: "Interim", color: "rgb(112,48,160)" }, "detachering": { title: "Detachering", color: "rgb(0,176,240)" } } },

						BusinessPhones0: { label: "Contactgegevens", title: "Company Phone", format: "tel", hostID: 1 },
						BusinessHomePage: { title: "Company Website", format: "url", hostID: 1 },
						EmailAddresses1Address: { title: "Company Email", format: "email", hostID: 1 },

						MobilePhone1: { title: "Contact Mobile", format: "tel" },
						BusinessPhones1: { title: "Contact Phone", format: "tel" },
						EmailAddresses0Address: { title: "Contact Email", format: "email" },

						//"PersonalNotes": { title: "Notities persoonlijk", format: "textarea", user: "user", "rights": "1" },
						//"GroupNotes": { title: "Notities groep", format: "textarea", user: "group", "rights": "2" },
						//"DomainNotes": { title: "Notities domein", format: "textarea", "rights": "3" },
						//"DomainPublicNotes": { title: "Notities groep aan publiek", format: "textarea", "www": 1, "rights": "3" },
						//"DomainPublicNotesOverwrite": { title: "Notities groep aan publiek overschrijfbaar", format: "textarea", "rights": "2" },
						//"PublicNotes": { title: "Notities publiek", format: "textarea" },

						//"CompanyName": { label: "Organisatie", title: "Organisatie naam", hostID: 1 },
						//"OfficeLocation": { title: "Vestiging", filter: 1, hostID: 1 },

						BusinessAddress: { title: "Vestigingsadres", format: "address", location: true },
						//"BusinessAddressStreet": { address: "BusinessAddress", addressField: "Street" },
						//"BusinessAddressNumber": { address: "BusinessAddress", addressField: "Number" },
						//"BusinessAddressAdd": { address: "BusinessAddress", addressField: "Add" },
						//"BusinessAddressPostalCode": { address: "BusinessAddress", addressField: "PostalCode" },
						//"BusinessAddressCity": { address: "BusinessAddress", filter: 1, title: "Plaats", addressField: "City" },
						//"BusinessAddressTown": { address: "BusinessAddress", addressField: "Town" },
						//"BusinessAddressState": { address: "BusinessAddress", addressField: "State" },
						//"BusinessAddressCountry": { address: "BusinessAddress", addressField: "Country" },
						//"geolocatie": { format: "hidden" },

						OtherAddress: { title: "Post adres", format: "address" },
						//"OtherAddressStreet": { address: "PostAddress", addressField: "Street" },
						//"OtherAddressNumber": { address: "PostAddress", addressField: "Number" },
						//"OtherAddressAdd": { address: "PostAddress", addressField: "Add" },
						//"OtherAddressPostalCode": { address: "PostAddress", addressField: "PostalCode" },
						//"OtherAddressCity": { address: "PostAddress", addressField: "City" },
						//"OtherAddressTown": { address: "PostAddress", addressField: "Town" },
						//"OtherAddressState": { address: "PostAddress", addressField: "State" },
						//"OtherAddressCountry": { address: "PostAddress", addressField: "Country" },

						EmailAddresses2Address: { label: "Priv� contactgegevens", title: "Email", format: "email" },
						HomePhones0: { title: "Priv� mobiel", format: "tel" },
						HomePhones1: { title: "Priv� telefoon", format: "tel" },
						SpouseName: { title: "Partner naam" },
						Title: { title: "Titel" },
						Birthday: { title: "Geboorte datum", format: "date" },

						HomeAddress: { title: "Thuis adres", format: "address" },
						//"HomeAddressStreet": { address: "HomeAddress", addressField: "Street" },
						//"HomeAddressNumber": { address: "HomeAddress", addressField: "Number" },
						//"HomeAddressAdd": { address: "HomeAddress", addressField: "Add" },
						//"HomeAddressPostalCode": { address: "HomeAddress", addressField: "PostalCode" },
						//"HomeAddressCity": { address: "HomeAddress", addressField: "City" },
						//"HomeAddressTown": { address: "HomeAddress", addressField: "Town" },
						//"HomeAddressState": { address: "HomeAddress", addressField: "State" },
						//"HomeAddressCountry": { address: "HomeAddress", addressField: "Country" },

						AfspraakDatum: { label: "Planning", title: "Volgend overleg", format: "date" },
						AfspraakTijd: { title: "Starttijd", format: "time" },
						AfspraakOnderwerp: { title: "Onderwerp", format: "textarea" },

						ResourceName: { label: "Resource settings", title: "Resource name", idname: "keyname" },
						Resourceformat: { title: "Resource type" },
						ResourceAvail: { title: "Beschikbaarheid", unit: "FTE" },
						ResourcePlan: { title: "Planbaar", unit: "FTE" },
						verlof: { title: "Verlof", format: "textarea" },

						Gebruiker: { label: "Account", title: "User", schema: "Account", idname: "toID" },
						groupID: { title: "Usergroup", format: "text", schema: "Groups", },
						//"aliconnectService": { title: "aliconnectService" },
					}
				},
				Company: {
					btns: ["msg"], files: {}, className: "company", title: "Organisatie",
					childClasses: [{ title: "Company" }, { title: "Contact" }],
					treeTitleAttributeName: "CompanyName",
					properties: {
						//files: { format: "files" },
						Keyname: { label: "Organisatie", title: "Keyname", idname: "keyname" },
						Parent: { title: "Onderdeel van", schema: "Company", idname: "masterID" },
						//"Company": { title: "Public company", classID: "1002", idname: "srcID", hostID: 1 },
						//Title: { title: "Title", default: 1 },

						CompanyName: { title: "Organisation" },
						OfficeLocation: { title: "Site" },
						Department: { title: "Department" },

						BusinessPhones0: { title: "Telefoon", format: "tel" },
						BusinessHomePage: { title: "Website", format: "url" },
						EmailAddresses1Address: { title: "Business Email", format: "email" },
						CompanyDescription: { title: "Company Description", format: "textarea" },
						Activiteiten: { title: "Company Activity", format: "textarea" },

						CompanyFax: { title: "Company Fax", format: "tel" },
						CompanyEmail: { title: "Company Email", format: "emailaddress", address: { format: "email" }, },
						CompanyEmailSales: { title: "Company Email Verkoop", format: "email" },
						CompanyEmailPurchase: { title: "Company Email Inkoop", format: "email" },
						CompanyEmailService: { title: "Company Email Service", format: "email" },
						CompanyEmailInvoice: { title: "Company Email Facturen", format: "email" },

						BusinessAddress: { title: "Vestigingsadres", format: "address", location: "geolocatie" },
						//BusinessAddressStreet: { address: "BusinessAddress", addressField: "Street" },
						//BusinessAddressNumber: { address: "BusinessAddress", addressField: "Number" },
						//BusinessAddressAdd: { address: "BusinessAddress", addressField: "Add" },
						//BusinessAddressPostalCode: { address: "BusinessAddress", addressField: "PostalCode" },
						//BusinessAddressCity: { address: "BusinessAddress", filter: 1, title: "Plaats", addressField: "City" },
						//BusinessAddressTown: { address: "BusinessAddress", addressField: "Town" },
						//BusinessAddressState: { address: "BusinessAddress", addressField: "State", filter: 1 },
						//BusinessAddressCountry: { address: "BusinessAddress", addressField: "Country" },

						CompanyEmailInvoice1: { title: "Company Email Facturen", format: "email" },
						CompanyEmailInvoice2: { title: "Company Email Facturen", format: "email" },
						CompanyEmailInvoice3: { title: "Company Email Facturen", format: "email" },

						geolocatie: { format: "text" },
						geolocatie2: { format: "text" },

						OtherAddress: { title: "Post adres", format: "address" },
						//OtherAddressStreet: { address: "PostAddress", addressField: "Street" },
						//OtherAddressNumber: { address: "PostAddress", addressField: "Number" },
						//OtherAddressAdd: { address: "PostAddress", addressField: "Add" },
						//OtherAddressPostalCode: { address: "PostAddress", addressField: "PostalCode" },
						//OtherAddressCity: { address: "PostAddress", addressField: "City" },
						//OtherAddressTown: { address: "PostAddress", addressField: "Town" },
						//OtherAddressState: { address: "PostAddress", addressField: "State" },
						//OtherAddressCountry: { address: "PostAddress", addressField: "Country" },

						KvKnr: { label: "Basisgegevens", title: "KvK nummer", idname: "keyid", format: "text" },
						KvKvestigingsnr: { title: "Vestigingsnr" },
						KvKinschrijving: { title: "Inschrijving" },
						KvKdatum: { title: "Datum" },
						Branche: { title: "Branche", filter: 1 },
						Hoofdcategorie: { title: "Hoofdcategorie", filter: 1 },
						Categorie: { title: "Categorie", filter: 1 },
						Subcategorie: { title: "Subcategorie", filter: 1 },
						BTWnr: { title: "BTW nummer" },
						IBAN: { title: "IBAN nummer" },
						BIC: { title: "BIC nummer" },
						CEO: { title: "CEO" },

						filterproperties: { title: "Filter eigenschappen", format: "textarea" },
						properties: { title: "Extra eigenschappen", format: "textarea" },

						startDT: { label: "Planning", title: "Volgend overleg", format: "date" },
						StartTijd: { title: "Starttijd", format: "time" },
						endDT: { title: "Deadline", format: "date" },
						finishDT: { title: "Gereed", format: "date" },
						Historie: { title: "Historie", format: "div" },
						Aandachtspunten: { title: "Actueel", format: "div" },

						AccountManager: { label: "Sales", title: "Account Manager", classID: "1004", filter: 1 },

						DebNr: { label: "Customer", title: "Debiteur nummer" },
						//"keyname: { title: "Klantcode", idname: "keyname" },
						FactuurKorting: { title: "Factuur korting", unit: "%" },
						VrachtKost: { title: "Vracht kosten", unit: "�" },

						BtwProc: { title: "BTW Percentage", unit: "%" },
						DebSaldo: { title: "Debiteur Saldo" },
						DebLastOrder: { title: "Laatste order", unit: "Maand", readOnly: true, filter: 1 },
						DebYearOrder: { title: "Jaar bestelling", unit: "k�", readOnly: true, filter: 1 },
						DebState: {
							format: "radio", filter: 1, title: "State", options: {
								customer: { title: "Klant", color: "rgba(0,255,0,1)" },
								hot: { title: "Heet", color: "rgba(0,255,0,0.6)" },
								warm: { title: "Warm", color: "rgba(0,255,0,0.2)" },
								cold: { title: "Koud", color: "rgba(0,0,255,0.4)" },
								frozen: { title: "IJskoud", color: "rgba(0,0,255,0.6)" },
								stopped: { title: "Gestopt", color: "rgba(0,0,255,0.4)" },
								old: { title: "Oud", color: "rgba(0,0,255,0.2)" },
								prospect: { title: "Prospect", color: "rgba(0,0,255,1)" }
							}
						},

						CredNr: { label: "Supplier", title: "Crediteur nummer" },
						CredSaldo: { title: "Crediteur Saldo" },
						CredState: {
							format: "radio", filter: 1, title: "State", options: {
								customer: { title: "Klant", color: "rgba(0,255,0,1)" },
								hot: { title: "Heet", color: "rgba(0,255,0,0.6)" },
								warm: { title: "Warm", color: "rgba(0,255,0,0.2)" },
								cold: { title: "Koud", color: "rgba(0,0,255,0.4)" },
								frozen: { title: "IJskoud", color: "rgba(0,0,255,0.6)" },
								stopped: { title: "Gestopt", color: "rgba(0,0,255,0.4)" },
								old: { title: "Oud", color: "rgba(0,0,255,0.2)" },
								prospect: { title: "Prospect", color: "rgba(0,0,255,1)" }
							}
						},

						//id: { label: "aliconnect", title: "Company ID", readOnly: true },
						Owner: { title: "Owner", schema: "Contact", idname: "userID" },
						hostName: { title: "Host", idname: "keyname" },
						//"domain: { title: "Domain" },
						//"accountPrice: { title: "Account Price" },
						//"baseColor: { title: "Base color" },
						//"slogans: { title: "Slogans", format: "textarea" },
						placeid: { title: "Place ID" },
						purchaseref: { title: "aliconnect inkoop opdracht" },

						Employees: {
							label: "Organisatie",
							//linkclassID: 1004, link2classID: 1000
						},
						ASM: { title: "Account Sales Manager", classID: 1004 },
						SalesSupport: { title: "Sales Support", classID: 1004 },
						SalesSupport2: { title: "Sales Support 2", classID: 1004 },
						Cluster: { title: "Cluster" },
					},
					onpost: function () {
						//console.debug("ONPOST");
						if (aim.access.aud == 1) this.postfields.www = 1;
					},
				},
				Department: {
					title: "Department", "name": "department", "methods": [
								"msg",
								"fav"
					],
					ids: {
						"fromID": "Company"
					},
					header: [
						{},
						{},
						{}
					],
					filter: [],
					//required: [],
					view: [],
					properties: {
						users: {
							format: "object"
						},
						files: {
							format: "object"
						},
						state: {
							label: "Department",
							options: {
								"actief": {
									title: "Actief",
									color: "rgb(50,50,200)"
								},
								"nonactief": {
									title: "Non actief",
									color: "rgb(130,130,130)"
								}
							},
							format: "radio",
							title: "Functie Status"
						},
						Department: {
							title: "Afdeling"
						},
						Company: {
							classID: 1002,
							title: "Organisatie"
						},
						Master: {
							classID: 1007,
							title: "Onderdeel van"
						},
						Manager: {
							classID: 1004,
							title: "Manager"
						}
					}
				},
				Task: {
					btns: ["msg", "fav", "edit", "printmenu"],
					//childClasses: [1162],
					files: {},
					printmenu: {
						ptl: {
							title: "Project Task List",
							onclick: function (event) {
								//aim.Document.create({
								//	el: document.body, root: this.item, onload: function () {
								//		console.debug(this.data, this.responseText);
								//		return;
								//		this.ulIndex = this.elIndex.appendTag("ul", { level: 1 });
								//		EM.createElementSystem(this.root, 0, { list: this.ulIndex });
								//		aim.run = true;
								//		//ws.connect();
								//		//EM.onitemchange(aim.api.item[this.data.id]);

								//		//console.debug("JAAAAAAAAAAAAAAAAA");
								//	}
								//});
								aim.Document.create({
									item: this.item,
									par: {
										get: { schema: this.item.schema, id: this.item.id, child: 8, src: 10, link: 10, refby: 10, select: "*", selectall: 1 }, onload: function (event) {
											console.debug("PTL", event.par.src, event.data, this.el);
											this.data = event.data;
											//console.debug(event.data, this.el);
											//Document.id = event.par.get.id;
											with (this.elBody) {
												(writeItem = function (item, i, rows) {
													//console.debug(this,rows.level);
													var value,
														name = item.id;
													//name = item.schema + item.id;
													appendTag("a", { name: name });
													appendTag("h" + rows.level, { innerText: item.title });
													(item.elIndexTitle = (item.elIndexLI = rows.elIndexUL.appendTag("li")).appendTag("h" + rows.level, { onclick: aim.Element.onclick })).appendTag("a", { innerText: item.title, href: "#" + name, });

													with (appendTag("table", { className: "properties" })) {
														for (var name in item.properties) if (value = item.getAttribute(name, true)) with (appendTag("tr")) {
															appendTag("th", { innerText: name });
															if (item.properties[name].itemID) appendTag("td").appendTag("a", { innerText: value, href: "#" + item.properties[name].itemID });
															else appendTag("td", { innerText: value });
														}
													}
													if (item.children) {
														item.elIndexTitle.setAttribute("open", 0);
														item.children.level = rows.level + 1;
														item.children.elIndexUL = item.elIndexLI.appendTag("ul");
														item.children.forEach(writeItem.bind(this));
													}
												})(this.item, 0, { level: 0, elIndexUL: this.elIndex.appendTag("ul") });
												//appendTag("h1", { innerText: "sdfgsdfgsdf" });
											}
											//this.createIndex();
										}.bind(aim.Document)
									}
								});



								//http.request({
								//	get: { id: this.item.id, select: "*" }, onload: function () {

								//	}
								//});
								//console.debug("DOC PTL",this.item);
								//aim.Document.create({ el: collist, item: this.item });
							},
							//object: "ptl",
							//src: "/api/" + aim.version + "/doctree.php",
							//post: {
							//	"flds": "Brand,Product,Model,Type,Serie,Water,Length,Width,Height,InstallLength,InstallWidth,InstallHeight"
							//}
						},
					},
					apps: { mobile: {} },

					onadd: function () {
						this.ownerID = aim.access.sub;
						this.startDT = new Date().toISOString();
						this.endDT = new Date().toISOString();
						this.state = "input";
						this.prio = "normal"
					},
					construct: function () {
						//console.debug("construct task");
					},
					properties: {
						State: {
							label: "Task", filter: 1, title: "State", options: {
								sales: { title: "Sales", color: "rgb(112,48,160)" },
								option: { title: "Sales", color: "orange" },
								pe: { title: "PE Input", color: "rgb(0,176,240)" },
								engineering: { title: "Engineering", color: "orange" },
								doing: { title: "Doing", color: "green" },
								output: { title: "Output", color: "rgb(0,176,240)" },
								hold: { title: "Hold", color: "blue" },
								done: { title: "Done", color: "gray" },
								scp: { title: "SCP", color: "orange" },
								bb: { title: "BB", color: "rgb(117,113,113)" },
								gereed: { title: "Gereed", color: "rgb(255,0,0)" },
								assem: { title: "Assembly", color: "rgb(172,185,202)" },
								petest: { title: "Test", color: "rgb(255,51,153)" },
								pex: { title: "Leeg", color: "rgb(200,200,200)" },
								x: { title: "Vervallen", color: "rgb(200,200,200)" },
								nowork: { title: "Geenwerk", color: "rgb(200,200,200)" },
								shipping: { title: "Shipping", color: "orange" },
								installation: { title: "Installation", color: "orange" },
								installed: { title: "Installed", color: "orange" },
							},
						},
						CreatedDT: { title: "Created", format: "date", readOnly: true },
						StartDT: { title: "Start", format: "date", },
						EndDT: { title: "Deadline", format: "date", },
						FinishDT: { title: "Gereed", format: "date", },
						Keyname: { title: "Keyname", idname: "keyname" },
						KeyID: { title: "KeyID", idname: "keyID" },
						SourceID: { title: "SourceID", idname: "sourceID" },
						Prio: {
							format: "radio", filter: 1, title: "Prioriteit", options: {
								"low": { title: "Laag", color: "yellow" },
								"normal": { title: "Normaal", color: "orange" },
								"high": { title: "Hoog", color: "red" }
							},
						},
						format: {
							format: "radio", filter: 1, title: "Type", options: {
								"ewr": { title: "EWR", color: "yellow" },
								"csp": { title: "CSP", color: "orange" },
								"todo": { title: "TODO", color: "red" },
							},
						},
						Source: { title: "Derived from", classID: 1162, idname: "srcID" },
						Master: { title: "Part of", classID: 1162, idname: "masterID" },

						Title: { title: "Titel", default: true },
						Owner: { title: "Eigenaar", classID: 1004, filter: 1, idname: "ownerID" },
						System: { title: "System", classID: 2107, idname: "toID" },

						Customer: { title: "Customer", classID: 1002, idname: "fromID" },
						CompanyName: { label: "Quote", title: "Company name" },
						OfficeLocation: { title: "Site" },
						Department: { title: "Department" },

						//state: {
						//    format: "radio", filter: 1, title: "State", options: {
						//        "create": { title: "Create", color: "rgb(112,48,160)" },
						//        "sales": { title: "Sales", color: "rgb(0,176,240)" },
						//        "input": { title: "Input", color: "rgb(0,176,240)" },
						//        "doing": { title: "Doing", color: "green" },
						//        "output": { title: "Output", color: "rgb(0,176,240)" },
						//        "hold": { title: "Hold", color: "blue" },
						//        "cancel": { title: "Vervallen", color: "#ccc" },
						//        "done": { title: "Done", color: "gray" }
						//    },
						//},

						//Master: { title: "Deeltaak van", idname: "masterID", classID: 1162, },
						//keyname: { title: "Keyname", idname: "keyname" },
						//Source: { title: "Derived from", classID: 1002, idname: "srcID" },
						//Master: { title: "Part of", classID: 1002, idname: "masterID" },




						//Project: { classID: 1177, filter: 1 },
						//System: { classID: 2107, filter: 1 },
						Subject: { title: "Onderwerp", format: "textarea", },
						Vraagstelling: { title: "Vraagstelling", format: "div", },
						Uitwerking: { title: "Uitwerking", format: "div", },
						Department: { title: "Department", classID: 1007, filter: 1 },
						Resourceformat: {
							label: "Resource", title: "Resource type", filter: 1, format: "radio", options: {
								"me": { title: "Mechanical", color: "rgb(112,48,160)" },
								"hw": { title: "Hardware", color: "rgb(112,48,160)" },
								"sw": { title: "Software", color: "rgb(112,48,160)" },
								"se": { title: "System", color: "rgb(112,48,160)" },
								"le": { title: "Lead", color: "rgb(112,48,160)" }
							}
						},
						Calc: { label: "Work", title: "Calculatie uren", format: "number", unit: "h", },
						Work: { title: "Nog uit te voeren werk uren", format: "number", unit: "h", },
						Voltooid: { title: "Percentage voltooid", format: "number", unit: "%", },
					}
				},
				Document: {
					btns: ["msg", "fav", "send", "edit"], files: {},
					properties: {
						state: {
							label: "Systeem", title: "State", options: {
								"prefered": { "title": "Prefered matrix", "color": "green" },
								"second": { "title": "Second choice", "color": "yellow" },
								"custom": { "title": "Custom Specific Part", "color": "yellow" },
								"eol": { "title": "End of life", "color": "orange" },
								"deleted": { "title": "Unavailable", "color": "red" }
							}
						},
						createdDT: { label: "Schedule", title: "Created", format: "date" },
						startDT: { title: "Start", format: "date" },
						endDT: { title: "Deadline", format: "date" },
						finishDT: { title: "Completed", format: "date" },
						Title: { label: "Content", title: "Title" },
						Subject: { title: "Subject", format: "textarea" },
						Description: { title: "Description", format: "div" },
					}
				},
				Chapter: {
					//childClasses: [1093],
					name: "chapter",
					methods: [
						"slide",
						"msg",
						"fav",
						"send",
						"edit",
						"del"
					],
					ids: { masterID: "Master" },
					header: [
						{},
						{},
						{}
					],
					filter: [],
					//required: [],
					view: [],
					properties: {
						//users: {						format: "object"					},
						state: {
							label: "Webpage", format: "radio", title: "Status", options: {
								draft: { title: "In ontwikkeling", color: "orange" },
								concept: { title: "Concept", color: "yellow" },
								published: { title: "Zichtbaar", color: "green" }
							},
						},
						startDT: { format: "date", title: "Publish" },
						endDT: { format: "date", title: "End" },
						finishDT: { format: "date", title: "Finish" },
						news: { title: "Nieuws", format: "checkbox" },
						Master: { classID: "1092", title: "Onderdeel van" },
						title: { title: "Title" },
						Description: { format: "div", title: "Inleiding" },
						BodyHTML: { format: "div", title: "Hoofdtekst" }
					}
				},
				Website: {
					btns: ["edit"],
					//childClasses: [1092],
					dashboard: {
						Relaties: {
							Projecten: {},
							Subsystemen: {}
						},
						Subsystemen: {}
					},
					treeTitleAttributeName: "Domain",

					properties: {
						state: {
							label: "Website", format: "radio", title: "Status", options: {
								"draft": { title: "In ontwikkeling", color: "orange" },
								"concept": { title: "Concept", color: "yellow" },
								"published": { title: "Zichtbaar", color: "green" }
							},
						},
						startDT: { title: "Start", format: "date" },
						endDT: { title: "End", format: "date" },
						finishDT: { title: "Publish", format: "date" },
						//Company: { label: "Website", classID: "1002;1", title: "Organisatie" },
						Domain: { title: "Domain", idname: "keyname" },
						Description: { format: "div", title: "Inleiding" },
						BodyHTML: { format: "div", title: "Hoofdtekst" },
						AccountPrice: { title: "Account Price" },
						BaseColor: { title: "Base color" },
						Slogans: { format: "textarea", title: "Slogans" },
						Activiteiten: { format: "textarea", title: "Company Activity" },
						InvoiceRef: { title: "Factuur referentie" },
						InvoiceEmail: { title: "Factuur email" },
						//ContactName: { classID: 1004, title: "Contact naam" }
					},

				},
				Webpage: {
					//childClasses: [1092],
					btns: ["slide", "msg", "fav", "send", "edit", "del", "printmenu"],
					childClasses: ["Webpage"],
					header: [
						["Title"], // title = titel
						["Description"], // subject = onderwerp
						["BodyHTML"], // summary = beschrijving / samenvatting
					],
					treeTitleAttributeName: "Title",

					properties: {
						state: {
							label: "Webpage", format: "radio", title: "Status", options: {
								"draft": { title: "In ontwikkeling", color: "orange" },
								"concept": { title: "Concept", color: "yellow" },
								"published": { title: "Zichtbaar", color: "green" }
							},
						},
						startDT: { title: "Start", format: "date" },
						endDT: { title: "End", format: "date" },
						finishDT: { title: "Publish", format: "date" },
						//www: { title: "Publish", format: "checkbox" },
						News: { title: "Nieuws", format: "checkbox" },
						Master: { classID: 1092, title: "Onderdeel van" },
						Title: { title: "Title" },
						Keywords: { title: "Zoekwoorden" },
						Description: { format: "textarea", title: "Inleiding" },
						BodyHTML: { format: "div", title: "Hoofdtekst" }
					},
				},
				Helppage: {
					header: [["Title"]],
					treeTitleAttributeName: "Title",
					properties: {
						state: {
							label: "Help page", format: "radio", title: "Status", options: {
								"draft": { title: "In ontwikkeling", color: "orange" },
								"concept": { title: "Concept", color: "yellow" },
								"published": { title: "Zichtbaar", color: "green" }
							},
						},
						//startDT: { title: "Start", format: "date" },
						//endDT: { title: "End", format: "date" },
						finishDT: { title: "Publish", format: "date" },
						Title: { title: "Title" },
						Keywords: { title: "Zoekwoorden" },
						Description: { format: "textarea", title: "Inleiding" },
						BodyHTML: { format: "div", title: "Hoofdtekst" }
					},
				},
				Softwarefunction: {
					treeTitleAttributeName: "Name",

					btns: ["msg", "fav", "send", "clone", "edit", "show3d", "network", "printmenu"],
					properties: {
						Name: { label: "Software Function", title: "Name", idname: "name" },
						//title: { title: "Title", idname: "title", public: 1 },
						Master: {
							title: "Onderdeel van", classID: 2107, idname: "masterID",
							//"typeID": 11
						},
						Source: { title: "Afgeleid van", classID: 2107, idname: "srcID", filter: 1, },
						HoortBij: { title: "Hoort bij", schema: "System", filter: 1, },
						Categorie: { title: "Categorie", filter: 1, },
					},
				},
				Project: {
					treeTitleAttributeName: "Name",
					properties: {
						Name: { label: "Project", title: "Project" },
					},
				},
				Brand: {
					treeTitleAttributeName: "Name",
					properties: {
						Name: { label: "Brand", title: "Brand" },
					},
				},
				Layout: {
					treeTitleAttributeName: "Name",
					properties: {
						Name: { label: "Project", title: "Project" },
					},
				},
				Instrument: {
					properties: {
						keyname: {},
						FuncTag: { kop: 0, },
						Area: { kop: 0, filter: 1, },
						Loop_Function: { kop: 0, filter: 1, },
						Loop_Nr: { kop: 0, filter: 1, },
						Instr_soort: { filter: 1, },
						Instr_Description: { kop: 1 },
						PLC_IO_format: { filter: 1, },
						Loop_suffix: { filter: 1, },
						Instr_IO_Description: {},
						P_ID: { filter: 1, },
						PID_REV: {},
						Equipment_MOD: {},
						Control_MOD: {},
						Location_CODE: { kop: 2 },
						Measurement_format: {},
						Proces_Conn: {},
						Pressure_Rating: {},
						Instr_Media: {},
						Media_code: { filter: 1, },
						Appedage_nr: {},
						Inbouw_lengte: {},
						InOn_line: { filter: 1, },
						Line_NR: {},
						Sign_Default_range: {},
						HW_Range: {},
						Media_Comp_n: {},
						Unit_n_minimum: {},
						unit_n_nom: {},
						unit_n_maximum: {},
						Unit_n: {},
						Signal_n: {},
						Instr_power: { filter: 1, },
						Sign_Power: {},
						Cabinet: { filter: 1, },
						SIF_Ctrl_Loop: {},
						Transmitter_Loc: {},
						Typical: {},
						Loc_Conn_Box: {},
						Location: {},
						Instr_Remark: {},
						Instr_Tests_n: {},
						Manufacturer: { filter: 1, },
						Instr_format: {},
						Supplier: {},
						Instr_Supplier_Art_code: {},
						Instr_Supplier_Ordercode: {},
						Ambient_Conditions: {},
						AC_Description: {},
						AC_Manufaturer: {},
						AC_format: {},
						AC_Art_code: {},
						AC_Ordercode: {},
						AC_Power: {},
						AC_Datasheet_n: {},
						AC_Appendage_nr: {},
						Loopdiagram: {},
						Comp_NR: {},
						L_Page: {},
						L_stamien: {}
					},
				},
				Device: {
					className: "device",
					header: [
						["Product"], // title = titel
						["IPAddress", "Port"], // subject = onderwerp
						["ReadAddress", "ReadLength", "Community"], // summary = beschrijving / samenvatting
					],
					treeTitleAttributeName: "Product",
					properties: {
						Product: { label: "Device", title: "Name", idname: "name" },

						IPAddress: { label: "Network", title: "IP address" },
						Port: { title: "Port" },
						PollInterval: { title: "Poll Interval", format: "number", unit: "ms" },

						ReadAddress: { label: "Modbus", title: "Read Address" },
						ReadLength: { title: "Read Length" },

						Community: { label: "SNMP", title: "Community" },
					},
				},
				System: {
					btnbar: {
						view: {
							//pwa: { title: "PWA Specification", api: "system/fbs.html", get: { child: 10 }, },
							popupmenu: {
								sbs: {
									title: "SBS", object: "sbs",
									onclick: function (event) {
										//event.stopPropagation();
										aim.Document.create({ el: collist, item: this.item });
									},
									//script: "/lib/" + aim.version + "/js/document.js",

								},
								show3d: {
									title: "Toon 3D Model",
									//hidden: true,
									//hidden: !this.properties || !this.properties.x || !this.properties.y || !this.properties.z || !(this.properties.x.value || this.properties.y.value || this.properties.z.value),
									//hidden: this.schema != "system",
									get hidden() {
										//console.debug("hidden", aim.itemPage);
										var item = aim.itemPage;
										return !item || !item.properties || !item.properties.x || !item.properties.y || !item.properties.z || !(item.properties.x.value || item.properties.y.value || item.properties.z.value);
									},
									//item: this,
									onclick: function () {
										//console.debug("3D", aim.itemPage);
										aim.itemPage.model3d();
									}
								},

								//fds1: { title: "Functional Specification v3", rpt: "fds" },


								//"fds": { title: "Functional specification", "src": "/api/v1/doctree.php", "post": { "flds": "Brand,Product,Model,Type,Serie,Version,Description,BodyHTML" } },
								//"pwa": { title: "Power Water Air specification", "src": "/api/v1/sbstreedoc.php", "post": { "flds": "files,Brand,Product,Model,Type,Serie,Version,Description,BodyHTML,PowerKVA,PowerFuse,PowerConnection,Air,AirConnection,Dewpoint,Water,WaterConnection,Length,Width,Height,InstallLength,InstallWidth,InstallHeight" } },
								//"sm": { title: "Service specification", "src": "/api/v1/doctree.php", "post": { "flds": "Brand,Product,Model,Type,Serie,Water,Length,Width,Height,InstallLength,InstallWidth,InstallHeight" } }
							},
						},
					},
					btns: ["msg", "fav", "send", "clone", "edit", "network", "printmenu"],
					childClasses: [{ title: "System" }, { title: "Product" }],
					//linkclasses: { "1107": 2107 },
					//childlist: { 0: { title: "System child" }, 1: { title: "System object" } },
					backgroundColor: "blue",

					apps: { mobile: {} },
					header: [
						["Brand", "Product", "Model", "Type", "Serie", "Version", "Shape", "Material", "Quality", "Color", "Purpose", "Unit", "Content", "ContentUnit", "PackageUnit", "PackageQuantity"], // title = titel
						[], // subject = onderwerp
						["Description"], // summary = beschrijving / samenvatting
					],

					properties: {
						//TITEL
						Manufacturer: { title: "Manufacturer", label: "Title", schema: "Company" },
						Brand: { schema: "Brand", title: "Merk", filter: 1 },
						Product: { title: "Product", filter: 1, default: true, },
						Model: { title: "Model", filter: 1 },
						format: { title: "Type", filter: 1 },
						Serie: { title: "Serie", filter: 1 },
						Version: { title: "Version", filter: 1 },
						Shape: { title: "Vorm", filter: 1 },
						Material: { title: "Material", filter: 1 },
						Quality: { title: "Quality", filter: 1 },
						Color: { title: "Kleur", filter: 1, },
						Purpose: { title: "Ten behoeve van", filter: 1 },

						Unit: { title: "Eenheid", filter: 1 },
						Content: { title: "Inhoud", filter: 1 },
						ContentUnit: { title: "Inhoud eenheid", filter: 1, enum: ["liter", "meter", "mm", "nano", "mu"] },

						// TOELICHTING
						Description: { title: "Omschrijving", label: "Toelichting", format: "textarea", },
						BodyHTML: { title: "Pagina tekst", format: "div" },
						Remark: { title: "Opmerking", format: "textarea" },
						ProductTitle: { title: "Product titel" },


						//Keywords: { title: "Zoekwoorden" },

						keyname: { title: "Zoek code", idname: "keyname" },
						tag: { title: "Label", idname: "tag" },


						// AFMETINGEN
						Dimensions: { label: "Afmetingen", title: "Afmeting", filter: 1 },
						Length: { title: "Length", format: "number", multipleOf: 10, unit: "mm" },
						Width: { title: "Width", format: "number", multipleOf: 10, unit: "mm" },
						Height: { title: "Height", format: "number", multipleOf: 10, unit: "mm" },
						Weight: { title: "Weight", unit: "kg" },
						//depth: { title: "Length 3D deprecated" },
						//w: { title: "Width 3D deprecated" },
						//h: { title: "Height 3D deprecated" },

						// VERPAKKING
						PackageUnit: { title: "Verpakking eenheid", label: "Verpakking", filter: 1 },
						PackageQuantity: { title: "Verpakking aantal", filter: 1, format: "number", multipleOf: 1 },

						PackageLength: { title: "Length", format: "number", multipleOf: 10, unit: "mm" },
						PackageWidth: { title: "Width", format: "number", multipleOf: 10, unit: "mm" },
						PackageHeight: { title: "Height", format: "number", multipleOf: 10, unit: "mm" },
						PackageWeight: { title: "Weight", unit: "kg" },
						EAN: { title: "EAN" },

						//CONSUMPTION
						PowerKVA: { title: "Power", label: "Verbruik", format: "number", multipleOf: 0.1, unit: "kVA" },
						PowerFuse: { title: "Fuse", format: "number", multipleOf: 1, unit: "Amp" },
						PowerConnection: { title: "Power connection", format: "textarea" },
						//"Power400V50Hz": { title: "Power 400V/50Hz", format: "number", multipleOf:0.1, unit: "kVA" },
						//"Power230V50Hz": { title: "Power 230V/50Hz", format: "number", multipleOf:0.1, unit: "kVA 230VAC, 50Hz" },
						//"Power400V60Hz": { title: "Power 400V/60Hz", format: "number", multipleOf:0.1, unit: "kVA 400VAC-3Phase+PE, 60Hz" },
						//"Power230V60Hz": { title: "Power 230V/60Hz", format: "number", multipleOf:0.1, unit: "kVA 230VAC, 60Hz" },

						Air: { title: "Air", format: "number", multipleOf: 0.1, unit: "NL/MIN 6-8 BAR (dry air)" },
						AirConnection: { title: "Air connection", format: "textarea" },
						Dewpoint: { title: "Dewpoint", format: "number", multipleOf: 0.1, unit: "�C" },

						Water: { title: "Water", format: "number", multipleOf: 0.1, unit: "L/MIN" },
						WaterConnection: { title: "Water connection", format: "textarea" },


						// MAGAZIJN
						StockLocation: { title: "Locatie", label: "Magazijn" },
						Stock: { title: "Voorraad", multipleOf: 1, format: "number" },
						MinimumStock: { title: "Minimum voorraad", multipleOf: 1, format: "number" },
						StartOfStock: { title: "Begin voorraad", multipleOf: 1, format: "number" },

						// VERKOOP
						CatalogPrice: { title: "Catalogus prijs", label: "Verkoop", format: "number", format: "currency", multipleOf: 0.01 }, // catalog price
						//ListPrice: { title: "Adviesprijs, invoeren in catalog price", format: "number", multipleOf:0.01 },
						SalesDiscount: { title: "Verkoop korting", unit: "%" },
						SalesMargin: { title: "Verkoop marge", unit: "%" },
						SalesPrice: {
							title: "Verkoop prijs", readOnly: true, format: "currency", format: "number", multipleOf: 0.01, get: function () {
								var srcItem = aim.api.item[this.srcID] || { values: {} };
								return Number(this.values.cp || srcItem.values.cp) * (100 - Number(this.values.sd || srcItem.values.sd || 0)) / 100
							}
						}, // sales price
						CustomerDiscount: { title: "Klant korting", unit: "%" }, // client discount
						//Price: { title: "Verkoopprijs, vervalt zie Price", format: "number", multipleOf:0.01 },
						//FAT: { title: "FAT" },
						FAT: { "default": "hoog", title: "BTW soort, invoern in FAT", options: ["hoog", "laag"], },
						FixedCostPrice: { title: "Kostprijs", format: "number", multipleOf: 0.01 },

						// INKOOP
						Supplier: { title: "Leverancier", label: "Inkoop", schema: "Company" },
						PurchaseDiscount: { title: "Inkoop korting", unit: "%" }, // purchase discount
						PurchasePrice: {
							title: "Inkoop prijs", readOnly: true, format: "currency", get: function () {
								var srcItem = aim.api.item[this.srcID] || { values: {} };
								return (this.values.cp || srcItem.values.cp) * (100 - Number(this.values.pd || srcItem.values.pd || 0)) / 100
							}
						}, // purchase price
						OrderQuant: { title: "Inkoop hoeveelheid", multipleOf: 1, format: "number" },
						//OrderUnit: { title: "Inkoop eenheid" },
						//PurchaseCode: { title: "Inkoop code" },

						//Supplier: { title: "Supplier", schema: "Company" },
						//SupplierProductUrl: { format: "url", title: "Product pagina" },
						//SupplierArtDescription: { title: "Product omschrijving, opnemen in Description of Body", readOnly: true },
						//SupplierWebTitle: { title: "Product titel, opnemen in Description of Body", readOnly: true },

						// MODEL
						CAD: { title: "CAD model", label: "CAD model", format: "json1" },
						Children: { title: "CAD onderdelen", format: "json1" },
						PosX: { label: "Position", title: "Positie X" },
						PosY: { title: "Positie Y" },
						PosZ: { title: "Positie Z" },
						RotX: { title: "Rotatie X-as" },
						RotY: { title: "Rotatie Y-as" },
						RotZ: { title: "Rotatie Z-as" },

						// STATUS
						State: {
							title: "State", label: "State", filter: 1, options: {
								research: { title: "Research", color: "lightblue" },
								design: { title: "Design", color: "lightblue" },
								draft: { title: "Draft", color: "lightblue" },
								concept: { title: "Concept", color: "yellow" },
								final: { title: "Final", color: "yellow" },
								published: { title: "Published", color: "green" },
								sales: { title: "Sales", color: "orange" },
								ordered: { title: "Ordered", color: "orange" },
								build: { title: "Build", color: "yellow" },
								deleted: { title: "Deleted", color: "black" },
								deprecated: { title: "Deprecated", color: "orange" },
								replaced: { title: "Replaced", color: "orange" },

								aborted: { title: "Aborted", color: "green" },
								stopped: { title: "Stopped", color: "green" },
								idle: { title: "Idle", color: "green" },
								running: { title: "Running", color: "green" },
								complete: { title: "Complete", color: "green" },

								suspended: { title: "Suspended", color: "green" },
								held: { title: "Held", color: "green" },
								aborting: { title: "Aborting", color: "green" },
								stopping: { title: "Stopping", color: "green" },
								clearing: { title: "Clearing", color: "green" },
								resetting: { title: "Resetting", color: "green" },
								starting: { title: "Starting", color: "green" },
								completing: { title: "Completing", color: "green" },
								suspending: { title: "Suspending", color: "green" },
								unsuspending: { title: "Unsuspending", color: "green" },
								holding: { title: "Holding", color: "green" },
								unholding: { title: "Unholding", color: "green" },
								//"run": { title: "Run", color: "green" },
								//"hold": { title: "Hold", color: "blue" },
								//"warning": { title: "Warning", color: "orange" },
								//"stop": { title: "Stop", color: "red" },
							}
						},
						WWW: { title: "Publish", title: "Deze pagina tonen op internet", format: "checkbox", idname: "www" },
						News: { title: "News", title: "Deze pagina opnemen in nieuwsberichten", format: "checkbox" },

						CreatedDT: { title: "Created", label: "Planning", format: "date", idname: "createdDT" },
						StartDT: { title: "Start", format: "date", idname: "startDT" },
						EndDT: { title: "Deadline", format: "date", idname: "endDT" },
						FinishDT: { title: "Completed", format: "date", idname: "finishDT" },

						//DatumDelivery: { title: "Delivery date", format: "date" },
						//DatumSales1: { title: "Deadline Sales 1", format: "date" },
						//DatumSales2: { title: "Deadline Sales 2", format: "date" },

						// MOBA
						//DaysQroc: { label: "Lead time", title: "Sales", format: "number", unit: "days" },
						//DaysEng: { title: "Engineering", format: "number", unit: "days" },
						//DaysPrep: { title: "Preperation", format: "number", unit: "days" },
						//DaysProduce: { title: "Purchase and production", format: "number", unit: "days" },
						//DaysAss: { title: "Assembly", format: "number", unit: "days" },
						//DaysTest: { title: "Factory test", format: "number", unit: "days" },
						//DaysShip: { title: "Shipment", format: "number", unit: "days" },

						// REFERENTIES
						Master: { title: "Onderdeel van", label: "Referenties", schema: "System", idname: "masterID", "typeID": 11 },
						Source: { title: "Afgeleid van", schema: "System", idname: "srcID" },
						Layout: { title: "Layout", schema: "Layout" },
						SystemFolder: { title: "Network folder" },
						TagName: { title: "TagName" },
						keyname: { title: "Keyname", idname: "keyname" },

						// MOBA
						SofonNr: { title: "Sofon nr" },
						ProjectNr: { title: "Project nr", schema: "Project", },
						cspnummer: { title: "CSP nummer" },

						//Category: { title: "Category" },

						//Name: { title: "Name", idname: "name", public: 1 },
						//keyname: { title: "Tagname", idname: "keyname", public: 1 },
						//Tagname: { title: "Tagname", idname: "tagname" },
						//keyID: { title: "Key ID", idname: "keyID" },
						//tagName: { title: "Tag Name", idname: "tagName" },
						//Value: { title: "Value", idname: "value" },
						//Keywords: { title: "Zoekwoorden" },
						//www: { title: "Publish", format: "checkbox" },
						//nr: { title: "Number", idname: "nr" },
						//Tag: { title: "Tag", idname: "tag", calc: function (value) { return value ? ("000" + value).slice(-3) : ""; } },


						//PRODUCT EIGENSCHAPPEN



						//Text: { title: "Text" },
						//Location: { title: "Location", schema: "location", get: { filter: "" } },

						//Source: { classID: 1060, title: "Afgeleid van" },

						//Merk: { classID: 1016, title: "Merk oud, vervalt", readOnly: true },
						//"Product": { title: "Product" },
						//"Type": { title: "Type" },
						//Soort: { title: "Soort, vervalt, invoeren in type", readOnly: true },
						//"Serie": { title: "Serie" },
						//"Version": { title: "Versie" },

						//Machine: { title: "Machine number, vervalt, invoeren in Number", readOnly: true },

						//ChildClassNr: { title: "Child index", idname: "childClassNr" },
						//ClassNr: { title: "Product index", idname: "classNr" },

						//Tag: { title: "Tag", filter: 1 },
						//"AbisTekst": { title: "ABIS" },


						//ProductCode: { label: "Product", title: "Code", },
						//ProductTitle: { title: "Title" },
						//ProductDescription: { title: "Description", format: "textarea" },
						//ProductUrl: { format: "url", title: "Webpage" },
						//ArtNr: { title: "ArtNr, invoeren in Name", readOnly: true },



						//Toepassing: { title: "Toepassing, opnemen in Description of Body", readOnly: true },
						//Oms: { title: "Extra tekst, opnemen in Description of Body", readOnly: true },
						//ExtraTitle: { title: "Extra titel, opnemen in Description of Body", readOnly: true },



						//Dimensions


						//Btw: { "default": "hoog", title: "BTW soort, invoern in FAT", options: ["hoog", "laag"], },
						//Fkpprice: { title: "Vervalt, zie fkp", format: "number", multipleOf:0.01 },


						//ProductieLocatie: { title: "Productie locatie, vervalt, Stocklocation" },








						//InstallLength: { label: "Installation dimensions, vervalt", title: "Installation Length", format: "number", multipleOf:10, unit: "mm", readOnly: true },
						//InstallWidth: { title: "Installation Width, vervalt", format: "number", multipleOf:10, unit: "mm", readOnly: true },
						//InstallHeight: { title: "Installation Height, vervalt", format: "number", multipleOf:10, unit: "mm", readOnly: true },


						//System properties
						//FilterProperties: { label: "Properties", title: "Filtered", format: "textarea", prop: 2 },
						//Properties: { title: "Additional", format: "textarea", prop: 1 },

						//ExtProperties: { title: "Invoeren in additional", format: "textarea", readOnly: true },
						////"properties": { format: "textarea", title: "Extra eigenschappen" },
						//Performance: { title: "Performance, invoeren in additional", readOnly: true },
						//Toepassing: { title: "Toepassing, invoeren in additional", readOnly: true },
						//Options: { format: "options", title: "Opties, invoeren in additional", readOnly: true },


						//ARTIKEL
						//"Unit2": { title: "2e besteleenheid" },
						//"Unit2Quant": { multipleOf:1, format: "number", title: "2e besteleenheid aantal" },


						//Department: { title: "Department" },

						//Productgroep: { title: "Productgroep, vervalt > department" },
						//"ProductGroup": { title: "Product group, vervalt, zie mappenstructuur", readOnly: true },


					}
				},
				Product: {
					files: {}, btns: ["msg", "fav", "send", "clone", "edit", "show3d", "network", "printmenu"],
					treeTitleAttributeName: "Product",

					properties: {
						files: { format: "files" },
						state: {
							label: "Product", title: "State", format: "radio", filter: 1, options: {
								"draft": { title: "Draft", color: "lightblue" },
								"concept": { title: "Concept", color: "yellow" },
								"published": { title: "Published", color: "green" },
								"replaced": { title: "Vervangen", color: "orange" },
								"deleted": { title: "Deleted", color: "#ccc" }
							},
						},
						www: { title: "Publish", format: "checkbox" },
						Source: { classID: 1060, title: "Afgeleid van" },
						SerialNumber: { title: "Serial Number" },

						Merk: { classID: 1016, title: "Merk" },
						Product: { title: "Product" },
						format: { title: "Type" },
						Soort: { title: "Soort" },
						Serie: { title: "Serie" },
						Version: { title: "Versie" },
						Unit: { title: "Eenheid" },
						Content: { title: "Inhoud" },
						ContentUnit: { title: "Inhoud eenheid" },
						ArtNr: { title: "Product Code" },
						SupplierArtDescription: { title: "Product omschrijving" },
						SupplierWebTitle: { title: "Product titel" },
						ExtraTitle: { title: "Extra titel" },
						Manufacturer: { classID: 1002, title: "Fabrikant" },
						Productgroep: { title: "Productgroep" },
						SupplierProductUrl: { format: "url", title: "Product pagina" },
						AbisTekst: { title: "AbisTekst" },
						Toepassing: { title: "Toepassing" },
						Oms: { title: "Extra tekst" },
						Description: { format: "textarea", title: "Inleiding" },
						BodyHTML: { format: "div", title: "Hoofdtekst" },
						Options: { format: "options", title: "Opties" },
						filterproperties: { format: "textarea", title: "Filter eigenschappen" },
						properties: { format: "textarea", title: "Extra eigenschappen" },
						EAN: { title: "EAN" },
						Btw: { "default": "hoog", title: "BTW soort", options: ["hoog", "laag"], },
						Weight: { unit: "kg", title: "Eenheid gewicht" },
						cp: { multipleOf: 0.01, format: "number", format: "currency", title: "Catalogus prijs" }, // catalog price


						Unit1: { label: "Artikel", title: "Besteleenheid", filter: 1 },
						Unit1Quant: { multipleOf: 1, format: "number", title: "Besteleenheid aantal", filter: 1 },
						//"Unit2": { title: "2e besteleenheid" },
						//"Unit2Quant": { multipleOf:1, format: "number", title: "2e besteleenheid aantal" },

						sd: { unit: "%", title: "Verkoop korting" }, // sales discount
						sp: {
							title: "Verkoop prijs", readOnly: true, format: "currency", get: function () {
								var srcItem = aim.api.item[this.srcID] || { values: {} };
								return Number(this.values.cp || srcItem.values.cp) * (100 - Number(this.values.sd || srcItem.values.sd || 0)) / 100
							}
						}, // sales price

						cd: { unit: "%", title: "Klant korting" }, // client discount
						pd: { unit: "%", title: "Inkoop korting" }, // purchase discount
						pp: {
							title: "Inkoop prijs", readOnly: true, format: "currency", get: function () {
								var srcItem = aim.api.item[this.srcID] || { values: {} };
								return (this.values.cp || srcItem.values.cp) * (100 - Number(this.values.pd || srcItem.values.pd || 0)) / 100
							}
						}, // purchase price


						Supplier: { classID: 1002, title: "Leverancier" },
						Stock: { multipleOf: 1, format: "number", title: "Op voorraad" },
						Loc: { title: "Locatie" },
						minStock: { multipleOf: 1, format: "number", title: "Minimale voorraad" },
						orderQuant: { multipleOf: 1, format: "number", title: "Bestel hoeveelheid" },
						id: { label: "aliconnect", "readOnly": true, title: "Product ID" },

						IP: { label: "Network", title: "IP adress" },
						Port: { title: "Port" },



					}
				},
				Signal: {
					treeTitleAttributeName: "Name",

					properties: {
						//id: { label: "Identifier", readOnly: true, title: "ID" },
						Keyname: { title: "Key Name", idname: "keyname" },
						Master: { label: "Title", title: "Onderdeel van", schema: "IOModule", idname: "masterID" },
						Name: { title: "Name", idname: "name" },
						Description: { label: "Description", title: "Summary", format: "textarea" },

						Signalformat: { title: "type", options: { D: "Digital", A: "Analog" } },
						Direction: { title: "Direction", options: { I: "Indicator", O: "Actuator" } },

						Area: { label: "System Breakdown", title: "Area", schema: "System", },
						Loop: { title: "Loop", schema: "System", },
						Template: { title: "Template", schema: "System", },
						Function: { title: "Function", schema: "System", },
						//Sensor: { title: "Sensor", schema: "system", },
						Signal: { title: "Signal", schema: "Signal", },


						//Description: { title: "Text", },
						PID: { title: "PID", schema: "Document", },
						HwRange: { title: "HwRange", },
						HwLoop: { title: "HwLoop", },

						PLC: { label: "Hardware configuration", title: "PLC", filter: 1, schema: "Controller", },
						RIO: { title: "RIO", filter: 1, schema: "IOInterface", },
						Slot: { title: "Slot", filter: 1, schema: "IOModule", },
						IO: { title: "IO", schema: "IO", },

						IOformat: { title: "IOType" },
						HwAddress: { title: "Address", },
						Terminal: { title: "Terminal" },
						Drawing: { title: "Drawing", schema: "Document", },
					}
				},
				Controller: {
					properties: {
						id: { label: "Controller", readOnly: true, title: "ID" },
						Keyname: { title: "Key Name", idname: "keyname" },
						Master: { title: "Onderdeel van", schema: "System", idname: "masterID" },
						Name: { title: "Name", idname: "name" },
						Address: { title: "Address", },
					}
				},
				IOInterface: {
					properties: {
						//id: { label: "Identifier", readOnly: true, title: "ID" },
						Keyname: { title: "Key Name", idname: "keyname" },
						Master: { label: "Title", title: "Onderdeel van", schema: "Controller", idname: "masterID" },
						Name: { title: "Name", idname: "name" },
					}
				},
				IOModule: {
					properties: {
						//id: { label: "Identifier", readOnly: true, title: "ID" },
						Keyname: { title: "Key Name", idname: "keyname" },
						Master: { label: "Title", title: "Onderdeel van", schema: "IOInterface", idname: "masterID" },
						Name: { title: "Name", idname: "name" },
					}
				},

				ControlIO: {
					treeTitleAttributeName: "Tag",

					properties: {
						Signalformat: {
							label: "Control IO", title: "Type", format: "select", options: {
								Text: { title: "String" },
								D: { title: "Digital", color: "blue" },
								A: { title: "Analog", color: "yellow" },


								Bool: { title: "Boolean" },
								SByte: { title: "Signed Byte" },
								UBbyte: { title: "Unsigned Byte" },
								SInt: { title: "Signed Integer" },
								Uint: { title: "Unsigned Integer" },
								SDInt: { title: "Signed Double Integer" },
								UDInt: { title: "Unsigned Double Integer" },
								Float: { title: "Float" },
								Double: { title: "Double" },

								//integer: { title: "Integer" },
								//int8: { title: "Byte" },
								//uint8: { title: "Unsigned Byte" },
								//int16: { title: "Word" },
								//uint16: { title: "Unsigned Word" },
								//int32: { title: "Double" },
								//uint32: { title: "Unsigned Double" },

								//float4: { title: "Float 4 (4 Bytes)" },
								//inversefloat4: { title: "Inverse Float 4" },
								//float8: { title: "Float 8 (8 Bytes)" },
								//inversefloat8: { title: "Inverse Float 8" },
								//double: { title: "Double" },


								//bool: { title: "Boolean" },
								//number: { title: "Number" },
								Date: { title: "Date" },
								Time: { title: "Time" },
								Datetime: { title: "Date and time" },
								Array: { title: "Array" },
								Object: { title: "Object" },
								" ": { title: "Not applicable" },
							}
						},
						Permission: { title: "Permission", format: "radio", options: { rw: "Read Write", r: "Read Only", w: "Write Only" } },
						Direction: { title: "Direction (vervalt)", format: "radio", options: { I: "Input", O: "Output" } },

						Tag: { title: "TAG", idname: "tag" },

						Value: { title: "Value", idname: "value", },
						Quality: { title: "Quality", format: "radio", options: { Valid: { title: "Valid", color: "green" }, NotValid: { title: "NotValid", color: "orange" }, CommunicationError: { title: "CommunicationError", color: "red" }, UnInitialized: { title: "UnInitialized", color: "gray" } } },

						ReadAddress: { label: "Modbus", title: "Read Address", format: "number" },
						//ReadAddressLength: { title: "Read Address Length", defaultvalue: 1, format: "number" },
						ReadAddressBit: { title: "Bit number", format: "number" },

						OID: { label: "SNMP", title: "OID" },
						SNMPformat: { title: "SNMP Type" },

						//PollInterval: { label: "Scan configuration", title: "Poll Interval", format: "number", unit: "ms" },


						////ModbusAddress: { title: "Modbus Address", format: "number" },
						////ModbusAddressBit: { title: "Modbus Address Bit", format: "number" },
						////RangeName: { title: "Range Name" },

						//TagName: { title: "Tagname" },
						//Tagformat: { title: "Tagtype" },
						//SharedMemoryOffset: { title: "Shared Memory Offset", format: "number" },
						//SharedMemoryBit: { title: "Shared Memory Bit", format: "number" },
						//TextEnumeration: { title: "Text enumeration" },
						//Description: { title: "Description" },
						//Passthrough: { title: "Passthrough" },

						//Unit: { title: "Unit" },
						//Fraction: { title: "Fraction", format: "number" },
						//IOformat: { title: "IO Type" },
						//Invert: { label: "Signal", title: "Invert", format: "checkbox" },
						//AlarmText: { title: "Alarm Text" },
						//Category: { title: "Category" },
						//StandardOutput: { title: "Standard Output" },


						//RANGE
						MinValidValue: { label: "Range", title: "Min Valid Value", format: "number" },
						MaxValidValue: { title: "Max Valid Value", format: "number" },
						Deadband: { title: "Deadband", format: "number" },

						MinRawValue: { label: "Conversion", title: "Min Raw Value", format: "number" },
						MaxRawValue: { title: "Max Raw Value", format: "number" },
						MinEngValue: { title: "Min Engineering Value", format: "number" },
						MaxEngValue: { title: "Max Engineering Value", format: "number" },

						//RawMin: { title: "Raw MIN" },
						//EngMin: { title: "Eng MIN" },
						//Factor: { title: "Eng Factor" },
						//EngMax: { title: "Eng MAX" },
						//RawMax: { title: "Raw MAX" },


					},
				},
				//controloutput: {
				//	className: "controloutput",
				//	properties: {
				//		Signalformat: { title: "Type", format: "radio", options: { D: "Digital", A: "Analog" } },
				//		Direction: { title: "Direction", format: "radio", options: { I: "Input", O: "Output" } },
				//		Tag: { title: "Name", idname: "tag", default: 1 },
				//	},
				//},
				IO: {
					treeTitleAttributeName: "Name",

					properties: {
						//id: { label: "Identifier", readOnly: true, title: "ID" },
						Keyname: { title: "Key Name", idname: "keyname" },
						Master: { label: "Title", title: "Onderdeel van", schema: "IOModule", idname: "masterID" },
						Name: { title: "Name", idname: "name" },
						Signalformat: { title: "Type", options: { D: "Digital", A: "Analog" } },
						Direction: { title: "Direction", options: { I: "Input", O: "Output" } },
						RawMax: { title: "Raw Max", format: "number" },
						RawMin: { title: "Raw Min", format: "number" },
						//tag: { title: "Tag", },
						//Contact: { title: "Contact", options: { NO: "NO", NC: "NC" }, },

					}
				},
				Location: {
					properties: {
						//id: { label: "Identifier", readOnly: true, title: "ID" },
						Keyname: { title: "Key Name", idname: "keyname" },
						Master: { label: "Title", title: "Onderdeel van", classID: 2107, idname: "masterID" },
						Name: { title: "Name", idname: "name" },
						Title: { title: "Title" },
					}
				},
				//MSE
				contacts: {
					//origin: ["https://aliconnect.nl", "aliconnect", "api", aim.version, ""].join("/"),
					properties: {
						//ChangeKey: {},
						//ParentFolderId: {},
						CreatedDateTime: {},
						LastModifiedDateTime: {},
						Categories: {},
						Birthday: {},
						FileAs: {},
						DisplayName: { kop: 0 },
						GivenName: {},
						Initials: {},
						MiddleName: {},
						NickName: {},
						Surname: {},
						Title: {},
						//YomiGivenName: {},
						//YomiSurname: {},
						//YomiCompanyName: {},
						Generation: {},
						ImAddresses: {},
						JobTitle: {},
						CompanyName: {},
						Department: {},
						OfficeLocation: {},
						Profession: {},
						BusinessHomePage: {},
						AssistantName: {},
						Manager: {},
						HomePhones: { format: "array", maximum: 3, },
						MobilePhone1: {},
						BusinessPhones: { format: "array", maximum: 3, },
						SpouseName: {},
						PersonalNotes: {},
						Children: { format: "array", },
						EmailAddresses: {
							//format: [{ Name: { format: "text" }, Address: { format: "email" } }],
							type: "object",
							properties: {
								street_address: { type: "string" },
								city: { type: "string" },
								state: { type: "string" }
							},
							maximum: 3,
						},
						HomeAddress: {
							type: "object",
							properties: {
								street_address: { type: "string" },
								city: { type: "string" },
								state: { type: "string" }
							},
							//format: { Street: {}, City: {}, CountryOrRegion: {} },
						},
						BusinessAddress: {
							type: "object",
							properties: {
								street_address: { type: "string" },
								city: { type: "string" },
								state: { type: "string" }
							},
							//format: { Street: {}, City: {}, CountryOrRegion: {} },
						},
						OtherAddress: {
							type: "object",
							properties: {
								street_address: { type: "string" },
								city: { type: "string" },
								state: { type: "string" }
							},
							//format: { Street: {}, City: {}, CountryOrRegion: {} },
						},
					}
				},
				messages: {
					properties: {
						Id: {},
						CreatedDateTime: {},
						LastModifiedDateTime: {},
						ChangeKey: {},
						Categories: {},
						ReceivedDateTime: {},
						SentDateTime: {},
						HasAttachments: {},
						InternetMessageId: {},
						Subject: {},
						BodyPreview: {},
						Importance: {},
						ParentFolderId: {},
						ConversationId: {},
						IsDeliveryReceiptRequested: {},
						IsReadReceiptRequested: {},
						IsRead: {},
						IsDraft: {},
						WebLink: {},
						InferenceClassification: {},
						InternetMessageHeaders: {},
						Body: {},
						Sender: {},
						From: {},
						ToRecipients: {},
						CcRecipients: {},
						BccRecipients: {},
						ReplyTo: {},
						UniqueBody: {},
						Flag: {},
					}
				},
				events: {
					properties: {
						Id: {},
						CreatedDateTime: {},
						LastModifiedDateTime: {},
						ChangeKey: {},
						Categories: {},
						OriginalStartTimeZone: {},
						OriginalEndTimeZone: {},
						iCalUId: {},
						ReminderMinutesBeforeStart: {},
						IsReminderOn: {},
						HasAttachments: {},
						Subject: {},
						BodyPreview: {},
						Importance: {},
						Sensitivity: {},
						IsAllDay: {},
						IsCancelled: {},
						IsOrganizer: {},
						ResponseRequested: {},
						SeriesMasterId: {},
						ShowAs: {},
						format: {},
						WebLink: {},
						OnlineMeetingUrl: {},
						ResponseStatus: {},
						Body: {},
						Start: {},
						End: {},
						Location: {},
						Locations: {},
						Recurrence: {},
						Attendees: {},
						Organizer: {},
					}
				},
				calendarview: {
					properties: {
						Id: {},
						CreatedDateTime: {},
						LastModifiedDateTime: {},
						ChangeKey: {},
						Categories: {},
						OriginalStartTimeZone: {},
						OriginalEndTimeZone: {},
						iCalUId: {},
						ReminderMinutesBeforeStart: {},
						IsReminderOn: {},
						HasAttachments: {},
						Subject: {},
						BodyPreview: {},
						Importance: {},
						Sensitivity: {},
						IsAllDay: {},
						IsCancelled: {},
						IsOrganizer: {},
						ResponseRequested: {},
						SeriesMasterId: {},
						ShowAs: {},
						format: {},
						WebLink: {},
						OnlineMeetingUrl: {},
						ResponseStatus: {},
						Body: {},
						Start: {},
						End: {},
						Location: {},
						Locations: {},
						Recurrence: {},
						Attendees: {},
						Organizer: {},
					}
				},
			}
		}
	}
});
