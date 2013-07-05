
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Pharmacovigilance
 *  07/03/2013 16:36:57
 * 
 */
public class Pharmacovigilance {

    private Integer id;
    private String serolinknumber;
    private String identifymeds;
    private String meds1;
    private String meds2;
    private String meds3;
    private String meds4;
    private String meds5;
    private Integer timeonmeds1;
    private Integer timeonmeds2;
    private Integer timeonmeds3;
    private Integer timeonmeds4;
    private Integer timeonmeds5;
    private String unitoftime;
    private String medsideffects;
    private String sideeffectoutcome;
    private Integer insertby;
    private Date insertdate;
    private String clinician;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSerolinknumber() {
        return serolinknumber;
    }

    public void setSerolinknumber(String serolinknumber) {
        this.serolinknumber = serolinknumber;
    }

    public String getIdentifymeds() {
        return identifymeds;
    }

    public void setIdentifymeds(String identifymeds) {
        this.identifymeds = identifymeds;
    }

    public String getMeds1() {
        return meds1;
    }

    public void setMeds1(String meds1) {
        this.meds1 = meds1;
    }

    public String getMeds2() {
        return meds2;
    }

    public void setMeds2(String meds2) {
        this.meds2 = meds2;
    }

    public String getMeds3() {
        return meds3;
    }

    public void setMeds3(String meds3) {
        this.meds3 = meds3;
    }

    public String getMeds4() {
        return meds4;
    }

    public void setMeds4(String meds4) {
        this.meds4 = meds4;
    }

    public String getMeds5() {
        return meds5;
    }

    public void setMeds5(String meds5) {
        this.meds5 = meds5;
    }

    public Integer getTimeonmeds1() {
        return timeonmeds1;
    }

    public void setTimeonmeds1(Integer timeonmeds1) {
        this.timeonmeds1 = timeonmeds1;
    }

    public Integer getTimeonmeds2() {
        return timeonmeds2;
    }

    public void setTimeonmeds2(Integer timeonmeds2) {
        this.timeonmeds2 = timeonmeds2;
    }

    public Integer getTimeonmeds3() {
        return timeonmeds3;
    }

    public void setTimeonmeds3(Integer timeonmeds3) {
        this.timeonmeds3 = timeonmeds3;
    }

    public Integer getTimeonmeds4() {
        return timeonmeds4;
    }

    public void setTimeonmeds4(Integer timeonmeds4) {
        this.timeonmeds4 = timeonmeds4;
    }

    public Integer getTimeonmeds5() {
        return timeonmeds5;
    }

    public void setTimeonmeds5(Integer timeonmeds5) {
        this.timeonmeds5 = timeonmeds5;
    }

    public String getUnitoftime() {
        return unitoftime;
    }

    public void setUnitoftime(String unitoftime) {
        this.unitoftime = unitoftime;
    }

    public String getMedsideffects() {
        return medsideffects;
    }

    public void setMedsideffects(String medsideffects) {
        this.medsideffects = medsideffects;
    }

    public String getSideeffectoutcome() {
        return sideeffectoutcome;
    }

    public void setSideeffectoutcome(String sideeffectoutcome) {
        this.sideeffectoutcome = sideeffectoutcome;
    }

    public Integer getInsertby() {
        return insertby;
    }

    public void setInsertby(Integer insertby) {
        this.insertby = insertby;
    }

    public Date getInsertdate() {
        return insertdate;
    }

    public void setInsertdate(Date insertdate) {
        this.insertdate = insertdate;
    }

    public String getClinician() {
        return clinician;
    }

    public void setClinician(String clinician) {
        this.clinician = clinician;
    }

}
