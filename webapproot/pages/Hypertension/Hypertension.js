dojo.declare("Hypertension", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    hypertensionNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null&&app.participantVar.getValue("dataValue") !==undefined) {
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
    _end: 0
});