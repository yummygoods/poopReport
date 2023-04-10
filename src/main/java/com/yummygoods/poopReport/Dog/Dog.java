package com.yummygoods.poopReport.Dog;

import jakarta.persistence.*;

@Entity
@Table(name = "dogs")
public class Dog {
    public Dog() {
    }

    protected Dog(DogDto dogDto) {
        this.id = dogDto.id;
        this.name = dogDto.name;

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    @Column
    private String name;

    public Dog(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}