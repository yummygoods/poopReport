package com.yummygoods.poopReport.User;


import com.yummygoods.poopReport.Dog.Dog;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    // columns in users table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer id;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String user_name;

    @Column
    private String first_name;

    @Column
    private String last_name;

    @CreationTimestamp
    @Column(name = "created", nullable = false, updatable = false)
    private Timestamp created;

    @ManyToMany
    @JoinTable(name = "rel_user_dogs",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "dog_id"))
    private List<Dog> dogs;

    public User(List<Dog> dogs) {
        this.dogs = dogs;
    }

    // no args constructor
    public User() {
    }

    //main constructor
    public void user(Integer id, String email, String password,
                     String user_name, String first_name,
                     String last_name, Timestamp created, List<Dog> dogs) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.user_name = user_name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.created = created;
        this.dogs = dogs;
    }

    //constructor with DTO arg
    protected User(UserDTO userDTO) {
        this.id = userDTO.id;
        this.email = userDTO.email;
        this.password = userDTO.password;
        this.user_name = userDTO.user_name;
        this.first_name = userDTO.first_name;
        this.last_name = userDTO.last_name;
        this.created = userDTO.created;
        this.dogs = userDTO.dogs;
    }


    //getter and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
                       ", email='" + email + '\'' +
                       ", password='" + password + '\'' +
                       ", user_name='" + user_name + '\'' +
                       ", first_name='" + first_name + '\'' +
                       ", last_name='" + last_name + '\'' +
                       ", created=" + created +
                       '}';
    }

    public List<Dog> getDogs() {
        return dogs;
    }

    public void setDogs(List<Dog> dogs) {
        this.dogs = dogs;
    }

}