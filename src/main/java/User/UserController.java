package User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/")
public class UserController {

    final UserRepository userRepository;
    final UserService userService;

    public UserController(@Autowired UserService userService, @Autowired UserRepository userRepository) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping(value = "/users")
    @ResponseBody
    public User save(@RequestBody UserDTO userDTO) {
        return userService.save(new User(userDTO));
    }

    @GetMapping(value = "users/all")
    public Iterable<User> getAllUsers() {
        return userService.getAll();
    }

    @GetMapping(value = "users/{id}")
    public void findById(@PathVariable Integer id) {
        userService.findById(id);
    }

    @PutMapping(value = "users/{id}")
    public User update(@RequestBody UserDTO userDTO, @PathVariable Integer id) {
        User user = userService.findById(id);
        user.setUserName(userDTO.getUserName());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());

        return userService.save(user);
    }

    @DeleteMapping(value = "users/{id}")
    public void delete(@PathVariable Integer id) {
        userService.delete(id);
    }

}