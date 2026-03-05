import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const menuItems = [
  { id: 1, name: "8 Pc. Hot & Crispy Bucket", price: 1200, category: "Buckets", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop" },
  { id: 2, name: "Zinger Crunch Burger", price: 450, category: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
  { id: 3, name: "Crispy Chicken Popcorn", price: 300, category: "Snacks", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop" },
  { id: 4, name: "Secret Recipe Fries", price: 200, category: "Sides", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop" },
  { id: 5, name: "Paneer Zinger Deluxe", price: 400, category: "Burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop" },
  { id: 6, name: "Pepsi 500ml", price: 100, category: "Beverages", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=300&fit=crop" },
  { id: 7, name: "12 Pc. Family Feast Bucket", price: 1800, category: "Buckets", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop" },
  { id: 8, name: "4 Pc. Original Recipe Chicken", price: 650, category: "Buckets", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
  { id: 9, name: "Double Down Burger", price: 550, category: "Burgers", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop" },
  { id: 10, name: "Tower Zinger Burger", price: 520, category: "Burgers", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop" },
  { id: 11, name: "Hot Wings 6 Pc", price: 350, category: "Snacks", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop" },
  { id: 12, name: "Crispy Strips 3 Pc", price: 280, category: "Snacks", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop" },
  { id: 13, name: "Loaded Fries with Cheese", price: 320, category: "Sides", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop" },
  { id: 14, name: "Coleslaw Regular", price: 150, category: "Sides", image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop" },
  { id: 15, name: "7UP 500ml", price: 100, category: "Beverages", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop" },
  { id: 16, name: "Mountain Dew 500ml", price: 100, category: "Beverages", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop" },
];


const categories = ["All", ...new Set(menuItems.map(item => item.category))];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

 
  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);
 
    
  return (
    <div className="bg-[#FBF6F6] min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 border-l-8 border-[#D10000] pl-4">
          <h1 className="text-4xl font-extrabold text-gray-900">OUR MENU</h1>
          <p className="text-gray-600 mt-2">Explore our legendary range of finger licking' good chicken.</p>
        </div>

      
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-[#E4002B] text-white px-4 py-2 rounded-full font-bold"
                  : "bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-full font-medium hover:bg-gray-100"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-[#D10000] uppercase shadow-sm">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-[#D10000] font-black text-lg mb-4">Rs. {product.price}</p>
                
                <button className="w-full bg-[#E4002B] hover:bg-[#b30022] text-white py-2.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                  <span>Add to Cart</span>
                  <FaShoppingCart className="text-[18px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;