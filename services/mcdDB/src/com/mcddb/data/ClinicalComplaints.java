
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.ClinicalComplaints
 *  07/03/2013 16:36:57
 * 
 */
public class ClinicalComplaints {

    private Integer id;
    private String participantno;
    private String complaint;
    private Integer insertby;
    private Date insertdate;
    private String clinician;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getParticipantno() {
        return participantno;
    }

    public void setParticipantno(String participantno) {
        this.participantno = participantno;
    }

    public String getComplaint() {
        return complaint;
    }

    public void setComplaint(String complaint) {
        this.complaint = complaint;
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
