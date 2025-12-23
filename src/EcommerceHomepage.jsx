// import React, { useState } from 'react';
// import { ShoppingCart, Heart, Search, Menu, User, Star, ChevronRight, ChevronDown, MapPin, Package, Phone, Bell, Grid3x3, Truck, Shield, RotateCcw, CreditCard } from 'lucide-react';
// import phoneImage from './assets/phone.png'
// import ProductCard from './components/ProductCard';
// import { useNavigate } from 'react-router-dom';

// const EcommerceHomepage = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [likedItems, setLikedItems] = useState([]);

//   const navigate = useNavigate()

//   const smartphones = [
//     { 
//       name: 'Galaxy S23 Ultra', 
//       price: '₹29999', 
//       originalPrice: '₹74999',
//       discount: '60% OFF',
//       image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop&q=80'
//     },
//     { 
//       name: 'Galaxy M13 (5GB | 64 GB)', 
//       price: '₹10499', 
//       originalPrice: '₹14999',
//       discount: '30% OFF',
//       image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&q=80'
//     },
//     { 
//       name: 'Galaxy M53 (5GB | 64 GB)', 
//       price: '₹16999', 
//       originalPrice: '₹24999',
//       discount: '32% OFF',
//       image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m53-5g.jpg'
//     },
//     { 
//       name: 'Galaxy M23 (5GB | 64 GB)', 
//       price: '₹11999', 
//       originalPrice: '₹17999',
//       discount: '33% OFF',
//       image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop&q=80'
//     },
//     { 
//       name: 'Galaxy S22 Ultra', 
//       price: '₹59999', 
//       originalPrice: '₹89999',
//       discount: '33% OFF',
//       image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=300&h=300&fit=crop&q=80'
//     }
//   ];

//   const categories = [
//     { name: 'Mobile', icon: '📱', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&q=80' },
//     { name: 'Cosmetics', icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&q=80' },
//     { name: 'Electronics', icon: '💻', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop&q=80' },
//     { name: 'Furniture', icon: '🛋️', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop&q=80' },
//     { name: 'Watches', icon: '⌚', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80' },
//     { name: 'Decor', icon: '🌿', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&h=200&fit=crop&q=80' },
//     { name: 'Accessories', icon: '🎧', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&q=80' },
//     { name: 'Appliances', icon: '🎧', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200&h=200&fit=crop&q=80' },
//     { name: 'Fashion', icon: '🎧', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&h=200&fit=crop&q=80' },
//     { name: 'Groceries', icon: '🎧', image: 'https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=200&h=200&fit=crop&q=80' },
//     // { name: 'Groceries', icon: '🎧', image: '?w=200&h=200&fit=crop&q=80' },
//   ];

//   const brands = [
//     { 
//       name: 'iPhone', 
//       discount: 'UP to 80% OFF', 
//       bg: 'bg-gray-900',
//       image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&q=80',
//       logo: '🍎'
//     },
//     { 
//       name: 'realme', 
//       discount: 'UP to 80% OFF', 
//       bg: 'bg-yellow-400',
//       image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop&q=80',
//       logo: 'realme',
//       textColor: 'text-gray-900'
//     },
//     { 
//       name: 'XIAOMI', 
//       discount: 'UP to 80% OFF', 
//       bg: 'bg-orange-500',
//       image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop&q=80',
//       logo: 'mi'
//     },
//     { 
//       name: 'Samsung', 
//       discount: 'UP to 80% OFF', 
//       bg: 'bg-blue-600',
//       image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop&q=80',
//       logo: 'SAMSUNG'
//     }
//   ];

