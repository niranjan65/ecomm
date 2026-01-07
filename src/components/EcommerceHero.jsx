import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function EcommerceHero() {
  const categories = [
    { name: 'Women Clothing &...', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/nZI9U43Qh0eGER5tcaWbQ9y2yJzHhFmK2edZ4T0R.webp' },
    { name: 'Automobile &...', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/C1PmfXyvOmZveOTwuT6PBdX4FRFxVKhLU6TcSJTF.webp' },
    { name: 'Sports & outdoor', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/FITZDOqxSvJSeoMibd2YWC6MzeuQ6zhOkyscBxqp.webp' },
    { name: 'Beauty, Health & Hair', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/ITqelUeCEQM6hHejRPqBDyrNITUhVycR8iT6AKYg.webp' },
    { name: 'Men Clothing &...', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/huj0Q3hBncctLYsiLeQg5mObSIPk8s1NGi1JdsmP.webp' },
    { name: 'Kids & toy', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/ym8I9Gxtc99vYJMrUKG32X30QDEe47AtlZjAXb63.webp' },
    { name: 'Jewelry & Watches', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/SMQEr5c2LYZVLdLtHABHSLqq3oAwEAk3hxcYPlA8.webp' },
    { name: 'Home Improvemen...', icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/LMEksUJ8Pf3c7lrBJq49llgTuQ3iWhtY4QAqt7fa.webp' },
  ];

  const featuredProducts = [
    {
      name: 'Like Dreams Large Sherpa Tote Bag, Inner...',
      price: 'K 72.120',
      icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/YnvcZGKFkK6X3okfd4tU7T7FmkdbmEsDnb6GcCBH.webp'
    },
    {
      name: 'Insight Cosmetics 3D Highlighter',
      price: 'K 60.000',
      icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/uVEsXJ4vS33ocIv6fJIYkC0Gp8LNRcyNnMSW4yTq.webp'
    },
    {
      name: "Women's Plain Dress One Piece for Girls",
      price: 'K 49.000',
      icon: 'https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/xyoiNgOImmfImFzccMJ7XN0IDhwOeSJqWdEYzQxv.webp'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-[1400px] mx-auto flex gap-6">
        {/* Left Section - Winter Dresses */}
        <div className="w-[500px] h-[530px] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-3xl relative overflow-hidden flex-shrink-0">
          {/* <div className="absolute inset-0 p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-[64px] font-bold text-white leading-tight mb-2 tracking-tight">
                WINTER DRESSES
              </h1>
              <p className="text-[52px] font-light text-white/95 leading-tight tracking-wide">
                for her
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/25 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7S11.5 3 10 3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg tracking-wide">PINK HORIZON</p>
                  <p className="text-white/90 text-sm">All About Her</p>
                </div>
              </div>
              
              <div>
                <p className="text-white/90 text-sm mb-1">Exclusive Partner</p>
                <p className="text-white font-bold text-xl tracking-wide">ACTIVE ECOMMERCE CMS</p>
              </div>
            </div>
          </div> */}

          <img src="https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/yu3wzRMOsUYice8235UIwju9WNcfjnNwk0DwcJBV.webp"
          className='w-full h-full object-cover'
           alt="" />
        </div>

        {/* Middle Section - End of Season */}
        {/* <div className="w-[500px] h-[530px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl relative overflow-hidden flex-shrink-0">
          <div className="p-10 h-full flex flex-col">
            <div>
              <h2 className="text-5xl font-bold text-white text-center mb-2">End of Season</h2>
              <p className="text-white/95 text-center text-base">For limited time in Flash Sale</p>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-8xl">😃</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
              <div className="flex justify-center items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">328</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">7</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Hrs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">33</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Min</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">48</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Right Section - Hot Categories and Featured Products */}
        <div className="flex-1 flex flex-col gap-4">
          
                  <div className='flex justify-between'>

                    <div className='w-[300px]'>
                        <img
                         src="https://demo.activeitzone.com/ecommerce_repo/public/uploads/all/7oyS7eEuEB5UiBa6N0cX8m6kS5GhnPLQiQTh2vuB.webp"
                         className='w-full h-full object-cover rounded-xl'
                          alt="" />
                    </div>
                      {/* Hot Categories */}
                      <div className="bg-white rounded-3xl shadow-sm p-6">
                          <div className="flex items-center gap-2 mb-6">
                              <span className="text-2xl">🔥</span>
                              <h3 className="text-xl font-bold text-gray-900">Hot Categories</h3>
                          </div>

                          <div className="grid grid-cols-4">
                              {categories.map((category, index) => (
                                  <div
                                      key={index}
                                      className="flex flex-col items-center"
                                  >
                                      <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 hover:bg-gray-100 transition-colors cursor-pointer">
                                          {/* <span className="text-4xl">{category.icon}</span> */}
                                            <img src={category.icon} alt={category.name} className="w-12 h-12 object-contain" />
                                      </div>
                                      <p className="text-xs text-gray-700 text-center font-medium leading-tight">
                                          {category.name}
                                      </p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

          {/* Featured Products */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Featured Products</h3>
              <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
            
            <div className="flex gap-6">
              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex-1 flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors">
                    {/* <span className="text-4xl">{product.icon}</span> */}
                    <img src={product.icon} alt={product.name} className="w-12 h-12 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-lg font-bold text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}