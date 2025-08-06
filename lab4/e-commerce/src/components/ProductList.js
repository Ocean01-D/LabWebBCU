import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import Loading from './Loading';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('name');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCategory && matchPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="flex space-x-2">
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