//   const toggleLike = (productId) => {
//     setLikedItems(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const quickCategories = [
//     { name: 'Mobiles', icon: '📱', color: 'bg-teal-100' },
//     { name: 'Electronics', icon: '📺', color: 'bg-purple-100' },
//     { name: 'Offers', icon: '₹', color: 'bg-pink-100' },
//     { name: 'Televisions', icon: '🖥️', color: 'bg-blue-100' },
//     { name: 'Washing Machines', icon: '🌀', color: 'bg-gray-100' },
//     { name: 'Two-wheelers', icon: '🏍️', color: 'bg-cyan-100' },
//     { name: 'Appliances', icon: '🔌', color: 'bg-indigo-100' },
//     { name: 'New Cars', icon: '🚗', color: 'bg-red-100' },
//     { name: 'Used Cars', icon: '🚙', color: 'bg-yellow-100' },
//     { name: 'Exercise', icon: '💪', color: 'bg-green-100' },
//     { name: 'Furniture', icon: '🪑', color: 'bg-amber-100' },
//     { name: 'Tyres', icon: '⚫', color: 'bg-slate-100' },
//     { name: 'Tractors', icon: '🚜', color: 'bg-blue-200' }
//   ];

//   const productSections = [
//     {
//       title: 'Top-selling mobile phones',
//       products: [
//         { name: 'iPhone 17 256 GB - Green', price: '₹6,908/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1695048064807-086d0f15ea73?w=200&h=200&fit=crop&q=80' },
//         { name: 'OnePlus 13R 5G 256GB', price: '₹2,600/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&q=80' },
//         { name: 'OPPO Reno 14 512 GB', price: '₹2,389/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&h=200&fit=crop&q=80' },
//         { name: 'Redmi Note 14 128 GB', price: '₹1,133/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1592286927505-355d69c54e61?w=200&h=200&fit=crop&q=80' }
//       ]
//     },
//     {
//       title: 'Televisions at stores near you',
//       products: [
//         { name: 'Sony 108 cm (43 inch) 4K', price: '₹2,409/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
//         { name: 'Panasonic 109.22 cm', price: '₹1,652/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
//         { name: 'LG 109 cm (43 inch) UHD', price: '₹2,595/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
//         { name: 'Croma 109.22 cm (43")', price: '₹1,801/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' }
//       ]
//     },
//     {
//       title: 'Popular two-wheelers for you',
//       products: [
//         { name: 'Honda Activa 6G', price: '₹1,489/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=200&h=200&fit=crop&q=80' },
//         { name: 'Honda SP 125 2025', price: '₹2,408/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=200&h=200&fit=crop&q=80' },
//         { name: 'Yamaha MT 15 V2 Dual', price: '₹2,372/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=200&h=200&fit=crop&q=80' },
//         { name: 'Suzuki Access 125', price: '₹1,725/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=200&h=200&fit=crop&q=80' }
//       ]
//     },
//     {
//       title: 'Best picks in new cars',
//       products: [
//         { name: 'Maruti Suzuki Swift', price: '₹14,856/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1583267746897-c830473f4ca9?w=200&h=200&fit=crop&q=80' },
//         { name: 'Tata Punch Accomplished', price: '₹22,807/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=200&h=200&fit=crop&q=80' },
//         { name: 'Mahindra XUV 700', price: '₹14,849/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=200&fit=crop&q=80' },
//         { name: 'MG Hector Smart EV', price: '₹20,236/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop&q=80' }
//       ]
//     }
//   ];

//   const recommendations = [
//     { title: 'Explore Televisions on Easy EMIs', product: 'LG 260 L 2 Star Frost Free...', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=150&h=150&fit=crop&q=80' },
//     { title: 'Our recommendation', product: 'LG 260 L 2 Star Frost Free...', img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=150&h=150&fit=crop&q=80' },
//     { title: 'Most viewed', product: 'Samsung Galaxy S25 Ult...', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=150&h=150&fit=crop&q=80' },
//     { title: 'Popular among users', product: 'OPPO A5 5G 128 GB Stor...', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=150&h=150&fit=crop&q=80' },
//     { title: 'Most sold air conditioner', product: 'Daikin 1.5 Ton 5 Star Split...', img: 'https://images.unsplash.com/photo-1631545806609-7037f4b8b31d?w=150&h=150&fit=crop&q=80' },
//     { title: 'Top-selling two-wheeler', product: 'Honda Activa DLX (Black)', img: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=150&h=150&fit=crop&q=80' },
//     { title: 'Top-selling washing machine', product: 'Samsung 7kg Washing...', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=150&h=150&fit=crop&q=80' }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">

