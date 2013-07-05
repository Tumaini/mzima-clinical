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
    _end: 0
});