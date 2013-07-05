dojo.declare("Referral", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },


    referralSaveButtonClick: function(inSender) {
        try {
            app.toGeneral.update();
        } catch (e) {}
    },
    referralNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null && app.participantVar.getValue("dataValue") !==undefined) {
                this.referralLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.text2.setDataValue(patientId);
                this.text2.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    facilityEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var string = this.facilityEditor1.getDataValue();
        this.facilityEditor1.setDataValue(string.toUpperCase());
    },
    radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet1.getDataValue() === 'Other') {
                this.designableDialog1.setShowing(true);
            } else {
                this.designableDialog1.setShowing(false);
            }
        } catch (e) {}
    },
    newButton1Click1: function(inSender) {
        try {

            if (app.participantVar.getValue("dataValue") !== null || this.text2.getDataValue() !== null) {
                var id;
                if (app.participantVar.getValue("dataValue") !== null) {
                    id = app.participantVar.getValue("dataValue");
                } else {
                    id = this.text2.getDataValue();
                    this.clinician1.setDisabled(false);
                }

                this.otherreferralfacilityLiveForm1.beginDataInsert();
                this.serolinknumberEditor2.setDataValue(id);
                this.serolinknumberEditor2.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    reasonEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var string = this.reasonEditor1.getDataValue();
        this.reasonEditor1.setDataValue(string.toUpperCase());
    },
    newButton2Click1: function(inSender) {
        if (app.participantVar.getValue("dataValue") !== null || this.text2.getDataValue() !== null) {
            var id;
            if (app.participantVar.getValue("dataValue") !== null) {
                id = app.participantVar.getValue("dataValue");
            } else {
                id = this.text2.getDataValue();
                this.clinician2.setDisabled(false);
            }
            this.otherreferralreasonLiveForm1.beginDataInsert();
            this.serolinknumberEditor3.setDataValue(id);
            this.serolinknumberEditor3.setDisabled(true);
        }
    },
    checkboxSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		try{
            
            if(this.checkboxSet1.getDataValue()=='Other'){
                this.designableDialog2.setShowing(true);  
            }else{
                this.designableDialog2.setShowing(false);
            }
		}catch(e){
               
		}
	},
	_end: 0
});