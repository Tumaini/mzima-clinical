
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Cvd
 *  08/29/2013 10:17:41
 * 
 */
public class Cvd {

    private Integer id;
    private String serolinknumber;
    private String knowncvcondition;
    private String intreatment;
    private String riskfactors;
    private String symptoms;
    private String physicalexam;
    private String referral;
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

    public String getKnowncvcondition() {
        return knowncvcondition;
    }

    public void setKnowncvcondition(String knowncvcondition) {
        this.knowncvcondition = knowncvcondition;
    }

    public String getIntreatment() {
        return intreatment;
    }

    public void setIntreatment(String intreatment) {
        this.intreatment = intreatment;
    }

    public String getRiskfactors() {
        return riskfactors;
    }

    public void setRiskfactors(String riskfactors) {
        this.riskfactors = riskfactors;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getPhysicalexam() {
        return physicalexam;
    }

    public void setPhysicalexam(String physicalexam) {
        this.physicalexam = physicalexam;
    }

    public String getReferral() {
        return referral;
    }

    public void setReferral(String referral) {
        this.referral = referral;
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
