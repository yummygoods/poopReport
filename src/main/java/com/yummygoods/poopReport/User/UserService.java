package com.yummygoods.poopReport.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(@Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void delete(Integer id) {
        userRepository.deleteById(id);
    }

    public Iterable<User> getAll() {
        return userRepository.findAll();
    }

    public User findById(Integer id) {
        Optional<User> user;
        user = userRepository.findById(id);
        boolean isPresent = user.isPresent();
        if (isPresent) {
            return user.get();
        } else {
            return null;
        }


    }


    public Integer login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user.getPassword().equals(password)) {
            return user.getId();
        } else {
            return null;
        }
    }
}


/*
    public Set<Dog> getUserDogs(Integer id) {
        return userRepository.getUserDogs();
    }
}
*/

   /* public User findById(Integer id) {
        Optional<User> user;
        user = userRepository.findById(id);
        boolean isPresent = user.isPresent();
        if (isPresent) {
            return user.get();
        } else {
            return null;
        }
*/