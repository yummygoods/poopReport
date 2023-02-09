package com.yummygoods.poopReport;

import com.yummygoods.poopReport.model.DogEvent;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PoopReportApplication {

    public static void main(String[] args) {
        SpringApplication.run(PoopReportApplication.class, args);
        System.out.println("hello manatee");
        DogEvent event;
        event = new DogEvent();
        event.setDog_id(1);
        event.setEvent_type("peeps");
        System.out.println("dog #" + event.getDog_id() + " did " + event.getEvent_type());
    }

}