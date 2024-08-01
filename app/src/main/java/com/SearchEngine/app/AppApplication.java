package com.SearchEngine.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class AppApplication {
	@GetMapping("/")
	public String home() {
		return "Hello Welcome to Search Engine";
	}

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

}
