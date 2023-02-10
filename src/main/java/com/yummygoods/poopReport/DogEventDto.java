package com.yummygoods.poopReport;

public class DogEventDto {
    public Integer id;
    public Integer dog_id;
    public String event_type;


    public DogEventDto(Integer id, Integer dog_id, String event_type) {
        this.id = id;
        this.dog_id = dog_id;
        this.event_type = event_type;
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