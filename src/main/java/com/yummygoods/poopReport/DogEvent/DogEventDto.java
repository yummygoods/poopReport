package com.yummygoods.poopReport.DogEvent;

import java.sql.Timestamp;

public class DogEventDto {
    public Integer id;
    public Integer user_dog_id;
    public Boolean walk;
    public Boolean poop;
    public Boolean pee;
    public Boolean was_fed;
    public Boolean ate;
    public Boolean rx;
    public String notes;
    public Timestamp entry_time;


    public DogEventDto(Integer id, Integer user_dog_id, Boolean walk, Boolean poop, Boolean pee, Boolean was_fed, Boolean ate, Boolean rx, String notes, Timestamp entry_time) {
        this.id = id;
        this.user_dog_id = user_dog_id;
        this.walk = walk;
        this.poop = poop;
        this.pee = pee;
        this.was_fed = was_fed;
        this.ate = ate;
        this.rx = rx;
        this.notes = notes;
        this.entry_time = entry_time;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUser_dog_id() {
        return user_dog_id;
    }

    public void setUser_dog_id(Integer user_dog_id) {
        this.user_dog_id = user_dog_id;
    }

    public Boolean getWalk() {
        return walk;
    }

    public void setWalk(Boolean walk) {
        this.walk = walk;
    }

    public Boolean getPoop() {
        return poop;
    }

    public void setPoop(Boolean poop) {
        this.poop = poop;
    }

    public Boolean getPee() {
        return pee;
    }

    public void setPee(Boolean pee) {
        this.pee = pee;
    }

    public Boolean getWas_fed() {
        return was_fed;
    }

    public void setWas_fed(Boolean was_fed) {
        this.was_fed = was_fed;
    }

    public Boolean getAte() {
        return ate;
    }

    public void setAte(Boolean ate) {
        this.ate = ate;
    }

    public Boolean getRx() {
        return rx;
    }

    public void setRx(Boolean rx) {
        this.rx = rx;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Timestamp getEntry_time() {
        return entry_time;
    }

    public void setEntry_time(Timestamp entry_time) {
        this.entry_time = entry_time;
    }

}