
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.Physicalexam
 *  08/29/2013 10:17:41
 * 
 */
public class Physicalexam {

    private Integer id;
    private String serolinknumber;
    private String headandneck;
    private String ent;
    private String skinandappendages;
    private String respiratory;
    private String cardiovascular;
    private String abdomen;
    private String cns;
    private String limbsandmusculoskeletal;
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

    public String getHeadandneck() {
        return headandneck;
    }

    public void setHeadandneck(String headandneck) {
        this.headandneck = headandneck;
    }

    public String getEnt() {
        return ent;
    }

    public void setEnt(String ent) {
        this.ent = ent;
    }

    public String getSkinandappendages() {
        return skinandappendages;
    }

    public void setSkinandappendages(String skinandappendages) {
        this.skinandappendages = skinandappendages;
    }

    public String getRespiratory() {
        return respiratory;
    }

    public void setRespiratory(String respiratory) {
        this.respiratory = respiratory;
    }

    public String getCardiovascular() {
        return cardiovascular;
    }

    public void setCardiovascular(String cardiovascular) {
        this.cardiovascular = cardiovascular;
    }

    public String getAbdomen() {
        return abdomen;
    }

    public void setAbdomen(String abdomen) {
        this.abdomen = abdomen;
    }

    public String getCns() {
        return cns;
    }

    public void setCns(String cns) {
        this.cns = cns;
    }

    public String getLimbsandmusculoskeletal() {
        return limbsandmusculoskeletal;
    }

    public void setLimbsandmusculoskeletal(String limbsandmusculoskeletal) {
        this.limbsandmusculoskeletal = limbsandmusculoskeletal;
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
