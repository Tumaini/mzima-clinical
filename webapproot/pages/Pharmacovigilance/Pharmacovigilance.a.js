dojo.declare("Pharmacovigilance", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
largeTextArea1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.largeTextArea1.getDataValue();
this.largeTextArea1.setDataValue(inputStr.toUpperCase());
if(inputStr.length > 0 ){
this.sideeffectsSaveButton.setDisabled(false) ;
}else{
this.sideeffectsSaveButton.setDisabled(true) ;
}
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
radioSet3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
if (this.radioSet3.getDataValue() == 'YES') {
this.designableDialog1.show();
this.checkboxSet1.setShowing(true);
}else{
this.checkboxSet1.setShowing(false);
}
} catch (e) {}
},
largeTextArea2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.largeTextArea2.getDataValue();
this.largeTextArea2.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
checkboxSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
if (this.checkboxSet1.getDataValue() == 'OTHERS') {
this.designableDialog2.show();
this.sideeffectoutcomesLiveForm1.beginDataInsert();
var patientId;
if (app.participantVar.getValue() === null || app.participantVar.getValue() === undefined) {
patientId = this.serolinknumberEditor1.getDataValue();
this.text2.setDataValue(patientId);
this.text2.setDisabled(true);
this.clinician1.setDisabled(false);
} else {
patientId = app.participantVar.getValue("dataValue");
this.text2.setDataValue(patientId);
this.text2.setDisabled(true);
this.clinician1.setDisabled(false);
}
}
} catch (e) {}
},
pharmacovigilanceNewButtonClick1: function(inSender) {
try {
if (app.participantVar.getValue("dataValue") !== null && app.participantVar.getValue("dataValue") !== undefined) {
this.pharmacovigilanceLiveForm1.beginDataInsert();
var patientId = app.participantVar.getValue("dataValue");
this.serolinknumberEditor1.setDataValue(patientId);
this.serolinknumberEditor1.setDisabled(true);
}
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
pharmacovigilanceSaveButtonClick1: function(inSender) {
try {
if (app.referral.getValue("datavalue")) {
app.toReferral.update();
} else {
app.toGeneral.update();
}
} catch (e) {}
},
newButton1Click1: function(inSender) {
try {
this.sideeffectsLiveForm1.beginDataInsert();
var patientId;
if (app.participantVar.getValue() === null) {
patientId = this.serolinknumberEditor1.getDataValue();
} else {
patientId = app.participantVar.getValue("dataValue");
}
this.text7.setDataValue(patientId);
this.text7.setDisabled(true);
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
newButton2Click1: function(inSender) {
try {
this.sideeffectoutcomesLiveForm1.beginDataInsert();
var patientId;
if (app.participantVar.getValue() === null) {
patientId = this.serolinknumberEditor1.getDataValue();
} else {
patientId = app.participantVar.getValue("dataValue");
}
this.text2.setDataValue(patientId);
this.text2.setDisabled(true);
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
if (this.radioSet1.getDataValue() === 'YES') {
this.panel1.setShowing(true);
this.radioSet2.setRequired(true);
this.radioSet3.setShowing(true);
this.radioSet3.setRequired(true);
} else {
this.panel1.setShowing(false);
this.radioSet2.setRequired(false);
this.radioSet3.setShowing(false);
this.radioSet3.setRequired(false);
if (this.number1.getRequired() === true) {
this.number1.setRequired(false);
}
if (this.number2.getRequired() === true) {
this.number2.setRequired(false);
}
if (this.number3.getRequired === true) {
this.number3.setRequired(false);
}
if (this.number4.getRequired === true) {
this.number4.setRequired(false);
}
if (this.number5.getRequired() === true) {
this.number5.setRequired(false);
}
}
} catch (e) {}
},
selectMenu1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (this.selectMenu1.getDataValue() !== "NONE") {
this.number1.setRequired(true);
this.number1.setDisabled(false);
this.selectMenu2.setDisabled(false);
this.radioSet2.setDisabled(false);
} else {
this.number1.setRequired(false);
this.number1.clear();
this.number1.setDisabled(true);
this.selectMenu2.setDisabled(true);
this.radioSet2.setDisabled(true);
}
},
selectMenu2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (this.selectMenu2.getDataValue() !== "NONE") {
this.number2.setRequired(true);
this.number2.setDisabled(false);
this.selectMenu3.setDisabled(false);
} else {
this.number2.setRequired(false);
this.number2.clear();
this.number2.setDisabled(true);
this.selectMenu3.setDisabled(true);
}
},
selectMenu3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (this.selectMenu3.getDataValue() !== "NONE") {
this.number3.setRequired(true);
this.number3.setDisabled(false);
this.selectMenu4.setDisabled(false);
} else {
this.number3.setRequired(false);
this.number3.clear();
this.number3.setDisabled(true);
this.selectMenu4.setDisabled(true);
}
},
selectMenu4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (this.selectMenu4.getDataValue() !== "NONE") {
this.number4.setRequired(true);
this.number4.setDisabled(false);
this.selectMenu5.setDisabled(false);
} else {
this.number4.setRequired(false);
this.number4.clear();
this.number4.setDisabled(true);
this.selectMenu5.setDisabled(true);
}
},
selectMenu5Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (this.selectMenu5.getDataValue() !== "NONE") {
this.number5.setRequired(true);
this.number5.setDisabled(false);
} else {
this.number5.setRequired(false);
this.number5.clear();
this.number5.setDisabled(true);
}
},
sideeffectsNewButtonClick1: function(inSender) {
try {
this.sideeffectsLiveForm1.beginDataInsert();
var patientId;
if (app.participantVar.getValue() === null || app.participantVar.getValue() === undefined) {
patientId = this.serolinknumberEditor1.getDataValue();
} else {
patientId = app.participantVar.getValue("dataValue");
}
this.text3.setDataValue(patientId);
this.text3.setDisabled(true);
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
outcomeEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var string = this.outcomeEditor1.getDataValue();
this.outcomeEditor1.setDataValue(string.toUpperCase());
},
sideeffectoutcomesNewButtonClick1: function(inSender) {
try {
this.sideeffectoutcomesLiveForm1.beginDataInsert();
var patientId;
if (app.participantVar.getValue() === null || app.participantVar.getValue() === undefined) {
patientId = this.serolinknumberEditor1.getDataValue();
this.text2.setDataValue(patientId);
this.text2.setDisabled(true);
this.clinician1.setDisabled(false);
} else {
patientId = app.participantVar.getValue("dataValue");
this.text2.setDataValue(patientId);
this.text2.setDisabled(true);
this.clinician1.setDisabled(false);
}
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
selectMenu6Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.selectMenu1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
},
selectMenu7Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.selectMenu1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
},
selectMenu8Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.selectMenu1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
},
_end: 0
});

