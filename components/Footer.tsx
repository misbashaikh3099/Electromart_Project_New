import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">About Electromart</h3>
            <p className="text-sm">Your trusted partner for all electronics and home appliances. We provide quality products at competitive prices.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Lighting</a></li>
              <li><a href="#" className="hover:text-white">Wiring & Cables</a></li>
              <li><a href="#" className="hover:text-white">Switches & Sockets</a></li>
              <li><a href="#" className="hover:text-white">Circuit Protection</a></li>
              <li><a href="#" className="hover:text-white">Fans & Appliances</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2"><i className="fas fa-map-marker-alt mt-1"></i><span>123 Gandhinagar, Kolhapur</span></li>
              <li className="flex items-center space-x-2"><i className="fas fa-phone"></i><span>+91 989048500</span></li>
              <li className="flex items-center space-x-2"><i className="fas fa-envelope"></i><span>info@electromart.com</span></li>
              <li className="flex items-center space-x-2"><i className="fas fa-clock"></i><span>Mon-Sat: 9AM - 8PM</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <p>&copy; 2024 Electromart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;