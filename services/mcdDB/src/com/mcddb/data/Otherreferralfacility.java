
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Otherreferralfacility
 *  08/29/2013 10:17:41
 * 
 */
public class Otherreferralfacility {

    private Integer id;
    private String serolinknumber;
    private String facility;
    private String insertby;
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

    public String getFacility() {
        return facility;
    }

    public void setFacility(String facility) {
        this.facility = facility;
    }

    public String getInsertby() {
        return insertby;
    }

    public void setInsertby(String insertby) {
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
