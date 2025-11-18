package com.electromart.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.electromart.api.model.CartItem;

public interface CartRepository extends MongoRepository<CartItem, String> {
}
