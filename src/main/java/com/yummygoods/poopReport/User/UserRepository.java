package com.yummygoods.poopReport.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.lang.reflect.Array;

public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByEmail(String email);

    public Array getUserDogs(Integer id);


}