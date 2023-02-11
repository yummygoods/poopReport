package com.yummygoods.poopReport;import jakarta.persistence.*;import java.time.LocalDateTime;@Entity/*@Table(name = "dog_events", uniqueConstraints = {@UniqueConstraint(name = "uc_dogevent_dog_id", columnNames = {"dog_id"})})*/@Table(name = "dog_events")public class DogEvent {    // no args constructor    public DogEvent() {    }    private DogEvent(DogEventDto dogEventDto) {        this.id = dogEventDto.id;        this.dog_id = dogEventDto.dog_id;        this.event_type = dogEventDto.event_type;        this.entry_time = dogEventDto.entry_time;    }    // columns in dogEvent table    @Id    @GeneratedValue(strategy = GenerationType.IDENTITY)    @Column(name = "id", nullable = false, updatable = false)    private Integer id;    //(foreignKey)    @Column    private Integer dog_id;    @Column    private String event_type;    @Column(name = "entry_time", nullable = false, updatable = false)    private LocalDateTime entry_time;    public static DogEvent createDogEvent(DogEventDto dogEventDto) {        return new DogEvent(dogEventDto);    }    //main constructor    public void dogEvent(Integer id, Integer dog_id, String event_type, LocalDateTime entry_time) {        this.id = id;        this.dog_id = dog_id;        this.event_type = event_type;        this.entry_time = entry_time;    }    //getters and setters    public Integer getId() {        return id;    }    public void setId(Integer id) {        this.id = id;    }    public Integer getDog_id() {        return dog_id;    }    public void setDog_id(Integer dog_id) {        this.dog_id = dog_id;    }    public String getEvent_type() {        return event_type;    }    public void setEvent_type(String event_type) {        this.event_type = event_type;    }}