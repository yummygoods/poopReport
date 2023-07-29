package com.yummygoods.poopReport.DogEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/events")
public class DogEventController {
    final DogEventRepository dogEventRepository;
    final DogEventService dogEventService;

    public DogEventController(@Autowired DogEventService dogEventService
            , @Autowired DogEventRepository dogEventRepository) {
        this.dogEventService = dogEventService;
        this.dogEventRepository = dogEventRepository;
    }


    @GetMapping(value = "/all")
    public Iterable<DogEvent> getAllDogEvents() {
        return dogEventService.getAll();
    }


    /*@PostMapping
    public DogEvent save(DogEventDto dogEventDto) {
        return dogEventService.save(new DogEvent(dogEventDto)
        );
    }*/

    @PostMapping
    public DogEvent save(@RequestBody DogEventDto dogEventDto) {
        return dogEventService.save(new DogEvent(dogEventDto)
        );
    }

    @GetMapping(value = "/{id}")
    public void findById(@PathVariable Integer id) {
        dogEventService.findById(id);
    }

    @GetMapping(value = "/{do_id}")

    @PutMapping(value = "/{id}")
    public DogEvent update(@RequestBody DogEventDto dogEventDto,
                           @PathVariable Integer id) {
        DogEvent dogEvent = dogEventService.findById(id);
        dogEvent.setUser_id(dogEventDto.getUser_id());
        dogEvent.setDog_id(dogEventDto.getDog_id());
        dogEvent.setWalk(dogEventDto.getWalk());
        dogEvent.setPoop(dogEventDto.getPoop());
        dogEvent.setPee(dogEventDto.getPee());
        dogEvent.setWas_fed(dogEventDto.getWas_fed());
        dogEvent.setAte(dogEventDto.getAte());
        dogEvent.setRx(dogEventDto.getRx());

        return dogEventService.save(dogEvent);
    }


    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        dogEventService.delete(id);
    }

}