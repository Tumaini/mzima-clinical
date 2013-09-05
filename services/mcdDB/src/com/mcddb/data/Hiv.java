
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Hiv
 *  08/29/2013 10:17:41
 * 
 */
public class Hiv {

    private Integer id;
    private String serolinknumber;
    private String hivresult;
    private String priorknowledgeofstatus;
    private String physicalexam;
    private String whostage;
    private String reasonforstage;
    private String participanttobereferred;
    private Date insertdate;
    private Integer insertby;
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

    public String getHivresult() {
        return hivresult;
    }

    public void setHivresult(String hivresult) {
        this.hivresult = hivresult;
    }

    public String getPriorknowledgeofstatus() {
        return priorknowledgeofstatus;
    }

    public void setPriorknowledgeofstatus(String priorknowledgeofstatus) {
        this.priorknowledgeofstatus = priorknowledgeofstatus;
    }

    public String getPhysicalexam() {
        return physicalexam;
    }

    public void setPhysicalexam(String physicalexam) {
        this.physicalexam = physicalexam;
    }

    public String getWhostage() {
        return whostage;
    }

    public void setWhostage(String whostage) {
        this.whostage = whostage;
    }

    public String getReasonforstage() {
        return reasonforstage;
    }

    public void setReasonforstage(String reasonforstage) {
        this.reasonforstage = reasonforstage;
    }

    public String getParticipanttobereferred() {
        return participanttobereferred;
    }

    public void setParticipanttobereferred(String participanttobereferred) {
        this.participanttobereferred = participanttobereferred;
    }

    public Date getInsertdate() {
        return insertdate;
    }

    public void setInsertdate(Date insertdate) {
        this.insertdate = insertdate;
    }

    public Integer getInsertby() {
        return insertby;
    }

    public void setInsertby(Integer insertby) {
        this.insertby = insertby;
    }

    public String getClinician() {
        return clinician;
    }

    public void setClinician(String clinician) {
        this.clinician = clinician;
    }

}
