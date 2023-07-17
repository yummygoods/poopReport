package com.yummygoods.poopReport.User;

import com.yummygoods.poopReport.Dog.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping(value = "/")
/*@CrossOrigin(origins = "*", allowedHeaders = "*")*/
/*@CrossOrigin(origins = "http://localhost:8080/")*/
public class UserController {

    final UserRepository userRepository;
    final UserService userService;

    public UserController(
            @Autowired UserService userService,
            @Autowired UserRepository userRepository
    ) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping(value = "users/all")
    public Iterable<User> getAllUsers() {
        return userService.getAll();
    }

    @CrossOrigin
    @PostMapping(value = "users")
    @ResponseBody
    public User save(@RequestBody UserDTO userDTO) {
        return userService.save(new User(userDTO));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(value = "/login")
    public Integer login(@RequestParam String email,
                         @RequestParam String password) {
        return userService.login(email, password);
    }

    @GetMapping(value = "users/{id}")
    public User findById(@PathVariable Integer id) {
        return userService.findById(id);
    }

    @PutMapping(value = "users/{id}")
    public User update(@RequestBody UserDTO userDTO,
                       @PathVariable Integer id) {
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

// @GetMapping("users/dogs/{id}")
//    public Optional<List<Dog>> getUserDogs(@PathVariable Integer id) {
//        return Optional.ofNullable(userService.getDogsById(id));
//    }

    //try without optional
    @GetMapping("users/dogs/{id}")
    public List<Dog> getUserDogs(@PathVariable Integer id) {
        return userService.getDogsById(id);
    }

}