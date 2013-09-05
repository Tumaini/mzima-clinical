
package com.mcddb.data;

import java.util.Date;


/**
 *  mcdDB.ClinicalMain
 *  08/29/2013 10:17:41
 * 
 */
public class ClinicalMain {

    private Integer id;
    private Date date;
    private String serolinknumber;
    private Integer age;
    private String gender;
    private Double bmi;
    private String clinicalcomplaint;
    private String pregnant;
    private Integer insertby;
    private Date insertdate;
    private String clinician;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSerolinknumber() {
        return serolinknumber;
    }

    public void setSerolinknumber(String serolinknumber) {
        this.serolinknumber = serolinknumber;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Double getBmi() {
        return bmi;
    }

    public void setBmi(Double bmi) {
        this.bmi = bmi;
    }

    public String getClinicalcomplaint() {
        return clinicalcomplaint;
    }

    public void setClinicalcomplaint(String clinicalcomplaint) {
        this.clinicalcomplaint = clinicalcomplaint;
    }

    public String getPregnant() {
        return pregnant;
    }

    public void setPregnant(String pregnant) {
        this.pregnant = pregnant;
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
