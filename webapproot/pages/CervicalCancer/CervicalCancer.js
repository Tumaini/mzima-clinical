dojo.declare("CervicalCancer", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    cervicalcancerNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null&&app.participantVar.getValue("dataValue") !==undefined) {
                this.cervicalcancerLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.text2.setDataValue(patientId);
                this.text2.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    cervicalcancerSaveButtonClick1: function(inSender) {
        try {
            if (this.radioSet2.getDataValue() === 'YES') {
                app.referral.setData({
                    dataValue: true
                });
            }
        } catch (g) {}

    },
    cervicalcancerSaveButtonClick2: function(inSender) {
        try {
            if (app.physicalExam.getValue("dataValue")) {
                app.toPhysExam.update();
            } else {
                if (app.onTreatment.getValue("dataValue")) {
                    app.toPharma.update();
                } else {
                    if (app.referral.getValue("dataValue")) {
                        app.toReferral.update();
                    } else {
                        app.toGeneral.update();
                    }
                }
            }

        } catch (e) {}
    },
    _end: 0
});