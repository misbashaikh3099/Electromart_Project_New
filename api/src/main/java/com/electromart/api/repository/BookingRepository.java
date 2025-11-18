package com.electromart.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.electromart.api.model.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {
}
