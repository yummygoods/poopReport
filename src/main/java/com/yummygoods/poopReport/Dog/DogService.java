package com.yummygoods.poopReport.Dog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DogService {
    private final DogRepository dogRepository;
    private Iterable<Dog> userDogs;

    public DogService(@Autowired DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    public Dog save(Dog dog) {
        return dogRepository.save(dog);
    }

    public void delete(Integer id) {
        dogRepository.deleteById(id);
    }


    public Iterable<Dog> findAll() {
        return dogRepository.findAll();
    }


    public Dog findById(Integer id) {
        Optional<Dog> dog;
        dog = dogRepository.findById(id);
        boolean isPresent = dog.isPresent();
        if (isPresent) {
            return dog.get();
        } else {
            return null;
        }
    }


    public Iterable<Dog> getUserDogs() {
        return userDogs;
    }
}