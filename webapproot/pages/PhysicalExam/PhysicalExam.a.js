dojo.declare("PhysicalExam", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
physicalexamNewButtonClick1: function(inSender) {
try {
if (app.participantVar.getValue("dataValue") !== null && app.participantVar.getValue("dataValue") !== undefined) {
this.physicalexamLiveForm1.beginDataInsert();
var patientId = app.participantVar.getValue("dataValue");
this.serolinknumberEditor1.setDataValue(patientId);
this.serolinknumberEditor1.setDisabled(true);
}
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
physicalexamSaveButtonClick: function(inSender) {
try {
if (this.headandneckEditor1.getDataValue() === null) {
this.headandneckEditor1.setDataValue("NA");
}
if (this.entEditor1.getDataValue() === null) {
this.entEditor1.setDataValue("NA");
}
if (this.skinandappendagesEditor1.getDataValue() === null) {
this.skinandappendagesEditor1.setDataValue("NA");
}
if (this.respiratoryEditor1.getDataValue() === null) {
this.respiratoryEditor1.setDataValue("NA");
}
if (this.cardiovascularEditor1.getDataValue() === null) {
this.cardiovascularEditor1.setDataValue("NA");
}
if (this.abdomenEditor1.getDataValue() === null) {
this.abdomenEditor1.setDataValue("NA");
}
if (this.cnsEditor1.getDataValue() === null) {
this.cnsEditor1.setDataValue("NA");
}
if (this.limbsandmusculoskeletalEditor1.getDataValue() === null) {
this.limbsandmusculoskeletalEditor1.setDataValue("NA");
}
this.physicalexamLiveForm1.saveDataIfValid();
} catch (e) {}
},
headandneckEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.headandneckEditor1.getDataValue();
this.headandneckEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
entEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.entEditor1.getDataValue();
this.entEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
skinandappendagesEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.skinandappendagesEditor1.getDataValue();
this.skinandappendagesEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
respiratoryEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.respiratoryEditor1.getDataValue();
this.respiratoryEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
cardiovascularEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.cardiovascularEditor1.getDataValue();
this.cardiovascularEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
abdomenEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.abdomenEditor1.getDataValue();
this.abdomenEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
cnsEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.cnsEditor1.getDataValue();
this.cnsEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
limbsandmusculoskeletalEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
var inputStr = this.limbsandmusculoskeletalEditor1.getDataValue();
this.limbsandmusculoskeletalEditor1.setDataValue(inputStr.toUpperCase());
} catch (e) {
console.error('ERROR IN largeTextArea1Change: ' + e);
}
},
serolinknumberEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.physicalexamSaveButton.setDisabled(false);
},
physicalexamSaveButtonClick1: function(inSender) {
try {
if (app.onTreatment.getValue("dataValue")) {
app.toPharma.update();
} else {
if (app.referral.getValue("dataValue")) {
app.toReferral.update();
}else{
app.toGeneral.update();
}
}
} catch (e) {}
},
_end: 0
});

