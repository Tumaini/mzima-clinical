dojo.declare("General", wm.Page, {
	"preferredDevice": "desktop",
	start: function() {
        try{
		app.loggedInUser.update();
        }catch(e){
            alert(e);
            console.error('ERROR: ' + e);
        }
	},

	radioSet1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		try {
            
            if (this.radioSet1.getDataValue() == 'F') {
                this.radioSet2.setOptions('YES,NO');
                this.radioSet2.setShowing(true);
                this.radioSet2.setRequired(true);
            } else {
                this.radioSet2.setShowing(false);
                this.radioSet2.setRequired(false);
            }

        } catch (e) {
            console.error('ERROR: ' + e);
        }
	},
	radioSet2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		try {
            if (this.radioSet2.getDataValue() == 'YES') {
                this.designableDialog1.show();
            } 

        } catch (e) {
            console.error('ERROR IN radioButton5Change: ' + e);
        }
	},
	serolinknumberEditor1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		
	},
	largeTextArea1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		try {
            var inputStr = this.largeTextArea1.getDataValue();
            this.largeTextArea1.setDataValue(inputStr.toUpperCase());
            this.clinicalcomplaintsSaveButton.setDisabled(false);

        } catch (e) {
            console.error('ERROR IN largeTextArea1Change: ' + e);
        }
	},
    
	newButton1Click1: function(inSender) {
		try {
            this.clinicalcomplaintsLiveForm1.beginDataInsert();
            var patientId = this.serolinknumberEditor1.getDataValue();
            this.text2.setDataValue(patientId);
            this.text2.setDisabled(true);

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
	},
	clinicalmainSaveButtonClick1: function(inSender) {
		app.participantVar.setData({dataValue: this.serolinknumberEditor1.getDataValue()});
        app.gender.setData({dataValue: this.radioSet1.getDataValue()});
        
	},
	radioSet3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		try {
            if (this.radioSet3.getDataValue() == 'YES') {
                this.designableDialog1.show();
            } 

        } catch (e) {
            console.error('ERROR IN radioButton5Change: ' + e);
        }
	},
	clinicalcomplaintsNewButtonClick1: function(inSender) {
		try {
            this.clinicalcomplaintsLiveForm1.beginDataInsert();
            var patientId = this.serolinknumberEditor1.getDataValue();
            this.text2.setDataValue(patientId);
            this.text2.setDisabled(true);

        } catch (e) {
            console.error('ERROR IN newButton1Click: ' + e);
        }
	},
	clinicalmainSaveButtonClick: function(inSender) {
        if(this.radioSet1.getDataValue()==='M'){
            this.radioSet2.setOptions('NA');
            this.radioSet2.setDataValue('NA');
        }
		this.clinicalmainLiveForm1.saveDataIfValid();
	},
	selectMenu1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		app.clinician.setData({dataValue: this.selectMenu1.getDataValue()});
	},
	selectMenu2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.selectMenu1Change(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  bmiRadioChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		try{
            if(this.bmiRadio.getDataValue() =='YES'){
                this.bmiEditor1.setRequired(true);
                this.bmiEditor1.setShowing(true);
            }else{
                this.bmiEditor1.setRequired(false);
                this.bmiEditor1.setShowing(false);
            }
		}catch(e){}
	},
	_end: 0
});