//       <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="flex items-center gap-4 overflow-scroll no-scrollbar">
//         {categories.map((category, index) => (
//           <div 
//             key={index} 
//             onClick={() => navigate('/productlist')}
//             className="flex flex-col items-center cursor-pointer group"
//           >
//             {/* Image Container */}
//             <div className={`w-full aspect-square ${category.bgColor} rounded-2xl overflow-hidden mb-2 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
//               <img 
//                 src={category.image} 
//                 alt={category.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {/* Category Name */}
//             <span className="text-xs font-medium text-gray-800 text-center leading-tight px-1">
//               {category.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>

//       {/* Hero Banner - Compact */}
//       <section className="max-w-[1400px] mx-auto px-4 pb-4">
//         <div className="relative rounded-lg overflow-hidden bg-linear-to-r from-orange-300 via-orange-200 to-orange-100 h-64 shadow-lg">
//           <div className="absolute inset-0 flex items-center justify-between px-12">
//             <div className="flex items-center gap-8">
//               <div className="w-40 h-40 bg-purple-600 rounded-full flex items-center justify-center text-white relative">
//                 <div className="absolute inset-0 rounded-full border-8 border-yellow-400 animate-pulse"></div>
//                 <div className="text-center z-10">
//                   <div className="text-2xl font-bold">Sparkling</div>
//                   <div className="text-3xl font-bold">SAVINGS</div>
//                   <div className="text-xs mt-1">16th - 22nd NOV</div>
//                 </div>
//               </div>
//               <img src="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop&q=80" alt="Refrigerator" className="h-52 object-contain" />
//             </div>
//             <div className="text-right">
//               <h2 className="text-4xl font-bold text-white mb-2">Cool Inside. Hot Offer Outside</h2>
//               <p className="text-xl text-white mb-2">#CashKyunEMIKaro</p>
//               <p className="text-lg text-gray-700 mb-1">EMI Starts from</p>
//               <div className="flex items-baseline gap-2 justify-end mb-3">
//                 <span className="text-4xl font-bold text-gray-900">₹830</span>
//                 <span className="text-sm bg-white px-2 py-1 rounded">0 DOWN PAYMENT</span>
//                 <span className="text-sm bg-white px-2 py-1 rounded">EASY EMI</span>
//               </div>
//               <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600">CHECK ELIGIBILITY</button>
//             </div>
//           </div>
//         </div>
//       </section>

//        {/* Smartphones Section */}
//       <section className="max-w-7xl mx-auto px-6 py-8">
//         <div className="flex items-center justify-between mb-5">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Grab the best deal on <span className="text-blue-600">Smartphones</span>
//           </h2>
//           <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">
//             View All <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {smartphones.map((phone, idx) => (
//             <ProductCard phone={phone} idx={idx} />
//           ))}
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="max-w-7xl mx-auto px-6 py-8">
//         <div className="flex items-center justify-between mb-5">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Shop From <span className="text-blue-600">Top Categories</span>
//           </h2>
//           <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">
//             View All <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
        
//         <div className="grid grid-cols-7 gap-4">
//           {categories.map((cat, idx) => (
//             <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer group">
//               <div className="h-32 bg-gray-50 flex items-center justify-center overflow-hidden">
//                 <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition" />
//               </div>
//               <div className="p-3 text-center">
//                 <p className="text-sm font-medium text-gray-800">{cat.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Electronics Brands */}
//       <section className="max-w-7xl mx-auto px-6 py-8">
//         <div className="flex items-center justify-between mb-5">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Top <span className="text-blue-600">Electronics Brands</span>
//           </h2>
//           <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">
//             View All <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
        
