/*
package com.yummygoods.poopReport.UserDogs;


import com.yummygoods.poopReport.Dog.Dog;
import com.yummygoods.poopReport.User.User;
import jakarta.persistence.*;

@Entity
@Table(name = "rel_user_dogs")
public class UserDogs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Integer relationshipId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "dog_id")
    private Dog dog;


    public UserDogs() {
    }

    public UserDogs(User user, Dog dog) {
        this.user = user;
        this.dog = dog;
    }


    public Integer getRelationshipId() {
        return relationshipId;
    }

    public User getUser() {
        return user;
    }

    public Dog getDog() {
        return dog;
    }

    public void setRelationshipId(Integer relationshipId) {
        this.relationshipId = relationshipId;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }
}*/