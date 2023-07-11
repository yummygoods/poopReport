package com.yummygoods.poopReport.DogEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DogEventService {
    private final DogEventRepository dogEventRepository;

    public DogEventService(@Autowired DogEventRepository dogEventRepository) {
        this.dogEventRepository = dogEventRepository;
    }

    public DogEvent save(DogEvent dogEvent) {
        return dogEventRepository.save(dogEvent);
    }

    public void delete(Integer id) {
        dogEventRepository.deleteById(id);
    }


    public Iterable<DogEvent> getAll() {
        return dogEventRepository.findAll();
    }

    public void saveDogEvent(DogEvent event) {
    }

    public DogEvent findById(Integer id) {
        Optional<DogEvent> dogEvent = dogEventRepository.findById(id);
        boolean isPresent = dogEvent.isPresent();
        if (isPresent) {
            return dogEvent.get();
        } else {
            return null;
        }
    }


}