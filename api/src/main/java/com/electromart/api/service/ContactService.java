package com.electromart.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.electromart.api.model.ContactMessage;
import com.electromart.api.repository.ContactMessageRepository;

@Service
public class ContactService {

    @Autowired
    private ContactMessageRepository repo;

    public ContactMessage saveMessage(ContactMessage message) {
        return repo.save(message);
    }

    public List<ContactMessage> getAllMessages() {
        return repo.findAll();
    }

    public void deleteMessage(String id) {
        repo.deleteById(id);
    }
}
