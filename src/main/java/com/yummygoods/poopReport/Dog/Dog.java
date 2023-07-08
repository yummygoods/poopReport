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

    @Column(name = "name")
    private String name;

//    @ManyToMany(mappedBy = "dogs", fetch = FetchType.LAZY) private Set<User> dogs = new HashSet<>();
//


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

  /*  public Set<User> getDogParents() {
        return dogs;
    }

  public void setDogParents(Set<User> dogParents) {
        this.dogs = dogParents;
    }*/