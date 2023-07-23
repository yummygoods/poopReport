package com.yummygoods.poopReport;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/home")
    public String home() {
        return "index";
    }

    @GetMapping("report")
    public String report() {
        return "html/report";
    }

    @GetMapping("about")
    public String about() {
        return "html/about";
    }

    @GetMapping("dashboard")
    public String dashboard() {
        return "html/dashboard";
    }


    @GetMapping("login")
    public String login() {
        return "html/login";
    }

    @GetMapping("make-report")
    public String makeReport() {
        return "html/make-report";
    }

    @GetMapping("profile-page")
    public String profilePage() {
        return "html/profile-page";
    }

    @GetMapping("sign-up")
    public String signup() {
        return "html/sign-up";
    }

    @GetMapping("logout")
    public String logout() {
        return "html/logout";
    }

}