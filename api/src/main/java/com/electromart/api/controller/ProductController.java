package com.electromart.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.electromart.api.model.Product;
import com.electromart.api.service.ProductService;

@RestController
@RequestMapping("/api/products") // Base URL for all endpoints in this controller
@CrossOrigin(origins = "*") // Allows requests from any origin (for development)
public class ProductController {

    @Autowired
    private ProductService productService;

    // Endpoint to get all products, with optional filtering by category
    // GET http://localhost:8080/api/products
    // GET http://localhost:8080/api/products?category=Lighting
    @GetMapping
    public List<Product> getProducts(@RequestParam Optional<String> category) {
        return productService.getAllProducts(category);
    }

    // Endpoint to get a single product by its ID
    // GET http://localhost:8080/api/products/some-product-id
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        return productService.getProductById(id)
                .map(ResponseEntity::ok) // If found, return 200 OK with the product
                .orElse(ResponseEntity.notFound().build()); // If not found, return 404 Not Found
    }
}