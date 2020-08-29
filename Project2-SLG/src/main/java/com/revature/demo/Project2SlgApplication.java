package com.revature.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.revature")
@EnableJpaRepositories("com.revature.repositories") 
@EntityScan("com.revature.beans")
public class Project2SlgApplication {

	public static void main(String[] args) {
		SpringApplication.run(Project2SlgApplication.class, args);
	}

}
