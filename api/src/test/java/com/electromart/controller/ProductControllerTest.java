package com.electromart.controller;



import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.electromart.api.ApiApplication;  // ✅ important import

@SpringBootTest(classes = ApiApplication.class)  // ✅ tells Spring which class to load
public class ProductControllerTest {

    @Test
    public void contextLoads() {
        assertTrue(true);
    }
}
