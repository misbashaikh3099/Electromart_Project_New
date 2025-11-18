
import { products, team, services } from '../data';
import { Product, TeamMember, Service } from '../types';

// This file simulates an API layer. In a real application, these functions
// would make network requests to a backend server (e.g., using fetch or axios).

// --- Backend Guidance (Spring Boot + MongoDB) ---
//
// To build the backend for this application, you can use Spring Boot with Spring Data MongoDB.
// Here is a step-by-step guide to get you started.
//
// 1. PROJECT SETUP (https://start.spring.io/):
//    - Project: Maven
//    - Language: Java
//    - Spring Boot: Latest stable version
//    - Dependencies:
//      - Spring Web: To build RESTful APIs.
//      - Spring Data MongoDB: To interact with a MongoDB database.
//      - Lombok: To reduce boilerplate code (constructors, getters, setters).
//
// 2. CONFIGURE DATABASE CONNECTION (`src/main/resources/application.properties`):
//    - Add your MongoDB connection string. Replace placeholders with your actual credentials.
//    - spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/electromart?retryWrites=true&w=majority
//
// 3. CREATE THE MODEL/DOCUMENT (e.g., `com.electromart.model.Product.java`):
//    - This class represents a document in your MongoDB collection.
//
//    import org.springframework.data.annotation.Id;
//    import org.springframework.data.mongodb.core.mapping.Document;
//    import lombok.Data;
//
//    @Data // Lombok annotation for getters, setters, etc.
//    @Document(collection = "products") // Maps this class to the "products" collection
//    public class Product {
//        @Id
//        private String id;
//        private String name;
//        private String description;
//        private String price;
//        // ... add other fields from the 'Product' type
//    }
//
// 4. CREATE THE REPOSITORY INTERFACE (e.g., `com.electromart.repository.ProductRepository.java`):
//    - This interface will handle database operations. Spring Data provides implementations automatically.
//
//    import org.springframework.data.mongodb.repository.MongoRepository;
//    import com.electromart.model.Product;
//
//    public interface ProductRepository extends MongoRepository<Product, String> {
//        // You can add custom query methods here if needed, e.g., List<Product> findByCategory(String category);
//    }
//
// 5. CREATE THE SERVICE LAYER (Optional but recommended for business logic):
//    - This layer will mediate between the controller and the repository.
//
//    import org.springframework.stereotype.Service;
//    import org.springframework.beans.factory.annotation.Autowired;
//    // ... other imports
//
//    @Service
//    public class ProductService {
//        @Autowired
//        private ProductRepository productRepository;
//
//        public List<Product> getAllProducts() {
//            return productRepository.findAll();
//        }
//    }
//
// 6. CREATE THE REST CONTROLLER (e.g., `com.electromart.controller.ProductController.java`):
//    - This class defines the API endpoints.
//
//    import org.springframework.web.bind.annotation.*;
//    // ... other imports
//
//    @RestController
//    @RequestMapping("/api/products") // Base path for all endpoints in this controller
//    @CrossOrigin(origins = "http://localhost:3000") // Allow requests from your React app
//    public class ProductController {
//        @Autowired
//        private ProductService productService;
//
//        @GetMapping
//        public List<Product> getAllProducts() {
//            return productService.getAllProducts();
//        }
//
//        // Example: Get a product by ID
//        // @GetMapping("/{id}")
//        // public Optional<Product> getProductById(@PathVariable String id) { ... }
//    }
//
// 7. RUN THE APPLICATION:
//    - Run the main application class. Your Spring Boot server will start, usually on port 8080.
//    - Your API will be available at http://localhost:8080/api/products.
//
// --- Mock API Functions ---

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300); // Simulate network delay
  });
};

export const getTeamMembers = (): Promise<TeamMember[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(team);
    }, 300);
  });
};

export const getServices = (): Promise<Service[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(services);
    }, 300);
  });
};
