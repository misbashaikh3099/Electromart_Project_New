// package jar;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
// public class ApiApplication {

// 	public static void main(String[] args) {
// 		SpringApplication.run(ApiApplication.class, args);
// 	}

// }
package com.electromart.api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.electromart.api.model.Product;
import com.electromart.api.repository.ProductRepository;

@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	// 🧠 This method runs automatically when the app starts
	@Bean
	CommandLineRunner initDatabase(ProductRepository productRepository) {
		return args -> {
			if (productRepository.count() == 0) {
				productRepository.save(new Product(null, "LED Bulb", "Bright LED bulb for home use", "199", "249", "bulb.png", "Lighting", "Hot", 4.7));
				productRepository.save(new Product(null, "Smart Fan", "WiFi enabled ceiling fan", "2999", "3499", "fan.png", "Appliances", "New", 4.5));
				productRepository.save(new Product(null, "Extension Board", "Multi-plug extension board", "499", "599", "board.png", "Accessories", "Sale", 4.3));
				System.out.println("✅ Sample products inserted into MongoDB!");
			} else {
				System.out.println("✅ Products already exist, skipping insert.");
			}
		};
	}
}
