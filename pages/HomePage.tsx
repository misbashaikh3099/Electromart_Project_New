// import React from 'react';
// import { Link } from 'react-router-dom';
// import { featuredProducts, features } from '../data';
// import { Product, Feature } from '../types';

// const Hero: React.FC = () => (
//     <section className="bg-blue-500 text-white">
//         <div className="container mx-auto px-4 py-24 md:py-32 text-center">
//             <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Welcome to Electromart</h1>
//             <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Your One-Stop Shop for Quality Electrical Hardware & Supplies</p>
//             <Link to="/products" className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 inline-flex items-center space-x-2">
//                 <span>Shop Now</span>
//                 <i className="fas fa-arrow-right"></i>
//             </Link>
//         </div>
//     </section>
// );

// const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
//         <i className={`${feature.icon} text-4xl text-blue-500 mb-4`}></i>
//         <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//         <p className="text-gray-600">{feature.description}</p>
//     </div>
// );

// const FeaturesSection: React.FC = () => (
//     <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {features.map((feature, index) => (
//                     <FeatureCard key={index} feature={feature} />
//                 ))}
//             </div>
//         </div>
//     </section>
// );

// const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
//         <div className="relative h-56 bg-gray-200 flex items-center justify-center">
//              <i className={`${product.icon} text-8xl text-gray-400`}></i>
//         </div>
//         <div className="p-6">
//             <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//             <p className="text-gray-600 mb-4 h-12">{product.description}</p>
//             <div className="text-2xl font-bold text-blue-500 mb-4">{product.price}</div>
//             <Link to="/products" className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 block">
//                 View Details
//             </Link>
//         </div>
//     </div>
// );

// const FeaturedProducts: React.FC = () => (
//     <section className="py-16">
//         <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {featuredProducts.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     </section>
// );

// const HomePage: React.FC = () => {
//     return (
//         <>
//             <Hero />
//             <FeaturesSection />
//             <FeaturedProducts />
//         </>
//     );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import { featuredProducts, features } from "../data";
import { Product, Feature } from "../types";

// ---------------- HERO WITH SLIDER ----------------
const Hero: React.FC = () => (
  <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
    {/* Sliding Images */}
     <div className="absolute inset-0 flex animate-slide">
      <img src="/images/dashboard2.jpg"className="w-full h-full object-cover object-center"/>
      <img src="/images/image2.jpg" className="w-full h-full object-cover" />
      <img src="/images/image1.jpg" className="w-full h-full object-cover" />
    </div> 
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text */}
    <div className="relative z-10 text-center text-white px-4 py-24 md:py-32">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Welcome to Electromart
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Your One-Stop Shop for Quality Electrical Hardware & Supplies
      </p>
      <Link
        to="/products"
        className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 inline-flex items-center space-x-2"
      >
        <span>Shop Now</span>
        <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  </section>
);

// ---------------- FEATURE CARD ----------------
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
    <i className={`${feature.icon} text-4xl text-blue-500 mb-4`}></i>
    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

// ---------------- FEATURES SECTION ----------------
const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  </section>
);

// ---------------- PRODUCT CARD ----------------
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="relative h-56 bg-gray-200 flex items-center justify-center">
      <i className={`${product.icon} text-8xl text-gray-400`}></i>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 h-12">{product.description}</p>
      <div className="text-2xl font-bold text-blue-500 mb-4">
        {product.price}
      </div>
      <Link
        to="/products"
        className="w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 block"
      >
        View Details
      </Link>
    </div>
  </div>
);

// ---------------- FEATURED PRODUCTS ----------------
const FeaturedProducts: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

// ---------------- HOME PAGE ----------------
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
