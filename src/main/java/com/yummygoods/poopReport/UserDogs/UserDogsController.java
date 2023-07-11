/*
package com.yummygoods.poopReport.UserDogs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class UserDogsController {
    final UserDogsRepository userDogsRepository;
    final UserDogsService userDogsService;

    public UserDogsController(@Autowired UserDogsService userDogsService, @Autowired UserDogsRepository userDogsRepository) {
        this.userDogsService = userDogsService;
        this.userDogsRepository = userDogsRepository;
    }

    @GetMapping(value = "users/{id}/dogs")
    public Iterable<UserDogs> getUserDogs(@PathVariable Integer userId) {
        return userDogsService.findByUserId(userId);
    }

     */
/*   @GetMapping(value = "")
    public Set<Dog> getUserDogs(@PathVariable Integer id) {
        return userService.getUserDogs(id);
    }*//*



}*/