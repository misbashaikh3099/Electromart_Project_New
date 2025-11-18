// import React, { useState } from 'react';
// import { products } from '../data';
// import { Product } from '../types';

// const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
//     <div className="bg-gray-700 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//             <h1 className="text-4xl font-bold">{title}</h1>
//             <p className="text-lg mt-2 text-gray-300">{subtitle}</p>
//         </div>
//     </div>
// );

// const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:-translate-y-1">
//         <div className="relative">
//             <div className="h-56 bg-gray-200 flex items-center justify-center">
//                 <i className={`${product.icon} text-8xl text-gray-400`}></i>
//             </div>
//             {product.badge && <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{product.badge}</span>}
//         </div>
//         <div className="p-4 flex flex-col h-[calc(100%-14rem)]">
//             <div className="flex-grow">
//                 <div className="text-xs text-blue-500 font-semibold mb-1">{product.category}</div>
//                 <h3 className="text-lg font-bold mb-2 h-14">{product.name}</h3>
//                 <div className="flex items-center mb-2 text-yellow-500">
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star-half-alt"></i>
//                     <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-3 h-10">{product.description}</p>
//             </div>
//             <div className="mt-auto">
//                 <div className="flex items-baseline mb-4">
//                     <span className="text-2xl font-bold text-gray-800">{product.price}</span>
//                     {product.oldPrice && <span className="text-sm text-gray-500 line-through ml-2">{product.oldPrice}</span>}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                     <button className="flex-grow bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Add to Cart</button>
//                     <button className="border border-gray-300 text-gray-500 w-10 h-10 rounded-md hover:bg-gray-100 hover:text-red-500 transition-colors duration-300">
//                         <i className="far fa-heart"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// const ProductsPage: React.FC = () => {
//     const filters = ['All', 'Lighting', 'Wiring', 'Switches', 'Protection', 'Appliances'];
//     const [activeFilter, setActiveFilter] = useState('All');

//     const filteredProducts = activeFilter === 'All' 
//         ? products 
//         : products.filter(p => p.category === activeFilter);


//     return (
//         <>
//             <PageHeader title="Our Products" subtitle="Discover the latest in quality electrical hardware" />
            
//             <div className="bg-gray-100 py-6">
//                 <div className="container mx-auto px-4">
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                         <div className="relative w-full md:w-1/3">
//                              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
//                              <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {filters.map(filter => (
//                                 <button 
//                                     key={filter}
//                                     onClick={() => setActiveFilter(filter)}
//                                     className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeFilter === filter ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
//                                 >
//                                     {filter}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="py-16">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                         {filteredProducts.map(product => (
//                            <ProductCard key={product.id} product={product} />
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ProductsPage;
// import React, { useState } from 'react';
// import { products } from "../data";
// import { products } from "@/data";
import { products } from "@/data";
import { Product } from "../types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 🔹 Header section
const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-gray-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-gray-300">{subtitle}</p>
    </div>
  </div>
);

// 🔹 Product Card
const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (product: Product) => void;
  onBookNow: (product: Product) => void;
  liked: boolean;
  onToggleLike: () => void;
}> = ({ product, onAddToCart, onBookNow, liked, onToggleLike }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform transform hover:-translate-y-1">
    <div className="relative">
      <div className="h-56 bg-gray-200 flex items-center justify-center">
        <i className={`${product.icon} text-8xl text-gray-400`}></i>
      </div>

      {/* ❤️ Favorite Button */}
      <button
        onClick={() => {
          onToggleLike();      // turn heart red
          onAddToCart(product); // add product to backend cart
        }}
        className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
      >
        <i
          className={`fas fa-heart text-xl transition-colors duration-300 ${
            liked ? "text-red-500" : "text-gray-400"
          }`}
        ></i>
      </button>
    </div>

    <div className="p-4 flex flex-col h-[calc(100%-14rem)]">
      <div className="flex-grow">
        <div className="text-xs text-blue-500 font-semibold mb-1">
          {product.category}
        </div>
        <h3 className="text-lg font-bold mb-2 h-14">{product.name}</h3>

        <p className="text-sm text-gray-600 mb-3 h-10">{product.description}</p>
      </div>

      <div className="mt-auto">
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-gray-800">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              {product.oldPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-2"
        >
          Add to Cart
        </button>

        <button
          onClick={() => onBookNow(product)}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
);

// 🔹 Full Products Page
const ProductsPage: React.FC = () => {
  const filters = ["All", "Lighting", "Wiring", "Switches", "Protection", "Appliances"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // ❤️ Favorite States
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // 🛒 Add to cart backend API
  const handleAddToCart = async (product: Product) => {
    try {
      const response = await fetch("http://https://electromart-services.onrender.com//api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          icon: product.icon,
        }),
      });

      if (response.ok) {
        alert(`${product.name} added to cart!`);
      } else {
        alert("❌ Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Backend connection error");
    }
  };

  const handleBookNow = (product: Product) => {
    navigate(`/book/${encodeURIComponent(product.name)}`);
  };

  const filteredProducts = products.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.category === activeFilter;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Discover the latest in quality electrical hardware"
      />

      {/* Filter + Search */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeFilter === filter
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onBookNow={handleBookNow}
                liked={favorites.includes(product.id)}
                onToggleLike={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
