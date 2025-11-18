package com.electromart.service;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.electromart.api.ApiApplication;   // ✅ import your main class

@SpringBootTest(classes = ApiApplication.class)  // ✅ tell Spring where your main app class is
public class ProductServiceTest {

    @Test
    public void contextLoads() {
        assertTrue(true);
    }
}
