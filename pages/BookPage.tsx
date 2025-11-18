import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookPage: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    date: "",
    productName: productName || "",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    alert(`💳 Payment Successful using ${formData.paymentMethod}`);
    setFormData({ ...formData, paymentStatus: "Paid" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://electromart-services.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("✅ Booking Confirmed!");
        setFormData({
          name: "",
          email: "",
          address: "",
          date: "",
          productName: productName || "",
          paymentMethod: "Cash on Delivery",
          paymentStatus: "Pending",
        });
      } else {
        alert("❌ Booking Failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error connecting to backend");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">Book Product</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />

        <textarea
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        ></textarea>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          readOnly
          className="w-full border rounded-md p-2 bg-gray-100 cursor-not-allowed"
        />

        {/* 💳 Payment Section */}
        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-lg font-semibold mb-2">Payment Details</h2>

          <label className="block mb-2">Select Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
          </select>

          <button
            type="button"
            onClick={handlePayment}
            className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Make Payment
          </button>

          <div className="mt-2 text-gray-700">
            Payment Status:{" "}
            <span
              className={`font-semibold ${
                formData.paymentStatus === "Paid" ? "text-green-600" : "text-red-500"
              }`}
            >
              {formData.paymentStatus}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition mt-4"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookPage;
