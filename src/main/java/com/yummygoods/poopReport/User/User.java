package com.yummygoods.poopReport.User;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name = "users")
public class User {

    // columns in users table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    @Column
    private String user_name;

    @Column
    private String first_name;

    @Column
    private String last_name;

    @Column
    private String email;

    @CreationTimestamp
    @Column(name = "created", nullable = false, updatable = false)
    private Timestamp created;


    // no args constructor
    public User() {
    }

    //main constructor
    public void user(Integer id, String user_name, String first_name, String last_name, String email, Timestamp created) {
        this.id = id;
        this.user_name = user_name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.created = created;
    }

    //constructor with DTO arg
    protected User(UserDTO userDTO) {
        this.id = userDTO.id;
        this.user_name = userDTO.user_name;
        this.first_name = userDTO.first_name;
        this.last_name = userDTO.last_name;
        this.email = userDTO.email;
        this.created = userDTO.created;
    }


    //do i need to add tostring method?

    //getter and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "User{" +
                       "id=" + id +
                       ", user_name='" + user_name + '\'' +
                       ", first_name='" + first_name + '\'' +
                       ", last_name='" + last_name + '\'' +
                       ", email='" + email + '\'' +
                       ", created=" + created +
                       '}';
    }
}