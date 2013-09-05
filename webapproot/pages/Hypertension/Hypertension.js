dojo.declare("Hypertension", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    hypertensionNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null && app.participantVar.getValue("dataValue") !== undefined) {
                this.hypertensionLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.serolinknumberEditor1.setDataValue(patientId);
                this.serolinknumberEditor1.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    radioSet2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet2.getDataValue() == 'YES') {
                this.radioSet3.setShowing(true);
            } else {
                this.radioSet3.setShowing(false);
            }
        } catch (e) {}
    },
    hypertensionSaveButtonClick1: function(inSender) {
        try {
            if (this.radioSet5.getDataValue() === 'YES') {
                app.referral.setData({
                    dataValue: true
                });
            }
        } catch (g) {}

        try {
            if (this.radioSet4.getDataValue() === 'YES') {
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

        app.toCVD.update();
    },
    radioSet6Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet6.getDataValue() === 'NO') {
                this.radioSet1.setDataValue('NOT TESTED');
                this.radioSet1.setDisabled(true);
                this.radioSet7.setDataValue('NO');
                this.radioSet7.setDisabled(true);
                this.radioSet8.setDataValue('NO');
                this.radioSet8.setDisabled(true);
                this.radioSet2.setDataValue('NO');
                this.radioSet2.setDisabled(true);
                this.checkboxSet1.setDataValue('NONE');
                this.checkboxSet1.setDisabled(true);
                this.radioSet4.setDataValue('NO');
                this.radioSet4.setDisabled(true);
                this.radioSet5.setDataValue('NO');
                this.radioSet5.setDisabled(true);
                if(this.serolinknumberEditor1.getDataValue().length > 0){
                    this.serolinknumberEditor1.setDisabled(true);
                }
                if(this.selectMenu1.getDataValue().length > 0){
                    this.selectMenu.setDisabled(true);
                }

            }if(this.radioSet6.getDataValue() === 'YES'){
                this.radioSet1.clear();
                this.radioSet1.setDisabled(false);
                this.radioSet7.clear();
                this.radioSet7.setDisabled(false);
                this.radioSet8.clear();
                this.radioSet8.setDisabled(false);
                this.radioSet2.clear();
                this.radioSet2.setDisabled(false);
                this.checkboxSet1.clear();
                this.checkboxSet1.setDisabled(false);
                this.radioSet4.clear();
                this.radioSet4.setDisabled(false);
                this.radioSet5.clear();
                this.radioSet5.setDisabled(false);
                if(this.serolinknumberEditor1.getDataValue().length > 0){
                    this.serolinknumberEditor1.setDisabled(true);
                }
                if(this.selectMenu1.getDataValue().length > 0){
                    this.selectMenu.setDisabled(true);
                }
            }
        } catch (e) {}
    },
    radioSet7Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet7.getDataValue() === 'YES') {
                this.number1.setShowing(true);
                this.number1.setRequired(true);
            }
        } catch (e) {}
    },
    radioSet8Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet8.getDataValue() === 'YES') {
                this.number2.setShowing(true);
                this.number2.setRequired(true);
            }
        } catch (e) {}
    },
    _end: 0
});