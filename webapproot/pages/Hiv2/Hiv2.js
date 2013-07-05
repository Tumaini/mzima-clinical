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
        try {
            if (this.radioSet1.getDataValue() == 'DID NOT TEST' || this.radioSet1.getDataValue() == 'POSITIVE') {
                this.radioSet4.show();
                this.radioSet5.show();
            } else {
                this.radioSet4.hide();
                this.radioSet5.hide();
            }
        } catch (e) {}
    },
    radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet1.getDataValue() != 'DID NOT TEST' || this.radioSet1.getDataValue() != 'POSITIVE' && this.radioSet4.showing) {
                this.radioSet4.hide();
                this.radioSet5.hide();
            }
            if (this.radioSet1.getDataValue() == 'DID NOT TEST' || this.radioSet1.getDataValue() == 'POSITIVE' && this.radioSet3.getDataValue() !== undefined) {
                this.radioSet4.show();
                this.radioSet5.show();
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
    _end: 0
});