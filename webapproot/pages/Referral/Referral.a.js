dojo.declare("Referral", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
referralSaveButtonClick: function(inSender) {
try {
this.referralLiveForm1.saveDataIfValid();
app.toGeneral.update();
} catch (e) {}
},
referralNewButtonClick1: function(inSender) {
try {
if (app.participantVar.getValue("dataValue") !== null && app.participantVar.getValue("dataValue") !==undefined) {
this.referralLiveForm1.beginDataInsert();
var patientId = app.participantVar.getValue("dataValue");
this.text2.setDataValue(patientId);
this.text2.setDisabled(true);
}
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
facilityEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var string = this.facilityEditor1.getDataValue();
this.facilityEditor1.setDataValue(string.toUpperCase());
},
radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
if (this.radioSet1.getDataValue() === 'Other') {
this.designableDialog1.setShowing(true);
} else {
this.designableDialog1.setShowing(false);
}
} catch (e) {}
},
newButton1Click1: function(inSender) {
try {
if (app.participantVar.getValue("dataValue") !== null || this.text2.getDataValue() !== null) {
var id;
if (app.participantVar.getValue("dataValue") !== null) {
id = app.participantVar.getValue("dataValue");
} else {
id = this.text2.getDataValue();
this.clinician1.setDisabled(false);
}
this.otherreferralfacilityLiveForm1.beginDataInsert();
this.serolinknumberEditor2.setDataValue(id);
this.serolinknumberEditor2.setDisabled(true);
}
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
reasonEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var string = this.reasonEditor1.getDataValue();
this.reasonEditor1.setDataValue(string.toUpperCase());
},
newButton2Click1: function(inSender) {
if (app.participantVar.getValue("dataValue") !== null || this.text2.getDataValue() !== null) {
var id;
if (app.participantVar.getValue("dataValue") !== null) {
id = app.participantVar.getValue("dataValue");
} else {
id = this.text2.getDataValue();
this.clinician2.setDisabled(false);
}
this.otherreferralreasonLiveForm1.beginDataInsert();
this.serolinknumberEditor3.setDataValue(id);
this.serolinknumberEditor3.setDisabled(true);
}
},
checkboxSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try{
if(this.checkboxSet1.getDataValue()=='Other'){
this.designableDialog2.setShowing(true);
}else{
this.designableDialog2.setShowing(false);
}
}catch(e){
}
},
_end: 0
});

