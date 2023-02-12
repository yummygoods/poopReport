package com.yummygoods.poopReport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping(value = "/events")
public class DogEventController {
    final DogEventRepository dogEventRepository;
    final DogEventService dogEventService;

    public DogEventController(@Autowired DogEventService dogEventService, @Autowired DogEventRepository dogEventRepository) {
        this.dogEventService = dogEventService;
        this.dogEventRepository = dogEventRepository;
    }

    @GetMapping(value = "/all")
    public Iterable<DogEvent> getAllDogEvents() {

        return dogEventService.getAll();

    }

    @PostMapping(value = "/events")
    @ResponseBody
    public DogEvent save(@RequestBody DogEventDto dogEventDto) {
        return dogEventService.save(DogEvent.createDogEvent(dogEventDto)
        );
    }

    @DeleteMapping(value = "/events/{id}")
    public void delete(@PathVariable Integer id) {
        dogEventService.delete(id);
    }

}