package com.yummygoods.poopReport;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PoopReportApplication {

    public static void main(String[] args) {
        SpringApplication.run(PoopReportApplication.class, args);
        //ApplicationContext ctx = SpringApplication.run(PoopReportApplication.class, args);

        /*DogEventService dogEventService = ctx.getBean(DogEventService.class);

        DogEvent event = new DogEvent();
        event.setDog_id(2);
        event.setEvent_type("eat");
        dogEventService.saveDogEvent(event);
        System.out.println(event);*/
        //System.out.println("dog #" + event.getDog_id() + " did " + event.getEvent_type());

    }

}