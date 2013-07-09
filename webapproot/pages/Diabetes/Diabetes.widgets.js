Diabetes.widgets = {
	diabetesLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Diabetes"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Diabetes","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Wanttoknowresult","sortable":true,"dataIndex":"wanttoknowresult","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Bloodsugarlevel","sortable":true,"dataIndex":"bloodsugarlevel","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Knowndiabetic","sortable":true,"dataIndex":"knowndiabetic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Ontreatment","sortable":true,"dataIndex":"ontreatment","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Symptoms","sortable":true,"dataIndex":"symptoms","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Physicalexam","sortable":true,"dataIndex":"physicalexam","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Referred","sortable":true,"dataIndex":"referred","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		CLINICAL: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			ProjectMain: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panelCenter: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","minHeight":600,"verticalAlign":"top","width":"900px"}, {}, {
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
					label3: ["wm.Label", {"caption":">>DIABETES","padding":"4","styles":{"fontWeight":"bold","backgroundColor":"#ffffff"}}, {}],
					panelContent: ["wm.MainContentPanel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						diabetesLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"Diabetes_List","targetId":null,"targetProperty":"gridLayer"}, {}],
								wire1: ["wm.Wire", {"source":"Edit_Diabetes","targetId":null,"targetProperty":"detailsLayer"}, {}],
								wire2: ["wm.Wire", {"source":"diabetesLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire3: ["wm.Wire", {"source":"diabetesDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire4: ["wm.Wire", {"source":"diabetesSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							diabetesLayers: ["wm.BreadcrumbLayers", {}, {}, {
								Diabetes_List: ["wm.Layer", {"borderColor":"","caption":"Diabetes List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"diabetesDojoGrid.deselectAll"}, {
									diabetesDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"wanttoknowresult","title":"Wanttoknowresult","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"bloodsugarlevel","title":"Bloodsugarlevel","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"knowndiabetic","title":"Knowndiabetic","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"ontreatment","title":"Ontreatment","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"symptoms","title":"Symptoms","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"physicalexam","title":"Physicalexam","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"referred","title":"Referred","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Wanttoknowresult: \" + ${wanttoknowresult} + \"</div>\"\n+ \"<div class='MobileRow'>Bloodsugarlevel: \" + ${bloodsugarlevel} + \"</div>\"\n+ \"<div class='MobileRow'>Knowndiabetic: \" + ${knowndiabetic} + \"</div>\"\n+ \"<div class='MobileRow'>Ontreatment: \" + ${ontreatment} + \"</div>\"\n+ \"<div class='MobileRow'>Symptoms: \" + ${symptoms} + \"</div>\"\n+ \"<div class='MobileRow'>Physicalexam: \" + ${physicalexam} + \"</div>\"\n+ \"<div class='MobileRow'>Referred: \" + ${referred} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"serolinknumber","title":"Serolinknumber","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Diabetes","height":"100%","margin":"4"}, {"onSelect":"diabetesLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"diabetesLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}],
									diabetesGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										diabetesNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"diabetesLivePanel1.popupLivePanelInsert","onclick1":"diabetesNewButtonClick1"}]
									}]
								}],
								Edit_Diabetes: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Diabetes","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									diabetesLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"autoScroll":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"diabetesLivePanel1.popupLiveFormSuccess"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"diabetesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
										text2: ["wm.Text", {"caption":"Sero Link Number","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
										radioSet1: ["wm.RadioSet", {"caption":"Does participant want to know blood sugar results?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"wanttoknowresult","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
										bloodsugarlevelEditor1: ["wm.Number", {"caption":"Participant’s blood sugar level (mmol/L)","captionSize":"300px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"bloodsugarlevel","height":"26px","required":true,"width":"50%"}, {}],
										radioSet2: ["wm.RadioSet", {"caption":"Is participant a known diabetic patient?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"knowndiabetic","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet2Change"}],
										radioSet3: ["wm.RadioSet", {"caption":"If ‘yes’ is the participant on treatment (Diet and/or medication)?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"76px","displayField":"dataValue","formField":"ontreatment","height":"76px","options":"YES,NO","showing":false,"width":"100%"}, {}],
										date1: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"50%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										checkboxSet1: ["wm.CheckboxSet", {"caption":"If the participant has abnormal blood sugar ask if she/he has any of the following symptoms?","captionSize":"140px","dataField":"dataValue","desktopHeight":"161px","displayField":"dataValue","emptyValue":"null","formField":"symptoms","height":"161px","options":"Polyuria,Polydypsia,Pruritus vulvae (women only),Weight loss,Lethargy,NONE","required":true,"width":"100%"}, {"onchange":"checkboxSet1Change"}],
										radioSet6: ["wm.RadioSet", {"caption":"Physicalexam","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"physicalexam","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
										radioSet5: ["wm.RadioSet", {"caption":"Referred","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"referred","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
										number1: ["wm.Number", {"caption":"Insertby","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"insertby","height":"26px","width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										selectMenu1: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","required":true,"width":"50%"}, {"onchange":"selectMenu1Change"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}],
												wire1: ["wm.Wire", {"expression":"${app.clinician.dataValue}.length >1","targetProperty":"disabled"}, {}]
											}]
										}]
									}],
									diabetesFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										diabetesSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"diabetesLiveForm1.saveDataIfValid","onclick1":"diabetesSaveButtonClick1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"${diabetesLiveForm1.invalid} || !${diabetesLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
											}]
										}],
										diabetesCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Diabetes_List"}],
										diabetesDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"diabetesLiveForm1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"diabetesDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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