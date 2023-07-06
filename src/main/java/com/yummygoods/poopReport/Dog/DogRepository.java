package com.yummygoods.poopReport.Dog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface DogRepository extends JpaRepository<Dog, Integer> {

    Set<Dog> findAll(Integer id);
}