/*
package com.yummygoods.poopReport.UserDogs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDogsService {

    private final UserDogsRepository userDogsRepository;

    public UserDogsService(@Autowired UserDogsRepository userDogsRepository) {
        this.userDogsRepository = userDogsRepository;
    }

    public Iterable<UserDogs> findByUserId(Integer userId) {
        Optional<Iterable<UserDogs>> userDogs;
        userDogs = userDogsRepository.findByUserId(userId);
        boolean isPresent = userDogs.isPresent();
        if (isPresent) {
            return userDogs.get();
        } else {
            return null;
        }
    }
}*/