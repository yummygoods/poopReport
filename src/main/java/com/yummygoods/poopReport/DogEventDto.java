package com.yummygoods.poopReport;

import java.sql.Timestamp;

public class DogEventDto {
    public Integer id;
    public Integer dog_id;
    public String event_type;
    public Timestamp entry_time;


    public DogEventDto(Integer id, Integer dog_id, String event_type, Timestamp entry_time) {
        this.id = id;
        this.dog_id = dog_id;
        this.event_type = event_type;
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
}