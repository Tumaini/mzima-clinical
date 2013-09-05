dojo.declare("Hiv2", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
hivNewButtonClick1: function(inSender) {
try {
if (app.participantVar.getValue("dataValue") !== null&&app.participantVar.getValue("dataValue") !==undefined) {
this.hivLiveForm1.beginDataInsert();
var patientId = app.participantVar.getValue("dataValue");
this.serolinknumberEditor1.setDataValue(patientId);
this.serolinknumberEditor1.setDisabled(true);
}
} catch (e) {
console.error('ERROR IN newButton1Click: ' + e);
}
},
radioSet3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
},
radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try {
if (this.radioSet1.getDataValue() =='NEGATIVE' ) {
this.radioSet4.hide();
this.checkboxSet1.hide();
this.radioSet4.setRequired(false);
this.checkboxSet1.setRequired(false);
this.checkboxSet1.clear();
this.radioSet4.clear();
}
if (this.radioSet1.getDataValue() == 'DID NOT TEST' || this.radioSet1.getDataValue() == 'POSITIVE') {
this.radioSet4.show();
this.radioSet4.setRequired(true);
this.radioSet5.show();
this.radioSet5.setRequired(true);
}
} catch (e) {}
},
hivSaveButtonClick1: function(inSender) {
try {
if (this.radioSet3.getDataValue() === 'YES') {
app.physicalExam.setData({
dataValue: true
});
}
} catch (e) {}
try {
if (this.radioSet6.getDataValue() === 'YES') {
app.referral.setData({
dataValue: true
});
}
} catch (f) {}
try {
if (this.radioSet2.getDataValue() === 'Known positive and in follow up for care and treatment') {
app.onTreatment.setData({
dataValue: true
});
}
} catch (g) {}
app.toTB.update();
},
radioSet4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
try{
if(this.radioSet4.getDataValue()=='STAGE 1'){
this.checkboxSet1.setOptions('Asymptomatic,Persistent generalized lymphadenopathy');
this.checkboxSet1.setRequired(true);
this.checkboxSet1.setShowing(true);
}
if(this.radioSet4.getDataValue()=='STAGE 2'){
this.checkboxSet1.setOptions('Moderate and unexplained weight loss (<10% of presumed or measured body weight),Recurrent respiratory tract infections (such as sinusitis: bronchitis: otitis media: pharyngitis),Herpes zoster,Recurrent oral ulcerations,Papular pruritic eruptions,Angular cheilitis,Seborrhoeic dermatitis,Fungal finger nail infections');
this.checkboxSet1.setRequired(true);
this.checkboxSet1.setShowing(true);
}
if(this.radioSet4.getDataValue()=='STAGE 3'){
this.checkboxSet1.setOptions('Unexplained chronic diarrhoea for longer than one month,Unexplained persistent fever (intermittent or constant for longer than one month),Severe weight loss (>10% of presumed or measured body weight),Oral candidiasis,Oral hairy leukoplakia,Pulmonary tuberculosis (TB) diagnosed in last two years,Severe presumed bacterial infections (e.g. pneumonia; empyema; meningitis; bacteraemia; pyomyositis; bone or joint infection),Acute necrotizing ulcerative stomatitis, gingivitis or periodontitis,Unexplained anaemia (< 80 g/l), and or neutropenia (<500/µl) and or thrombocytopenia (<50 000/ µl) for more than one month');
this.checkboxSet1.setRequired(true);
this.checkboxSet1.setShowing(true);
}
if(this.radioSet4.getDataValue()=='STAGE 4'){
this.checkboxSet1.setOptions("HIV wasting syndrome,Pneumocystis pneumonia,Recurrent severe or radiological bacterial pneumonia,Chronic herpes simplex infection (orolabial or genital or anorectal of more than one months duration),Oesophageal candidiasis,Extrapulmonary Tuberculosis,Kaposi’s sarcoma,Central nervous system toxoplasmosis,HIV encephalopathy,Extrapulmonary cryptococcosis including meningitis,Disseminated non-tuberculous mycobacteria infection,Progressive multifocal leukoencephalopathy,Candida of trachea or  bronchi or lungs,Cryptosporidiosis,Isosporiasis,Visceral herpes simplex infection,Cytomegalovirus (CMV) infection (retinitis or of an organ other than liver or spleen or lymph nodes),Any disseminated mycosis (e.g. histoplasmosis or coccidiomycosis or penicilliosis),Recurrent non-typhoidal salmonella septicaemia,Lymphoma (cerebral or B cell non-Hodgkin),Invasive cervical carcinoma,Visceral leishmaniasis");
this.checkboxSet1.setRequired(true);
this.checkboxSet1.setShowing(true);
}
if(this.radioSet4.getDataValue().length <1){
this.checkboxSet1.setShowing(false);
this.checkboxSet1.setRequired(false);
}
}catch(e){}
},
_end: 0
});

