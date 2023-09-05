package com.yummygoods.poopReport.User;

import com.yummygoods.poopReport.Dog.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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


    @PostMapping
    @ResponseBody
    public User save(@RequestBody UserDTO userDTO) {
        User newUser = new User(userDTO);
        return userService.save(newUser);


    }
    /*       userService.save(new User(userDTO));*/
// Log them in
    /* userService.login(userDTO.getEmail(), userDTO.getPassword());*/

    //changed datatype to User since i now get the whole user object,
    // not just the id
    @PostMapping(value = "/login")
    public User login(@RequestBody User user) {
        return userService.login(user);
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

    @GetMapping("/{id}/dogs")
    public List<Dog> getDogsByUserId(@PathVariable Integer id) {
        return userService.getDogsByUserId(id);
    }

    @PostMapping("/{id}/dogs")
    public Dog addDog(@RequestBody Dog dog, @PathVariable Integer id) {
        return userService.addDog(dog, id);
    }
}