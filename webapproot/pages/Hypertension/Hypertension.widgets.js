Hypertension.widgets = {
	hypertensionLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Hypertension"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Hypertension","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Wanttoknowresults","sortable":true,"dataIndex":"wanttoknowresults","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Avgsystolicbloodpressure","sortable":true,"dataIndex":"avgsystolicbloodpressure","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Knownhypertensive","sortable":true,"dataIndex":"knownhypertensive","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Intreatment","sortable":true,"dataIndex":"intreatment","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Symptoms","sortable":true,"dataIndex":"symptoms","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Physicalexam","sortable":true,"dataIndex":"physicalexam","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Referral","sortable":true,"dataIndex":"referral","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Avgdiastolicbloodpressure","sortable":true,"dataIndex":"avgdiastolicbloodpressure","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		CLINICAL: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			ProjectMain: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"verticalAlign":"top","width":"900px"}, {}, {
					panelHeader: ["wm.HeaderContentPanel", {"height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
						picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
						label2: ["wm.Label", {"caption":"MZIMA CLINICAL DATA","height":"35px","padding":"4","width":"100%"}, {}],
						panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
							panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
								text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
								picture5: ["wm.Picture", {"height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
							}]
						}],
						logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"app.logoutVar"}]
					}],
					panel2: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"GENERAL","separator":undefined,"defaultLabel":"GENERAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toGeneral","children":[]},{"label":"HIV","separator":undefined,"defaultLabel":"HIV","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toHIV","children":[]},{"label":"TB","separator":undefined,"defaultLabel":"TB","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toTB","children":[]},{"label":"DIABETES","separator":undefined,"defaultLabel":"DIABETES","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toDiabetes","children":[]},{"label":"HYPERTENSION","separator":undefined,"defaultLabel":"HYPERTENSION","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toHypertension","children":[]},{"label":"CVD'S","separator":undefined,"defaultLabel":"CVD'S","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toCVD","children":[]},{"label":"CERVICAL CANCER","separator":undefined,"defaultLabel":"CERVICAL CANCER","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toCancer","children":[]},{"label":"MORE","separator":undefined,"defaultLabel":"MORE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":"PHYSICAL EXAM","separator":undefined,"defaultLabel":"PHYSICAL EXAM","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toPhysExam","children":[]},{"label":"PHARMACOVIGILANCE","separator":undefined,"defaultLabel":"PHARMACOVIGILANCE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toPharma","children":[]},{"label":"REFERRAL","separator":undefined,"defaultLabel":"REFERRAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toReferral","children":[]}]}],"localizationStructure":{},"transparent":false}, {}]
					}],
					label3: ["wm.Label", {"caption":">>HYPERTENSION","padding":"4","styles":{"backgroundColor":"#ffffff","fontWeight":"bolder"}}, {}],
					panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						hypertensionLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"Hypertension_List","targetId":null,"targetProperty":"gridLayer"}, {}],
								wire1: ["wm.Wire", {"source":"Edit_Hypertension","targetId":null,"targetProperty":"detailsLayer"}, {}],
								wire2: ["wm.Wire", {"source":"hypertensionLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire3: ["wm.Wire", {"source":"hypertensionDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire4: ["wm.Wire", {"source":"hypertensionSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							hypertensionLayers: ["wm.BreadcrumbLayers", {}, {}, {
								Hypertension_List: ["wm.Layer", {"borderColor":"","caption":"Hypertension List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"hypertensionDojoGrid.deselectAll"}, {
									hypertensionDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"wanttoknowresults","title":"Want Results","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"knownhypertensive","title":"Known Hypertensive","width":"105px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"intreatment","title":"In Treatment","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"symptoms","title":"Symptoms","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"physicalexam","title":"Physical Exam","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"referral","title":"Referral","width":"68px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"118px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"101px","align":"left","expression":"\"<div class='MobileRowTitle'>Want Results: \" + ${wanttoknowresults} + \"</div>\"\n+ \"<div class='MobileRow'>Known Hypertensive: \" + ${knownhypertensive} + \"</div>\"\n+ \"<div class='MobileRow'>In Treatment: \" + ${intreatment} + \"</div>\"\n+ \"<div class='MobileRow'>Symptoms: \" + ${symptoms} + \"</div>\"\n+ \"<div class='MobileRow'>Physical Exam: \" + ${physicalexam} + \"</div>\"\n+ \"<div class='MobileRow'>Referral: \" + ${referral} + \"</div>\"\n+ \"<div class='MobileRow'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>S Pressure: \" + ${avgsystolicbloodpressure} + \"</div>\"\n+ \"<div class='MobileRow'>D Pressure: \" + ${avgdiastolicbloodpressure} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"avgsystolicbloodpressure","title":"S Pressure","width":"105px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"avgdiastolicbloodpressure","title":"D Pressure","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Hypertension","height":"100%","margin":"4"}, {"onSelect":"hypertensionLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"hypertensionLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}],
									hypertensionGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										hypertensionNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"hypertensionLivePanel1.popupLivePanelInsert","onclick1":"hypertensionNewButtonClick1"}]
									}]
								}],
								Edit_Hypertension: ["wm.Layer", {"borderColor":"","caption":"Edit Hypertension","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									hypertensionLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"autoScroll":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"hypertensionLivePanel1.popupLiveFormSuccess"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"hypertensionDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
										serolinknumberEditor1: ["wm.Text", {"caption":"Sero Link Number","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
										date1: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										radioSet1: ["wm.RadioSet", {"caption":"Does participant want to know blood pressure results?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"wanttoknowresults","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet1Change"}],
										number1: ["wm.Number", {"caption":"Average systolic blood pressure (3 readings) mmHg","captionSize":"270px","dataValue":"","desktopHeight":"35px","emptyValue":"emptyString","formField":"avgsystolicbloodpressure","height":"35px","helpText":"Pressure should be between 55 and 250 mmHg","maximum":250,"minimum":55,"placeHolder":"Pressure should be between 55 and 250 mmHg","required":true,"singleLine":false,"width":"70%"}, {}],
										number2: ["wm.Number", {"caption":"Average diastolic blood pressure (3 readings) mmHg","captionSize":"270px","dataValue":"","desktopHeight":"35px","emptyValue":"emptyString","formField":"avgdiastolicbloodpressure","height":"35px","helpText":"Pressure should be between 55 and 250 mmHg","maximum":250,"minimum":55,"placeHolder":"Pressure should be between 55 and 250 mmHg","required":true,"singleLine":false,"width":"70%"}, {}],
										radioSet2: ["wm.RadioSet", {"caption":"Is participant a known hypertensive?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"knownhypertensive","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet2Change"}],
										radioSet3: ["wm.RadioSet", {"caption":"If ‘yes’ is the participant on treatment/in care?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"intreatment","height":"56px","options":"YES,NO","showing":false,"width":"100%"}, {}],
										checkboxSet1: ["wm.CheckboxSet", {"caption":"If the participant hypertensive or has abnormal blood pressure reading does he/she have any of the following symptoms?","captionSize":"140px","dataField":"dataValue","desktopHeight":"236px","displayField":"dataValue","emptyValue":"null","formField":"symptoms","height":"236px","options":"Severe headache,Fatigue or confusion,Vision problems,Chest pain,Difficulty in breathing,Irregular heart beat,Blood in urine,Pounding in your chest neck or ears,NONE","required":true,"width":"100%"}, {"onchange":"checkboxSet1Change"}],
										radioSet4: ["wm.RadioSet", {"caption":"Is physical exam to be performed?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"physicalexam","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet4Change"}],
										radioSet5: ["wm.RadioSet", {"caption":"Is participant to be referred?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"55px","displayField":"dataValue","formField":"referral","height":"55px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet5Change"}],
										number3: ["wm.Number", {"caption":"Insertby","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"insertby","height":"26px","width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										clinician: ["wm.Text", {"caption":"Clinician","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"clinician","height":"26px","readonly":true,"width":"50%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}]
											}]
										}]
									}],
									hypertensionFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										hypertensionSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"hypertensionLiveForm1.saveDataIfValid","onclick1":"hypertensionSaveButtonClick1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"${hypertensionLiveForm1.invalid} || !${hypertensionLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
											}]
										}],
										hypertensionCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Hypertension_List"}],
										hypertensionDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"hypertensionLiveForm1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"hypertensionDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}],
					panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
						label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Innovations for Health","height":"100%","padding":"4"}, {}],
						edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2013 Ifakara Health Institute","height":"100%","padding":"4","width":"100%"}, {}]
					}]
				}]
			}]
		}]
	}]
}