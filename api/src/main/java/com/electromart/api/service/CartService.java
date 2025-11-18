// package com.electromart.api.service;

// import com.electromart.api.model.CartItem;
// import com.electromart.api.repository.CartRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class CartService {

//     @Autowired
//     private CartRepository cartRepository;

//     public List<CartItem> getAllItems() {
//         return cartRepository.findAll();
//     }

//     public CartItem addToCart(CartItem item) {
//         return cartRepository.save(item);
//     }

//     public void removeFromCart(String id) {
//         cartRepository.deleteById(id);
//     }

//     public void clearCart() {
//         cartRepository.deleteAll();
//     }
// }
package com.electromart.api.service;

import com.electromart.api.model.CartItem;
import com.electromart.api.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    // ✅ Get all cart items
    public List<CartItem> getAllItems() {
        return cartRepository.findAll();
    }

    // ✅ Add new item to cart
    public CartItem addToCart(CartItem item) {
        return cartRepository.save(item);
    }

    // ✅ Remove an item from cart by ID
    public void removeFromCart(String id) {
        cartRepository.deleteById(id);
    }

    // ✅ Clear entire cart
    public void clearCart() {
        cartRepository.deleteAll();
    }
}
