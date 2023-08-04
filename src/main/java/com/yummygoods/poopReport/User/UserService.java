package com.yummygoods.poopReport.User;

import com.yummygoods.poopReport.Dog.Dog;
import com.yummygoods.poopReport.Dog.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final DogRepository dogRepository;

    public UserService(@Autowired UserRepository userRepository,
                       @Autowired DogRepository dogRepository) {
        this.userRepository = userRepository;
        this.dogRepository = dogRepository;
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


    public Integer login(User loginUser) {
        String password = loginUser.getPassword();
        String email = loginUser.getEmail();
        User user = userRepository.findByEmail(email);
        if (user.getPassword().equals(password)) {
            return user.getId();
        } else {
            return null;
        }
    }


    public List<Dog> getDogsByUserId(Integer userId) {
        return dogRepository.findByUserId(userId);

    }


    public Dog addDog(Dog dog, Integer id) {
        User user = userRepository.findById(id).get();
        user.getDogs().add(dog);
        return dogRepository.save(dog);
    }

    public void login(String email, String password) {
    }
}