Hiv2.widgets = {
hivLiveVariable1: ["wm.LiveVariable", {"matchMode":"anywhere","orderBy":"desc:insertdate","type":"com.mcddb.data.Hiv"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mcddb.data.Hiv","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Serolinknumber","sortable":true,"dataIndex":"serolinknumber","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Hivresult","sortable":true,"dataIndex":"hivresult","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Priorknowledgeofstatus","sortable":true,"dataIndex":"priorknowledgeofstatus","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Physicalexam","sortable":true,"dataIndex":"physicalexam","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Whostage","sortable":true,"dataIndex":"whostage","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Reasonforstage","sortable":true,"dataIndex":"reasonforstage","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Participanttobereferred","sortable":true,"dataIndex":"participanttobereferred","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Insertdate","sortable":true,"dataIndex":"insertdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Insertby","sortable":true,"dataIndex":"insertby","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Clinician","sortable":true,"dataIndex":"clinician","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}],
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
label3: ["wm.Label", {"caption":">>HIV","padding":"4","styles":{"backgroundColor":"#ffffff","fontWeight":"bolder"}}, {}],
seroNo: ["wm.Text", {"caption":"SEARCH BY SEROLINK NUMBER:","captionSize":"210px","changeOnKey":true,"dataValue":undefined,"displayValue":"","width":"400px"}, {}],
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
Hiv_List: ["wm.Layer", {"borderColor":"","caption":"HIV List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"hivDojoGrid.deselectAll"}, {
hivDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"serolinknumber","title":"Serolinknumber","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"hivresult","title":"Result","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"priorknowledgeofstatus","title":"Prior Knowledge","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"physicalexam","title":"Physical Exam","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"whostage","title":"Who Stage","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"reasonforstage","title":"Reason for Stage","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"participanttobereferred","title":"Referral","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Serolinknumber: \" + ${serolinknumber} + \"</div>\"\n+ \"<div class='MobileRow'>Result: \" + ${hivresult} + \"</div>\"\n+ \"<div class='MobileRow'>Prior Knowledge: \" + ${priorknowledgeofstatus} + \"</div>\"\n+ \"<div class='MobileRow'>Physical Exam: \" + ${physicalexam} + \"</div>\"\n+ \"<div class='MobileRow'>Who Stage: \" + ${whostage} + \"</div>\"\n+ \"<div class='MobileRow'>Reason for Stage: \" + ${reasonforstage} + \"</div>\"\n+ \"<div class='MobileRow'>Referral: \" + ${participanttobereferred} + \"</div>\"\n","mobileColumn":true},{"show":false,"field":"insertdate","title":"Insertdate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},{"show":false,"field":"insertby","title":"Insertby","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"clinician","title":"Clinician","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.mcddb.data.Hiv","height":"100%","localizationStructure":{},"margin":"4"}, {"onSelect":"hivLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"hivLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
hivGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
hivNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"hivLivePanel1.popupLivePanelInsert","onclick1":"hivNewButtonClick1"}]
}]
}],
Edit_Hiv: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit HIV","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
hivLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"autoScroll":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"hivLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"hivDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idEditor1: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"id","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
serolinknumberEditor1: ["wm.Text", {"caption":"Serolinknumber","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"serolinknumber","height":"26px","required":true,"width":"50%"}, {}],
date1: ["wm.Date", {"caption":"Insertdate","captionSize":"140px","dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"insertdate","height":"26px","showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"defaultInsert"}, {}]
}]
}],
radioSet1: ["wm.RadioSet", {"caption":"Participants HIV Test results","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"90px","displayField":"dataValue","formField":"hivresult","height":"90px","options":"POSITIVE,NEGATIVE,DID NOT TEST","required":true,"width":"100%"}, {"onchange":"radioSet1Change"}],
radioSet2: ["wm.RadioSet", {"caption":"Participant’s prior knowledge of his or her HIV status and their care status","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"135px","displayField":"dataValue","formField":"priorknowledgeofstatus","height":"135px","options":"Known positive and in follow up for care and treatment,Known positive BUT NOT in care and treatment followup,Known negative,Did not know status before today but now knows,Unknown status (Did not test today)","required":true,"width":"100%"}, {"onchange":"radioSet2Change"}],
radioSet3: ["wm.RadioSet", {"caption":"Is physical examination to be performed? (For HIV pos or not tested today or with significant complaints)","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"98px","displayField":"dataValue","formField":"physicalexam","height":"98px","options":"YES,NO","required":true,"width":"100%"}, {"onchange":"radioSet3Change"}],
radioSet4: ["wm.RadioSet", {"caption":"WHO stage (if Q9 is 1 or 3)","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"140px","displayField":"dataValue","formField":"whostage","height":"140px","options":"STAGE 1,STAGE 2,STAGE 3,STAGE 4,NONE","showing":false,"width":"100%"}, {"onchange":"radioSet4Change"}],
checkboxSet1: ["wm.CheckboxSet", {"caption":"Reason for Stage","captionSize":"140px","desktopHeight":"220px","emptyValue":"null","formField":"reasonforstage","height":"220px","showing":false,"width":"100%"}, {}],
radioSet6: ["wm.RadioSet", {"caption":"Participant to be referred?","captionSize":"140px","dataField":"dataValue","dataValue":undefined,"desktopHeight":"56px","displayField":"dataValue","formField":"participanttobereferred","height":"56px","options":"YES,NO","required":true,"width":"100%"}, {}],
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
hivFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
hivSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"hivLiveForm1.saveDataIfValid","onclick1":"hivSaveButtonClick1"}, {
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
};

Hiv2.prototype._cssText = '';
Hiv2.prototype._htmlText = '';