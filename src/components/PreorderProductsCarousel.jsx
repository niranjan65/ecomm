import React, { useState } from 'react';
import { ChevronRight, Clock } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="relative group">
      {/* Animated outline container */}
      <div className="relative rounded overflow-hidden">
        {/* Before and After pseudo-elements simulation */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-0 h-0 border-2 border-transparent rounded transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-t-black group-hover:border-r-black" 
               style={{ transitionProperty: 'width, height', transitionDuration: '0.3s, 0.3s', transitionDelay: '0s, 0.3s' }}></div>
          <div className="absolute top-0 left-0 w-0 h-0 border-2 border-transparent rounded transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:border-b-black group-hover:border-l-black"
               style={{ transitionProperty: 'height, width', transitionDuration: '0.3s, 0.3s', transitionDelay: '0s, 0.3s' }}></div>
        </div>

        {/* Clock Icon Badge */}
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-orange-500 rounded-full p-2 shadow-lg">
            <Clock className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Product Image */}
        <div className="bg-white p-6 aspect-square flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Product Info */}
      <div className="mt-4 mb-4">
        <h3 className="text-sm text-center text-gray-800 mb-2 line-clamp-2 min-h-10">
          {product.name}
        </h3>
        
        {/* Star Rating */}
        <div className='w-full flex items-center justify-center'>
          <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < product.rating ? 'text-orange-400 fill-current' : 'text-gray-300 fill-current'}`}
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        </div>
      </div>
      </div>

      
    </div>
  );
};

const PreorderProductsCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const products = [
    {
      id: 1,
      name: "Canon EOS 5D MarkII",
      image: "https://rukminim2.flixcart.com/image/416/416/camera/c/t/k/canon-eos-5d-slr-original-imadygmhcuvcnszg.jpeg?q=70&crop=false",
      rating: 0
    },
    {
      id: 2,
      name: "97 Inch Class LG OLED evo G4 4K Smart TV 2024 with Suppli...",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
      rating: 0
    },
    {
      id: 3,
      name: "HOBIBEAR Unisex Garden Clogs Shoes Slippers Sandals...",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 4,
      name: "Apple 2024 MacBook Pro Laptop with M4 Max, 16-core CPU,...",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 5,
      name: "Jessica Simpson Womens Setria Solid Slip-On Pumps",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
      rating: 5
    }
  ];

  const scrollNext = () => {
    const container = document.getElementById('products-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[90rem] mx-auto p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Newest Preorder Products</h2>
        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Products Grid */}
      <div className="flex gap-6">
        {/* Promo Card */}
        <div className="shrink-0 w-80 bg-linear-to-br from-gray-700 to-gray-800 rounded-xl text-white relative overflow-hidden">
          {/* <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">
              Limited Pre-Orders<br />Available
            </h3>
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded font-semibold mb-6">
              Don't Miss Out!
            </div>
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
                alt="Laptop"
                className="w-full rounded-lg opacity-80"
              />
            </div>
          </div> */}

          <img src="https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/8lt5ryUvkKRuGEXGeN1P39H9KiPKigqA2bRpdF8c.webp" className='w-full h-full' alt="" />
        </div>

        {/* Scrollable Products */}
        <div 
          id="products-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide flex-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        #products-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PreorderProductsCarousel;