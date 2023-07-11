package com.yummygoods.poopReport.User;

import com.yummygoods.poopReport.Dog.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    List<Dog> findDogsById(Integer id);

}