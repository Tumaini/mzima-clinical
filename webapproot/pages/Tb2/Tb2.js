dojo.declare("Tb2", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    tbNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null&&app.participantVar.getValue("dataValue") !==undefined) {
                this.tbLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.seroLinkNumberEditor1.setDataValue(patientId);
                this.seroLinkNumberEditor1.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet1.getDataValue() == 'YES') {
                this.radioSet2.setShowing(true);
                this.spacer1.setShowing(true);
            } else {
                this.radioSet2.setShowing(false);
                this.spacer1.setShowing(false);
            }
        } catch (e) {

        }
    },
    tbSaveButtonClick1: function(inSender) {
        try {
            if (this.radioSet5.getDataValue() === 'YES') {
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
        } catch (g) {}

        try {
            if (this.radioSet2.getDataValue() === 'YES') {
                app.onTreatment.setData({
                    dataValue: true
                });
            }
        } catch (f) {}

        app.toDiabetes.update();
    },
    _end: 0
});