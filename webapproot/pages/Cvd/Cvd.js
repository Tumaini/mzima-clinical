dojo.declare("Cvd", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    cvdNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null&&app.participantVar.getValue("dataValue") !==undefined) {
                this.cvdLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.serolinknumberEditor1.setDataValue(patientId);
                this.serolinknumberEditor1.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    cvdSaveButtonClick1: function(inSender) {

        try {
            if (this.radioSet4.getDataValue() === 'YES') {
                app.referral.setData({
                    dataValue: true
                });
            }
        } catch (g) {}

        try {
            if (this.radioSet3.getDataValue() === 'YES') {
                app.physicalExam.setData({
                    dataValue: true
                });
            }
        } catch (f) {}

        try {
            if (this.radioSet2.getDataValue() === 'YES') {
                app.onTreatment.setData({
                    dataValue: true
                });
            }
        } catch (h) {}

        try {
            if (app.gender.getValue("dataValue") === 'F') {
                app.toCancer.update();
            } else {
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
            }
        } catch (e) {

        }


    },
    radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {

        try {
            if (this.radioSet1.getDataValue() == 'YES') {
                this.radioSet2.setShowing(true);
            } else {
                this.radioSet2.setShowing(false);
            }
        } catch (e) {}
    },
    checkboxSet2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		try{
            alert(this.checkboxSet2.getDataValue());
            if(this.checkboxSet2.getDataValue()!='NONE' && this.checkboxSet2.getDataValue().length >0){
                this.checkboxSet1.setDisabled(false);
                this.checkboxSet1.setRequired(true);
                alert("NOT NONE");
            }else{
                if(this.checkboxSet2.getDataValue()=='NONE'){
                    alert("NONE");
                this.checkboxSet1.setDisabled(true);
                this.checkboxSet1.setRequired(false);
                }
            }
		}catch(e){}
	},
	_end: 0
});