PhysicalExam.widgets = {
physicalexamLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Physicalexam"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Physicalexam","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Headandneck","sortable":true,"dataIndex":"headandneck","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Ent","sortable":true,"dataIndex":"ent","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Skinandappendages","sortable":true,"dataIndex":"skinandappendages","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Respiratory","sortable":true,"dataIndex":"respiratory","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Cardiovascular","sortable":true,"dataIndex":"cardiovascular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Abdomen","sortable":true,"dataIndex":"abdomen","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Cns","sortable":true,"dataIndex":"cns","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Limbsandmusculoskeletal","sortable":true,"dataIndex":"limbsandmusculoskeletal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null}]}, {}]
}],
physicalexamLiveVariable2: ["wm.LiveVariable", {"type":"com.mcddb.data.Physicalexam"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Physicalexam","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Headandneck","sortable":true,"dataIndex":"headandneck","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Ent","sortable":true,"dataIndex":"ent","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Skinandappendages","sortable":true,"dataIndex":"skinandappendages","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Respiratory","sortable":true,"dataIndex":"respiratory","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Cardiovascular","sortable":true,"dataIndex":"cardiovascular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Abdomen","sortable":true,"dataIndex":"abdomen","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Cns","sortable":true,"dataIndex":"cns","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Limbsandmusculoskeletal","sortable":true,"dataIndex":"limbsandmusculoskeletal","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null}]}, {}]
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
label3: ["wm.Label", {"caption":">>PHYSICAL EXAM","padding":"4","styles":{"backgroundColor":"#ffffff","fontWeight":"bolder"}}, {}],
panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
physicalexamLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Physicalexam_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Physicalexam","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"physicalexamLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"physicalexamDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"physicalexamSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
physicalexamLayers: ["wm.BreadcrumbLayers", {}, {}, {
Physicalexam_List: ["wm.Layer", {"borderColor":"","caption":"Physicalexam List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"physicalexamDojoGrid.deselectAll"}, {
physicalexamDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"119px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"headandneck","title":"Headandneck","width":"114px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"ent","title":"ENT","width":"35px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"skinandappendages","title":"Skin and Appendages","width":"107px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"respiratory","title":"Respiratory","width":"92px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"cardiovascular","title":"Cardiovascular","width":"123px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"abdomen","title":"Abdomen","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"cns","title":"CNS","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"limbsandmusculoskeletal","title":"Limbsandmusculoskeletal","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Headandneck: \" + ${headandneck} + \"</div>\"\n+ \"<div class='MobileRow'>ENT: \" + ${ent} + \"</div>\"\n+ \"<div class='MobileRow'>Skin and Appendages: \" + ${skinandappendages} + \"</div>\"\n+ \"<div class='MobileRow'>Respiratory: \" + ${respiratory} + \"</div>\"\n+ \"<div class='MobileRow'>Cardiovascular: \" + ${cardiovascular} + \"</div>\"\n+ \"<div class='MobileRow'>Abdomen: \" + ${abdomen} + \"</div>\"\n+ \"<div class='MobileRow'>CNS: \" + ${cns} + \"</div>\"\n+ \"<div class='MobileRow'>Limbsandmusculoskeletal: \" + ${limbsandmusculoskeletal} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Physicalexam","height":"100%","margin":"4"}, {"onSelect":"physicalexamLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicalexamLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}],
physicalexamGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
physicalexamNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"physicalexamLivePanel1.popupLivePanelInsert","onclick1":"physicalexamNewButtonClick1"}]
}]
}],
Edit_Physicalexam: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Physicalexam","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
physicalexamLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"physicalexamLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"physicalexamDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
serolinknumberEditor1: ["wm.Text", {"caption":"Sero Link Number","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {"onchange":"serolinknumberEditor1Change"}],
headandneckEditor1: ["wm.Text", {"caption":"Head and Neck","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"headandneck","height":"26px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","width":"100%"}, {"onchange":"headandneckEditor1Change"}],
entEditor1: ["wm.Text", {"caption":"ENT","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"ent","height":"26px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","width":"100%"}, {"onchange":"entEditor1Change"}],
skinandappendagesEditor1: ["wm.Text", {"caption":"Skin and Appendages","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"skinandappendages","height":"26px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","width":"100%"}, {"onchange":"skinandappendagesEditor1Change"}],
respiratoryEditor1: ["wm.Text", {"caption":"Respiratory","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"respiratory","height":"26px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","width":"100%"}, {"onchange":"respiratoryEditor1Change"}],
cardiovascularEditor1: ["wm.Text", {"caption":"Cardiovascular","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"cardiovascular","height":"26px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","width":"100%"}, {"onchange":"cardiovascularEditor1Change"}],
abdomenEditor1: ["wm.Text", {"caption":"Abdomen","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"abdomen","height":"26px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","width":"100%"}, {"onchange":"abdomenEditor1Change"}],
cnsEditor1: ["wm.Text", {"caption":"CNS","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"cns","height":"26px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","width":"100%"}, {"onchange":"cnsEditor1Change"}],
limbsandmusculoskeletalEditor1: ["wm.Text", {"caption":"Limbs And Musculoskeletal","captionSize":"140px","changeOnKey":true,"desktopHeight":"36px","emptyValue":"null","formField":"limbsandmusculoskeletal","height":"36px","placeHolder":"ACHA WAZI KAMA HAMNA JIBU","singleLine":false,"width":"100%"}, {"onchange":"limbsandmusculoskeletalEditor1Change","onchange1":"limbsandmusculoskeletalEditor1Change1"}],
date1: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
number1: ["wm.Number", {"caption":"Insert By","captionSize":"140px","dataValue":"","desktopHeight":"26px","disabled":true,"emptyValue":"emptyString","formField":"insertby","height":"26px","readonly":true,"width":"50%"}, {}, {
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
physicalexamFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
physicalexamSaveButton: ["wm.Button", {"caption":"Save","disabled":true,"margin":"4"}, {"onclick":"physicalexamSaveButtonClick","onclick1":"physicalexamSaveButtonClick1"}],
physicalexamCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Physicalexam_List"}],
physicalexamDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"physicalexamLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"physicalexamDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2013 Ifakara Health Institute","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
}]
}]
};

PhysicalExam.prototype._cssText = '';
PhysicalExam.prototype._htmlText = '';