package com.yummygoods.poopReport;

import java.sql.Timestamp;

public class DogEventDto {
    public Integer id;
    public Integer dog_id;
    public String event_type;
    public Boolean poop;
    public Boolean pee;
    public String notes;
    public Timestamp entry_time;


    public DogEventDto(Integer id, Integer dog_id, String event_type, Boolean poop, Boolean pee, String notes, Timestamp entry_time) {
        this.id = id;
        this.dog_id = dog_id;
        this.event_type = event_type;
        this.poop = poop;
        this.pee = pee;
        this.notes = notes;
        this.entry_time = entry_time;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDog_id() {
        return dog_id;
    }

    public void setDog_id(Integer dog_id) {
        this.dog_id = dog_id;
    }

    public String getEvent_type() {
        return event_type;
    }

    public void setEvent_type(String event_type) {
        this.event_type = event_type;
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