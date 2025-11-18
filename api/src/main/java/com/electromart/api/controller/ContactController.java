package com.electromart.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.electromart.api.model.ContactMessage;
import com.electromart.api.service.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    // GET ALL CONTACT MESSAGES (ADMIN)
    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return contactService.getAllMessages();
    }

    // SAVE NEW CONTACT MESSAGE (FORM SUBMISSION)
    @PostMapping
    public ResponseEntity<ContactMessage> saveMessage(@RequestBody ContactMessage message) {
        return ResponseEntity.ok(contactService.saveMessage(message));
    }

    // DELETE CONTACT MESSAGE BY ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable String id) {
        contactService.deleteMessage(id);
        return ResponseEntity.noContent().build();
    }
}

