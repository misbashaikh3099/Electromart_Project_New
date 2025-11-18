package com.electromart.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.electromart.api.model.Product;
import com.electromart.api.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts(Optional<String> category) {
        if (category.isPresent() && !category.get().equalsIgnoreCase("All")) {
            return productRepository.findByCategory(category.get());
        }
        return productRepository.findAll();
    }
    
    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }
}