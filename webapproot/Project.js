dojo.declare("Project", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": false, 
	"isLoginPageEnabled": true, 
	"isSecurityEnabled": true, 
	"main": "General", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha18", 
	"projectVersion": 1, 
	"studioVersion": "6.5.0.RELEASE", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		clinician: ["wm.Variable", {"type":"StringData"}, {}], 
		gender: ["wm.Variable", {"type":"StringData"}, {}], 
		loggedInUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserId","service":"securityService"}, {}, {
			input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
		}], 
		logoutVar: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onSuccess":"app.toLogin"}, {
			input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
		}], 
		onTreatment: ["wm.Variable", {"type":"BooleanData"}, {}], 
		participantVar: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[general].serolinknumberEditor1.dataValue","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		physicalExam: ["wm.Variable", {"type":"BooleanData"}, {}], 
		referral: ["wm.Variable", {"type":"BooleanData"}, {}], 
		toCVD: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Cvd\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toCancer: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"CervicalCancer\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toDiabetes: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Diabetes\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toGeneral: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"General\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toHIV: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Hiv2\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toHypertension: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Hypertension\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toLogin: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toPharma: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Pharmacovigilance\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toPhysExam: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"PhysicalExam\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toReferral: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Referral\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}], 
		toTB: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
			input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Tb2\"","targetProperty":"pageName"}, {}]
				}]
			}]
		}]
	},
	_end: 0
});

Project.extend({

	_end: 0
});