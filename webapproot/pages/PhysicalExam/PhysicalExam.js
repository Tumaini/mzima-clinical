dojo.declare("PhysicalExam", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {

    },

    physicalexamNewButtonClick1: function(inSender) {
        try {
            if (app.participantVar.getValue("dataValue") !== null && app.participantVar.getValue("dataValue") !== undefined) {
                this.physicalexamLiveForm1.beginDataInsert();
                var patientId = app.participantVar.getValue("dataValue");
                this.serolinknumberEditor1.setDataValue(patientId);
                this.serolinknumberEditor1.setDisabled(true);
            }

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
    },

    physicalexamSaveButtonClick: function(inSender) {
        try {
            if (this.headandneckEditor1.getDataValue() === null) {
                this.headandneckEditor1.setDataValue("NA");
            }
            if (this.entEditor1.getDataValue() === null) {
                this.entEditor1.setDataValue("NA");
            }
            if (this.skinandappendagesEditor1.getDataValue() === null) {
                this.skinandappendagesEditor1.setDataValue("NA");
            }
            if (this.respiratoryEditor1.getDataValue() === null) {
                this.respiratoryEditor1.setDataValue("NA");
            }
            if (this.cardiovascularEditor1.getDataValue() === null) {
                this.cardiovascularEditor1.setDataValue("NA");
            }
            if (this.abdomenEditor1.getDataValue() === null) {
                this.abdomenEditor1.setDataValue("NA");
            }
            if (this.cnsEditor1.getDataValue() === null) {
                this.cnsEditor1.setDataValue("NA");
            }
            if (this.limbsandmusculoskeletalEditor1.getDataValue() === null) {
                this.limbsandmusculoskeletalEditor1.setDataValue("NA");
            }

            this.physicalexamLiveForm1.saveDataIfValid();
        } catch (e) {}
    },
    headandneckEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.headandneckEditor1.getDataValue();
            this.headandneckEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    entEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.entEditor1.getDataValue();
            this.entEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    skinandappendagesEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.skinandappendagesEditor1.getDataValue();
            this.skinandappendagesEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    respiratoryEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.respiratoryEditor1.getDataValue();
            this.respiratoryEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    cardiovascularEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.cardiovascularEditor1.getDataValue();
            this.cardiovascularEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    abdomenEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.abdomenEditor1.getDataValue();
            this.abdomenEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    cnsEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.cnsEditor1.getDataValue();
            this.cnsEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    limbsandmusculoskeletalEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var inputStr = this.limbsandmusculoskeletalEditor1.getDataValue();
            this.limbsandmusculoskeletalEditor1.setDataValue(inputStr.toUpperCase());

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
    },
    serolinknumberEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.physicalexamSaveButton.setDisabled(false);
    },
    physicalexamSaveButtonClick1: function(inSender) {
        try {
            if (app.onTreatment.getValue("dataValue")) {
                app.toPharma.update();
            } else {
                if (app.referral.getValue("dataValue")) {
                    app.toReferral.update();
                }else{
                   app.toGeneral.update(); 
                }
            }
        } catch (e) {}
    },
    _end: 0
});