package com.yummygoods.poopReport.Dog;

import com.yummygoods.poopReport.User.User;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "dogs")
public class Dog {

    public Dog() {
    }

    public Dog(List<User> user) {
        this.user = user;
    }

    protected Dog(DogDto dogDto) {
        this.id = dogDto.id;
        this.name = dogDto.name;

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @ManyToMany/*(mappedBy = "dogs")*/
    private List<User> user;

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