Pharmacovigilance.widgets = {
pharmacovigilanceLiveVariable1: ["wm.LiveVariable", {"matchMode":"anywhere","orderBy":"desc:insertdate","type":"com.mcddb.data.Pharmacovigilance"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Pharmacovigilance","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Identifymeds","sortable":true,"dataIndex":"identifymeds","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Meds1","sortable":true,"dataIndex":"meds1","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Meds2","sortable":true,"dataIndex":"meds2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Meds3","sortable":true,"dataIndex":"meds3","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Meds4","sortable":true,"dataIndex":"meds4","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Meds5","sortable":true,"dataIndex":"meds5","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Timeonmeds1","sortable":true,"dataIndex":"timeonmeds1","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Timeonmeds2","sortable":true,"dataIndex":"timeonmeds2","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Timeonmeds3","sortable":true,"dataIndex":"timeonmeds3","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"Timeonmeds4","sortable":true,"dataIndex":"timeonmeds4","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"Timeonmeds5","sortable":true,"dataIndex":"timeonmeds5","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},{"caption":"Unitoftime","sortable":true,"dataIndex":"unitoftime","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},{"caption":"Medsideffects","sortable":true,"dataIndex":"medsideffects","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},{"caption":"Sideeffectoutcome","sortable":true,"dataIndex":"sideeffectoutcome","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"seroNo.dataValue","targetProperty":"filter.serolinknumber"}, {}]
}]
}],
sideeffectsLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Sideeffects"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Sideeffects","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Sideeffect","sortable":true,"dataIndex":"sideeffect","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
sideeffectoutcomesLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.SideEffectOutcomes"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.SideEffectOutcomes","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Outcome","sortable":true,"dataIndex":"outcome","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
sideeffectsLiveVariable2: ["wm.LiveVariable", {"type":"com.mcddb.data.Sideeffects"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Sideeffects","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Sideeffect","sortable":true,"dataIndex":"sideeffect","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
designableDialog2: ["wm.DesignableDialog", {"buttonBarId":"","containerWidgetId":"containerWidget1","desktopHeight":"600px","height":"600px","title":"Side Effects Outcomes"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
sideeffectoutcomesLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Sideeffectoutcomes_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Sideeffectoutcomes","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"sideeffectoutcomesLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"sideeffectoutcomesDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"sideeffectoutcomesSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
sideeffectoutcomesLayers: ["wm.BreadcrumbLayers", {}, {}, {
Edit_Sideeffectoutcomes: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Side Offect Outcomes","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
sideeffectoutcomesLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"sideeffectoutcomesLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"sideeffectoutcomesDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor3: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
text2: ["wm.Text", {"caption":"Participantno","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"participantno","height":"26px","width":"50%"}, {}],
outcomeEditor1: ["wm.Text", {"caption":"Outcome","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"outcome","height":"26px","width":"100%"}, {"onchange":"outcomeEditor1Change"}],
insertbyEditor2: ["wm.Number", {"caption":"Insert By","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"insertby","height":"26px","readonly":true,"width":"50%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
}]
}],
insertdateEditor2: ["wm.DateTime", {"caption":"Insertdate","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
selectMenu7: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","required":true,"width":"50%"}, {"onchange":"selectMenu7Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}],
wire1: ["wm.Wire", {"expression":"${app.clinician.dataValue}.length >1","targetProperty":"disabled"}, {}]
}]
}]
}],
sideeffectoutcomesFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
sideeffectoutcomesSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"sideeffectoutcomesLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${sideeffectoutcomesLiveForm1.invalid} || !${sideeffectoutcomesLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
sideeffectoutcomesCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Sideeffectoutcomes_List"}],
sideeffectoutcomesDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"sideeffectoutcomesLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"sideeffectoutcomesDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}],
Sideeffectoutcomes_List: ["wm.Layer", {"borderColor":"","caption":"Side Effect Outcomes List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"sideeffectoutcomesDojoGrid.deselectAll"}, {
sideeffectoutcomesDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Participantno: \" + ${participantno} + \"</div>\"\n+ \"<div class='MobileRow'>Outcome: \" + ${outcome} + \"</div>\"\n+ \"<div class='MobileRow'>Insertby: \" + ${insertby} + \"</div>\"\n+ \"<div class='MobileRow'>Insertdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${insertdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Clinician: \" + ${clinician} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"participantno","title":"Participantno","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"outcome","title":"Outcome","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":true,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.SideEffectOutcomes","height":"100%","margin":"4"}, {"onSelect":"sideeffectoutcomesLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"sideeffectoutcomesLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}],
sideeffectoutcomesGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
sideeffectoutcomesNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"sideeffectoutcomesLivePanel1.popupLivePanelInsert","onclick1":"sideeffectoutcomesNewButtonClick1"}]
}]
}]
}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
sideeffectoutcomesLiveVariable2: ["wm.LiveVariable", {"type":"com.mcddb.data.SideEffectOutcomes"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.SideEffectOutcomes","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Outcome","sortable":true,"dataIndex":"outcome","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"600px","height":"600px","title":"Side Effect"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
sideeffectsLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Sideeffects_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Sideeffects","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"sideeffectsLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"sideeffectsDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"sideeffectsSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
sideeffectsLayers: ["wm.BreadcrumbLayers", {}, {}, {
Sideeffects_List: ["wm.Layer", {"borderColor":"","caption":"Sideeffects List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"sideeffectsDojoGrid.deselectAll"}, {
sideeffectsDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Participantno: \" + ${participantno} + \"</div>\"\n+ \"<div class='MobileRow'>Sideeffect: \" + ${sideeffect} + \"</div>\"\n+ \"<div class='MobileRow'>Insertby: \" + ${insertby} + \"</div>\"\n+ \"<div class='MobileRow'>Insertdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${insertdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Clinician: \" + ${clinician} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"participantno","title":"Participantno","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"sideeffect","title":"Sideeffect","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":true,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Sideeffects","height":"100%","margin":"4"}, {"onSelect":"sideeffectsLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"sideeffectsLiveVariable3","targetProperty":"dataSet"}, {}]
}]
}],
sideeffectsGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
sideeffectsNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"sideeffectsLivePanel1.popupLivePanelInsert","onclick1":"sideeffectsNewButtonClick1"}]
}]
}],
Edit_Sideeffects: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Sideeffects","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
sideeffectsLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"327px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"sideeffectsLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"sideeffectsDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor2: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
text3: ["wm.Text", {"caption":"Participantno","captionSize":"140px","dataValue":"","desktopHeight":"34px","emptyValue":"emptyString","formField":"participantno","height":"34px","width":"50%"}, {}],
largeTextArea1: ["wm.LargeTextArea", {"caption":"Sideeffect","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"sideeffect","width":"100%"}, {"onchange":"largeTextArea1Change"}],
insertbyEditor1: ["wm.Number", {"caption":"Insertby","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"insertby","height":"26px","readonly":true,"width":"50%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
}]
}],
insertdateEditor1: ["wm.DateTime", {"caption":"Insertdate","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
selectMenu8: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","required":true,"width":"50%"}, {"onchange":"selectMenu8Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}],
wire1: ["wm.Wire", {"expression":"${app.clinician.dataValue}.length >1","targetProperty":"disabled"}, {}]
}]
}]
}],
sideeffectsFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
sideeffectsSaveButton: ["wm.Button", {"caption":"Save","disabled":true,"margin":"4"}, {"onclick":"sideeffectsLiveForm1.saveDataIfValid"}],
sideeffectsCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Sideeffects_List"}],
sideeffectsDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"sideeffectsLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"sideeffectsDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
sideeffectsLiveVariable3: ["wm.LiveVariable", {"type":"com.mcddb.data.Sideeffects"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Sideeffects","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Participantno","sortable":true,"dataIndex":"participantno","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Sideeffect","sortable":true,"dataIndex":"sideeffect","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
CLINICAL: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
ProjectMain: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"verticalAlign":"top","width":"900px"}, {}, {
panelHeader: ["wm.HeaderContentPanel", {"height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label2: ["wm.Label", {"caption":"MZIMA CLINICAL DATA","height":"35px","padding":"4","width":"100%"}, {}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
panel15: ["wm.Panel", {"desktopHeight":"24px","enableTouchHeight":true,"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"35px","verticalAlign":"middle","width":"100%"}, {}, {
text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
picture5: ["wm.Picture", {"height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
}]
}],
logoutButton: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"app.logoutVar"}]
}],
panel2: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"fullStructure":[{"label":"GENERAL","separator":undefined,"defaultLabel":"GENERAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toGeneral","children":[]},{"label":"HIV","separator":undefined,"defaultLabel":"HIV","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toHIV","children":[]},{"label":"TB","separator":undefined,"defaultLabel":"TB","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toTB","children":[]},{"label":"DIABETES","separator":undefined,"defaultLabel":"DIABETES","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toDiabetes","children":[]},{"label":"HYPERTENSION","separator":undefined,"defaultLabel":"HYPERTENSION","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toHypertension","children":[]},{"label":"CVD'S","separator":undefined,"defaultLabel":"CVD'S","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toCVD","children":[]},{"label":"CERVICAL CANCER","separator":undefined,"defaultLabel":"CERVICAL CANCER","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toCancer","children":[]},{"label":"MORE","separator":undefined,"defaultLabel":"MORE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[{"label":"PHYSICAL EXAM","separator":undefined,"defaultLabel":"PHYSICAL EXAM","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toPhysExam","children":[]},{"label":"PHARMACOVIGILANCE","separator":undefined,"defaultLabel":"PHARMACOVIGILANCE","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toPharma","children":[]},{"label":"REFERRAL","separator":undefined,"defaultLabel":"REFERRAL","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"app.toReferral","children":[]}]}],"localizationStructure":{},"transparent":false}, {}]
}],
label4: ["wm.Label", {"caption":">>PHARMACOVIGILANCE","padding":"4","styles":{"backgroundColor":"#ffffff","fontWeight":"bolder"}}, {}],
seroNo: ["wm.Text", {"caption":"SEARCH BY SEROLINK NUMBER:","captionSize":"210px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
pharmacovigilanceLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Pharmacovigilance_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Pharmacovigilance","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"pharmacovigilanceLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"pharmacovigilanceDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"pharmacovigilanceSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
pharmacovigilanceLayers: ["wm.BreadcrumbLayers", {}, {}, {
Pharmacovigilance_List: ["wm.Layer", {"borderColor":"","caption":"Pharmacovigilance List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"pharmacovigilanceDojoGrid.deselectAll"}, {
pharmacovigilanceDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"identifymeds","title":"Identifymeds","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"meds1","title":"Meds1","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"meds2","title":"Meds2","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"meds3","title":"Meds3","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"meds4","title":"Meds4","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"meds5","title":"Meds5","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"timeonmeds1","title":"Timeonmeds1","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"timeonmeds2","title":"Timeonmeds2","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"timeonmeds3","title":"Timeonmeds3","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"timeonmeds4","title":"Timeonmeds4","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"timeonmeds5","title":"Timeonmeds5","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"unitoftime","title":"Unitoftime","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"medsideffects","title":"Medsideffects","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"sideeffectoutcome","title":"Sideeffectoutcome","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Identifymeds: \" + ${identifymeds} + \"</div>\"\n+ \"<div class='MobileRow'>Meds1: \" + ${meds1} + \"</div>\"\n+ \"<div class='MobileRow'>Meds2: \" + ${meds2} + \"</div>\"\n+ \"<div class='MobileRow'>Meds3: \" + ${meds3} + \"</div>\"\n+ \"<div class='MobileRow'>Meds4: \" + ${meds4} + \"</div>\"\n+ \"<div class='MobileRow'>Meds5: \" + ${meds5} + \"</div>\"\n+ \"<div class='MobileRow'>Timeonmeds1: \" + ${timeonmeds1} + \"</div>\"\n+ \"<div class='MobileRow'>Timeonmeds2: \" + ${timeonmeds2} + \"</div>\"\n+ \"<div class='MobileRow'>Timeonmeds3: \" + ${timeonmeds3} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Pharmacovigilance","height":"100%","margin":"4"}, {"onSelect":"pharmacovigilanceLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pharmacovigilanceLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
pharmacovigilanceGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
pharmacovigilanceNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"pharmacovigilanceLivePanel1.popupLivePanelInsert","onclick1":"pharmacovigilanceNewButtonClick1"}]
}]
}],
Edit_Pharmacovigilance: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Pharmacovigilance","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pharmacovigilanceLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"desktopHeight":"552px","enableTouchHeight":true,"height":"552px","horizontalAlign":"left","liveEditing":false,"margin":"4","mobileHeight":"518px","verticalAlign":"top"}, {"onSuccess":"pharmacovigilanceLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pharmacovigilanceDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
serolinknumberEditor1: ["wm.Text", {"caption":"Serolinknumber","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","regExp":"[0-9]*","width":"50%"}, {}],
radioSet1: ["wm.RadioSet", {"caption":"Could you identify the medication you take during your interview with the field interviewer?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"73px","displayField":"dataValue","formField":"identifymeds","height":"73px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet1Change"}],
panel1: ["wm.Panel", {"height":"142px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"149px"}, {}, {
label3: ["wm.Label", {"caption":"For how long have you used the medication? (Mention condition &duration)","height":"138px","padding":"4","singleLine":false,"styles":{"fontWeight":"bold"},"width":"142px"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"245px"}, {}, {
selectMenu1: ["wm.SelectMenu", {"caption":"Meds1","captionSize":"50px","dataField":"dataValue","dataValue":"","desktopHeight":"26px","displayField":"dataValue","emptyValue":"emptyString","formField":"meds1","height":"26px","options":"NONE,HIV,TUBERCULOSIS,DIABETES,HYPERTENSION,CARDIOVASCULAR DISEASES","width":"100%"}, {"onchange":"selectMenu1Change"}],
selectMenu2: ["wm.SelectMenu", {"caption":"Meds2","captionSize":"50px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","disabled":true,"displayField":"dataValue","formField":"meds2","height":"26px","options":"NONE,HIV,TUBERCULOSIS,DIABETES,HYPERTENSION,CARDIOVASCULAR DISEASES","width":"100%"}, {"onchange":"selectMenu2Change"}],
selectMenu3: ["wm.SelectMenu", {"caption":"Meds3","captionSize":"50px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","disabled":true,"displayField":"dataValue","formField":"meds3","height":"26px","options":"NONE,HIV,TUBERCULOSIS,DIABETES,HYPERTENSION,CARDIOVASCULAR DISEASES","width":"100%"}, {"onchange":"selectMenu3Change"}],
selectMenu4: ["wm.SelectMenu", {"caption":"Meds4","captionSize":"50px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","disabled":true,"displayField":"dataValue","formField":"meds4","height":"26px","options":"NONE,HIV,TUBERCULOSIS,DIABETES,HYPERTENSION,CARDIOVASCULAR DISEASES","width":"100%"}, {"onchange":"selectMenu4Change"}],
selectMenu5: ["wm.SelectMenu", {"caption":"Meds5","captionSize":"50px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","disabled":true,"displayField":"dataValue","formField":"meds5","height":"26px","options":"NONE,HIV,TUBERCULOSIS,DIABETES,HYPERTENSION,CARDIOVASCULAR DISEASES","width":"100%"}, {"onchange":"selectMenu5Change"}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"236px"}, {}, {
number1: ["wm.Number", {"caption":"Duration on meds","captionSize":"140px","dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"timeonmeds1","height":"26px","width":"100%"}, {}],
number2: ["wm.Number", {"caption":"Duration on meds","captionSize":"140px","dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"timeonmeds2","height":"26px","width":"100%"}, {}],
number3: ["wm.Number", {"caption":"Duration on meds","captionSize":"140px","dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"timeonmeds3","height":"26px","width":"100%"}, {}],
number4: ["wm.Number", {"caption":"Duration on meds","captionSize":"140px","dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"timeonmeds4","height":"26px","width":"100%"}, {}],
number5: ["wm.Number", {"caption":"Duration on meds","captionSize":"140px","dataValue":0,"desktopHeight":"26px","disabled":true,"emptyValue":"zero","formField":"timeonmeds5","height":"26px","width":"100%"}, {}]
}],
panel6: ["wm.Panel", {"height":"142px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
radioSet2: ["wm.RadioSet", {"caption":"Unit of Time","captionAlign":"center","captionPosition":"top","captionSize":"20px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"134px","disabled":true,"displayField":"dataValue","formField":"unitoftime","height":"134px","mobileHeight":"100%","options":"DAYS,WEEKS,MONTHS,YEARS","width":"100%"}, {}]
}]
}],
radioSet3: ["wm.RadioSet", {"caption":"Have you experienced any ‘new event’ since you started taking this medication(s)?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"87px","displayField":"dataValue","formField":"medsideffects","height":"87px","options":"YES,NO","showing":false,"width":"100%"}, {"onchange":"radioSet3Change"}],
checkboxSet1: ["wm.CheckboxSet", {"caption":"What was the outcome of the event? (may circle more than one)","captionSize":"140px","dataField":"dataValue","desktopHeight":"185px","displayField":"dataValue","emptyValue":"null","formField":"sideeffectoutcome","height":"185px","helpText":"May select more than one","mobileHeight":"100%","options":"RECOVERED,IMPROVED,CAUSED OR PROLONGED HOSPITALIZATION,UNCHANGED (NOT WORSENING NOR IMPROVING),LIFE THREATENING CONDITION,PERSISTENT INCAPACITY OR DISABILITY,OTHERS","required":true,"showing":false,"width":"100%"}, {"onchange":"checkboxSet1Change"}],
insertBy: ["wm.Number", {"caption":"Insertby","captionSize":"140px","dataValue":"","desktopHeight":"26px","disabled":true,"emptyValue":"emptyString","formField":"insertby","height":"26px","readonly":true,"width":"50%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
}]
}],
insertDate: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
selectMenu6: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","required":true,"width":"50%"}, {"onchange":"selectMenu6Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}],
wire1: ["wm.Wire", {"expression":"${app.clinician.dataValue}.length >1","targetProperty":"disabled"}, {}]
}]
}]
}],
pharmacovigilanceFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
pharmacovigilanceSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"pharmacovigilanceLiveForm1.saveDataIfValid","onclick1":"pharmacovigilanceSaveButtonClick1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${pharmacovigilanceLiveForm1.invalid} || !${pharmacovigilanceLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
pharmacovigilanceCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Pharmacovigilance_List"}],
pharmacovigilanceDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"pharmacovigilanceLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"pharmacovigilanceDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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

Pharmacovigilance.prototype._cssText = '';
Pharmacovigilance.prototype._htmlText = '';