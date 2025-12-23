import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Plus } from 'lucide-react';

const ProductCard = ({ product, size = 'normal' }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 relative">
      {product.badge && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.badge}
        </span>
      )}
      
      <button 
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
      </button>
      
      <div className="flex justify-center items-center h-40 mb-4">
        <img src={product.image} alt={product.name} className="max-h-full object-contain" />
      </div>
      
      {product.tag && (
        <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-2">
          {product.tag}
        </span>
      )}
      
      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
      
      {product.rating && (
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg font-bold text-gray-900">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
        )}
      </div>
      
      {product.progress && (
        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
            <div 
              className="bg-orange-500 h-1.5 rounded-full" 
              style={{ width: `${product.progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500">Available only: {product.available}</span>
        </div>
      )}
      
      <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
        Add to cart
        <Plus className="w-4 h-4" />
      </button>
      
      {product.units && (
        <div className="flex gap-2 mt-3 text-xs text-gray-500">
          {product.units.map((unit, idx) => (
            <button key={idx} className="border border-gray-300 rounded px-2 py-1 hover:border-green-500">
              {unit}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryBanner = ({ title, subtitle, image, bgColor }) => (
  <div className={`${bgColor} rounded-xl p-8 relative overflow-hidden`}>
    <div className="relative z-10">
      <p className="text-sm text-gray-600 mb-2">Only This Week</p>
      <h2 className="text-2xl font-bold text-gray-900 mb-2 max-w-xs">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
      <button className="text-sm font-semibold text-gray-900 hover:text-green-600 flex items-center gap-1">
        Shop Now →
      </button>
    </div>
    <img src={image} alt="" className="absolute right-0 bottom-0 h-full object-contain opacity-90" />
  </div>
);

const NewsCard = ({ article }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="relative">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <span className="absolute top-4 left-4 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
        {article.category}
      </span>
    </div>
    <div className="p-5">
      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span>By {article.author}</span>
        <span>|</span>
        <span>{article.date}</span>
        <span>|</span>
        <span>{article.readTime}</span>
      </div>
    </div>
  </div>
);

export default function GroceryStore() {
  const editorsPicks = [
    {
      id: 1,
      name: "100 Percent Apple Juice - 64 fl oz Bottle",
      price: "0.50",
      originalPrice: "1.99",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop",
      badge: "Sale",
      tag: "FEATURED",
      progress: 78,
      available: 23,
      units: ["64", "96", "27", "48"]
    },
    {
      id: 2,
      name: "Great Value Rising Crust Frozen Pizza, Supreme",
      price: "8.98",
      originalPrice: "9.98",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop",
      badge: "12%",
      tag: "BEST DEALS",
      rating: 4,
      reviews: 556
    },
    {
      id: 3,
      name: "California Pizza Kitchen White Cheese Frozen Pizza, 14.4 oz",
      price: "11.77",
      originalPrice: "14.77",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=200&h=200&fit=crop",
      badge: "29%",
      tag: "BEST DEALS",
      progress: 65,
      available: 19,
      units: ["86", "96", "27", "48"]
    },
    {
      id: 4,
      name: "Cantaloupe Melon Fresh Organic Cut",
      price: "1.25",
      originalPrice: "2.08",
      image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=200&h=200&fit=crop",
      badge: "56%",
      rating: 4,
      reviews: 426
    }
  ];

  const categoryProducts = [
    {
      id: 5,
      name: "Great Value Rising Crust Frozen Pizza, Supreme",
      price: "8.99",
      originalPrice: "9.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop",
      badge: "Sale",
      tag: "BEST DEALS",
      rating: 4,
      reviews: 556
    },
    {
      id: 6,
      name: "Simple Kitchen FD Sliced Strawberries - 1.06oz",
      price: "21.90",
      originalPrice: "24.90",
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop",
      badge: "12%",
      rating: 5,
      reviews: 98
    },
    {
      id: 7,
      name: "Red Baron Frozen Meat Topped Pizzas Variety Pack - 5ct",
      price: "14.98",
      originalPrice: "18.99",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop",
      badge: "23%",
      rating: 4,
      reviews: 321
    },
    {
      id: 8,
      name: "Oscar Mayer Ham & Swiss Melt Sandwich - 2oz",
      price: "11.90",
      originalPrice: "12.90",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=200&h=200&fit=crop",
      badge: "23%",
      rating: 5,
      reviews: 234
    }
  ];

  const newsArticles = [
    {
      id: 1,
      category: "UNCATEGORIZED",
      title: "How grocers are approaching delivery as the market evolves",
      excerpt: "Companies are rethinking their approach to home delivery as demand slows and costs remain high.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
      author: "admin",
      date: "5 Nov 2023",
      readTime: "8 mins"
    },
    {
      id: 2,
      category: "UNCATEGORIZED",
      title: "The Friday Checkout: Food insecurity keeps retailers off balance",
      excerpt: "Retailers are working to address food insecurity while managing their own business challenges.",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
      author: "admin",
      date: "3 Nov 2023",
      readTime: "6 mins"
    },
    {
      id: 3,
      category: "UNCATEGORIZED",
      title: "Consumers want grocers to use AI to help them save money",
      excerpt: "Shoppers are looking for technology-driven solutions to reduce their grocery bills.",
      image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=400&h=300&fit=crop",
      author: "admin",
      date: "1 Nov 2023",
      readTime: "7 mins"
    },
    {
      id: 4,
      category: "UNCATEGORIZED",
      title: "Order up! How grocers are replicating the restaurant experience in retail",
      excerpt: "Supermarkets are incorporating foodservice elements to enhance the shopping experience.",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=400&h=300&fit=crop",
      author: "admin",
      date: "30 Oct 2023",
      readTime: "5 mins"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-green-600">GroceryMart</h1>
              <nav className="hidden md:flex gap-6">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-green-600">Home</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-green-600">Shop</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-green-600">About</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-green-600">Blog</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Editor's Pick Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Editor's Pick</h2>
              <p className="text-sm text-gray-500">New products with updated stocks</p>
            </div>
            <button className="text-sm font-semibold text-green-600 hover:text-green-700">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorsPicks.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Category Banners */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <CategoryBanner 
            title="Make your grocery shopping easy with us"
            subtitle="A family shop for grocery"
            bgColor="bg-gradient-to-br from-yellow-50 to-orange-50"
            image="https://images.unsplash.com/photo-1601598851547-4302969d0614?w=300&fit=crop"
          />
          <CategoryBanner 
            title="Get your everyday needs here with us"
            subtitle="A different kind of grocery store"
            bgColor="bg-gradient-to-br from-blue-50 to-purple-50"
            image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&fit=crop"
          />
        </div>

        {/* Category Products */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Category Products</h2>
              <p className="text-sm text-gray-500">Explore fresh offers until the end of March</p>
            </div>
            <button className="text-sm font-semibold text-green-600 hover:text-green-700">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-xl p-12 mb-12 relative overflow-hidden">
          <div className="relative z-10 text-white max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">In store or online your health & safety is our top priority</h2>
            <p className="text-lg opacity-90">The only supermarket that makes your life easier, healthier and happier</p>
          </div>
        </div>

        {/* News Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our News</h2>
              <p className="text-sm text-gray-500">Some of our best posts this week</p>
            </div>
            <button className="text-sm font-semibold text-green-600 hover:text-green-700">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 GroceryMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}