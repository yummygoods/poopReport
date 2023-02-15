package com.yummygoods.poopReport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
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


    @PostMapping(value = "/events")
    @ResponseBody
    public DogEvent save(@RequestBody DogEventDto dogEventDto) {
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
        dogEvent.setDog_id(dogEventDto.getDog_id());
        dogEvent.setEvent_type(dogEventDto.getEvent_type());
        dogEvent.setPoop();
        return dogEventService.save(dogEvent);
    }


    @DeleteMapping(value = "/events/{id}")
    public void delete(@PathVariable Integer id) {
        dogEventService.delete(id);
    }

}