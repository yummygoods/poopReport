package com.yummygoods.poopReport.DogEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/*@CrossOrigin(origins = "http://localhost:8080/")*/
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping(value = "/")
public class DogEventController {
    final DogEventRepository dogEventRepository;
    final DogEventService dogEventService;

    public DogEventController(@Autowired DogEventService dogEventService, @Autowired DogEventRepository dogEventRepository) {
        this.dogEventService = dogEventService;
        this.dogEventRepository = dogEventRepository;
    }


    @GetMapping(value = "events/all")
    public Iterable<DogEvent> getAllDogEvents() {
        return dogEventService.getAll();
    }

    @CrossOrigin
    @PostMapping(value = "/events")
    public DogEvent save(DogEventDto dogEventDto) {
        return dogEventService.save(new DogEvent(dogEventDto)
        );
    }


    @GetMapping(value = "/events/{id}")
    public void findById(@PathVariable Integer id) {
        dogEventService.findById(id);
    }

    @PutMapping(value = "/events/{id}")
    public DogEvent update(@RequestBody DogEventDto dogEventDto, @PathVariable Integer id) {
        DogEvent dogEvent = dogEventService.findById(id);
        dogEvent.setUser_dog_id(dogEventDto.getUser_dog_id());
        dogEvent.setWalk(dogEventDto.getWalk());
        dogEvent.setPoop(dogEventDto.getPoop());
        dogEvent.setPee(dogEventDto.getPee());
        dogEvent.setWas_fed(dogEventDto.getWas_fed());
        dogEvent.setAte(dogEventDto.getAte());
        dogEvent.setRx(dogEventDto.getRx());

        return dogEventService.save(dogEvent);
    }


    @DeleteMapping(value = "/events/{id}")
    public void delete(@PathVariable Integer id) {
        dogEventService.delete(id);
    }

}