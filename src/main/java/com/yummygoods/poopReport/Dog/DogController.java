package com.yummygoods.poopReport.Dog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/")
public class DogController {
    final DogRepository dogRepository;
    final DogService dogService;

    public DogController(@Autowired DogService dogService, @Autowired DogRepository dogRepository) {
        this.dogService = dogService;
        this.dogRepository = dogRepository;
    }


    @GetMapping(value = "dogs/all")
    public Iterable<Dog> getAllDogs() {
        return dogService.getAll();
    }


    @PostMapping(value = "/dogs")
    @ResponseBody
    public Dog save(@RequestBody DogDto dogDto) {
        return dogService.save(new Dog(dogDto)
        );
    }


    @GetMapping(value = "/dogs/{id}")
    public void findById(@PathVariable Integer id) {
        dogService.findById(id);
    }

    @PutMapping(value = "/dogs/{id}")
    public Dog update(@RequestBody DogDto dogDto, @PathVariable Integer id) {
        Dog dog = dogService.findById(id);
        dog.setName(dog.getName());
        return dogService.save(dog);
    }


    @DeleteMapping(value = "/dogs/{id}")
    public void delete(@PathVariable Integer id) {
        dogService.delete(id);
    }

}