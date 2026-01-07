import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const ClassifiedAds = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "Xscape Women's Long Off Shoulder Sweetheart Nec...",
      price: "$279.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Adrianna Papell Women's Long Beaded Dress",
      price: "$229.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Women's Two-Piece Dress with Embellished Jacket...",
      price: "$149.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Canon EOS 1500D/Rebel T7 DSLR Camera with EF...",
      price: "$52.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1606980707123-8c2e7f3e0c4e?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Sony Bravia 108 cm (43 inches) Full HD Smart LE...",
      price: "$320.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop"
    },
    {
      id: 6,
      title: "The Children's Place Girls Medium Weight Puffer...",
      price: "$43.250",
      condition: "new",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop"
    },
    {
      id: 7,
      title: "SAMSUNG Galaxy A23 5G A Series Cell Phone,...",
      price: "$25.260",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop"
    },
    {
      id: 1,
      title: "Xscape Women's Long Off Shoulder Sweetheart Nec...",
      price: "$279.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Adrianna Papell Women's Long Beaded Dress",
      price: "$229.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Women's Two-Piece Dress with Embellished Jacket...",
      price: "$149.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Canon EOS 1500D/Rebel T7 DSLR Camera with EF...",
      price: "$52.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1606980707123-8c2e7f3e0c4e?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Sony Bravia 108 cm (43 inches) Full HD Smart LE...",
      price: "$320.000",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop"
    },
    {
      id: 6,
      title: "The Children's Place Girls Medium Weight Puffer...",
      price: "$43.250",
      condition: "new",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop"
    },
    {
      id: 7,
      title: "SAMSUNG Galaxy A23 5G A Series Cell Phone,...",
      price: "$25.260",
      condition: "Used",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.product-card').offsetWidth + 16; // card width + gap
      const maxScroll = (products.length - 1) * cardWidth;
      
      let nextIndex = currentIndex + 1;
      
      if (currentIndex * cardWidth >= maxScroll) {
        nextIndex = 0;
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: nextIndex * cardWidth, behavior: 'smooth' });
      }
      
      setCurrentIndex(nextIndex);
    }
  };

  const handleManualScroll = () => {
    handleScroll();
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-4 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Classified Ads</h2>
            <p className="text-gray-600 text-sm">Products (18)</p>
          </div>
          <button
            onClick={handleManualScroll}
            className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card shrink-0 w-50 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 h-10 overflow-hidden">
                  {product.title}
                </h3>
                <p className="text-lg font-bold text-gray-900 mb-2">
                  {product.price}
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded text-xs font-medium ${
                    product.condition === 'new'
                      ? 'bg-gray-900 text-white'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {product.condition === 'new' ? 'new' : 'Used'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassifiedAds;