package com.yummygoods.poopReport.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/")
public class UserController {
    final UserRepository userRepository;
    final UserService userService;

    public UserController(@Autowired UserService userService, @Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping(value = "users/all")
    public Iterable<User> getAllUsers() {
        return userService.getAll();
    }
//test
// @PostMapping(value = "/users")
// public String testEndpoint() {
//     return "This is a test response";
// }


    @PostMapping(value = "/users")
    @ResponseBody
    public User save(@RequestBody UserDTO userDTO) {
        return userService.save(new User(userDTO));
    }


    //trying request param instead of path variable
    @GetMapping(value = "users/{id}")
    public User findById(@PathVariable Integer id) {
        return userService.findById(id);

    }

    @PutMapping(value = "users/{id}")
    public User update(@RequestBody UserDTO userDTO, @PathVariable Integer id) {
        User user = userService.findById(id);
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setUser_name(userDTO.getUser_name());
        user.setFirst_name(userDTO.getFirst_name());
        user.setLast_name(userDTO.getLast_name());


        return userService.save(user);
    }

    @DeleteMapping(value = "users/{id}")
    public void delete(@PathVariable Integer id) {
        userService.delete(id);
    }

}