
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Hypertension
 *  08/29/2013 10:17:41
 * 
 */
public class Hypertension {

    private Integer id;
    private String wanttoknowresults;
    private Double avgsystolicbloodpressure;
    private String knownhypertensive;
    private String intreatment;
    private String symptoms;
    private String physicalexam;
    private String referral;
    private String serolinknumber;
    private String avgdiastolicbloodpressure;
    private Integer insertby;
    private Date insertdate;
    private String clinician;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWanttoknowresults() {
        return wanttoknowresults;
    }

    public void setWanttoknowresults(String wanttoknowresults) {
        this.wanttoknowresults = wanttoknowresults;
    }

    public Double getAvgsystolicbloodpressure() {
        return avgsystolicbloodpressure;
    }

    public void setAvgsystolicbloodpressure(Double avgsystolicbloodpressure) {
        this.avgsystolicbloodpressure = avgsystolicbloodpressure;
    }

    public String getKnownhypertensive() {
        return knownhypertensive;
    }

    public void setKnownhypertensive(String knownhypertensive) {
        this.knownhypertensive = knownhypertensive;
    }

    public String getIntreatment() {
        return intreatment;
    }

    public void setIntreatment(String intreatment) {
        this.intreatment = intreatment;
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

    public String getSerolinknumber() {
        return serolinknumber;
    }

    public void setSerolinknumber(String serolinknumber) {
        this.serolinknumber = serolinknumber;
    }

    public String getAvgdiastolicbloodpressure() {
        return avgdiastolicbloodpressure;
    }

    public void setAvgdiastolicbloodpressure(String avgdiastolicbloodpressure) {
        this.avgdiastolicbloodpressure = avgdiastolicbloodpressure;
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
