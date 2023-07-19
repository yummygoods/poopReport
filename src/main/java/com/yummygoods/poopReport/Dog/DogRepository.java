package com.yummygoods.poopReport.Dog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DogRepository extends JpaRepository<Dog, Integer> {

    Dog findByName(String name);

    List<Dog> findByUserId(Integer userId);
}