package com.yummygoods.poopReport.User;


import com.yummygoods.poopReport.Dog.Dog;

import java.sql.Timestamp;
import java.util.List;

public class UserDTO {
    public Integer id;
    public String email;
    public String password;
    public String user_name;
    public String first_name;
    public String last_name;
    public Timestamp created;
    public List<Dog> dogs;

    public UserDTO(Integer id, String email, String password, String user_name, String first_name, String last_name, Timestamp created, List<Dog> dogs) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.user_name = user_name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.created = created;
        this.dogs = dogs;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getCreated() {
        return created;
    }

    public void setCreated(Timestamp created) {
        this.created = created;
    }

    public List<Dog> getDogs() {
        return dogs;
    }
}