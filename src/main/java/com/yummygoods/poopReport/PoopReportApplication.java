package com.yummygoods.poopReport;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PoopReportApplication {

    public static void main(String[] args) {
        SpringApplication.run(PoopReportApplication.class, args);
        System.out.println("hello manatee");
        DogEvent event = new DogEvent();
        event.setDog_id(3);
        event.setEvent_type("eat kibbles");
        System.out.println("dog #" + event.getDog_id() + " did " + event.getEvent_type());

    }

}