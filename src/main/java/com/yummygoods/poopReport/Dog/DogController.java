package com.yummygoods.poopReport.Dog;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping(value = "/api/dogs")
public class DogController {

    final DogRepository dogRepository;
    final DogService dogService;

    public DogController(DogService dogService,
                         DogRepository dogRepository) {
        this.dogService = dogService;
        this.dogRepository = dogRepository;
    }

    @GetMapping(value = "/{id}")
    public Dog findDogById(@PathVariable Integer id) {
        return dogService.getDogById(id);
    }

    @GetMapping(value = "/all")
    public Iterable<Dog> findAllDogs() {
        return dogService.findAllDogs();
    }


    /*   //make an optional? do i even need this?
       @GetMapping(value = "/name")
       public Dog findDogByName(@RequestParam String name) {
           return dogService.findDogByName(name);
       }
   */
    @GetMapping(value = "/users/{id}")
    public Iterable<Dog> findDogsByUserId(@PathVariable Integer id) {
        return dogService.findDogsByUserId(id);
    }


    @ResponseBody
    public Dog save(@RequestBody DogDto dogDto) {
        return dogService.addDog(new Dog(dogDto)
        );
    }


    //response entity? requestBody updates?
    @PutMapping(value = "/{id}")
    public Dog updateDog(@PathVariable Integer id) {
        Dog dog = dogService.getDogById(id);
        dog.setName(dog.getName());
        return dogService.addDog(dog);
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        dogService.delete(id);
    }


}