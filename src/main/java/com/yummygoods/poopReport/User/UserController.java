package com.yummygoods.poopReport.User;

import com.yummygoods.poopReport.Dog.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping(value = "/api/users")
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

    @GetMapping(value = "/all")
    public Iterable<User> getAllUsers() {
        return userService.getAll();
    }

    @CrossOrigin
    @PostMapping
    @ResponseBody
    public User save(@RequestBody UserDTO userDTO) {
        // Create new user from DTO
        User newUser = new User(userDTO);
        userService.save(new User(userDTO));
// Log them in
        userService.login(userDTO.getEmail(), userDTO.getPassword());
        return newUser;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping(value = "/login")
    public Integer login(@RequestParam String email,
                         @RequestParam String password) {
        return userService.login(email, password);
    }

    @GetMapping(value = "/{id}")
    public User findById(@PathVariable Integer id) {
        return userService.findById(id);
    }

    @PutMapping(value = "/{id}")
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

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        userService.delete(id);
    }

    @GetMapping("/dogs/{id}")
    public List<Dog> getDogsByUserId(@PathVariable Integer id) {
        return userService.getDogsByUserId(id);
    }

    @PostMapping("/dogs/{id}")
    public Dog addDog(@RequestBody Dog dog, @PathVariable Integer id) {
        return userService.addDog(dog, id);
    }
}