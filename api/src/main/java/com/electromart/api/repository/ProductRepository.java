package com.electromart.api.repository;

import com.electromart.api.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    // Spring Data MongoDB will automatically implement this method based on its name!
    // This will find all products belonging to a specific category.
    List<Product> findByCategory(String category);
}