
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Cervicalcancer
 *  08/29/2013 10:17:41
 * 
 */
public class Cervicalcancer {

    private Integer id;
    private String knownpatient;
    private String symptoms;
    private String serolinknumber;
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

    public String getKnownpatient() {
        return knownpatient;
    }

    public void setKnownpatient(String knownpatient) {
        this.knownpatient = knownpatient;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getSerolinknumber() {
        return serolinknumber;
    }

    public void setSerolinknumber(String serolinknumber) {
        this.serolinknumber = serolinknumber;
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
