package com.yummygoods.poopReport.Dog;

import com.yummygoods.poopReport.DogEvent.DogEventRepository;
import com.yummygoods.poopReport.User.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class DogService {

    private final DogRepository dogRepository;
    private final UserRepository userRepository;
    private final DogEventRepository dogEventRepository;


    public DogService(DogRepository dogRepository,
                      UserRepository userRepository,
                      DogEventRepository dogEventRepository) {
        this.dogRepository = dogRepository;
        this.userRepository = userRepository;
        this.dogEventRepository = dogEventRepository;
    }


    public Iterable<Dog> findAllDogs() {
        return dogRepository.findAll();
    }

    public Dog getDogById(Integer id) {
        Optional<Dog> optionalDog = dogRepository.findById(id);
        if (optionalDog.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Dog not found with id: " + id);
        }
        return optionalDog.get();
    }

    //arraylist?

    public Iterable<Dog> findDogsByUserId(Integer id) {
        return dogRepository.findByUser_Id(id);
    }

    public Dog addDog(Dog dog) {
        return dogRepository.save(dog);
    }


    public Dog updateDog(Integer id, Dog updates) {
        Dog dogToUpdate = getDogById(id);

        if (!updates.getName().isEmpty()) {
            dogToUpdate.setName(updates.getName());
        }
    /*    if (updates.getUsers() != null) {
            dogToUpdate.setUsers(updates.getUsers());
        }*/
        return dogRepository.save(dogToUpdate);
    }


    //hashmap?
    public void delete(Integer id) {
        dogRepository.deleteById(id);
    }


}