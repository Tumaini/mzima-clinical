dojo.declare("Pharmacovigilance", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    largeTextArea1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.largeTextArea1.getDataValue();
            this.largeTextArea1.setDataValue(inputStr.toUpperCase());
            if(inputStr.length > 0 ){
               this.sideeffectsSaveButton.setDisabled(false) ;
            }else{
                this.sideeffectsSaveButton.setDisabled(true) ;
            }
            

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    radioSet3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet3.getDataValue() == 'YES') {
                this.designableDialog1.show();
                this.checkboxSet1.setShowing(true);
            }else{
                this.checkboxSet1.setShowing(false);
            }
        } catch (e) {}
    },
    largeTextArea2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.largeTextArea2.getDataValue();
            this.largeTextArea2.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    checkboxSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.checkboxSet1.getDataValue() == 'OTHERS') {
                this.designableDialog2.show();
            }
        } catch (e) {}
    },
    pharmacovigilanceNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null && app.participantVar.getValue("dataValue") !== undefined) {
                this.pharmacovigilanceLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.serolinknumberEditor1.setDataValue(patientId);
                this.serolinknumberEditor1.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    pharmacovigilanceSaveButtonClick1: function(inSender) {
        try {
            if (app.referral.getValue("datavalue")) {
                app.toReferral.update();
            } else {
                app.toGeneral.update();
            }
        } catch (e) {}
    },
    newButton1Click1: function(inSender) {
        try {
            this.sideeffectsLiveForm1.beginDataInsert();
            var patientId;
            if (app.participantVar.getValue() === null) {
                patientId = this.serolinknumberEditor1.getDataValue();
            } else {
                patientId = app.participantVar.getValue("dataValue");
            }
            this.text7.setDataValue(patientId);
            this.text7.setDisabled(true);

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    newButton2Click1: function(inSender) {
        try {
            this.sideeffectoutcomesLiveForm1.beginDataInsert();
            var patientId;
            if (app.participantVar.getValue() === null) {
                patientId = this.serolinknumberEditor1.getDataValue();
            } else {
                patientId = app.participantVar.getValue("dataValue");
            }
            this.text2.setDataValue(patientId);
            this.text2.setDisabled(true);

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },
    radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            if (this.radioSet1.getDataValue() === 'YES') {
                this.panel1.setShowing(true);
                this.radioSet2.setRequired(true);
                this.radioSet3.setShowing(true);
                this.radioSet3.setRequired(true);
            } else {
                this.panel1.setShowing(false);                
                this.radioSet2.setRequired(false);
                this.radioSet3.setShowing(false);
                this.radioSet3.setRequired(false);

                if (this.number1.getRequired() === true) {
                    this.number1.setRequired(false);
                }
                if (this.number2.getRequired() === true) {
                    this.number2.setRequired(false);
                }
                if (this.number3.getRequired === true) {
                    this.number3.setRequired(false);
                }
                if (this.number4.getRequired === true) {
                    this.number4.setRequired(false);
                }
                if (this.number5.getRequired() === true) {
                    this.number5.setRequired(false);
                }
            }
        } catch (e) {}

    },
    selectMenu1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.selectMenu1.getDataValue() !== "NONE") {
            this.number1.setRequired(true);
            this.number1.setDisabled(false);
            this.selectMenu2.setDisabled(false);
            this.radioSet2.setDisabled(false);
        } else {
            this.number1.setRequired(false);
            this.number1.clear();
            this.number1.setDisabled(true);
            this.selectMenu2.setDisabled(true);
            this.radioSet2.setDisabled(true);
        }
    },
    selectMenu2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.selectMenu2.getDataValue() !== "NONE") {
            this.number2.setRequired(true);
            this.number2.setDisabled(false);
            this.selectMenu3.setDisabled(false);
        } else {
            this.number2.setRequired(false);
            this.number2.clear();
            this.number2.setDisabled(true);
            this.selectMenu3.setDisabled(true);
        }
    },
    selectMenu3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.selectMenu3.getDataValue() !== "NONE") {
            this.number3.setRequired(true);
            this.number3.setDisabled(false);
            this.selectMenu4.setDisabled(false);
        } else {
            this.number3.setRequired(false);
            this.number3.clear();
            this.number3.setDisabled(true);
            this.selectMenu4.setDisabled(true);
        }
    },
    selectMenu4Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.selectMenu4.getDataValue() !== "NONE") {
            this.number4.setRequired(true);
            this.number4.setDisabled(false);
            this.selectMenu5.setDisabled(false);
        } else {
            this.number4.setRequired(false);
            this.number4.clear();
            this.number4.setDisabled(true);
            this.selectMenu5.setDisabled(true);
        }
    },
    selectMenu5Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.selectMenu5.getDataValue() !== "NONE") {
            this.number5.setRequired(true);
            this.number5.setDisabled(false);
        } else {
            this.number5.setRequired(false);
            this.number5.clear();
            this.number5.setDisabled(true);
        }
    },
    sideeffectsNewButtonClick1: function(inSender) {
		try {
            this.sideeffectsLiveForm1.beginDataInsert();
            var patientId;
            if (app.participantVar.getValue() === null || app.participantVar.getValue() === undefined) {
                patientId = this.serolinknumberEditor1.getDataValue();
            } else {
                patientId = app.participantVar.getValue("dataValue");
            }
            this.text3.setDataValue(patientId);
            this.text3.setDisabled(true);

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
	},
	outcomeEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		var string = this.outcomeEditor1.getDataValue();
        this.outcomeEditor1.setDataValue(string.toUpperCase());
        
	},
	sideeffectoutcomesNewButtonClick1: function(inSender) {
		try {
            this.sideeffectoutcomesLiveForm1.beginDataInsert();
            var patientId;
            if (app.participantVar.getValue() === null || app.participantVar.getValue() === undefined) {
                patientId = this.serolinknumberEditor1.getDataValue();
                this.clinician1.setDisabled(false);
            } else {
                patientId = app.participantVar.getValue("dataValue");
            }
            this.text2.setDataValue(patientId);
            this.text2.setDisabled(true);

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
	},
	selectMenu6Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.selectMenu1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  selectMenu7Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.selectMenu1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  selectMenu8Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.selectMenu1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  _end: 0
});