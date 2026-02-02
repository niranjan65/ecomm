

import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const ProductList = ({itemData}) => {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-wrap justify-center  bg-gray-50">
      
      {/* Card */}
      <div
        className="w-40 sm:w-[200px] md:w-[234px] bg-white border border-gray-200 overflow-hidden "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Image */}
        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[234px] bg-gray-100 overflow-hidden">
          <img
            // src="https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_10_1.jpg"
            src={`https://mycardpng.com${itemData?.website_item_thumbnail}`}
            alt="The Felted Merino Cable-Knit Crew"
            className="w-full h-full object-cover"
          />

          {/* Hover Eye Button */}
          <div
            className={`absolute inset-0 bg-opacity-0 transition-all duration-300 flex items-center justify-center ${
              isHovered ? " bg-opacity-80" : ""
            }`}
          >
            <button
              className={`w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:bg-black ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-4">
          <h3 className="text-xs sm:text-sm font-normal text-gray-900 mb-1 sm:mb-2 leading-tight">
            <strong>{itemData?.website_item_name}</strong>
          </h3>
          <p className="text-sm sm:text-base font-semibold text-gray-900">$58.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
