Tb2.widgets = {
	tbLiveVariable1: ["wm.LiveVariable", {"orderBy":"desc:insertdate","type":"com.mcddb.data.Tb"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Tb","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Knowntbpatient","sortable":true,"dataIndex":"knowntbpatient","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Ontbtreatment","sortable":true,"dataIndex":"ontbtreatment","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Treatedlast12months","sortable":true,"dataIndex":"treatedlast12months","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Symptoms","sortable":true,"dataIndex":"symptoms","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Physicalexam","sortable":true,"dataIndex":"physicalexam","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Participanttobereferred","sortable":true,"dataIndex":"participanttobereferred","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"seroNo.dataValue","targetProperty":"filter.serolinknumber"}, {}]
		}]
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
					label3: ["wm.Label", {"caption":">>TUBERCULOSIS","padding":"4","styles":{"fontWeight":"bolder","backgroundColor":"#ffffff"}}, {}],
					seroNo: ["wm.Text", {"caption":"SEARCH BY SEROLINK NUMBER:","captionSize":"210px","changeOnKey":true,"dataValue":undefined,"displayValue":"","width":"400px"}, {}],
					panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						tbLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"Tb_List","targetId":null,"targetProperty":"gridLayer"}, {}],
								wire1: ["wm.Wire", {"source":"Edit_Tb","targetId":null,"targetProperty":"detailsLayer"}, {}],
								wire2: ["wm.Wire", {"source":"tbLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire3: ["wm.Wire", {"source":"tbDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire4: ["wm.Wire", {"source":"tbSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							tbLayers: ["wm.BreadcrumbLayers", {}, {}, {
								Tb_List: ["wm.Layer", {"borderColor":"","caption":"TB List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"tbDojoGrid.deselectAll"}, {
									tbDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"knowntbpatient","title":"Known Patient","width":"125px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"ontbtreatment","title":"On Treatment","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"treatedlast12months","title":"Treated Last12 Months","width":"133px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"symptoms","title":"Symptoms","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"physicalexam","title":"Physical Exam","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"participanttobereferred","title":"Referral","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Known Patient: \" + ${knowntbpatient} + \"</div>\"\n+ \"<div class='MobileRow'>On Treatment: \" + ${ontbtreatment} + \"</div>\"\n+ \"<div class='MobileRow'>Treated Last12 Months: \" + ${treatedlast12months} + \"</div>\"\n+ \"<div class='MobileRow'>Symptoms: \" + ${symptoms} + \"</div>\"\n+ \"<div class='MobileRow'>Physical Exam: \" + ${physicalexam} + \"</div>\"\n+ \"<div class='MobileRow'>Referral: \" + ${participanttobereferred} + \"</div>\"\n+ \"<div class='MobileRow'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Tb","height":"100%","margin":"4"}, {"onSelect":"tbLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"tbLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}],
									tbGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										tbNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"tbLivePanel1.popupLivePanelInsert","onclick1":"tbNewButtonClick1"}]
									}]
								}],
								Edit_Tb: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit TB","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									tbLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"autoScroll":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"tbLivePanel1.popupLiveFormSuccess"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"tbDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
										seroLinkNumberEditor1: ["wm.Text", {"caption":"Sero Link Number","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
										date1: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										radioSet1: ["wm.RadioSet", {"caption":"Is participant a known current TB patient?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"knowntbpatient","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet1Change"}],
										radioSet2: ["wm.RadioSet", {"caption":"Is the participant on TB treatment?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"ontbtreatment","height":"56px","options":"YES,NO","showing":false,"width":"100%"}, {}],
										radioSet3: ["wm.RadioSet", {"caption":"Has the participant been treated for TB in the past 12 months?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"57px","displayField":"dataValue","formField":"treatedlast12months","height":"57px","options":"YES,NO","required":true,"width":"100%"}, {}],
										checkboxSet1: ["wm.CheckboxSet", {"caption":"Is participant experiencing any of the following?","captionSize":"140px","dataField":"dataValue","desktopHeight":"157px","displayField":"dataValue","emptyValue":"null","formField":"symptoms","height":"157px","options":"Cough ≥ 2 weeks,Fever ≥ 2 weeks,Excessive night sweats ≥ 2 weeks,Weight loss ≥ 3Kgs,Haemoptysis,NONE","required":true,"width":"100%"}, {}],
										radioSet5: ["wm.RadioSet", {"caption":"Is physical exam to be performed?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"physicalexam","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
										radioSet6: ["wm.RadioSet", {"caption":"Participant to be referred","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"participanttobereferred","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
										number1: ["wm.Number", {"caption":"Insert By","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"insertby","height":"26px","width":"100%"}, {}, {
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
									tbFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										tbSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"tbLiveForm1.saveDataIfValid","onclick1":"tbSaveButtonClick1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"${tbLiveForm1.invalid} || !${tbLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
											}]
										}],
										tbCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Tb_List"}],
										tbDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"tbLiveForm1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"tbDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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