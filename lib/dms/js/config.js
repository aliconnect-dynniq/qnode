aim('aim', {
  info: {
    title: "Schiphol",
    version: "1.0.0",
    description: ".",
    contact: {
      email: "max.van.kampen@alicon.nl"
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    termsOfService: "http://schiphol.aliconnect.nl/terms/"
  },
  paths: [],
  components: {
    schemas: {
      dms_Location: {
        security: {
          write: [
            {
              default_auth: [
                "write:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ],
          read: [
            {
              default_auth: [
                "write:web",
                "read:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ]
        },
        properties: {
          Title: {
            title: "Title"
          },
          Subject: {
            title: "Subject"
          },
          Summary: {
            title: "Summary"
          },
          Children: {
            type: "array"
          }
        }
      },
      dms_Group: {
        security: {
          write: [
            {
              default_auth: [
                "write:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ],
          read: [
            {
              default_auth: [
                "write:web",
                "read:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ]
        },
        properties: {
          Title: {
            title: "Title"
          },
          Subject: {
            title: "Subject"
          },
          Summary: {
            title: "Summary"
          },
          Children: {
            type: "array"
          }
        }
      },
      Attribute: {
        security: {
          write: [
            {
              default_auth: [
                "write:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ],
          read: [
            {
              default_auth: [
                "write:web",
                "read:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ]
        },
        header: [
          [
            "Name"
          ],
          [
            "Title"
          ],
          [
            "Description"
          ]
        ],
        treeTitleAttributeName: "Name",
        properties: {
          Name: {
            title: "Name",
            label: "Attribute",
            idname: "name"
          },
          Title: {
            title: "title"
          },
          Description: {
            title: "Description"
          },
          State: {
            title: "State",
            idname: "state"
          },
          StateMessage: {
            title: "StateMessage"
          },
          Value: {
            title: "Value"
          },
          Quality: {
            title: "Quality",
            type: "radio",
            options: {
              Valid: {
                title: "Valid",
                color: "green"
              },
              NotValid: {
                title: "NotValid",
                color: "orange"
              },
              CommunicationError: {
                title: "CommunicationError",
                color: "red"
              },
              UnInitialized: {
                title: "UnInitialized",
                color: "gray"
              }
            }
          },
          AttributeType: {
            label: "Type",
            title: "Attribute type",
            type: "select",
            options: {
              CriticalFailure: {
                title: "Critical Failure",
                color: "red"
              },
              NonCriticalFailure: {
                title: "Non Critical Failure",
                color: "orange"
              },
              Locking: {
                title: "Locking",
                color: "yellow"
              },
              Maintenance: {
                title: "Maintenance"
              },
              Running: {
                title: "Running",
                color: "green"
              },
              RunningMode: {
                title: "Running mode"
              },
              Security: {
                title: "Security"
              },
              PreWarning_1: {
                title: "Pre warning 1"
              },
              PreWarning_2: {
                title: "Pre warning 2"
              },
              PreWarning_3: {
                title: "Pre warning 3"
              },
              Measurement_1: {
                title: "Measurement 1"
              },
              Measurement_2: {
                title: "Measurement 2"
              },
              Measurement_3: {
                title: "Measurement 3"
              },
              Measurement_4: {
                title: "Measurement 4"
              },
              Measurement_5: {
                title: "Measurement 5"
              },
              MeasurementErrorFlag: {
                title: "MeasurementErrorFlag"
              },
              NotApplicable: {
                title: "Not Applicable"
              }
            }
          },
          ModifiedDateTime: {
            title: "Modified"
          },
          ValueType: {
            title: "Value type",
            type: "select",
            options: {
              text: {
                title: "String"
              },
              integer: {
                title: "Integer"
              },
              double: {
                title: "Double"
              },
              bool: {
                title: "Boolean"
              },
              date: {
                title: "Date"
              },
              time: {
                title: "Time"
              },
              datetime: {
                title: "Date and time"
              }
            }
          },
          Enum: {
            title: "Enummeration",
            type: "text"
          },
          Unit: {
            title: "Unit",
            type: "text"
          },
          Calc: {
            title: "Calculation function",
            type: "select",
            options: {
              OnlineHours: {
                title: "OnlineHours()"
              }
            }
          },
          Min: {
            label: "Display",
            title: "Min",
            type: "number"
          },
          Max: {
            title: "Max",
            type: "number"
          },
          Step: {
            title: "Step",
            type: "number"
          },
          Optimum: {
            title: "Optimum",
            type: "number"
          },
          Low: {
            title: "Low",
            type: "number"
          },
          High: {
            title: "High",
            type: "number"
          },
          Hysteresis: {
            title: "Hysteresis",
            type: "number",
            step: 0.1
          }
        }
      },
      System: {
        security: {
          write: [
            {
              default_auth: [
                "write:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ],
          read: [
            {
              default_auth: [
                "write:web",
                "read:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ]
        },
        treeTitleAttributeName: "Product",
        header: [
          [
            "Brand",
            "Product",
            "Model",
            "Type",
            "Serie",
            "Version",
            "Shape",
            "Material"
          ],
          [],
          [
            "Description"
          ]
        ],
        properties: {
          State: {
            title: "State",
            label: "State",
            format: "radio",
            filter: 1,
            options: {
              run: {
                title: "Stopping",
                color: "green"
              },
              stopped: {
                title: "Clearing",
                color: "green"
              }
            }
          },
          CreatedDateTime: {
            type: "datetime",
            format: "hidden"
          },
          LastModifiedDateTime: {
            type: "datetime",
            format: "hidden"
          },
          LastVisitDateTime: {
            type: "datetime",
            format: "hidden"
          },
          StartDateTime: {
            type: "datetime",
            format: "hidden"
          },
          EndDateTime: {
            type: "datetime",
            format: "hidden"
          },
          FinishDateTime: {
            type: "datetime",
            format: "hidden"
          },
          Brand: {
            schema: "Brand",
            label: "Titel",
            title: "Merk",
            filter: 1
          },
          Product: {
            title: "Product",
            filter: 1,
            default: true
          },
          Model: {
            title: "Model",
            filter: 1
          },
          Type: {
            title: "Type",
            filter: 1
          },
          Serie: {
            title: "Serie",
            filter: 1
          },
          Version: {
            title: "Version",
            filter: 1
          },
          Shape: {
            title: "Vorm",
            filter: 1
          },
          Material: {
            title: "Material",
            filter: 1
          },
          Master: {
            title: "Onderdeel van",
            label: "Configuratie",
            schema: "System"
          },
          Source: {
            title: "Afgeleid van",
            schema: "Verkeersbuis"
          },
          Children: {
            type: "array"
          },
          Message: {
            type: "array"
          }
        }
      },
      Device: {
        security: {
          write: [
            {
              default_auth: [
                "write:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ],
          read: [
            {
              default_auth: [
                "write:web",
                "read:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ]
        },
        className: "device",
        header: [
          [
            "Product"
          ],
          [
            "IPAddress",
            "Port"
          ],
          [
            "ReadAddress ReadLength Community"
          ]
        ],
        treeTitleAttributeName: "Product",
        properties: {
          Master: {
            label: "Device",
            title: "Product",
            idname: "name"
          },
          IPAddress: {
            label: "Network",
            title: "IP address"
          },
          Port: {
            title: "Port"
          },
          PollInterval: {
            title: "Poll Interval",
            type: "number",
            unit: "ms"
          },
          ReadAddress: {
            label: "Modbus",
            title: "Read Address"
          },
          ReadLength: {
            title: "Read Length"
          },
          Community: {
            label: "SNMP",
            title: "Community"
          }
        }
      },
      Product: {
        security: {
          write: [
            {
              default_auth: [
                "write:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ],
          read: [
            {
              default_auth: [
                "write:web",
                "read:web",
                "write:all",
                "admin:write",
                "write:admin"
              ]
            }
          ]
        },
        btns: [
          "msg",
          "fav",
          "send",
          "clone",
          "edit",
          "show3d",
          "network",
          "printmenu"
        ],
        header: [
          [
            "Merk",
            "Product"
          ],
          [
            "Merk"
          ],
          [
            "Description"
          ]
        ],
        treeTitleAttributeName: "Product",
        properties: {
          State: {
            label: "Product",
            title: "State",
            type: "radio",
            filter: 1,
            options: {
              draft: {
                title: "Draft",
                color: "lightblue"
              },
              concept: {
                title: "Concept",
                color: "yellow"
              },
              published: {
                title: "Published",
                color: "green"
              },
              replaced: {
                title: "Vervangen",
                color: "orange"
              },
              deleted: {
                title: "Deleted",
                color: "#ccc"
              }
            }
          },
          IsPublic: {
            title: "Publish",
            type: "checkbox"
          },
          Source: {
            title: "Afgeleid van",
            schema: "Product"
          },
          SerialNumber: {
            title: "Serial Number"
          },
          Merk: {
            title: "Merk",
            classID: 1016
          },
          Product: {
            title: "Product",
            default: 1
          },
          Type: {
            title: "Type"
          },
          Soort: {
            title: "Soort"
          },
          Serie: {
            title: "Serie"
          },
          Version: {
            title: "Versie"
          },
          Unit: {
            title: "Eenheid"
          },
          Content: {
            title: "Inhoud"
          },
          ContentUnit: {
            title: "Inhoud eenheid"
          },
          ArtNr: {
            find: 1,
            title: "Product Code"
          },
          SupplierArtDescription: {
            title: "Product omschrijving"
          },
          SupplierWebTitle: {
            title: "Product titel"
          },
          ExtraTitle: {
            title: "Extra titel"
          },
          Manufacturer: {
            title: "Fabrikant",
            classID: 1002
          },
          Productgroep: {
            title: "Productgroep"
          },
          SupplierProductUrl: {
            title: "Product pagina",
            type: "url"
          },
          AbisTekst: {
            title: "AbisTekst",
            find: 1
          },
          Toepassing: {
            title: "Toepassing"
          },
          Oms: {
            title: "Extra tekst"
          },
          Description: {
            title: "Inleiding",
            type: "textarea"
          },
          BodyHTML: {
            title: "Hoofdtekst",
            type: "div"
          },
          Options: {
            title: "Opties",
            type: "options"
          },
          filterproperties: {
            type: "textarea",
            title: "Filter eigenschappen"
          },
          properties: {
            type: "textarea",
            title: "Extra eigenschappen"
          },
          EAN: {
            title: "EAN"
          },
          Btw: {
            title: "BTW soort",
            options: [
              "hoog",
              "laag"
            ],
            default: "hoog"
          },
          Weight: {
            title: "Eenheid gewicht",
            unit: "kg"
          },
          cp: {
            title: "Catalogus prijs",
            type: "number",
            format: "currency",
            step: 0.01
          },
          Unit1: {
            label: "Artikel",
            title: "Besteleenheid",
            filter: 1
          },
          Unit1Quant: {
            title: "Besteleenheid aantal",
            type: "number",
            step: 1,
            filter: 1
          },
          sd: {
            title: "Verkoop korting",
            lv: 1,
            unit: "%"
          },
          sp: {
            title: "Verkoop prijs",
            format: "currency",
            readonly: 1,
            "get()": "var srcItem = api.items[this.srcID] || {}\n",
            "values()": "return Number(this.values.cp || srcItem.values.cp) * (100 - Number(this.values.sd || srcItem.values.sd || 0)) / 100\n"
          },
          cd: {
            title: "Klant korting",
            lv: 1,
            unit: "%"
          },
          pd: {
            title: "Inkoop korting",
            unit: "%"
          },
          pp: {
            title: "Inkoop prijs",
            readonly: 1,
            format: "currency",
            "get()": "var srcItem = api.items[this.srcID] || {}\n",
            "values()": "return (this.values.cp || srcItem.values.cp) * (100 - Number(this.values.pd || srcItem.values.pd || 0)) / 100\n"
          },
          Supplier: {
            title: "Leverancier",
            classID: 1002
          },
          Stock: {
            step: 1,
            type: "number",
            title: "Op voorraad"
          },
          Loc: {
            title: "Locatie"
          },
          minStock: {
            step: 1,
            type: "number",
            title: "Minimale voorraad"
          },
          orderQuant: {
            step: 1,
            type: "number",
            title: "Bestel hoeveelheid"
          },
          id: {
            title: "Product ID",
            label: "aliconnect",
            readOnly: true
          },
          IP: {
            label: "Network",
            title: "IP adress"
          },
          Port: {
            title: "Port"
          },
          Children: {
            type: "array"
          }
        }
      },
      BRANDMELDCENTRALE: {
        properties: {
          ALG_STORING: {
            AlarmLow: "0",
            AlarmLowAttributeType: "CriticalFailure",
            AttributeType: "CriticalFailure",
            Description: "Algemene storing gedetecteerd",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "ALG_STORING",
            RawMax: "attribute",
            Subject: "Algemene storing",
            summary: "Algemene storing gedetecteerd",
            Title: "Algemene storing",
            ValueType: "bool"
          },
          BRANDMELDING: {
            AlarmLow: "0",
            AlarmLowAttributeType: "PreWarning_2",
            AttributeType: "PreWarning_2",
            Description: "Brandmelding gedetecteerd",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "BRANDMELDING",
            RawMax: "attribute",
            Subject: "Brandmelding",
            summary: "Brandmelding gedetecteerd",
            Title: "Brandmelding",
            ValueType: "bool"
          },
          IN_BEDRIJF: {
            AttributeType: "Running",
            Description: "In bedrijf gedetecteerd",
            Enum: "Not Active, Active",
            Master: null,
            Name: "IN_BEDRIJF",
            RawMax: "attribute",
            selected: "1",
            Subject: "In bedrijf",
            summary: "In bedrijf gedetecteerd",
            Title: "In bedrijf",
            ValueType: "bool"
          },
          MELDER_DEFECT_GEB_ALG: {
            AlarmLow: "0",
            AlarmLowAttributeType: "PreWarning_1",
            AttributeType: "PreWarning_1",
            Description: "Defecte melder gedetecteerd binnen gebied algemeen",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "MELDER_DEFECT_GEB_ALG",
            RawMax: "attribute",
            Subject: "Melder defect gebied algemeen",
            summary: "Defecte melder gedetecteerd binnen gebied algemeen",
            Title: "Melder defect gebied algemeen",
            ValueType: "bool"
          },
          MELDER_DEFECT_GEB_HS: {
            AlarmLow: "0",
            AlarmLowAttributeType: "PreWarning_1",
            AttributeType: "PreWarning_1",
            Description: "Defecte melder gedetecteerd binnen gebied hoogspanning",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "MELDER_DEFECT_GEB_HS",
            RawMax: "attribute",
            Subject: "Melder defect gebied hoogspanning",
            summary: "Defecte melder gedetecteerd binnen gebied hoogspanning",
            Title: "Melder defect gebied hoogspanning",
            ValueType: "bool"
          },
          MELDER_DEFECT_GEB_S1_S2: {
            AlarmLow: "0",
            AlarmLowAttributeType: "PreWarning_1",
            AttributeType: "PreWarning_1",
            Description: "Defecte melder gedetecteerd binnen gebied S1 en\/of S2",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "MELDER_DEFECT_GEB_S1_S2",
            RawMax: "attribute",
            Subject: "Melder defect gebied S1\/S2",
            summary: "Defecte melder gedetecteerd binnen gebied S1 en\/of S2",
            Title: "Melder defect gebied S1\/S2",
            ValueType: "bool"
          }
        }
      },
      HOOGSPANNINGSVERDELER: {
        properties: {
          BEV_Y: {
            AttributeType: "CriticalFailure",
            Description: "Vermogensschakelaar beveiliging aangesproken",
            Enum: "No failure, Failure",
            Master: null,
            Name: "BEV_Y",
            Subject: "Beveiliging aangesproken",
            summary: "Vermogensschakelaar beveiliging aangesproken",
            Title: "Beveiliging aangesproken",
            ValueType: "bool"
          },
          IN: {
            AttributeType: "Running",
            Description: "Vermogenschakelaar ingeschakeld",
            Enum: "Not Active, Active",
            Master: null,
            Name: "IN",
            Subject: "Ingeschakeld",
            summary: "Vermogenschakelaar ingeschakeld",
            Title: "Ingeschakeld",
            ValueType: "bool"
          },
          STUURSTROOMBEV: {
            AttributeType: "Security",
            Description: "Vermogensschakelaar stuurstroom beveiliging aangesproken",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "STUURSTROOMBEV",
            Subject: "Stuurstroom beveiliging aangesproken",
            summary: "Vermogensschakelaar stuurstroom beveiliging aangesproken",
            Title: "Stuurstroom beveiliging aangesproken",
            ValueType: "bool"
          },
          TYPE_1_2: {
            Master: null,
            Source: null,
            strSystemName: "TYPE_1_2"
          },
          TYPE_3: {
            Master: null,
            Source: null,
            strSystemName: "TYPE_3"
          },
          UIT: {
            AttributeType: "PreWarning_1",
            Description: "Vermogensschakelaar uitgeschakeld",
            Enum: "No failure, Failure",
            Master: null,
            Name: "UIT",
            Subject: "Uitgeschakeld",
            summary: "Vermogensschakelaar uitgeschakeld",
            Title: "Uitgeschakeld",
            ValueType: "bool"
          }
        }
      },
      KLIMAATMETER: {
        properties: {
          REL_VOCHTIGHEID: {
            AlarmHigh: "29.5",
            AlarmHighAttributeType: "PreWarning_3",
            AlarmHysteresis: "0.5",
            AttributeType: "Measurement_2",
            CriticalFailure: "0",
            Description: "Gemeten vochtigheid in de ruimte",
            HighAlert: "38",
            LowAlert: "32",
            Master: null,
            MaxValue: "40",
            MinValue: "30",
            Name: "REL_VOCHTIGHEID",
            NonCriticalFailure: "0",
            Quality: "Valid",
            Subject: "Gemeten vochtigheid",
            summary: "Gemeten vochtigheid in de ruimte",
            Title: "Gemeten vochtigheid",
            Type: "modbus",
            Unit: "%",
            Value: "33.8",
            ValueType: "double"
          },
          TEMPERATUUR: {
            AlarmHigh: "33.0",
            AlarmHighAttributeType: "PreWarning_1",
            AlarmHysteresis: "0",
            AlarmLow: "32.0",
            AlarmLowAttributeType: "PreWarning_2",
            AttributeType: "Measurement_1",
            CriticalFailure: "0",
            Description: "Gemeten temperatuur in de ruimte",
            DisplayHigh: "21",
            DisplayLow: "19",
            DisplayMax: "30",
            DisplayMin: "10",
            DisplayOptimum: "20",
            Master: null,
            Name: "TEMPERATUUR",
            NonCriticalFailure: "0",
            Quality: "Valid",
            ReadRegisterLength: "attribute",
            Subject: "Gemeten temperatuur",
            summary: "Gemeten temperatuur in de ruimte",
            Title: "Gemeten temperatuur",
            Unit: "\u00b0C",
            Value: "30.8",
            ValueType: "double"
          }
        }
      },
      KLIMAATUNIT: {
        properties: {
          IN_BEDRIJF: {
            AttributeType: "Running",
            Description: "In bedrijf",
            Enum: "Not Active, Active",
            Master: null,
            Name: "IN_BEDRIJF",
            RawMax: "attribute",
            Subject: "In bedrijf",
            summary: "In bedrijf",
            Title: "In bedrijf",
            ValueType: "bool"
          },
          IN_STORING: {
            AttributeType: "CriticalFailure",
            Description: "In storing",
            Enum: "No failure, Failure",
            Master: null,
            Name: "IN_STORING",
            RawMax: "attribute",
            selected: "1",
            Subject: "In storing",
            summary: "In storing",
            Title: "In storing",
            ValueType: "bool"
          }
        }
      },
      LAAGSPANNINGSVERDELER_1: {
        properties: {
          ALG_AUTOMATEN_TRIP_S1: {
            AttributeType: "CriticalFailure",
            Description: "Verzamelmelding automaten S1 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "ALG_AUTOMATEN_TRIP_S1",
            Subject: "Verzamelmelding automaten S1 getripped",
            summary: "Verzamelmelding automaten S1 getripped",
            Title: "Verzamelmelding automaten S1 getripped",
            ValueType: "bool"
          },
          ALG_AUTOMATEN_TRIP_S2: {
            AttributeType: "CriticalFailure",
            Description: "Verzamelmelding automaten S2 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "ALG_AUTOMATEN_TRIP_S2",
            Subject: "Verzamelmelding automaten S2 getripped",
            summary: "Verzamelmelding automaten S2 getripped",
            Title: "Verzamelmelding automaten S2 getripped",
            ValueType: "bool"
          },
          IN_EXTNSA_IN: {
            AttributeType: "NotApplicable",
            Description: "Ingaande groep NSA extern ingeschakeld",
            Enum: "Not Active, Active",
            Master: null,
            Name: "IN_EXTNSA_IN",
            Subject: "Ingaande groep NSA extern ingeschakeld",
            summary: "Ingaande groep NSA extern ingeschakeld",
            Title: "Ingaande groep NSA extern ingeschakeld",
            ValueType: "bool"
          },
          IN_EXTNSA_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Ingaande groep NSA extern getripped",
            Enum: "No failure, Failure",
            Master: null,
            Name: "IN_EXTNSA_TRIP",
            Subject: "Ingaande groep NSA extern getripped",
            summary: "Ingaande groep NSA extern getripped",
            Title: "Ingaande groep NSA extern getripped",
            ValueType: "bool"
          },
          IN_NET_IN: {
            AttributeType: "Running",
            Description: "Vermogensschakelaar NET ingeschakeld",
            Enum: "Not Active, Active",
            Master: null,
            Name: "IN_NET_IN",
            Subject: "Vermogensschakelaar NET ingeschakeld",
            summary: "Vermogensschakelaar NET ingeschakeld",
            Title: "Vermogensschakelaar NET ingeschakeld",
            ValueType: "bool"
          },
          IN_NET_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Ingaande groep NET getripped",
            Enum: "No failure, Failure",
            Master: null,
            Name: "IN_NET_TRIP",
            Subject: "Ingaande groep NET getripped",
            summary: "Ingaande groep NET getripped",
            Title: "Ingaande groep NET getripped",
            ValueType: "bool"
          },
          IN_NSA_IN: {
            AttributeType: "PreWarning_1",
            Description: "Vermogensschakelaar NSA ingeschakeld",
            Enum: "Not Active, Active",
            Master: null,
            Name: "IN_NSA_IN",
            Subject: "Vermogensschakelaar NSA ingeschakeld",
            summary: "Vermogensschakelaar NSA ingeschakeld",
            Title: "Vermogensschakelaar NSA ingeschakeld",
            ValueType: "bool"
          },
          IN_NSA_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Ingaande groep NSA getripped",
            Enum: "No failure, Failure",
            Master: null,
            Name: "IN_NSA_TRIP",
            Subject: "Ingaande groep NSA getripped",
            summary: "Ingaande groep NSA getripped",
            Title: "Ingaande groep NSA getripped",
            ValueType: "bool"
          },
          OVERSPBEV_DEFECT: {
            AttributeType: "Security",
            Description: "Overspanningsbeveiliging aangesproken",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "OVERSPBEV_DEFECT",
            Subject: "Overspanningsbeveiliging aangesproken",
            summary: "Overspanningsbeveiliging aangesproken",
            Title: "Overspanningsbeveiliging aangesproken",
            ValueType: "bool"
          },
          UIT_LSV_1_1_IN: {
            AttributeType: "Locking",
            Description: "Afgaand veld naar LSV-1.1 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_LSV_1_1_IN",
            Subject: "Afgaand veld naar LSV-1.1 ingeschakeld",
            summary: "Afgaand veld naar LSV-1.1 ingeschakeld",
            Title: "Afgaand veld naar LSV-1.1 ingeschakeld",
            ValueType: "bool"
          },
          UIT_LSV_1_1_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Afgaand veld naar LSV-1.1 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_LSV_1_1_TRIP",
            Subject: "Afgaand veld naar LSV-1.1 getripped",
            summary: "Afgaand veld naar LSV-1.1 getripped",
            Title: "Afgaand veld naar LSV-1.1 getripped",
            ValueType: "bool"
          },
          UIT_LSV_1_2_IN: {
            AttributeType: "PreWarning_1",
            Description: "Afgaand veld naar LSV-1.2 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_LSV_1_2_IN",
            Subject: "Afgaand veld naar LSV-1.2 ingeschakeld",
            summary: "Afgaand veld naar LSV-1.2 ingeschakeld",
            Title: "Afgaand veld naar LSV-1.2 ingeschakeld",
            ValueType: "bool"
          },
          UIT_LSV_1_2_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Afgaand veld naar LSV-1.2 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_LSV_1_2_TRIP",
            Subject: "Afgaand veld naar LSV-1.2 getripped",
            summary: "Afgaand veld naar LSV-1.2 getripped",
            Title: "Afgaand veld naar LSV-1.2 getripped",
            ValueType: "bool"
          },
          UIT_LSV_1_3_IN: {
            AttributeType: "PreWarning_1",
            Description: "Afgaand veld naar LSV-1.3 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_LSV_1_3_IN",
            Subject: "Afgaand veld naar LSV-1.3 ingeschakeld",
            summary: "Afgaand veld naar LSV-1.3 ingeschakeld",
            Title: "Afgaand veld naar LSV-1.3 ingeschakeld",
            ValueType: "bool"
          },
          UIT_LSV_1_3_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Afgaand veld naar LSV-1.3 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_LSV_1_3_TRIP",
            Subject: "Afgaand veld naar LSV-1.3 getripped",
            summary: "Afgaand veld naar LSV-1.3 getripped",
            Title: "Afgaand veld naar LSV-1.3 getripped",
            ValueType: "bool"
          }
        }
      },
      LAAGSPANNINGSVERDELER_1_1_1: {
        properties: {
          IN_UPS_IN: {
            AttributeType: "Running",
            Description: "Ingaande groep UPS ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "IN_UPS_IN",
            Subject: "Ingaande groep UPS ingeschakeld",
            summary: "Ingaande groep UPS ingeschakeld",
            Title: "Ingaande groep UPS ingeschakeld",
            ValueType: "bool"
          },
          OVERSPBEV_DEFECT: {
            AttributeType: "Security",
            Description: "Overspanningsbeveiliging aangesproken",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "OVERSPBEV_DEFECT",
            Subject: "Overspanningsbeveiliging aangesproken",
            summary: "Overspanningsbeveiliging aangesproken",
            Title: "Overspanningsbeveiliging aangesproken",
            ValueType: "bool"
          },
          UIT_ALCMS_0624_1_IN: {
            AttributeType: "PreWarning_1",
            Description: "Voeding ALCMS 0624-1 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_ALCMS_0624_1_IN",
            Subject: "Voeding ALCMS 0624-1 ingeschakeld",
            summary: "Voeding ALCMS 0624-1 ingeschakeld",
            Title: "Voeding ALCMS 0624-1 ingeschakeld",
            ValueType: "bool"
          },
          UIT_ALCMS_0624_1_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding ALCMS 0624-1 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_ALCMS_0624_1_TRIP",
            Subject: "Voeding ALCMS 0624-1 getripped",
            summary: "Voeding ALCMS 0624-1 getripped",
            Title: "Voeding ALCMS 0624-1 getripped",
            ValueType: "bool"
          },
          UIT_ALCMS_0624_2_IN: {
            AttributeType: "PreWarning_1",
            Description: "Voeding ALCMS 0624-2 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_ALCMS_0624_2_IN",
            Subject: "Voeding ALCMS 0624-2 ingeschakeld",
            summary: "Voeding ALCMS 0624-2 ingeschakeld",
            Title: "Voeding ALCMS 0624-2 ingeschakeld",
            ValueType: "bool"
          },
          UIT_ALCMS_0624_2_TRIP: {
            AttributeType: "PreWarning_1",
            Description: "Voeding ALCMS 0624-2 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_ALCMS_0624_2_TRIP",
            Subject: "Voeding ALCMS 0624-2 getripped",
            summary: "Voeding ALCMS 0624-2 getripped",
            Title: "Voeding ALCMS 0624-2 getripped",
            ValueType: "bool"
          },
          UIT_BMC_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding BMC ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_BMC_IN",
            Subject: "Voeding BMC ingeschakeld",
            summary: "Voeding BMC ingeschakeld",
            Title: "Voeding BMC ingeschakeld",
            ValueType: "bool"
          },
          UIT_BMC_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding BMC getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_BMC_TRIP",
            Subject: "Voeding BMC getripped",
            summary: "Voeding BMC getripped",
            Title: "Voeding BMC getripped",
            ValueType: "bool"
          },
          UIT_BRANDWEERSCHAKELAAR_IN: {
            AttributeType: "PreWarning_1",
            Description: "Voeding brandweerschakelaar ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_BRANDWEERSCHAKELAAR_IN",
            Subject: "Voeding brandweerschakelaar ingeschakeld",
            summary: "Voeding brandweerschakelaar ingeschakeld",
            Title: "Voeding brandweerschakelaar ingeschakeld",
            ValueType: "bool"
          },
          UIT_BRANDWEERSCHAKELAAR_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding brandweerschakelaar getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_BRANDWEERSCHAKELAAR_TRIP",
            Subject: "Voeding brandweerschakelaar getripped",
            summary: "Voeding brandweerschakelaar getripped",
            Title: "Voeding brandweerschakelaar getripped",
            ValueType: "bool"
          },
          UIT_CCR_0624_S1_IN: {
            AttributeType: "PreWarning_1",
            Description: "Voeding CCR 0624 S1 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_CCR_0624_S1_IN",
            Subject: "Voeding CCR 0624 S1 ingeschakeld",
            summary: "Voeding CCR 0624 S1 ingeschakeld",
            Title: "Voeding CCR 0624 S1 ingeschakeld",
            ValueType: "bool"
          },
          UIT_CCR_0624_S1_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding CCR 0624 S1 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_CCR_0624_S1_TRIP",
            Subject: "Voeding CCR 0624 S1 getripped",
            summary: "Voeding CCR 0624 S1 getripped",
            Title: "Voeding CCR 0624 S1 getripped",
            ValueType: "bool"
          },
          UIT_CCR_0624_S2_IN: {
            AttributeType: "PreWarning_1",
            Description: "Voeding CCR 0624 S2 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_CCR_0624_S2_IN",
            Subject: "Voeding CCR 0624 S2 ingeschakeld",
            summary: "Voeding CCR 0624 S2 ingeschakeld",
            Title: "Voeding CCR 0624 S2 ingeschakeld",
            ValueType: "bool"
          },
          UIT_CCR_0624_S2_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding CCR 0624 S2 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_CCR_0624_S2_TRIP",
            Subject: "Voeding CCR 0624 S2 getripped",
            summary: "Voeding CCR 0624 S2 getripped",
            Title: "Voeding CCR 0624 S2 getripped",
            ValueType: "bool"
          },
          UIT_LOCAL_TWP_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding LOCAL TWP ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_LOCAL_TWP_IN",
            Subject: "Voeding LOCAL TWP ingeschakeld",
            summary: "Voeding LOCAL TWP ingeschakeld",
            Title: "Voeding LOCAL TWP ingeschakeld",
            ValueType: "bool"
          },
          UIT_LOCAL_TWP_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding LOCAL TWP getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_LOCAL_TWP_TRIP",
            Subject: "Voeding LOCAL TWP getripped",
            summary: "Voeding LOCAL TWP getripped",
            Title: "Voeding LOCAL TWP getripped",
            ValueType: "bool"
          },
          UIT_MON_0624_S1_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON 0624 S1 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_MON_0624_S1_IN",
            Subject: "Voeding MON 0624 S1 ingeschakeld",
            summary: "Voeding MON 0624 S1 ingeschakeld",
            Title: "Voeding MON 0624 S1 ingeschakeld",
            ValueType: "bool"
          },
          UIT_MON_0624_S1_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding MON 0624 S1 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_MON_0624_S1_TRIP",
            Subject: "Voeding MON 0624 S1 getripped",
            summary: "Voeding MON 0624 S1 getripped",
            Title: "Voeding MON 0624 S1 getripped",
            ValueType: "bool"
          },
          UIT_MON_0624_S2_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON 0624 S2 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_MON_0624_S2_IN",
            Subject: "Voeding MON 0624 S2 ingeschakeld",
            summary: "Voeding MON 0624 S2 ingeschakeld",
            Title: "Voeding MON 0624 S2 ingeschakeld",
            ValueType: "bool"
          },
          UIT_MON_0624_S2_TRIP: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON 0624 S2 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_MON_0624_S2_TRIP",
            Subject: "Voeding MON 0624 S2 getripped",
            summary: "Voeding MON 0624 S2 getripped",
            Title: "Voeding MON 0624 S2 getripped",
            ValueType: "bool"
          },
          UIT_MON_LS1_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON LS1 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_MON_LS1_IN",
            Subject: "Voeding MON LS1 ingeschakeld",
            summary: "Voeding MON LS1 ingeschakeld",
            Title: "Voeding MON LS1 ingeschakeld",
            ValueType: "bool"
          },
          UIT_MON_LS1_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding MON LS1 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_MON_LS1_TRIP",
            Subject: "Voeding MON LS1 getripped",
            summary: "Voeding MON LS1 getripped",
            Title: "Voeding MON LS1 getripped",
            ValueType: "bool"
          },
          UIT_MON_LS2_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON LS2 ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_MON_LS2_IN",
            Subject: "Voeding MON LS2 ingeschakeld",
            summary: "Voeding MON LS2 ingeschakeld",
            Title: "Voeding MON LS2 ingeschakeld",
            ValueType: "bool"
          },
          UIT_MON_LS2_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding MON LS2 getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_MON_LS2_TRIP",
            Subject: "Voeding MON LS2 getripped",
            summary: "Voeding MON LS2 getripped",
            Title: "Voeding MON LS2 getripped",
            ValueType: "bool"
          },
          UIT_MON_NSV_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON NSV ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_MON_NSV_IN",
            Subject: "Voeding MON NSV ingeschakeld",
            summary: "Voeding MON NSV ingeschakeld",
            Title: "Voeding MON NSV ingeschakeld",
            ValueType: "bool"
          },
          UIT_MON_NSV_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding MON NSV getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_MON_NSV_TRIP",
            Subject: "Voeding MON NSV getripped",
            summary: "Voeding MON NSV getripped",
            Title: "Voeding MON NSV getripped",
            ValueType: "bool"
          },
          UIT_MON_OPER_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON OPER ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_MON_OPER_IN",
            Subject: "Voeding MON OPER ingeschakeld",
            summary: "Voeding MON OPER ingeschakeld",
            Title: "Voeding MON OPER ingeschakeld",
            ValueType: "bool"
          },
          UIT_MON_OPER_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding MON OPER getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_MON_OPER_TRIP",
            Subject: "Voeding MON OPER getripped",
            summary: "Voeding MON OPER getripped",
            Title: "Voeding MON OPER getripped",
            ValueType: "bool"
          },
          UIT_MON_US_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding MON US ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_MON_US_IN",
            Subject: "Voeding MON US ingeschakeld",
            summary: "Voeding MON US ingeschakeld",
            Title: "Voeding MON US ingeschakeld",
            ValueType: "bool"
          },
          UIT_MON_US_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding MON US getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_MON_US_TRIP",
            Subject: "Voeding MON US getripped",
            summary: "Voeding MON US getripped",
            Title: "Voeding MON US getripped",
            ValueType: "bool"
          },
          UIT_RELAISKAST_UPS_IN: {
            AttributeType: "PreWarning_1",
            Description: "Voeding relaiskast UPS ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_RELAISKAST_UPS_IN",
            Subject: "Voeding relaiskast UPS ingeschakeld",
            summary: "Voeding relaiskast UPS ingeschakeld",
            Title: "Voeding relaiskast UPS ingeschakeld",
            ValueType: "bool"
          },
          UIT_RELAISKAST_UPS_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding relaiskast UPS getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_RELAISKAST_UPS_TRIP",
            Subject: "Voeding relaiskast UPS getripped",
            summary: "Voeding relaiskast UPS getripped",
            Title: "Voeding relaiskast UPS getripped",
            ValueType: "bool"
          },
          UIT_SYS_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding SYS ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_SYS_IN",
            Subject: "Voeding SYS ingeschakeld",
            summary: "Voeding SYS ingeschakeld",
            Title: "Voeding SYS ingeschakeld",
            ValueType: "bool"
          },
          UIT_SYS_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding SYS getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_SYS_TRIP",
            Subject: "Voeding SYS getripped",
            summary: "Voeding SYS getripped",
            Title: "Voeding SYS getripped",
            ValueType: "bool"
          },
          UIT_TELEMATICS_IN: {
            AttributeType: "PreWarning_1",
            Description: "Voeding Telematics ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_TELEMATICS_IN",
            Subject: "Voeding Telematics ingeschakeld",
            summary: "Voeding Telematics ingeschakeld",
            Title: "Voeding Telematics ingeschakeld",
            ValueType: "bool"
          },
          UIT_TELEMATICS_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding Telematics getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_TELEMATICS_TRIP",
            Subject: "Voeding Telematics getripped",
            summary: "Voeding Telematics getripped",
            Title: "Voeding Telematics getripped",
            ValueType: "bool"
          },
          UIT_TRAKA_IN: {
            AttributeType: "PreWarning_2",
            Description: "Voeding Traka ingeschakeld",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "UIT_TRAKA_IN",
            Subject: "Voeding Traka ingeschakeld",
            summary: "Voeding Traka ingeschakeld",
            Title: "Voeding Traka ingeschakeld",
            ValueType: "bool"
          },
          UIT_TRAKA_TRIP: {
            AttributeType: "CriticalFailure",
            Description: "Voeding Traka getripped",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "UIT_TRAKA_TRIP",
            Subject: "Voeding Traka getripped",
            summary: "Voeding Traka getripped",
            Title: "Voeding Traka getripped",
            ValueType: "bool"
          }
        }
      },
      LAAGSPANNINGSVERDELER_1_X: {
        properties: {
          IN_LSV1_IN: {
            AttributeType: "Running",
            Description: "Ingaande voeding van LSV-1 ingeschakeld",
            Enum: "Not Active, Active",
            Master: null,
            Name: "IN_LSV1_IN",
            Subject: "Ingaande voeding van LSV-1 ingeschakeld",
            summary: "Ingaande voeding van LSV-1 ingeschakeld",
            Title: "Ingaande voeding van LSV-1 ingeschakeld",
            ValueType: "bool"
          },
          LAAGSPANNINGSVERDELER_1_1: {
            Master: null,
            Product: "LAAGSPANNINGSVERDELER_1_1",
            Source: null,
            Subject: "LAAGSPANNINGSVERDELER_1_X"
          },
          LAAGSPANNINGSVERDELER_1_Y: {
            Master: null,
            Product: "LAAGSPANNINGSVERDELER_1_Y",
            Source: null,
            Subject: "LAAGSPANNINGSVERDELER_1_X"
          },
          OVERSPBEV_DEFECT: {
            AttributeType: "Security",
            Description: "Overspanningsbeveiliging aangesproken",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "OVERSPBEV_DEFECT",
            Subject: "Overspanningsbeveiliging aangesproken",
            summary: "Overspanningsbeveiliging aangesproken",
            Title: "Overspanningsbeveiliging aangesproken",
            ValueType: "bool"
          }
        }
      },
      LAAGSPANNINGSVERDELER_GROEP: {
        properties: {
          UIT_GROEP_IN: {
            Master: null,
            Name: "UIT_GROEP_IN"
          },
          UIT_GROEP_TRIP: {
            Master: null,
            Name: "UIT_GROEP_TRIP"
          }
        }
      },
      MONITORINGSYSTEEM: {
        properties: {
          HDD_USED_SPACE: {
            AttributeType: "Measurement_1",
            Description: "Hoeveelheid harddiskruimte die door het data monitoring systeem wordt gebruikt",
            High: "80",
            Hysteresis: "2",
            Master: null,
            Max: "100",
            Min: "0",
            Name: "HDD_USED_SPACE",
            Optimum: "50",
            Subject: "Harddiskruimte verbruikt",
            summary: "Hoeveelheid harddiskruimte die door het data monitoring systeem wordt gebruikt",
            Title: "Harddiskruimte verbruikt",
            Unit: "%",
            ValueType: "integer"
          },
          MEMORY_USED_SPACE: {
            AttributeType: "Measurement_2",
            Description: "Hoeveelheid geheugenruimte die door het data monitoring systeem wordt gebruikt",
            High: "90",
            Hysteresis: "2",
            Master: null,
            Max: "100",
            Min: "0",
            Name: "MEMORY_USED_SPACE",
            Optimum: "50",
            Subject: "Geheugenruimte verbruikt",
            summary: "Hoeveelheid geheugenruimte die door het data monitoring systeem wordt gebruikt",
            Title: "Geheugenruimte verbruikt",
            Unit: "%",
            ValueType: "integer"
          },
          TIME_SYNC: {
            AttributeType: "NonCriticalFailure",
            Description: "Synchroniseren van de PC tijd met de NTP server mislukt",
            Enum: "No failure, Failure, Failure, Failure",
            High: "1",
            Master: null,
            Name: "TIME_SYNC",
            selected: "1",
            Subject: "Tijdsynchronisatie mislukt",
            summary: "Synchroniseren van de PC tijd met de NTP server mislukt",
            Title: "Tijdsynchronisatie mislukt",
            ValueType: "bool"
          },
          WATCHDOG_ACSM: {
            AttributeType: "Measurement_3",
            Description: "Watchdog tellerwaarde die wordt verstuurd naar het ACSM",
            Master: null,
            Name: "WATCHDOG_ACSM",
            Subject: "Watchdog naar ACSM",
            summary: "Watchdog tellerwaarde die wordt verstuurd naar het ACSM",
            Title: "Watchdog naar ACSM",
            ValueType: "integer"
          }
        }
      },
      NSA: {
        properties: {
          ALG_STOR: {
            AttributeType: "CriticalFailure",
            Description: "Algemene storing gedetecteerd",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "ALG_STOR",
            Subject: "Algemene storing",
            summary: "Algemene storing gedetecteerd",
            Title: "Algemene storing",
            ValueType: "bool"
          },
          BATTERIJLADER_STARTACCU_STOR: {
            AttributeType: "CriticalFailure",
            Description: "Batterijlader startaccu storing",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "BATTERIJLADER_STARTACCU_STOR",
            Subject: "Batterijlader startaccu storing",
            summary: "Batterijlader startaccu storing",
            Title: "Batterijlader startaccu storing",
            ValueType: "bool"
          },
          BRANDST_TRIMPOMP_BEDRIJF: {
            AttributeType: "NotApplicable",
            Description: "Brandstof trimpomp in bedrijf",
            Enum: "Not Active, Active",
            Master: null,
            Name: "BRANDST_TRIMPOMP_BEDRIJF",
            Subject: "Brandstof trimpomp in bedrijf",
            summary: "Brandstof trimpomp in bedrijf",
            Title: "Brandstof trimpomp in bedrijf",
            ValueType: "bool"
          },
          DAGTANK_LEKKAGE: {
            AttributeType: "PreWarning_1",
            Description: "Niveau lekbak dagtank hoog",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "DAGTANK_LEKKAGE",
            Subject: "Niveau lekbak dagtank hoog",
            summary: "Niveau lekbak dagtank hoog",
            Title: "Niveau lekbak dagtank hoog",
            ValueType: "bool"
          },
          DAGTANK_NIVO_TEHOOG: {
            AttributeType: "PreWarning_1",
            Description: "Dagtank niveau te hoog",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "DAGTANK_NIVO_TEHOOG",
            Subject: "Dagtank niveau te hoog",
            summary: "Dagtank niveau te hoog",
            Title: "Dagtank niveau te hoog",
            ValueType: "bool"
          },
          DAGTANK_NIVO_TELAAG: {
            AttributeType: "PreWarning_1",
            Description: "Dagtank niveau te laag",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "DAGTANK_NIVO_TELAAG",
            Subject: "Dagtank niveau te laag",
            summary: "Dagtank niveau te laag",
            Title: "Dagtank niveau te laag",
            ValueType: "bool"
          },
          DYNAMO_LAADSTOR: {
            AttributeType: "NonCriticalFailure",
            Description: "Dynamo laadstoring",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "DYNAMO_LAADSTOR",
            Subject: "Dynamo laadstoring",
            summary: "Dynamo laadstoring",
            Title: "Dynamo laadstoring",
            ValueType: "bool"
          },
          GEN_OVERBELAST: {
            AttributeType: "Security",
            Description: "Generator overbelast",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "GEN_OVERBELAST",
            Subject: "Generator overbelast",
            summary: "Generator overbelast",
            Title: "Generator overbelast",
            ValueType: "bool"
          },
          GEN_SCHAK_UIT: {
            AttributeType: "PreWarning_3",
            Description: "Generatorschakelaar uitgeschakeld",
            Enum: "Active, Not Active",
            Master: null,
            Name: "GEN_SCHAK_UIT",
            Subject: "Generatorschakelaar uitgeschakeld",
            summary: "Generatorschakelaar uitgeschakeld",
            Title: "Generatorschakelaar uitgeschakeld",
            ValueType: "bool"
          },
          KEUZESCHAK_AUTO: {
            AttributeType: "Maintenance",
            Description: "Keuzeschakelaar in stand auto",
            Enum: "Active, Not Active",
            Low: "0",
            Master: null,
            Name: "KEUZESCHAK_AUTO",
            selected: "1",
            Subject: "Keuzeschakelaar in stand auto",
            summary: "Keuzeschakelaar in stand auto",
            title: "KEUZESCHAK_AUTO",
            Title: "Keuzeschakelaar in stand auto",
            ValueType: "bool"
          },
          KOELWATER_NIVO_TELAAG: {
            AttributeType: "Security",
            Description: "Koelwaterniveau te laag",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "KOELWATER_NIVO_TELAAG",
            Subject: "Koelwaterniveau te laag",
            summary: "Koelwaterniveau te laag",
            Title: "Koelwaterniveau te laag",
            ValueType: "bool"
          },
          KOELWATER_TEMP_TEHOOG: {
            AttributeType: "CriticalFailure",
            Description: "Koelwatertemperatuur te hoog",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "KOELWATER_TEMP_TEHOOG",
            Subject: "Koelwatertemperatuur te hoog",
            summary: "Koelwatertemperatuur te hoog",
            Title: "Koelwatertemperatuur te hoog",
            ValueType: "bool"
          },
          NET_SCHAK_UIT: {
            AttributeType: "PreWarning_3",
            Description: "Netschakelaar uitgeschakeld",
            Enum: "Not Active, Active",
            Low: "0",
            Master: null,
            Name: "NET_SCHAK_UIT",
            Subject: "Netschakelaar uitgeschakeld",
            summary: "Netschakelaar uitgeschakeld",
            Title: "Netschakelaar uitgeschakeld",
            ValueType: "bool"
          },
          NOODSTOP: {
            AttributeType: "Locking",
            Description: "Noodstop ingeschakeld",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "NOODSTOP",
            Subject: "Noodstop ingeschakeld",
            summary: "Noodstop ingeschakeld",
            Title: "Noodstop ingeschakeld",
            ValueType: "bool"
          },
          NOODSTROOM_BEDRIJF: {
            AttributeType: "Running",
            Description: "Noodstroom bedrijf geactiveerd",
            Enum: "Not Active, Active",
            Master: null,
            Name: "NOODSTROOM_BEDRIJF",
            Subject: "Noodstroom bedrijf",
            summary: "Noodstroom bedrijf geactiveerd",
            Title: "Noodstroom bedrijf",
            ValueType: "bool"
          },
          OLIEDRUK_TELAAG: {
            AttributeType: "Security",
            Description: "Oliedruk te laag",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "OLIEDRUK_TELAAG",
            Subject: "Oliedruk te laag",
            summary: "Oliedruk te laag",
            Title: "Oliedruk te laag",
            ValueType: "bool"
          },
          TOERENTAL_TEHOOG: {
            AttributeType: "Security",
            Description: "Toerental te hoog",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "TOERENTAL_TEHOOG",
            Subject: "Toerental te hoog",
            summary: "Toerental te hoog",
            Title: "Toerental te hoog",
            ValueType: "bool"
          },
          VOORRAADTANK_NIVO_LAAG: {
            AttributeType: "PreWarning_2",
            Description: "Niveau voorraadtank laag",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "VOORRAADTANK_NIVO_LAAG",
            Subject: "Niveau voorraadtank laag",
            summary: "Niveau voorraadtank laag",
            title: "VOORRAADTANK_NIVO_LAAG",
            Title: "Niveau voorraadtank laag",
            ValueType: "bool"
          },
          VOORRAADTANK_NIVO_TEHOOG: {
            AttributeType: "PreWarning_2",
            Description: "Voorraadtank niveau te hoog",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "VOORRAADTANK_NIVO_TEHOOG",
            Subject: "Voorraadtank niveau te hoog",
            summary: "Voorraadtank niveau te hoog",
            Title: "Voorraadtank niveau te hoog",
            ValueType: "bool"
          },
          VOORRAADTANK_NIVO_TELAAG: {
            AttributeType: "PreWarning_2",
            Description: "Voorraadtank niveau te laag",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "VOORRAADTANK_NIVO_TELAAG",
            Subject: "Voorraadtank niveau te laag",
            summary: "Voorraadtank niveau te laag",
            Title: "Voorraadtank niveau te laag",
            ValueType: "bool"
          },
          VRIJG_NSA: {
            AttributeType: "NotApplicable",
            Description: "Vrijgave beveiligingen",
            Enum: "Not Active, Active",
            Master: null,
            Name: "VRIJG_NSA",
            Subject: "Vrijgave beveiligingen",
            summary: "Vrijgave beveiligingen",
            Title: "Vrijgave beveiligingen",
            ValueType: "bool"
          }
        }
      },
      POWERMETER: {
        properties: {
          COSPHI: {
            AttributeType: "Measurement_3",
            Description: "Cosinus Phi meetwaarde",
            Master: null,
            Name: "COSPHI",
            Subject: "Cosinus Phi meting",
            summary: "Cosinus Phi meetwaarde",
            Title: "Cosinus Phi meting",
            Unit: "%",
            ValueType: "double"
          },
          KVAH: {
            AttributeType: "Measurement_2",
            Description: "kVAh meetwaarde",
            Master: null,
            Name: "KVAH",
            Subject: "kVAh meting",
            summary: "kVAh meetwaarde",
            Title: "kVAh meting",
            Unit: "kVAh",
            ValueType: "double"
          },
          KWH: {
            AttributeType: "Measurement_1",
            Description: "kWh meetwaarde",
            Master: null,
            Name: "KWH",
            Subject: "kWh meting",
            summary: "kWh meetwaarde",
            Title: "kWh meting",
            Unit: "kWh",
            ValueType: "double"
          },
          V_FASE_1: {
            AttributeType: "NotApplicable",
            Description: "Fase 1 Voltage meetwaarde",
            Master: null,
            Name: "V_FASE_1",
            Subject: "Fase 1 Voltage meting",
            summary: "Fase 1 Voltage meetwaarde",
            Title: "Fase 1 Voltage meting",
            Unit: "V",
            ValueType: "integer"
          },
          V_FASE_2: {
            AttributeType: "NotApplicable",
            Description: "Fase 2 Voltage meetwaarde",
            Hysteresis: "Attribute",
            Master: null,
            Name: "V_FASE_2",
            Subject: "Fase 2 Voltage meting",
            summary: "Fase 2 Voltage meetwaarde",
            title: "V_FASE_2",
            Title: "Fase 2 Voltage meting",
            Unit: "V",
            ValueType: "integer"
          },
          V_FASE_3: {
            AttributeType: "NotApplicable",
            Description: "Fase 3 Voltage meetwaarde",
            Hysteresis: "Attribute",
            Master: null,
            Name: "V_FASE_3",
            Subject: "Fase 3 Voltage meting",
            summary: "Fase 3 Voltage meetwaarde",
            title: "V_FASE_3",
            Title: "Fase 3 Voltage meting",
            Unit: "V",
            ValueType: "integer"
          }
        }
      },
      REGELAARKAST: {
        properties: {
          VERZAMEL_STORING: {
            AttributeType: "CriticalFailure",
            Description: "Verzamelstoring CCR network cabinet",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "VERZAMEL_STORING",
            Subject: "Verzamelstoring",
            summary: "Verzamelstoring CCR network cabinet",
            Title: "Verzamelstoring",
            ValueType: "bool"
          }
        }
      },
      RIO: {
        properties: {
          Status: {
            AttributeType: "NotApplicable",
            Description: "Status van het RIO systeem",
            Enum: "No Failure, Failure",
            Low: "0",
            Master: null,
            Name: "Status",
            Subject: "Status van het RIO systeem",
            summary: "Status van het RIO systeem",
            title: "Status",
            Title: "Status van het RIO systeem",
            ValueType: "bool"
          }
        }
      },
      SWITCH_4P: {
        properties: {
          STATUS_P1: {
            AttributeType: "NotApplicable",
            Description: "Actuele status van poort 1",
            Enum: "Not defined, Up, Down, Testing, Unknown, Dormant, Not present, Lower layer down",
            Master: null,
            Name: "STATUS_P1",
            Subject: "Actuele status van poort 1",
            summary: "Actuele status van poort 1",
            Title: "Actuele status van poort 1",
            ValueType: "integer"
          },
          STATUS_P2: {
            AttributeType: "NotApplicable",
            Description: "Actuele status van poort 2",
            Enum: "Not defined, Up, Down, Testing, Unknown, Dormant, Not present, Lower layer down",
            Master: null,
            Name: "STATUS_P2",
            Subject: "Actuele status van poort 2",
            summary: "Actuele status van poort 2",
            Title: "Actuele status van poort 2",
            ValueType: "integer"
          },
          STATUS_P3: {
            AttributeType: "NotApplicable",
            Description: "Actuele status van poort 3",
            Enum: "Not defined, Up, Down, Testing, Unknown, Dormant, Not present, Lower layer down",
            Master: null,
            Name: "STATUS_P3",
            Subject: "Actuele status van poort 3",
            summary: "Actuele status van poort 3",
            Title: "Actuele status van poort 3",
            ValueType: "integer"
          },
          STATUS_P4: {
            AttributeType: "NotApplicable",
            Description: "Actuele status van poort 4",
            Enum: "Not defined, Up, Down, Testing, Unknown, Dormant, Not present, Lower layer down",
            Master: null,
            Name: "STATUS_P4",
            Subject: "Actuele status van poort 4",
            summary: "Actuele status van poort 4",
            Title: "Actuele status van poort 4",
            ValueType: "integer"
          }
        }
      },
      UPS: {
        properties: {
          ALG_STOR: {
            AttributeType: "CriticalFailure",
            Description: "Algemene storing gedetecteerd",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "ALG_STOR",
            Subject: "Algemene storing",
            summary: "Algemene storing gedetecteerd",
            Title: "Algemene storing",
            ValueType: "bool"
          },
          BATT_BEDRIJF: {
            AttributeType: "Running",
            Description: "Batterij bedrijf gedetecteerd",
            Enum: "Not Active, Active",
            Low: "0",
            Master: null,
            Name: "BATT_BEDRIJF",
            Subject: "Batterij bedrijf",
            summary: "Batterij bedrijf gedetecteerd",
            Title: "Batterij bedrijf",
            ValueType: "bool"
          },
          BATT_SPANNING_LAAG: {
            AttributeType: "PreWarning_1",
            Description: "Batterijspanning laag gedetecteerd",
            Enum: "No failure, Failure",
            Low: "0",
            Master: null,
            Name: "BATT_SPANNING_LAAG",
            Subject: "Batterijspanning laag",
            summary: "Batterijspanning laag gedetecteerd",
            Title: "Batterijspanning laag",
            ValueType: "bool"
          },
          BYPASS_BELAST: {
            AttributeType: "PreWarning_2",
            Description: "Belasting via bypass gedetecteerd",
            Enum: "Not Active, Active",
            Master: null,
            Name: "BYPASS_BELAST",
            Subject: "Bypass belast",
            summary: "Belasting via bypass gedetecteerd",
            Title: "Bypass belast",
            ValueType: "bool"
          }
        }
      }
    }
  },
});