//         <div className="grid grid-cols-4 gap-4">
//           {brands.map((brand, idx) => (
//             <div key={idx} className={`${brand.bg} rounded-lg overflow-hidden h-44 relative group cursor-pointer shadow-md hover:shadow-xl transition`}>
//               <div className="absolute inset-0 flex items-center justify-between px-6">
//                 <div className={`text-white z-10 ${brand.textColor || ''}`}>
//                   <p className="text-xs font-semibold mb-1 uppercase tracking-wide opacity-90">{brand.logo}</p>
//                   <p className="text-2xl font-bold">{brand.discount}</p>
//                 </div>
//                 <img src={brand.image} alt={brand.name} className="h-36 w-auto object-contain opacity-90 group-hover:scale-105 transition" />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center gap-2 mt-4">
//           {[0,1,2,3].map((i) => (
//             <div key={i} className={`h-2 rounded-full transition ${i === 0 ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'}`}></div>
//           ))}
//         </div>
//       </section>

//       {/* Trust Badges */}
//       <section className="max-w-7xl mx-auto px-6 py-8">
//         <div className="bg-white rounded-lg border border-gray-200 p-6">
//           <div className="grid grid-cols-4 gap-8">
//             {[
//               { icon: <Truck className="w-8 h-8 text-blue-600" />, title: 'Free Shipping', desc: 'On orders above ₹999' },
//               { icon: <Shield className="w-8 h-8 text-blue-600" />, title: 'Secure Payment', desc: '100% protected transactions' },
//               { icon: <RotateCcw className="w-8 h-8 text-blue-600" />, title: 'Easy Returns', desc: '30 days return policy' },
//               { icon: <CreditCard className="w-8 h-8 text-blue-600" />, title: 'Pay on Delivery', desc: 'Cash on delivery available' }
//             ].map((item, idx) => (
//               <div key={idx} className="flex flex-col items-center text-center">
//                 <div className="mb-3">{item.icon}</div>
//                 <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
//                 <p className="text-xs text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Recommendations - Ultra Compact */}
//       <section className="max-w-[1400px] mx-auto px-4 pb-4">
//         <div className="grid grid-cols-7 gap-3">
//           {recommendations.map((rec, idx) => (
//             <div key={idx} className="bg-white rounded-lg border border-gray-200 p-2.5 hover:shadow-md transition cursor-pointer">
//               <p className="text-[10px] text-gray-600 mb-1.5 font-medium leading-tight h-7">{rec.title}</p>
//               <img src={rec.img} alt={rec.product} className="w-full h-20 object-contain mb-1.5" />
//               <p className="text-[10px] text-gray-800 leading-tight truncate">{rec.product}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Product Sections - High Density Grid */}
//       <section className="max-w-[1400px] mx-auto px-4 pb-6">
//         <div className="grid grid-cols-4 gap-4">
//           {productSections.map((section, sIdx) => (
//             <div key={sIdx} className="bg-white rounded-lg border border-gray-200 p-3">
//               <h3 className="text-sm font-semibold mb-3 text-gray-900">{section.title}</h3>
//               <div className="space-y-3">
//                 {section.products.map((product, pIdx) => (
//                   <div key={pIdx} className="border border-gray-100 rounded p-2 hover:shadow-md transition cursor-pointer">
//                     <div className="flex gap-2">
//                       <div className="relative shrink-0">
//                         <img src={product.img} alt={product.name} className="w-16 h-16 object-contain" />
//                         <span className="absolute -top-1 -left-1 bg-green-600 text-white text-[8px] px-1 py-0.5 rounded font-bold">
//                           {product.badge}
//                         </span>
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h4 className="text-[11px] text-gray-800 font-medium leading-tight mb-1 line-clamp-2">{product.name}</h4>
//                         <p className="text-xs text-gray-500 mb-0.5">Easy EMI starting from</p>
//                         <p className="text-sm font-bold text-gray-900">{product.price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button className="text-orange-600 text-xs font-semibold mt-3 hover:underline">View All</button>
//             </div>
//           ))}
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default EcommerceHomepage;






