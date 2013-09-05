dojo.declare("Diabetes", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    checkboxSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {},
    diabetesNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null&&app.participantVar.getValue("dataValue") !==undefined) {
                this.diabetesLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.text2.setDataValue(patientId);
                this.text2.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    radioSet2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet2.getDataValue() == 'YES') {
                this.radioSet3.setShowing(true);
                // this.spacer1.setShowing(false);
                //this.panelCenter.setAutoScroll(true);
            } else {
                this.radioSet3.setShowing(false);
                //this.spacer1.setShowing(true);
            }
        } catch (e) {

        }
    },
    diabetesSaveButtonClick1: function(inSender) {
        try {
            if (this.radioSet5.getDataValue() === 'YES') {
                app.referral.setData({
                    dataValue: true
                });
            }
        } catch (g) {}

        try {
            if (this.radioSet6.getDataValue() === 'YES') {
                app.physicalExam.setData({
                    dataValue: true
                });
            }
        } catch (e) {}

        try {
            if (this.radioSet3.getDataValue() === 'YES') {
                app.onTreatment.setData({
                    dataValue: true
                });
            }
        } catch (f) {}

        app.toHypertension.update();
    },
    radioSet4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        
		try{
            
            if(this.radioSet4.getDataValue()==='NO'){               
                
                this.radioSet1.setDataValue('NOT TESTED');
                this.radioSet1.setRequired(false);
                this.radioSet1.setDisabled(true);
                this.bloodsugarlevelEditor1.setRequired(false);
                this.bloodsugarlevelEditor1.setDisabled(true);
                this.radioSet2.setDataValue('NO');
                this.radioSet2.setRequired(false);
                this.radioSet2.setDisabled(true);
                this.checkboxSet1.setDataValue('NONE');
                this.checkboxSet1.setRequired(false);
                this.checkboxSet1.setDisabled(true);
                this.radioSet6.setDataValue('NO');
                this.radioSet6.setRequired(false);
                this.radioSet6.setDisabled(true);
                this.radioSet5.setDataValue('NO');
                this.radioSet5.setRequired(false);
                this.radioSet5.setDisabled(true);
                this.number1.setRequired(false);
                this.number1.setDisabled(true);
                if(this.text2.getDataValue().length > 0){
                    this.text2.setDisabled(true);
                }
                if(this.selectMenu1.getDataValue().length > 0){
                    this.selectMenu.setDisabled(true);
                }
                
            }if(this.radioSet4.getDataValue()==='YES'){
                this.radioSet1.clear();
                this.radioSet1.setRequired(true);
                this.radioSet1.setDisabled(false);
                this.bloodsugarlevelEditor1.setRequired(true);
                this.bloodsugarlevelEditor1.setDisabled(false);
                this.radioSet2.clear();
                this.radioSet2.setRequired(true);
                this.radioSet2.setDisabled(false);
                this.checkboxSet1.clear();
                this.checkboxSet1.setRequired(true);
                this.checkboxSet1.setDisabled(false);
                this.radioSet6.clear();
                this.radioSet6.setRequired(true);
                this.radioSet6.setDisabled(false);
                this.radioSet5.clear();
                this.radioSet5.setRequired(true);
                this.radioSet5.setDisabled(false);
                this.number1.setRequired(true);
                this.number1.setDisabled(false);
                if(this.text2.getDataValue().length > 0){
                    this.text2.setDisabled(true);
                }
                if(this.selectMenu1.getDataValue().length > 0){
                    this.selectMenu.setDisabled(true);
                }
            }
		}catch(e){}
	},
	_end: 0
});