package com.yummygoods.poopReport.Dog;

import com.yummygoods.poopReport.User.User;

import java.util.List;

public class DogDto {
    public Integer id;
    public String name;
    public List<User> users;

    public DogDto(Integer id, String name, List<User> users) {
        this.id = id;
        this.name = name;
        this.users = users;
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

    public List<User> getUsers() {
        return users;
    }

}