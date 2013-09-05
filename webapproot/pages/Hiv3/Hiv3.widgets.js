Hiv3.widgets = {
	hivLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Hiv"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Hiv","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Hivresult","sortable":true,"dataIndex":"hivresult","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Priorknowledgeofstatus","sortable":true,"dataIndex":"priorknowledgeofstatus","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Physicalexam","sortable":true,"dataIndex":"physicalexam","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Whostage","sortable":true,"dataIndex":"whostage","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Reasonforstage","sortable":true,"dataIndex":"reasonforstage","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Participanttobereferred","sortable":true,"dataIndex":"participanttobereferred","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}]
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
						logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"varTemplateLogout"}]
					}],
					panel2: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"GENERAL","separator":undefined,"defaultLabel":"GENERAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"HIV","separator":undefined,"defaultLabel":"HIV","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"TB","separator":undefined,"defaultLabel":"TB","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"DIABETES","separator":undefined,"defaultLabel":"DIABETES","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"HYPERTENSION","separator":undefined,"defaultLabel":"HYPERTENSION","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"CVD'S","separator":undefined,"defaultLabel":"CVD'S","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"CERVICAL CANCER","separator":undefined,"defaultLabel":"CERVICAL CANCER","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"MORE","separator":undefined,"defaultLabel":"MORE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":"PHYSICAL EXAM","separator":undefined,"defaultLabel":"PHYSICAL EXAM","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"PHARMACOVIGILANCE","separator":undefined,"defaultLabel":"PHARMACOVIGILANCE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"REFERRAL","separator":undefined,"defaultLabel":"REFERRAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}]}],"localizationStructure":{},"transparent":false}, {}]
					}],
					panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						hivLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"Hiv_List","targetId":null,"targetProperty":"gridLayer"}, {}],
								wire1: ["wm.Wire", {"source":"Edit_Hiv","targetId":null,"targetProperty":"detailsLayer"}, {}],
								wire2: ["wm.Wire", {"source":"hivLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire3: ["wm.Wire", {"source":"hivDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire4: ["wm.Wire", {"source":"hivSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							hivLayers: ["wm.BreadcrumbLayers", {}, {}, {
								Hiv_List: ["wm.Layer", {"borderColor":"","caption":"Hiv List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"hivDojoGrid.deselectAll"}, {
									hivDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"hivresult","title":"Hivresult","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"priorknowledgeofstatus","title":"Priorknowledgeofstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"physicalexam","title":"Physicalexam","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"whostage","title":"Whostage","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"reasonforstage","title":"Reasonforstage","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"participanttobereferred","title":"Participanttobereferred","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"insertdate","title":"Insertdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"insertby","title":"Insertby","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"clinician","title":"Clinician","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Hivresult: \" + ${hivresult} + \"</div>\"\n+ \"<div class='MobileRow'>Priorknowledgeofstatus: \" + ${priorknowledgeofstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Physicalexam: \" + ${physicalexam} + \"</div>\"\n+ \"<div class='MobileRow'>Participanttobereferred: \" + ${participanttobereferred} + \"</div>\"\n+ \"<div class='MobileRow'>Insertdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${insertdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Insertby: \" + ${insertby} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.mcddb.data.Hiv","height":"100%","margin":"4"}, {"onSelect":"hivLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"hivLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}],
									hivGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										hivNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"hivLivePanel1.popupLivePanelInsert"}]
									}]
								}],
								Edit_Hiv: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Hiv","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									hivLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"hivLivePanel1.popupLiveFormSuccess"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"hivDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
										serolinknumberEditor1: ["wm.Text", {"caption":"Serolinknumber","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
										radioSet1: ["wm.RadioSet", {"caption":"Participants HIV Test results","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"88px","displayField":"dataValue","formField":"hivresult","height":"88px","options":"POSITIVE,NEGATIVE,DID NOT TEST","required":true,"width":"100%"}, {}],
										radioSet2: ["wm.RadioSet", {"caption":"Participant’s prior knowledge of his or her HIV status and their care status","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"135px","displayField":"dataValue","formField":"priorknowledgeofstatus","height":"135px","options":"Known positive and in follow up for care and treatment,Known positive BUT NOT in care and treatment followup,Known negative,Did not know status before today but now knows,Unknown status (Did not test today)","required":true,"width":"100%"}, {}],
										radioSet3: ["wm.RadioSet", {"caption":"Is physical examination to be performed? (For HIV pos or not tested today or with significant complaints)","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","formField":"physicalexam","options":"YES,NO","required":true,"width":"100%"}, {}],
										radioSet4: ["wm.RadioSet", {"caption":"Whostage","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"140px","displayField":"dataValue","formField":"whostage","height":"140px","options":"STAGE 1,STAGE 2,STAGE 3,STAGE 4,NONE","showing":false,"width":"100%"}, {}],
										checkboxSet1: ["wm.CheckboxSet", {"caption":"Reasonforstage","captionSize":"140px","formField":"reasonforstage","showing":false,"width":"100%"}, {}],
										radioSet6: ["wm.RadioSet", {"caption":"Participant to be referred?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"participanttobereferred","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
										insertdateEditor1: ["wm.DateTime", {"caption":"Insertdate","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"insertdate","height":"26px","required":true,"showing":false,"width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										insertbyEditor1: ["wm.Number", {"caption":"Insert by","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"insertby","height":"26px","width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										selectMenu1: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}]
											}]
										}]
									}],
									hivFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										hivSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"hivLiveForm1.saveDataIfValid"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"${hivLiveForm1.invalid} || !${hivLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
											}]
										}],
										hivCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Hiv_List"}],
										hivDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"hivLiveForm1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"hivDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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