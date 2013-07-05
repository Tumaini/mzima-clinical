
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Diabetes
 *  07/03/2013 16:36:57
 * 
 */
public class Diabetes {

    private Integer id;
    private String wanttoknowresult;
    private Double bloodsugarlevel;
    private String knowndiabetic;
    private String ontreatment;
    private String symptoms;
    private String physicalexam;
    private String referred;
    private String serolinknumber;
    private Integer insertby;
    private Date insertdate;
    private String clinician;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWanttoknowresult() {
        return wanttoknowresult;
    }

    public void setWanttoknowresult(String wanttoknowresult) {
        this.wanttoknowresult = wanttoknowresult;
    }

    public Double getBloodsugarlevel() {
        return bloodsugarlevel;
    }

    public void setBloodsugarlevel(Double bloodsugarlevel) {
        this.bloodsugarlevel = bloodsugarlevel;
    }

    public String getKnowndiabetic() {
        return knowndiabetic;
    }

    public void setKnowndiabetic(String knowndiabetic) {
        this.knowndiabetic = knowndiabetic;
    }

    public String getOntreatment() {
        return ontreatment;
    }

    public void setOntreatment(String ontreatment) {
        this.ontreatment = ontreatment;
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

    public String getReferred() {
        return referred;
    }

    public void setReferred(String referred) {
        this.referred = referred;
    }

    public String getSerolinknumber() {
        return serolinknumber;
    }

    public void setSerolinknumber(String serolinknumber) {
        this.serolinknumber = serolinknumber;
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
