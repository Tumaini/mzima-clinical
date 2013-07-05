
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Tb
 *  07/03/2013 16:36:57
 * 
 */
public class Tb {

    private Integer id;
    private String knowntbpatient;
    private String ontbtreatment;
    private String treatedlast12months;
    private String symptoms;
    private String physicalexam;
    private String participanttobereferred;
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

    public String getKnowntbpatient() {
        return knowntbpatient;
    }

    public void setKnowntbpatient(String knowntbpatient) {
        this.knowntbpatient = knowntbpatient;
    }

    public String getOntbtreatment() {
        return ontbtreatment;
    }

    public void setOntbtreatment(String ontbtreatment) {
        this.ontbtreatment = ontbtreatment;
    }

    public String getTreatedlast12months() {
        return treatedlast12months;
    }

    public void setTreatedlast12months(String treatedlast12months) {
        this.treatedlast12months = treatedlast12months;
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

    public String getParticipanttobereferred() {
        return participanttobereferred;
    }

    public void setParticipanttobereferred(String participanttobereferred) {
        this.participanttobereferred = participanttobereferred;
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
