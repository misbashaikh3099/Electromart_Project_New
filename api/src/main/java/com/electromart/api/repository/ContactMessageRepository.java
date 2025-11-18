package com.electromart.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.electromart.api.model.ContactMessage;

public interface ContactMessageRepository extends MongoRepository<ContactMessage, String> {
}
