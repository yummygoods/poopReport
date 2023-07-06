package com.yummygoods.poopReport.User;

import com.yummygoods.poopReport.Dog.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    Set<Dog> getUserDogs();
}