package com.yummygoods.poopReport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}