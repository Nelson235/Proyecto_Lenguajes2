package Lenguajes.ParkingLotProject.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController
@SpringBootApplication(scanBasePackages = {"Lenguajes.ParkingLotProject.*"})
@ComponentScan({"Lenguajes.ParkingLotProject.controller", "Lenguajes.ParkingLotProject.repository", "Lenguajes.ParkingLotProject.service"} )
@EntityScan("Lenguajes.ParkingLotProject.domain")
@EnableJpaRepositories("Lenguajes.ParkingLotProject.repository")


public class ParkingLotProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingLotProjectApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
			}
		};
	}

}