Referral.widgets = {
referralLiveVariable1: ["wm.LiveVariable", {"matchMode":"anywhere","orderBy":"desc:insertdate","type":"com.mcddb.data.Referral"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Referral","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Facility","sortable":true,"dataIndex":"facility","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Reason","sortable":true,"dataIndex":"reason","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"seroNo.dataValue","targetProperty":"filter.serolinknumber"}, {}]
}]
}],
designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"700px","height":"700px","title":"Referral Facility"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
otherreferralfacilityLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
otherreferralfacilityGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Otherreferralfacility"}, {}, {
otherreferralfacilityDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Facility: \" + ${facility} + \"</div>\"\n+ \"<div class='MobileRow'>Insertby: \" + ${insertby} + \"</div>\"\n+ \"<div class='MobileRow'>Insertdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${insertdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Clinician: \" + ${clinician} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"facility","title":"Facility","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":true,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Otherreferralfacility","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"otherreferralfacilityLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
otherreferralfacilityDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"166px","title":"Details"}, {}, {
otherreferralfacilityLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"136px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"otherreferralfacilityLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralfacilityDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
serolinknumberEditor2: ["wm.Text", {"caption":"Serolinknumber","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
facilityEditor1: ["wm.Text", {"caption":"Facility","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"facility","height":"26px","readonly":true,"width":"90%"}, {"onchange":"facilityEditor1Change"}],
date2: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","desktopHeight":"26px","emptyValue":"null","formField":"insertdate","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
number2: ["wm.Number", {"caption":"Insertby","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"insertby","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
}]
}],
selectMenu2: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","readonly":true,"required":true,"width":"90%"}, {"onchange":"selectMenu2Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}],
wire1: ["wm.Wire", {"expression":"${app.clinician.dataValue}.length >1","targetProperty":"disabled"}, {}]
}]
}],
otherreferralfacilityLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"otherreferralfacilityLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"otherreferralfacilityLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralfacilityLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"otherreferralfacilityLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"otherreferralfacilityLiveForm1EditPanel.beginDataInsert","onclick1":"newButton1Click1"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"otherreferralfacilityLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralfacilityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"otherreferralfacilityLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralfacilityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
otherreferralfacilityLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Otherreferralfacility"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Otherreferralfacility","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Facility","sortable":true,"dataIndex":"facility","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
designableDialog2: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","desktopHeight":"700px","height":"700px","title":"Other Referral Reason"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
otherreferralreasonLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
otherreferralreasonGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Otherreferralreason"}, {}, {
otherreferralreasonDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Reason: \" + ${reason} + \"</div>\"\n+ \"<div class='MobileRow'>Insertby: \" + ${insertby} + \"</div>\"\n+ \"<div class='MobileRow'>Insertdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${insertdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Clinician: \" + ${clinician} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"id","title":"Id","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"reason","title":"Reason","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":true,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Otherreferralreason","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"otherreferralreasonLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
otherreferralreasonDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"166px","title":"Details"}, {}, {
otherreferralreasonLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"136px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"otherreferralreasonLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralreasonDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
serolinknumberEditor3: ["wm.Text", {"caption":"Serolinknumber","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
reasonEditor1: ["wm.Text", {"caption":"Reason","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"reason","height":"26px","readonly":true,"required":true,"width":"90%"}, {"onchange":"reasonEditor1Change"}],
date3: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","desktopHeight":"26px","emptyValue":"null","formField":"insertdate","height":"26px","readonly":true,"showing":false,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
number3: ["wm.Number", {"caption":"Insertby","captionSize":"140px","desktopHeight":"26px","disabled":true,"emptyValue":"null","formField":"insertby","height":"26px","readonly":true,"width":"90%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
}]
}],
selectMenu3: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","readonly":true,"required":true,"width":"90%"}, {"onchange":"selectMenu3Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}],
wire1: ["wm.Wire", {"expression":"${app.clinician.dataValue}.length >1","targetProperty":"disabled"}, {}]
}]
}],
otherreferralreasonLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"otherreferralreasonLiveForm1","lock":false,"operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton2: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"otherreferralreasonLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralreasonLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton2: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"otherreferralreasonLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton2: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"otherreferralreasonLiveForm1EditPanel.beginDataInsert","onclick1":"newButton2Click1"}],
updateButton2: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"otherreferralreasonLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralreasonLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton2: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"otherreferralreasonLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otherreferralreasonLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}],
buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
}],
otherreferralreasonLiveVariable1: ["wm.LiveVariable", {"type":"com.mcddb.data.Otherreferralreason"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Otherreferralreason","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Reason","sortable":true,"dataIndex":"reason","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
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
label3: ["wm.Label", {"caption":">>REFERRAL","padding":"4","styles":{"backgroundColor":"#ffffff","fontWeight":"bolder"}}, {}],
seroNo: ["wm.Text", {"caption":"SEARCH BY SEROLINK NUMBER:","captionSize":"210px","changeOnKey":true,"dataValue":undefined,"desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}],
panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
referralLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Referral_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Referral","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"referralLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"referralDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"referralSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
referralLayers: ["wm.BreadcrumbLayers", {}, {}, {
Referral_List: ["wm.Layer", {"borderColor":"","caption":"Referral List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"referralDojoGrid.deselectAll"}, {
referralDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"157px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"facility","title":"Facility","width":"269px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"reason","title":"Reason","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Facility: \" + ${facility} + \"</div>\"\n+ \"<div class='MobileRow'>Reason: \" + ${reason} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Referral","height":"100%","margin":"4"}, {"onSelect":"referralLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"referralLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
referralGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
referralNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"referralLivePanel1.popupLivePanelInsert","onclick1":"referralNewButtonClick1"}]
}]
}],
Edit_Referral: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Referral","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
referralLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"autoScroll":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"referralLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"referralDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
text2: ["wm.Text", {"caption":"Sero Link Number","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
radioSet1: ["wm.RadioSet", {"caption":"Facility","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","formField":"facility","options":"St. Francis referral hospital,Kibaoni district hospital,Other","required":true,"width":"100%"}, {"onchange":"radioSet1Change"}],
checkboxSet1: ["wm.CheckboxSet", {"caption":"Reason","captionSize":"140px","dataField":"dataValue","desktopHeight":"382px","displayField":"dataValue","emptyValue":"null","formField":"reason","height":"382px","options":"HIV testing,HIV care and treatment,PMTCT services,TB evaluation( sputum and or Chest xray),Confirmation of diabetes and treatment,Repeat testing of blood sugar and diagnosis,Confirmation of hypertension and treatment,Repeat BP measurement and diagnosis,Heart disease/failure confirm and treatment,Further evaluation for heart condition,ANC care for high risk pregnancies,Cervical cancer screening because of symptoms,Cervical cancer screening because of HIV positive status,Cervical cancer screening because of age 30 to 50 years,Other","required":true,"width":"100%"}, {"onchange":"checkboxSet1Change"}],
number1: ["wm.Number", {"caption":"Insertby","captionSize":"140px","dataValue":"","desktopHeight":"26px","disabled":true,"emptyValue":"emptyString","formField":"insertby","height":"26px","readonly":true,"width":"50%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.loggedInUser.dataValue","targetProperty":"defaultInsert"}, {}]
}]
}],
date1: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":undefined,"desktopHeight":"26px","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
selectMenu1: ["wm.SelectMenu", {"caption":"Clinician","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"26px","displayField":"dataValue","formField":"clinician","height":"26px","options":"DNN,GEM,IHU,LAN,SRA,WEL","required":true,"width":"50%"}, {"onchange":"selectMenu1Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.clinician.dataValue","targetProperty":"defaultInsert"}, {}],
wire1: ["wm.Wire", {"expression":"${app.clinician.dataValue}.length >1","targetProperty":"disabled"}, {}]
}]
}]
}],
referralFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
referralSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"referralSaveButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${referralLiveForm1.invalid} || !${referralLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
referralCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"Referral_List"}],
referralDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"referralLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"referralDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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

Referral.prototype._cssText = '';
Referral.prototype._htmlText = '';