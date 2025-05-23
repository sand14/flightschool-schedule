package com.sand14.flightschoolschedule;

import com.sand14.flightschoolschedule.role.Role;
import com.sand14.flightschoolschedule.role.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableAsync
public class FlightschoolScheduleApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightschoolScheduleApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(RoleRepository roleRepository){
		return args -> {
			if (roleRepository.findByName("USER").isEmpty()){
				roleRepository.save(Role.builder().name("USER").build());
			}
			if (roleRepository.findByName("INSTRUCTOR").isEmpty()){
				roleRepository.save(Role.builder().name("INSTRUCTOR").build());
			}
		};
	}
}
