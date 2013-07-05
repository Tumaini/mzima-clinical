General.widgets = {
	clinicalmainLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.ClinicalMain"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.ClinicalMain","related":["user"],"view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Id","sortable":true,"dataIndex":"user.id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Username","sortable":true,"dataIndex":"user.username","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Date","sortable":true,"dataIndex":"date","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Password","sortable":true,"dataIndex":"user.password","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Age","sortable":true,"dataIndex":"age","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Role","sortable":true,"dataIndex":"user.role","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Gender","sortable":true,"dataIndex":"gender","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Lastname","sortable":true,"dataIndex":"user.lastname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Bmi","sortable":true,"dataIndex":"bmi","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Firstname","sortable":true,"dataIndex":"user.firstname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Clinicalcomplaint","sortable":true,"dataIndex":"clinicalcomplaint","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Pregnant","sortable":true,"dataIndex":"pregnant","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}]
	}],
	clinicalcomplaintsLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.ClinicalComplaints"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.ClinicalComplaints","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Complaint","sortable":true,"dataIndex":"complaint","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
	}],
	clinicalcomplaintsLiveVariable2: ["wm.LiveVariable", {"type":"com.mcddb.data.ClinicalComplaints"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.ClinicalComplaints","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Complaint","sortable":true,"dataIndex":"complaint","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
	}],
	toUsers: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"User\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"600px","height":"600px","title":"Clinical Complaints"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			clinicalcomplaintsLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"Clinicalcomplaints_List","targetId":null,"targetProperty":"gridLayer"}, {}],
					wire1: ["wm.Wire", {"source":"Edit_Clinicalcomplaints","targetId":null,"targetProperty":"detailsLayer"}, {}],
					wire2: ["wm.Wire", {"source":"clinicalcomplaintsLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
					wire3: ["wm.Wire", {"source":"clinicalcomplaintsDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
					wire4: ["wm.Wire", {"source":"clinicalcomplaintsSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
				}],
				clinicalcomplaintsLayers: ["wm.BreadcrumbLayers", {}, {}, {
					Clinicalcomplaints_List: ["wm.Layer", {"borderColor":"","caption":"Clinicalcomplaints List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"clinicalcomplaintsDojoGrid.deselectAll"}, {
						clinicalcomplaintsDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":true},{"show":false,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"participantno","title":"Participantno","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"complaint","title":"Complaint","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.ClinicalComplaints","height":"100%","localizationStructure":{},"margin":"4"}, {"onSelect":"clinicalcomplaintsLivePanel1.popupLivePanelEdit"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"clinicalcomplaintsLiveVariable3","targetProperty":"dataSet"}, {}]
							}]
						}],
						clinicalcomplaintsGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
							clinicalcomplaintsNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"clinicalcomplaintsLivePanel1.popupLivePanelInsert","onclick1":"clinicalcomplaintsNewButtonClick1"}]
						}]
					}],
					Edit_Clinicalcomplaints: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Clinicalcomplaints","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						clinicalcomplaintsLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"268px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"clinicalcomplaintsLivePanel1.popupLiveFormSuccess"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"clinicalcomplaintsDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
							}],
							idEditor2: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
							text2: ["wm.Text", {"caption":"Participantno","captionSize":"140px","dataValue":"","desktopHeight":"35px","emptyValue":"emptyString","formField":"participantno","height":"35px","required":true,"width":"50%"}, {}],
							largeTextArea1: ["wm.LargeTextArea", {"caption":"Complaint","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"complaint","required":true,"width":"100%"}, {"onchange":"largeTextArea1Change"}],
							insertbyEditor1: ["wm.Number", {"caption":"Insert By","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"insertby","height":"26px","readonly":true,"width":"50%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
								}]
							}],
							date2: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
								}]
							}],
							clinician: ["wm.Text", {"caption":"Clinician","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"clinician","height":"26px","required":true,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}]
								}]
							}]
						}],
						clinicalcomplaintsFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
							clinicalcomplaintsSaveButton: ["wm.Button", {"caption":"Save","disabled":true,"margin":"4"}, {"onclick":"clinicalcomplaintsLiveForm1.saveDataIfValid"}],
							clinicalcomplaintsCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Clinicalcomplaints_List"}],
							clinicalcomplaintsDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"clinicalcomplaintsLiveForm1.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"clinicalcomplaintsDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
	}],
	clinicalcomplaintsLiveVariable3: ["wm.LiveVariable", {"type":"com.mcddb.data.ClinicalComplaints"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.ClinicalComplaints","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Complaint","sortable":true,"dataIndex":"complaint","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
	}],
	clinicalmainLiveVariable2: ["wm.LiveVariable", {"type":"com.mcddb.data.ClinicalMain"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.ClinicalMain","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Date","sortable":true,"dataIndex":"date","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Age","sortable":true,"dataIndex":"age","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Gender","sortable":true,"dataIndex":"gender","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Bmi","sortable":true,"dataIndex":"bmi","type":"java.lang.Double","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Clinicalcomplaint","sortable":true,"dataIndex":"clinicalcomplaint","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Pregnant","sortable":true,"dataIndex":"pregnant","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}]
	}],
	serviceVariable1: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onSuccess":"app.toLogin"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		CLINICAL: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			ProjectMain: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"verticalAlign":"top","width":"900px"}, {}, {
					panelHeader: ["wm.HeaderContentPanel", {"height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
						picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
						label2: ["wm.Label", {"caption":"MZIMA CLINICAL DATA","height":"35px","padding":"4","width":"100%"}, {}],
						panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
							label4: ["wm.Label", {"caption":"USER ADMINISTRATION","padding":"4","roles":["ADMIN"],"styles":{"fontWeight":"bold"},"width":"220px"}, {"onclick":"toUsers"}],
							panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
								text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
								picture5: ["wm.Picture", {"height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
							}]
						}],
						logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"serviceVariable1"}]
					}],
					panel2: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"GENERAL","separator":undefined,"defaultLabel":"GENERAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},{"label":"HIV","separator":undefined,"defaultLabel":"HIV","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toHIV","children":[]},{"label":"TB","separator":undefined,"defaultLabel":"TB","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toTB","children":[]},{"label":"DIABETES","separator":undefined,"defaultLabel":"DIABETES","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toDiabetes","children":[]},{"label":"HYPERTENSION","separator":undefined,"defaultLabel":"HYPERTENSION","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toHypertension","children":[]},{"label":"CVD'S","separator":undefined,"defaultLabel":"CVD'S","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toCVD","children":[]},{"label":"CERVICAL CANCER","separator":undefined,"defaultLabel":"CERVICAL CANCER","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toCancer","children":[]},{"label":"MORE","separator":undefined,"defaultLabel":"MORE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":"PHYSICAL EXAM","separator":undefined,"defaultLabel":"PHYSICAL EXAM","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toPhysExam","children":[]},{"label":"PHARMACOVIGILANCE","separator":undefined,"defaultLabel":"PHARMACOVIGILANCE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toPharma","children":[]},{"label":"REFERRAL","separator":undefined,"defaultLabel":"REFERRAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toReferral","children":[]}]}],"localizationStructure":{},"transparent":false}, {}]
					}],
					label3: ["wm.Label", {"caption":">>GENERAL","padding":"4","styles":{"backgroundColor":"#ffffff","color":"#020000","fontWeight":"bolder"}}, {}],
					panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						clinicalmainLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"Clinicalmain_List","targetId":null,"targetProperty":"gridLayer"}, {}],
								wire1: ["wm.Wire", {"source":"Edit_Clinicalmain","targetId":null,"targetProperty":"detailsLayer"}, {}],
								wire2: ["wm.Wire", {"source":"clinicalmainLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire3: ["wm.Wire", {"source":"clinicalmainDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire4: ["wm.Wire", {"source":"clinicalmainSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							clinicalmainLayers: ["wm.BreadcrumbLayers", {}, {}, {
								Clinicalmain_List: ["wm.Layer", {"borderColor":"","caption":"Clinicalmain List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"clinicalmainDojoGrid.deselectAll"}, {
									clinicalmainDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"date","title":"Date","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"age","title":"Age","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"gender","title":"Gender","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"bmi","title":"Bmi","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"clinicalcomplaint","title":"Clinicalcomplaint","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"pregnant","title":"Pregnant","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Date: \" + wm.List.prototype.dateFormatter({}, null,null,null,${date}) + \"</div>\"\n+ \"<div class='MobileRow'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Age: \" + ${age} + \"</div>\"\n+ \"<div class='MobileRow'>Gender: \" + ${gender} + \"</div>\"\n+ \"<div class='MobileRow'>Bmi: \" + ${bmi} + \"</div>\"\n+ \"<div class='MobileRow'>Clinicalcomplaint: \" + ${clinicalcomplaint} + \"</div>\"\n+ \"<div class='MobileRow'>Pregnant: \" + ${pregnant} + \"</div>\"\n+ \"<div class='MobileRow'>Insertby: \" + ${insertby} + \"</div>\"\n+ \"<div class='MobileRow'>Insertdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${insertdate}) + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.ClinicalMain","height":"100%","margin":"4"}, {"onSelect":"clinicalmainLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"clinicalmainLiveVariable2","targetProperty":"dataSet"}, {}]
										}]
									}],
									clinicalmainGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										clinicalmainNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"clinicalmainLivePanel1.popupLivePanelInsert"}]
									}]
								}],
								Edit_Clinicalmain: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Clinicalmain","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									clinicalmainLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"clinicalmainLivePanel1.popupLiveFormSuccess"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"clinicalmainDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
										dateEditor1: ["wm.DateTime", {"caption":"Date","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"date","height":"26px","required":true,"width":"50%"}, {}],
										serolinknumberEditor1: ["wm.Text", {"caption":"Serolinknumber","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
										selectMenu1: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"CLINICIAN 1,CLINICIAN 2,CLINICIAN 3","required":true,"width":"50%"}, {"onchange":"selectMenu1Change"}],
										ageEditor1: ["wm.Number", {"caption":"Age","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"age","height":"26px","maximum":110,"minimum":14,"placeHolder":"Valid ages are between 14 and 110","required":true,"width":"50%"}, {}],
										bmiEditor1: ["wm.Number", {"caption":"BMI","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"bmi","height":"26px","maximum":32,"minimum":16,"placeHolder":"Valid BMI are between 16 and 32","required":true,"width":"50%"}, {}],
										radioSet1: ["wm.RadioSet", {"caption":"Gender","captionSize":"140px","dataField":"dataValue","dataValue":"M","desktopHeight":"65px","displayField":"dataValue","formField":"gender","height":"65px","options":"M,F","required":true,"width":"100%"}, {"onchange":"radioSet1Change"}],
										radioSet2: ["wm.RadioSet", {"caption":"Pregnant","captionSize":"140px","dataField":"dataValue","desktopHeight":"88px","displayField":"dataValue","formField":"pregnant","height":"88px","showing":false,"width":"100%"}, {}],
										radioSet3: ["wm.RadioSet", {"caption":"Does participant have any clinical complaint","captionSize":"140px","dataField":"dataValue","dataValue":"NO","desktopHeight":"60px","displayField":"dataValue","formField":"clinicalcomplaint","height":"60px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet3Change"}],
										insertbyEditor2: ["wm.Number", {"caption":"Insertby","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"insertby","height":"26px","readonly":true,"width":"50%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
											}]
										}],
										insertdateEditor1: ["wm.DateTime", {"caption":"Insertdate","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
											}]
										}]
									}],
									clinicalmainFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
										clinicalmainSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"clinicalmainSaveButtonClick","onclick1":"clinicalmainSaveButtonClick1","onclick2":"app.toHIV"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":"${clinicalmainLiveForm1.invalid} || !${clinicalmainLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
											}]
										}],
										clinicalmainCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Clinicalmain_List"}],
										clinicalmainDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"clinicalmainLiveForm1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"clinicalmainDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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