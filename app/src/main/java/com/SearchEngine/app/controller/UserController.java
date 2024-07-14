package com.SearchEngine.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SearchEngine.app.entity.UserAccount;
import com.SearchEngine.app.repository.UserAccountRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserAccountRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody UserAccount user) {
        userRepository.save(user);
        return ResponseEntity.ok("User created successfully");
    }
}
