package com.yummygoods.poopReport.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "dog_events", uniqueConstraints = {@UniqueConstraint(name = "uc_dogevent_dog_id", columnNames = {"dog_id"})
})
public class DogEvent {
    // no args constructor
    public DogEvent() {
    }

    // columns in dogEvent table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    //(foreignKey)
    @Column
    private Integer dog_id;

    @Column
    private String event_type;


    //main constructor
    public void dogEvent(Integer id, Integer dog_id, String event_type, LocalDateTime entry_time) {
        this.id = id;
        this.dog_id = dog_id;
        this.event_type = event_type;
    }

    //getters and setters
    public Integer getId() {
        return id;
    }

    /*  public void setId(Integer id) {
          this.id = id;
      }
  */
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