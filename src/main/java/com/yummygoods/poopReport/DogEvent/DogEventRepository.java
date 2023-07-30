package com.yummygoods.poopReport.DogEvent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DogEventRepository extends JpaRepository<DogEvent,
                                                                 Integer> {

    Iterable<DogEvent> findByDogId(Integer dog_id);
}