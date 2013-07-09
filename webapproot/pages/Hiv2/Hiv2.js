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