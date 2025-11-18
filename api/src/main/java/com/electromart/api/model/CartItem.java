package com.electromart.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cart")
public class CartItem {
    @Id
    private String id;
    private String productId;
    private String name;
    private String price;
    private int quantity;
    private String icon;

    // ✅ Add constructor, getters, setters
    public CartItem() {}

    public CartItem(String id, String productId, String name, String price, int quantity, String icon) {
        this.id = id;
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.icon = icon;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPrice() { return price; }
    public void setPrice(String price) { this.price = price; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
}
