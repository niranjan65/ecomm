import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ProductCarousel = ({products}) => {
    console.log("products in carousel", products);
  const [bestSellingIndex, setBestSellingIndex] = useState(0);
  const [todaysDealIndex, setTodaysDealIndex] = useState(0);

  const bestSellingProducts = [
    {
      id: 1,
      name: "Disney Men's Mickey and...",
      price: "$600.000",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Women's Plain Dress One Piec...",
      price: "$49.000",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Like Dreams Large Sherpa T...",
      price: "$72.120",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Insight Cosmetics 3D Highlighter",
      price: "$60.000",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Nescafé Clasico, Dark Roast...",
      price: "$10.390",
      image: "https://images.unsplash.com/photo-1599659958506-205eaa7d9b48?w=300&h=300&fit=crop"
    }
  ];

  const todaysDeals = [
    {
      id: 1,
      name: "Like Dreams Large Sherpa Tote Bag, Inner Pocket...",
      price: "K 30.25",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300&h=300&fit=crop"
    }
  ];

  const scrollBestSelling = (direction) => {
    if (direction === 'next' && bestSellingIndex < bestSellingProducts.length - 1) {
      setBestSellingIndex(bestSellingIndex + 1);
    } else if (direction === 'prev' && bestSellingIndex > 0) {
      setBestSellingIndex(bestSellingIndex - 1);
    }
  };

  const scrollTodaysDeal = (direction) => {
    if (direction === 'next' && todaysDealIndex < todaysDeals.length - 1) {
      setTodaysDealIndex(todaysDealIndex + 1);
    } else if (direction === 'prev' && todaysDealIndex > 0) {
      setTodaysDealIndex(todaysDealIndex - 1);
    }
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-50">
      {/* Best Selling Section */}
      <div className="flex-1 bg-[#e6efec] rounded-3xl p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Best Selling in Fashion</h2>
          <button 
            onClick={() => scrollBestSelling('next')}
            className="bg-gray-900 text-white rounded-full p-3 hover:bg-gray-800 transition"
          >
            
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${bestSellingIndex * 210}px)` }}
          >
            {products && products.map((product) => (
              <div 
                key={product.name} 
                className="w-52 bg-white rounded-xl p-3 flex flex-col items-center"
              >
                <div className="w-full h-52 mb-3 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={`http://192.168.101.182:8002${product?.image}`} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs text-center text-gray-700 mb-1 h-4 line-clamp-2">
                  {product.item_name.slice(0, 20)}
                </h3>
                <p className="text-base font-semibold text-gray-900">K {product.original_price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Deal Section */}
      <div className="w-80 bg-white border-2 border-gray-900 rounded-3xl p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Todays Deal</h2>
          <button 
            onClick={() => scrollTodaysDeal('next')}
            className="bg-gray-900 text-white rounded-full p-3 hover:bg-gray-800 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative">
          {todaysDealIndex > 0 && (
            <button
              onClick={() => scrollTodaysDeal('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <div className="flex flex-col items-center">
            {todaysDeals.map((product, index) => (
              <div 
                key={product.id}
                className={`${index === todaysDealIndex ? 'block' : 'hidden'} w-full`}
              >
                <div className="w-full h-32 mb-6 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base text-center text-gray-700 mb-3">
                  {product.name}
                </h3>
                <p className="text-2xl font-semibold text-gray-900 text-center">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          {todaysDealIndex < todaysDeals.length - 1 && (
            <button
              onClick={() => scrollTodaysDeal('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;