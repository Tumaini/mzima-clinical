dojo.declare("CervicalCancer", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
cervicalcancerNewButtonClick1: function(inSender) {
try {
if (app.participantVar.getValue("dataValue") !== null&&app.participantVar.getValue("dataValue") !==undefined) {
this.cervicalcancerLiveForm1.beginDataInsert();
var patientId = app.participantVar.getValue("dataValue");
this.text2.setDataValue(patientId);
this.text2.setDisabled(true);
}
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
cervicalcancerSaveButtonClick1: function(inSender) {
try {
if (this.radioSet2.getDataValue() === 'YES') {
app.referral.setData({
dataValue: true
});
}
} catch (g) {}
},
cervicalcancerSaveButtonClick2: function(inSender) {
try {
if (app.physicalExam.getValue("dataValue")) {
app.toPhysExam.update();
} else {
if (app.onTreatment.getValue("dataValue")) {
app.toPharma.update();
} else {
if (app.referral.getValue("dataValue")) {
app.toReferral.update();
} else {
app.toGeneral.update();
}
}
}
} catch (e) {}
},
_end: 0
});

CervicalCancer.widgets = {
cervicalcancerLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Cervicalcancer"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Cervicalcancer","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Knownpatient","sortable":true,"dataIndex":"knownpatient","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Symptoms","sortable":true,"dataIndex":"symptoms","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Referral","sortable":true,"dataIndex":"referral","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
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
label3: ["wm.Label", {"caption":">>CERVICAL CANCER","padding":"4","styles":{"backgroundColor":"#ffffff","fontWeight":"bolder"}}, {}],
panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
cervicalcancerLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Cervicalcancer_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Cervicalcancer","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"cervicalcancerLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"cervicalcancerDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"cervicalcancerSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
cervicalcancerLayers: ["wm.BreadcrumbLayers", {}, {}, {
Cervicalcancer_List: ["wm.Layer", {"borderColor":"","caption":"Cervical Cancer List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"cervicalcancerDojoGrid.deselectAll"}, {
cervicalcancerDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Known Patient: \" + ${knownpatient} + \"</div>\"\n+ \"<div class='MobileRow'>Symptoms: \" + ${symptoms} + \"</div>\"\n+ \"<div class='MobileRow'>Sero Link Number: \" + ${serolinknumber} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"knownpatient","title":"Known Patient","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"symptoms","title":"Symptoms","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"serolinknumber","title":"Sero Link Number","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"referral","title":"Referral","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Cervicalcancer","height":"100%","margin":"4"}, {"onSelect":"cervicalcancerLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cervicalcancerLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
cervicalcancerGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
cervicalcancerNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"cervicalcancerLivePanel1.popupLivePanelInsert","onclick1":"cervicalcancerNewButtonClick1"}]
}]
}],
Edit_Cervicalcancer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Cervical Cancer","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
cervicalcancerLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"cervicalcancerLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cervicalcancerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
text2: ["wm.Text", {"caption":"Sero Link Number","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
date1: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
radioSet1: ["wm.RadioSet", {"caption":"Is participant a known cervical cancer patient?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"knownpatient","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
checkboxSet1: ["wm.CheckboxSet", {"caption":"Does participant experience any of these symptoms?","captionSize":"140px","dataField":"dataValue","desktopHeight":"89px","displayField":"dataValue","emptyValue":"null","formField":"symptoms","height":"89px","options":"Abnormal vaginal bleeding,Contact vaginal bleeding,NONE","required":true,"width":"100%"}, {}],
radioSet2: ["wm.RadioSet", {"caption":"Referral","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","formField":"referral","options":"YES,NO,SCREENED IN LAST FIVE YEARS","required":true,"width":"100%"}, {}],
number1: ["wm.Number", {"caption":"Insertby","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"insertby","height":"26px","width":"50%"}, {}, {
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
cervicalcancerFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
cervicalcancerSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"cervicalcancerLiveForm1.saveDataIfValid","onclick1":"cervicalcancerSaveButtonClick1","onclick2":"cervicalcancerSaveButtonClick2"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${cervicalcancerLiveForm1.invalid} || !${cervicalcancerLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
cervicalcancerCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Cervicalcancer_List"}],
cervicalcancerDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"cervicalcancerLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"cervicalcancerDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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
};

CervicalCancer.prototype._cssText = '';
CervicalCancer.prototype._htmlText = '';