import React, { useEffect, useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, User, Star, ChevronRight, ChevronDown, MapPin, Package, Phone, Bell, Grid3x3, Truck, Shield, RotateCcw, CreditCard } from 'lucide-react';
import phoneImage from './assets/phone.png'
import ProductCard from './components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { apiPost } from './hooks/erpnextApi';

const EcommerceHomepage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [likedItems, setLikedItems] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [fashionableProducts, setFashionableProducts] = useState([]);

  const navigate = useNavigate()

  // const smartphones = [
  //   { 
  //     name: 'Galaxy S23 Ultra', 
  //     price: '₹29999', 
  //     originalPrice: '₹74999',
  //     discount: '60% OFF',
  //     image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop&q=80'
  //   },
  //   { 
  //     name: 'Galaxy M13 (5GB | 64 GB)', 
  //     price: '₹10499', 
  //     originalPrice: '₹14999',
  //     discount: '30% OFF',
  //     image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&q=80'
  //   },
  //   { 
  //     name: 'Galaxy M53 (5GB | 64 GB)', 
  //     price: '₹16999', 
  //     originalPrice: '₹24999',
  //     discount: '32% OFF',
  //     image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m53-5g.jpg'
  //   },
  //   { 
  //     name: 'Galaxy M23 (5GB | 64 GB)', 
  //     price: '₹11999', 
  //     originalPrice: '₹17999',
  //     discount: '33% OFF',
  //     image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop&q=80'
  //   },
  //   { 
  //     name: 'Galaxy S22 Ultra', 
  //     price: '₹59999', 
  //     originalPrice: '₹89999',
  //     discount: '33% OFF',
  //     image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=300&h=300&fit=crop&q=80'
  //   }
  // ];

  const categories = [
    { name: 'Mobile', icon: '📱', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&q=80' },
    { name: 'Cosmetics', icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&q=80' },
    { name: 'Electronics', icon: '💻', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop&q=80' },
    { name: 'Furniture', icon: '🛋️', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop&q=80' },
    { name: 'Watches', icon: '⌚', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80' },
    { name: 'Decor', icon: '🌿', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&h=200&fit=crop&q=80' },
    { name: 'Accessories', icon: '🎧', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&q=80' },
    { name: 'Appliances', icon: '🎧', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200&h=200&fit=crop&q=80' },
    { name: 'Fashion', icon: '🎧', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&h=200&fit=crop&q=80' },
    { name: 'Groceries', icon: '🎧', image: 'https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=200&h=200&fit=crop&q=80' },
  ];

  const brands = [
    { 
      name: 'iPhone', 
      discount: 'UP to 80% OFF', 
      bg: 'bg-gray-900',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&q=80',
      logo: '🍎'
    },
    { 
      name: 'realme', 
      discount: 'UP to 80% OFF', 
      bg: 'bg-yellow-400',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop&q=80',
      logo: 'realme',
      textColor: 'text-gray-900'
    },
    { 
      name: 'XIAOMI', 
      discount: 'UP to 80% OFF', 
      bg: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop&q=80',
      logo: 'mi'
    },
    { 
      name: 'Samsung', 
      discount: 'UP to 80% OFF', 
      bg: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop&q=80',
      logo: 'SAMSUNG'
    }
  ];

  const toggleLike = (productId) => {
    setLikedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const quickCategories = [
    { name: 'Mobiles', icon: '📱', color: 'bg-teal-100' },
    { name: 'Electronics', icon: '📺', color: 'bg-purple-100' },
    { name: 'Offers', icon: '₹', color: 'bg-pink-100' },
    { name: 'Televisions', icon: '🖥️', color: 'bg-blue-100' },
    { name: 'Washing Machines', icon: '🌀', color: 'bg-gray-100' },
    { name: 'Two-wheelers', icon: '🏍️', color: 'bg-cyan-100' },
    { name: 'Appliances', icon: '🔌', color: 'bg-indigo-100' },
    { name: 'New Cars', icon: '🚗', color: 'bg-red-100' },
    { name: 'Used Cars', icon: '🚙', color: 'bg-yellow-100' },
    { name: 'Exercise', icon: '💪', color: 'bg-green-100' },
    { name: 'Furniture', icon: '🪑', color: 'bg-amber-100' },
    { name: 'Tyres', icon: '⚫', color: 'bg-slate-100' },
    { name: 'Tractors', icon: '🚜', color: 'bg-blue-200' }
  ];

  const productSections = [
    {
      title: 'Top-selling mobile phones',
      products: [
        { name: 'iPhone 17 256 GB - Green', price: '₹6,908/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1695048064807-086d0f15ea73?w=200&h=200&fit=crop&q=80' },
        { name: 'OnePlus 13R 5G 256GB', price: '₹2,600/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&q=80' },
        { name: 'OPPO Reno 14 512 GB', price: '₹2,389/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&h=200&fit=crop&q=80' },
        { name: 'Redmi Note 14 128 GB', price: '₹1,133/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1592286927505-355d69c54e61?w=200&h=200&fit=crop&q=80' }
      ]
    },
    {
      title: 'Televisions at stores near you',
      products: [
        { name: 'Sony 108 cm (43 inch) 4K', price: '₹2,409/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
        { name: 'Panasonic 109.22 cm', price: '₹1,652/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
        { name: 'LG 109 cm (43 inch) UHD', price: '₹2,595/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' },
        { name: 'Croma 109.22 cm (43")', price: '₹1,801/month', badge: 'Zero Down Payment', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop&q=80' }
      ]
    },
    {
      title: 'Popular two-wheelers for you',
      products: [
        { name: 'Honda Activa 6G', price: '₹1,489/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=200&h=200&fit=crop&q=80' },
        { name: 'Honda SP 125 2025', price: '₹2,408/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=200&h=200&fit=crop&q=80' },
        { name: 'Yamaha MT 15 V2 Dual', price: '₹2,372/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=200&h=200&fit=crop&q=80' },
        { name: 'Suzuki Access 125', price: '₹1,725/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=200&h=200&fit=crop&q=80' }
      ]
    },
    {
      title: 'Best picks in new cars',
      products: [
        { name: 'Maruti Suzuki Swift', price: '₹14,856/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1583267746897-c830473f4ca9?w=200&h=200&fit=crop&q=80' },
        { name: 'Tata Punch Accomplished', price: '₹22,807/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=200&h=200&fit=crop&q=80' },
        { name: 'Mahindra XUV 700', price: '₹14,849/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&h=200&fit=crop&q=80' },
        { name: 'MG Hector Smart EV', price: '₹20,236/month', badge: 'Easy EMI', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop&q=80' }
      ]
    }
  ];

  const recommendations = [
    { title: 'Explore Televisions on Easy EMIs', product: 'LG 260 L 2 Star Frost Free...', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=150&h=150&fit=crop&q=80' },
    { title: 'Our recommendation', product: 'LG 260 L 2 Star Frost Free...', img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=150&h=150&fit=crop&q=80' },
    { title: 'Most viewed', product: 'Samsung Galaxy S25 Ult...', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=150&h=150&fit=crop&q=80' },
    { title: 'Popular among users', product: 'OPPO A5 5G 128 GB Stor...', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=150&h=150&fit=crop&q=80' },
    { title: 'Most sold air conditioner', product: 'Daikin 1.5 Ton 5 Star Split...', img: 'https://images.unsplash.com/photo-1631545806609-7037f4b8b31d?w=150&h=150&fit=crop&q=80' },
    { title: 'Top-selling two-wheeler', product: 'Honda Activa DLX (Black)', img: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=150&h=150&fit=crop&q=80' },
    { title: 'Top-selling washing machine', product: 'Samsung 7kg Washing...', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=150&h=150&fit=crop&q=80' }
  ];

  const getBestDeals = async (item_group) => {
    try {
      const res = await apiPost('http://192.168.101.182:8002/api/method/webshop.webshop.api.get_best_deals', {
        item_group: item_group
      });

      if(item_group == 'electronics') {

        setSmartphones(res.message)
      }

      if(item_group == 'Fashion') {

        setFashionableProducts(res.message)
      }


      console.log(res)

      return res.message
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBestDeals('electronics')
    getBestDeals('Fashion')
  }, [])
  

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Categories - Horizontal Scroll */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => navigate('/productlist', {
      state: { category: category.name }
    })}
              className="flex flex-col items-center cursor-pointer group shrink-0"
            >
              {/* Image Container */}
              <div className="w-16 sm:w-20 md:w-24 aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category Name */}
              <span className="text-[10px] sm:text-xs font-medium text-gray-800 text-center leading-tight px-1 w-16 sm:w-20 md:w-24">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Banner - Responsive */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 pb-4">
        <div className="relative rounded-lg overflow-hidden bg-linear-to-r from-orange-300 via-orange-200 to-orange-100 shadow-lg">
          {/* Mobile Layout */}
          <div className="lg:hidden p-4 sm:p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-purple-600 rounded-full flex items-center justify-center text-white relative">
                <div className="absolute inset-0 rounded-full border-4 sm:border-8 border-yellow-400 animate-pulse"></div>
                <div className="text-center z-10">
                  <div className="text-sm sm:text-lg font-bold">Sparkling</div>
                  <div className="text-lg sm:text-2xl font-bold">SAVINGS</div>
                  <div className="text-[8px] sm:text-xs mt-1">16th - 22nd NOV</div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop&q=80" 
                alt="Refrigerator" 
                className="h-32 sm:h-40 object-contain" 
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Cool Inside. Hot Offer Outside</h2>
                <p className="text-sm sm:text-base text-white mb-2">#CashKyunEMIKaro</p>
                <p className="text-xs sm:text-sm text-gray-700 mb-1">EMI Starts from</p>
                <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">₹830</span>
                  <span className="text-[10px] sm:text-xs bg-white px-2 py-1 rounded">0 DOWN PAYMENT</span>
                  <span className="text-[10px] sm:text-xs bg-white px-2 py-1 rounded">EASY EMI</span>
                </div>
                <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-bold hover:bg-orange-600 w-full sm:w-auto">
                  CHECK ELIGIBILITY
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block h-64">
            <div className="absolute inset-0 flex items-center justify-between px-12">
              <div className="flex items-center gap-8">
                <div className="w-40 h-40 bg-purple-600 rounded-full flex items-center justify-center text-white relative">
                  <div className="absolute inset-0 rounded-full border-8 border-yellow-400 animate-pulse"></div>
                  <div className="text-center z-10">
                    <div className="text-2xl font-bold">Sparkling</div>
                    <div className="text-3xl font-bold">SAVINGS</div>
                    <div className="text-xs mt-1">16th - 22nd NOV</div>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop&q=80" alt="Refrigerator" className="h-52 object-contain" />
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-bold text-white mb-2">Cool Inside. Hot Offer Outside</h2>
                <p className="text-xl text-white mb-2">#CashKyunEMIKaro</p>
                <p className="text-lg text-gray-700 mb-1">EMI Starts from</p>
                <div className="flex items-baseline gap-2 justify-end mb-3">
                  <span className="text-4xl font-bold text-gray-900">₹830</span>
                  <span className="text-sm bg-white px-2 py-1 rounded">0 DOWN PAYMENT</span>
                  <span className="text-sm bg-white px-2 py-1 rounded">EASY EMI</span>
                </div>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600">CHECK ELIGIBILITY</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smartphones Section */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        <div className="flex items-center justify-between mb-3 sm:mb-5 px-2">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">
            Grab the best deal on <span className="text-blue-600">Electronics</span>
          </h2>
          <button className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {smartphones.map((phone, idx) => (
            <ProductCard key={idx} phone={phone} idx={idx} />
          ))}
        </div>
      </section>

      {/* Fashion Section */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        <div className="flex items-center justify-between mb-3 sm:mb-5 px-2">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">
           Best Seller in <span className="text-blue-600">Fashion</span>
          </h2>
          <button className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {fashionableProducts.map((phone, idx) => (
            <ProductCard key={idx} phone={phone} idx={idx} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        <div className="flex items-center justify-between mb-3 sm:mb-5 px-2">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">
            Shop From <span className="text-blue-600">Top Categories</span>
          </h2>
          <button className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer group">
              <div className="h-20 sm:h-24 md:h-32 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <div className="p-2 sm:p-3 text-center">
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800">{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Electronics Brands */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        <div className="flex items-center justify-between mb-3 sm:mb-5 px-2">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900">
            Top <span className="text-blue-600">Electronics Brands</span>
          </h2>
          <button className="text-blue-600 text-xs sm:text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {brands.map((brand, idx) => (
            <div key={idx} className={`${brand.bg} rounded-lg overflow-hidden h-32 sm:h-36 md:h-44 relative group cursor-pointer shadow-md hover:shadow-xl transition`}>
              <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4 md:px-6">
                <div className={`text-white z-10 ${brand.textColor || ''}`}>
                  <p className="text-[8px] sm:text-[10px] md:text-xs font-semibold mb-1 uppercase tracking-wide opacity-90">{brand.logo}</p>
                  <p className="text-sm sm:text-lg md:text-2xl font-bold">{brand.discount}</p>
                </div>
                <img src={brand.image} alt={brand.name} className="h-24 sm:h-28 md:h-36 w-auto object-contain opacity-90 group-hover:scale-105 transition" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {[0,1,2,3].map((i) => (
            <div key={i} className={`h-1.5 sm:h-2 rounded-full transition ${i === 0 ? 'bg-blue-600 w-6 sm:w-8' : 'bg-gray-300 w-1.5 sm:w-2'}`}></div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {[
              { icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />, title: 'Free Shipping', desc: 'On orders above ₹999' },
              { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />, title: 'Secure Payment', desc: '100% protected transactions' },
              { icon: <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />, title: 'Easy Returns', desc: '30 days return policy' },
              { icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />, title: 'Pay on Delivery', desc: 'Cash on delivery available' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-2 sm:mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-[10px] sm:text-xs md:text-sm">{item.title}</h3>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Recommendations */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 pb-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 p-2 sm:p-2.5 hover:shadow-md transition cursor-pointer">
              <p className="text-[8px] sm:text-[10px] text-gray-600 mb-1 sm:mb-1.5 font-medium leading-tight h-6 sm:h-7">{rec.title}</p>
              <img src={rec.img} alt={rec.product} className="w-full h-16 sm:h-20 object-contain mb-1 sm:mb-1.5" />
              <p className="text-[8px] sm:text-[10px] text-gray-800 leading-tight truncate">{rec.product}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Sections */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {productSections.map((section, sIdx) => (
            <div key={sIdx} className="bg-white rounded-lg border border-gray-200 p-2 sm:p-3">
              <h3 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-900">{section.title}</h3>
              <div className="space-y-2 sm:space-y-3">
                {section.products.map((product, pIdx) => (
                  <div key={pIdx} className="border border-gray-100 rounded p-2 hover:shadow-md transition cursor-pointer">
                    <div className="flex gap-2">
                      <div className="relative shrink-0">
                        <img src={product.img} alt={product.name} className="w-12 sm:w-16 h-12 sm:h-16 object-contain" />
                        <span className="absolute -top-1 -left-1 bg-green-600 text-white text-[7px] sm:text-[8px] px-1 py-0.5 rounded font-bold">
                          {product.badge}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[10px] sm:text-[11px] text-gray-800 font-medium leading-tight mb-1 line-clamp-2">{product.name}</h4>
                        <p className="text-[9px] sm:text-xs text-gray-500 mb-0.5">Easy EMI starting from</p>
                        <p className="text-xs sm:text-sm font-bold text-gray-900">{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-orange-600 text-[10px] sm:text-xs font-semibold mt-2 sm:mt-3 hover:underline">View All</button>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default EcommerceHomepage;








