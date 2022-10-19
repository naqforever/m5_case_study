package m5.furamaapi.controller;

import lombok.Getter;
import m5.furamaapi.model.entity.User;
import m5.furamaapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("register")
    public String register(@RequestBody User user){
        userService.save(user);
        return "aaa";
    }
}
