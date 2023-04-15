package com.yummygoods.poopReport;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DogEventRepository extends JpaRepository<DogEvent, Integer> {

}