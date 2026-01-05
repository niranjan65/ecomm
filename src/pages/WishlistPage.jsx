// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import { Heart, ShoppingCart, Trash2, Package, MapPin, Star, LogOut } from 'lucide-react';
// // // // // // // // // import { apiPost } from '../hooks/erpnextApi';

// // // // // // // // // export default function WishlistPage() {
// // // // // // // // //   const [activeTab, setActiveTab] = useState('wishlist');
// // // // // // // // //   const [wishlistItems, setWishlistItems] = useState([]);

// // // // // // // // //   const removeFromWishlist = (id) => {
// // // // // // // // //     setWishlistItems(wishlistItems.filter(item => item.id !== id));
// // // // // // // // //   };

// // // // // // // // //   const menuItems = [
// // // // // // // // //     { id: 'orders', label: 'All Orders', icon: Package },
// // // // // // // // //     { id: 'addresses', label: 'Manage Addresses', icon: MapPin },
// // // // // // // // //     { id: 'reviews', label: 'Reviews & Ratings', icon: Star },
// // // // // // // // //     { id: 'wishlist', label: 'My Wishlist', icon: Heart }
// // // // // // // // //   ];


// // // // // // // // //     const fetchWishlist = async() => {
// // // // // // // // //     try {
// // // // // // // // //         const res = await apiPost('http://192.168.101.182:8002/api/method/custom.api.wishlist.get_wishlist', {
// // // // // // // // //                 user: "niranjan.ks@anantdv.com"
// // // // // // // // //               });


// // // // // // // // //               setWishlistItems(res.message)
// // // // // // // // //     } catch (error) {

// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchWishlist()
// // // // // // // // //   }, [])

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-white">
// // // // // // // // //       <div className="flex">
// // // // // // // // //         {/* Left Sidebar */}
// // // // // // // // //         <div className="w-64 bg-white text-black min-h-screen p-6">
// // // // // // // // //           <div className="mb-8">
// // // // // // // // //             <h2 className="text-xl font-bold">My Account</h2>
// // // // // // // // //           </div>

// // // // // // // // //           <nav className="space-y-2">
// // // // // // // // //             {menuItems.map((item) => {
// // // // // // // // //               const Icon = item.icon;
// // // // // // // // //               return (
// // // // // // // // //                 <button
// // // // // // // // //                   key={item.id}
// // // // // // // // //                   onClick={() => setActiveTab(item.id)}
// // // // // // // // //                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
// // // // // // // // //                     activeTab === item.id
// // // // // // // // //                       ? 'bg-black text-white'
// // // // // // // // //                       : 'hover:bg-black hover:text-white'
// // // // // // // // //                   }`}
// // // // // // // // //                 >
// // // // // // // // //                   <Icon size={20} />
// // // // // // // // //                   <span>{item.label}</span>
// // // // // // // // //                 </button>
// // // // // // // // //               );
// // // // // // // // //             })}

// // // // // // // // //             <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors mt-8 border-t border-gray-700 pt-8">
// // // // // // // // //               <LogOut size={20} />
// // // // // // // // //               <span>Logout</span>
// // // // // // // // //             </button>
// // // // // // // // //           </nav>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Main Content */}
// // // // // // // // //         <div className="flex-1 p-8">
// // // // // // // // //           <div className="max-w-6xl mx-auto">
// // // // // // // // //             <div className="mb-8">
// // // // // // // // //               <h1 className="text-3xl font-bold text-black mb-2">My Wishlist</h1>
// // // // // // // // //               <p className="text-gray-600">{wishlistItems.length} items saved</p>
// // // // // // // // //             </div>

// // // // // // // // //             {wishlistItems.length === 0 ? (
// // // // // // // // //               <div className="text-center py-16">
// // // // // // // // //                 <Heart size={64} className="mx-auto mb-4 text-gray-300" />
// // // // // // // // //                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
// // // // // // // // //                 <p className="text-gray-600">Start adding items you love!</p>
// // // // // // // // //               </div>
// // // // // // // // //             ) : (
// // // // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
// // // // // // // // //                 {wishlistItems?.map((item) => (
// // // // // // // // //                   <div key={item.id} className="border-2 border-black rounded-lg overflow-hidden group hover:shadow-xl transition-shadow">
// // // // // // // // //                     <div className="relative">
// // // // // // // // //                       <img
// // // // // // // // //                         src={`http://192.168.101.182:8002${item.image}`}
// // // // // // // // //                         alt={item.name}
// // // // // // // // //                         className="w-full h-40 object-cover"
// // // // // // // // //                       />
// // // // // // // // //                       <button
// // // // // // // // //                         onClick={() => removeFromWishlist(item.id)}
// // // // // // // // //                         className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-black hover:text-white transition-colors"
// // // // // // // // //                       >
// // // // // // // // //                         <Trash2 size={18} />
// // // // // // // // //                       </button>
// // // // // // // // //                       {!item.inStock && (
// // // // // // // // //                         <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 text-sm font-semibold rounded">
// // // // // // // // //                           Out of Stock
// // // // // // // // //                         </div>
// // // // // // // // //                       )}
// // // // // // // // //                     </div>

// // // // // // // // //                     <div className="p-4">
// // // // // // // // //                       <h3 className="font-semibold text-[15px] mb-2 text-black">{item.item_name?.slice(0, 20)}</h3>
// // // // // // // // //                       <p className="text-xs font-bold text-black mb-4">K{item.price_list_rate}</p>

// // // // // // // // //                       <div className='w-full flex items-center justify-center'>
// // // // // // // // //                         <button
// // // // // // // // //                         disabled={!item.inStock}
// // // // // // // // //                         className={`w-fit py-3 px-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
// // // // // // // // //                           item.inStock
// // // // // // // // //                             ? 'bg-white text-black hover:bg-gray-800'
// // // // // // // // //                             : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// // // // // // // // //                         }`}
// // // // // // // // //                       >
// // // // // // // // //                         <ShoppingCart size={20} />
// // // // // // // // //                         {item.inStock ? 'Add to Cart' : 'Out of Stock'}
// // // // // // // // //                       </button>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 ))}
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import { Heart, ShoppingCart, Trash2, Package, MapPin, Star, LogOut } from 'lucide-react';

// // // // // // // // export default function WishlistPage() {
// // // // // // // //   const [activeTab, setActiveTab] = useState('wishlist');
// // // // // // // //   const [wishlistItems, setWishlistItems] = useState([]);
// // // // // // // //   const [addresses, setAddresses] = useState([
// // // // // // // //     {
// // // // // // // //       id: 1,
// // // // // // // //       type: 'HOME',
// // // // // // // //       name: 'Ayan Seal',
// // // // // // // //       phone: '9046431805',
// // // // // // // //       address: 'Malabika flat, Auddy Bagan Basti, Behala, Presidency Division, West Bengal - 700034'
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 2,
// // // // // // // //       type: 'WORK',
// // // // // // // //       name: 'Ayan Seal',
// // // // // // // //       phone: '9046431805',
// // // // // // // //       address: 'Pratima appertment, Roy Bahadur Road, Auddy Bagan Basti, Behala, Presidency Division, West Bengal - 700034'
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 3,
// // // // // // // //       type: 'HOME',
// // // // // // // //       name: 'Ayan Seal',
// // // // // // // //       phone: '9046431805',
// // // // // // // //       address: 'D.V.C market in near by iit kharagpur, ncc bilding ( House name: Seal bari ), D.V.C market, Kharagpur, West Bengal - 721306'
// // // // // // // //     }
// // // // // // // //   ]);

// // // // // // // //   const removeFromWishlist = (id) => {
// // // // // // // //     setWishlistItems(wishlistItems.filter(item => item.id !== id));
// // // // // // // //   };

// // // // // // // //   const removeAddress = (id) => {
// // // // // // // //     setAddresses(addresses.filter(addr => addr.id !== id));
// // // // // // // //   };

// // // // // // // //   const menuItems = [
// // // // // // // //     { id: 'orders', label: 'All Orders', icon: Package },
// // // // // // // //     { id: 'addresses', label: 'Manage Addresses', icon: MapPin },
// // // // // // // //     { id: 'reviews', label: 'Reviews & Ratings', icon: Star },
// // // // // // // //     { id: 'wishlist', label: 'My Wishlist', icon: Heart }
// // // // // // // //   ];

// // // // // // // //   // Simulating API call
// // // // // // // //   const fetchWishlist = async() => {
// // // // // // // //     try {
// // // // // // // //       // Uncomment when you have the API
// // // // // // // //       // const res = await apiPost('http://192.168.101.182:8002/api/method/custom.api.wishlist.get_wishlist', {
// // // // // // // //       //   user: "niranjan.ks@anantdv.com"
// // // // // // // //       // });
// // // // // // // //       // setWishlistItems(res.message)

// // // // // // // //       // Demo data
// // // // // // // //       setWishlistItems([
// // // // // // // //         {
// // // // // // // //           id: 1,
// // // // // // // //           item_name: 'Premium Wireless Headphones',
// // // // // // // //           price_list_rate: 2999,
// // // // // // // //           image: '/api/placeholder/400/320',
// // // // // // // //           inStock: true
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           id: 2,
// // // // // // // //           item_name: 'Smart Watch Series 5',
// // // // // // // //           price_list_rate: 4599,
// // // // // // // //           image: '/api/placeholder/400/320',
// // // // // // // //           inStock: true
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           id: 3,
// // // // // // // //           item_name: 'Bluetooth Speaker Pro',
// // // // // // // //           price_list_rate: 1899,
// // // // // // // //           image: '/api/placeholder/400/320',
// // // // // // // //           inStock: false
// // // // // // // //         }
// // // // // // // //       ]);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error fetching wishlist:', error);
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchWishlist()
// // // // // // // //   }, [])

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-white">
// // // // // // // //       <div className="flex">
// // // // // // // //         {/* Left Sidebar */}
// // // // // // // //         <div className="w-64 bg-white text-black min-h-screen p-6 border-r-2 border-gray-200">
// // // // // // // //           <div className="mb-8">
// // // // // // // //             <h2 className="text-xl font-bold">My Account</h2>
// // // // // // // //           </div>

// // // // // // // //           <nav className="space-y-2">
// // // // // // // //             {menuItems.map((item) => {
// // // // // // // //               const Icon = item.icon;
// // // // // // // //               return (
// // // // // // // //                 <button
// // // // // // // //                   key={item.id}
// // // // // // // //                   onClick={() => setActiveTab(item.id)}
// // // // // // // //                   className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
// // // // // // // //                     activeTab === item.id
// // // // // // // //                       ? 'bg-black text-white'
// // // // // // // //                       : 'hover:bg-black hover:text-white'
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   <Icon size={20} />
// // // // // // // //                   <span>{item.label}</span>
// // // // // // // //                 </button>
// // // // // // // //               );
// // // // // // // //             })}

// // // // // // // //             <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors mt-8 border-t border-gray-700 pt-8">
// // // // // // // //               <LogOut size={20} />
// // // // // // // //               <span>Logout</span>
// // // // // // // //             </button>
// // // // // // // //           </nav>
// // // // // // // //         </div>

// // // // // // // //         {/* Main Content */}
// // // // // // // //         <div className="flex-1 p-8">
// // // // // // // //           <div className="max-w-6xl mx-auto">
// // // // // // // //             {/* Wishlist Content */}
// // // // // // // //             {activeTab === 'wishlist' && (
// // // // // // // //               <>
// // // // // // // //                 <div className="mb-8">
// // // // // // // //                   <h1 className="text-3xl font-bold text-black mb-2">My Wishlist</h1>
// // // // // // // //                   <p className="text-gray-600">{wishlistItems.length} items saved</p>
// // // // // // // //                 </div>

// // // // // // // //                 {wishlistItems.length === 0 ? (
// // // // // // // //                   <div className="text-center py-16">
// // // // // // // //                     <Heart size={64} className="mx-auto mb-4 text-gray-300" />
// // // // // // // //                     <h3 className="text-xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
// // // // // // // //                     <p className="text-gray-600">Start adding items you love!</p>
// // // // // // // //                   </div>
// // // // // // // //                 ) : (
// // // // // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
// // // // // // // //                     {wishlistItems?.map((item) => (
// // // // // // // //                       <div key={item.id} className="border-2 border-black rounded-lg overflow-hidden group hover:shadow-xl transition-shadow">
// // // // // // // //                         <div className="relative">
// // // // // // // //                           <img
// // // // // // // //                             src={item.image}
// // // // // // // //                             alt={item.item_name}
// // // // // // // //                             className="w-full h-40 object-cover"
// // // // // // // //                           />
// // // // // // // //                           <button
// // // // // // // //                             onClick={() => removeFromWishlist(item.id)}
// // // // // // // //                             className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-black hover:text-white transition-colors"
// // // // // // // //                           >
// // // // // // // //                             <Trash2 size={18} />
// // // // // // // //                           </button>
// // // // // // // //                           {!item.inStock && (
// // // // // // // //                             <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 text-sm font-semibold rounded">
// // // // // // // //                               Out of Stock
// // // // // // // //                             </div>
// // // // // // // //                           )}
// // // // // // // //                         </div>

// // // // // // // //                         <div className="p-4">
// // // // // // // //                           <h3 className="font-semibold text-[15px] mb-2 text-black">{item.item_name?.slice(0, 20)}</h3>
// // // // // // // //                           <p className="text-xs font-bold text-black mb-4">K{item.price_list_rate}</p>

// // // // // // // //                           <div className='w-full flex items-center justify-center'>
// // // // // // // //                             <button
// // // // // // // //                             disabled={!item.inStock}
// // // // // // // //                             className={`w-fit py-3 px-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
// // // // // // // //                               item.inStock
// // // // // // // //                                 ? 'bg-white text-black hover:bg-gray-800 hover:text-white border-2 border-black'
// // // // // // // //                                 : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// // // // // // // //                             }`}
// // // // // // // //                           >
// // // // // // // //                             <ShoppingCart size={20} />
// // // // // // // //                             {item.inStock ? 'Add to Cart' : 'Out of Stock'}
// // // // // // // //                           </button>
// // // // // // // //                           </div>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //               </>
// // // // // // // //             )}

// // // // // // // //             {/* Addresses Content */}
// // // // // // // //             {activeTab === 'addresses' && (
// // // // // // // //               <>
// // // // // // // //                 <div className="mb-8">
// // // // // // // //                   <h1 className="text-3xl font-bold text-black mb-2">Manage Addresses</h1>
// // // // // // // //                 </div>

// // // // // // // //                 <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6 hover:border-black transition-colors flex items-center justify-center gap-2 text-black font-semibold">
// // // // // // // //                   <span className="text-2xl">+</span>
// // // // // // // //                   ADD A NEW ADDRESS
// // // // // // // //                 </button>

// // // // // // // //                 <div className="space-y-4">
// // // // // // // //                   {addresses.map((address) => (
// // // // // // // //                     <div key={address.id} className="border-2 border-black rounded-lg p-6 relative">
// // // // // // // //                       <div className="absolute top-4 left-4">
// // // // // // // //                         <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs font-semibold">
// // // // // // // //                           {address.type}
// // // // // // // //                         </span>
// // // // // // // //                       </div>

// // // // // // // //                       <div className="absolute top-4 right-4 flex gap-2">
// // // // // // // //                         <button className="text-black hover:underline font-semibold text-sm">
// // // // // // // //                           Edit
// // // // // // // //                         </button>
// // // // // // // //                         <button 
// // // // // // // //                           onClick={() => removeAddress(address.id)}
// // // // // // // //                           className="text-black hover:underline font-semibold text-sm"
// // // // // // // //                         >
// // // // // // // //                           Delete
// // // // // // // //                         </button>
// // // // // // // //                       </div>

// // // // // // // //                       <div className="mt-8">
// // // // // // // //                         <div className="flex items-center gap-3 mb-3">
// // // // // // // //                           <h3 className="font-bold text-black text-lg">{address.name}</h3>
// // // // // // // //                           <span className="text-gray-600">{address.phone}</span>
// // // // // // // //                         </div>
// // // // // // // //                         <p className="text-gray-700 leading-relaxed">
// // // // // // // //                           {address.address}
// // // // // // // //                         </p>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </>
// // // // // // // //             )}

// // // // // // // //             {/* Placeholder for other tabs */}
// // // // // // // //             {(activeTab === 'orders' || activeTab === 'reviews') && (
// // // // // // // //               <div className="text-center py-16">
// // // // // // // //                 <Package size={64} className="mx-auto mb-4 text-gray-300" />
// // // // // // // //                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon</h3>
// // // // // // // //                 <p className="text-gray-600">This section is under development</p>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// import React, { useEffect, useState } from 'react';
// import { Heart, ShoppingCart, Trash2, Package, MapPin, Star, LogOut, Plus, Edit2, X, ChevronDown,Search } from 'lucide-react';
// import { apiPost } from '../hooks/erpnextApi';



// // import React, { useState } from 'react';
// // import { X, Trash2, Search, ChevronDown } from 'lucide-react';

// // Add custom scrollbar hiding CSS
// const scrollbarHideStyle = `
//   .scrollbar-hide::-webkit-scrollbar {
//     display: none;
//   }
//   .scrollbar-hide {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }
// `;

// // Custom Searchable Dropdown Component
// const SearchableDropdown = ({ label, value, onChange, options, placeholder, required = false }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredOptions = options.filter(opt =>
//     opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     opt.value.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

//   return (
//     <div className="relative">
//       <label className="block text-sm font-semibold mb-2">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>

//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white flex items-center justify-between hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
//       >
//         <span className={value ? 'text-gray-900' : 'text-gray-500'}>
//           {selectedLabel}
//         </span>
//         <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
//           {/* Search Input */}
//           <div className="p-3 border-b border-gray-200">
//             <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
//               <Search size={16} className="text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="flex-1 bg-transparent outline-none text-sm"
//                 autoFocus
//               />
//             </div>
//           </div>

//           {/* Options List */}
//           <ul className="max-h-64 overflow-y-auto scrollbar-hide">
//             {filteredOptions.length > 0 ? (
//               filteredOptions.map((opt) => (
//                 <li key={opt.value}>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       onChange(opt.value);
//                       setIsOpen(false);
//                       setSearchTerm('');
//                     }}
//                     className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${
//                       value === opt.value ? 'bg-black text-white hover:bg-gray-800' : 'text-gray-900'
//                     }`}
//                   >
//                     <span>{opt.label}</span>
//                     {value === opt.value && (
//                       <div className="w-2 h-2 bg-current rounded-full"></div>
//                     )}
//                   </button>
//                 </li>
//               ))
//             ) : (
//               <li className="px-4 py-6 text-center text-gray-500 text-sm">
//                 No results found
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// // Address Type Toggle Component
// const AddressTypeToggle = ({ value, onChange }) => {
//   const types = [
//     { label: 'Billing', value: 'BILLING', icon: '📄' },
//     { label: 'Shipping', value: 'SHIPPING', icon: '📦' },
//   ];

//   return (
//     <div>
//       <label className="block text-sm font-semibold mb-3">
//         Address Type <span className="text-red-500">*</span>
//       </label>
//       <div className="grid grid-cols-2 gap-3">
//         {types.map((type) => (
//           <button
//             key={type.value}
//             type="button"
//             onClick={() => onChange(type.value)}
//             className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
//               value === type.value
//                 ? 'bg-black text-white shadow-md scale-105'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             <span>{type.icon}</span>
//             {type.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Country Code Dropdown (Mobile Code)
// const CountryCodeSelector = ({ value, onChange }) => {
//   const countryCodes = [
//     { label: '+91 India', value: '+91', flag: '🇮🇳' },
//     { label: '+1 USA', value: '+1', flag: '🇺🇸' },
//     { label: '+44 UK', value: '+44', flag: '🇬🇧' },
//     { label: '+1 Canada', value: '+1', flag: '🇨🇦' },
//     { label: '+61 Australia', value: '+61', flag: '🇦🇺' },
//     { label: '+49 Germany', value: '+49', flag: '🇩🇪' },
//     { label: '+33 France', value: '+33', flag: '🇫🇷' },
//     { label: '+39 Italy', value: '+39', flag: '🇮🇹' },
//     { label: '+34 Spain', value: '+34', flag: '🇪🇸' },
//     { label: '+81 Japan', value: '+81', flag: '🇯🇵' },
//     { label: '+86 China', value: '+86', flag: '🇨🇳' },
//     { label: '+55 Brazil', value: '+55', flag: '🇧🇷' },
//     { label: '+27 South Africa', value: '+27', flag: '🇿🇦' },
//   ];

//   return (
//     <SearchableDropdown
//       label="Country Code"
//       value={value}
//       onChange={onChange}
//       options={countryCodes}
//       placeholder="Select country code"
//       required={true}
//     />
//   );
// };

// // Main Address Modal Component
// const AddressModal = ({ showAddressModal, handleCloseModal, isEditMode, formData, setFormData, handleSaveAddress, handleDeleteFromModal }) => {
//   const countries = [
//     { label: '🇮🇳 India', value: 'IN' },
//     { label: '🇺🇸 United States', value: 'US' },
//     { label: '🇬🇧 United Kingdom', value: 'GB' },
//     { label: '🇨🇦 Canada', value: 'CA' },
//     { label: '🇦🇺 Australia', value: 'AU' },
//     { label: '🇩🇪 Germany', value: 'DE' },
//     { label: '🇫🇷 France', value: 'FR' },
//     { label: '🇮🇹 Italy', value: 'IT' },
//     { label: '🇪🇸 Spain', value: 'ES' },
//     { label: '🇳🇱 Netherlands', value: 'NL' },
//     { label: '🇧🇪 Belgium', value: 'BE' },
//     { label: '🇨🇭 Switzerland', value: 'CH' },
//     { label: '🇸🇪 Sweden', value: 'SE' },
//     { label: '🇳🇴 Norway', value: 'NO' },
//     { label: '🇩🇰 Denmark', value: 'DK' },
//     { label: '🇫🇮 Finland', value: 'FI' },
//     { label: '🇵🇱 Poland', value: 'PL' },
//     { label: '🇨🇿 Czech Republic', value: 'CZ' },
//     { label: '🇦🇹 Austria', value: 'AT' },
//     { label: '🇮🇪 Ireland', value: 'IE' },
//     { label: '🇵🇹 Portugal', value: 'PT' },
//     { label: '🇬🇷 Greece', value: 'GR' },
//     { label: '🇯🇵 Japan', value: 'JP' },
//     { label: '🇨🇳 China', value: 'CN' },
//     { label: '🇧🇷 Brazil', value: 'BR' },
//     { label: '🇲🇽 Mexico', value: 'MX' },
//     { label: '🇦🇷 Argentina', value: 'AR' },
//     { label: '🇿🇦 South Africa', value: 'ZA' },
//     { label: '🇸🇬 Singapore', value: 'SG' },
//     { label: '🇲🇾 Malaysia', value: 'MY' },
//     { label: '🇹🇭 Thailand', value: 'TH' },
//     { label: '🇻🇳 Vietnam', value: 'VN' },
//     { label: '🇰🇷 South Korea', value: 'KR' },
//     { label: '🇳🇿 New Zealand', value: 'NZ' },
//     { label: '🇦🇪 United Arab Emirates', value: 'AE' },
//     { label: '🇸🇦 Saudi Arabia', value: 'SA' },
//   ];

//   if (!showAddressModal) return null;

//   return (
//     <>
//       <style>{scrollbarHideStyle}</style>
//       <div
//         className="fixed inset-0 bg-black/30 backdrop-blur-md z-55 animate-fadeIn"
//         onClick={handleCloseModal}
//       ></div>

//       <div className="fixed inset-0 flex items-center justify-center p-4 z-60 pointer-events-none">
//         <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp pointer-events-auto scrollbar-hide">
//           <div className="p-6">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-xl font-bold">
//                 {isEditMode ? 'Edit Address' : 'Add New Address'}
//               </h2>
//               <button
//                 onClick={handleCloseModal}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Form Fields */}
//             <div className="space-y-4">
//               {/* Address Type - Button Toggle Style (Moved to Top) */}
//               <AddressTypeToggle
//                 value={formData.type}
//                 onChange={(type) =>
//                   setFormData({ ...formData, type })
//                 }
//               />

//               {/* Address Title */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Address Title *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) =>
//                     setFormData({ ...formData, title: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="Billing, Shipping, etc."
//                 />
//               </div>

//               {/* Full Name */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               {/* Phone with Country Code - Enhanced */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Phone Number *
//                 </label>
//                 <div className="flex gap-2">
//                   <CountryCodeSelector
//                     value={formData.countryCode}
//                     onChange={(code) =>
//                       setFormData({ ...formData, countryCode: code })
//                     }
//                   />
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                     placeholder="10 digit mobile number"
//                   />
//                 </div>
//               </div>

//               {/* Address Line 1 */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Address Line 1 *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.addressLine1}
//                   onChange={(e) =>
//                     setFormData({ ...formData, addressLine1: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="Street, house no."
//                 />
//               </div>

//               {/* Address Line 2 */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Address Line 2
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.addressLine2}
//                   onChange={(e) =>
//                     setFormData({ ...formData, addressLine2: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="Apartment, landmark, etc."
//                 />
//               </div>

//               {/* City / Town */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   City / Town *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.city}
//                   onChange={(e) =>
//                     setFormData({ ...formData, city: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="City or town"
//                 />
//               </div>

//               {/* State */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">State</label>
//                 <input
//                   type="text"
//                   value={formData.state}
//                   onChange={(e) =>
//                     setFormData({ ...formData, state: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="State"
//                 />
//               </div>

//               {/* Postal Code */}
//               <div>
//                 <label className="block text-sm font-semibold mb-2">
//                   Postal Code
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.postalCode}
//                   onChange={(e) =>
//                     setFormData({ ...formData, postalCode: e.target.value })
//                   }
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="Postal code"
//                 />
//               </div>

//               {/* Country Dropdown - Enhanced with Search */}
//               <SearchableDropdown
//                 label="Country"
//                 value={formData.country}
//                 onChange={(code) =>
//                   setFormData({ ...formData, country: code })
//                 }
//                 options={countries}
//                 placeholder="Select country"
//                 required={true}
//               />

//               {/* Actions */}
//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={handleSaveAddress}
//                   className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
//                 >
//                   {isEditMode ? 'Update Address' : 'Save Address'}
//                 </button>

//                 {isEditMode && (
//                   <button
//                     type="button"
//                     onClick={handleDeleteFromModal}
//                     className="px-6 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
//                   >
//                     <Trash2 size={18} />
//                     Delete
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // // Custom Searchable Dropdown Component
// // const SearchableDropdown = ({ label, value, onChange, options, placeholder, required = false }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const filteredOptions = options.filter(opt =>
// //     opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     opt.value.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

// //   return (
// //     <div className="relative">
// //       <label className="block text-sm font-semibold mb-2">
// //         {label} {required && <span className="text-red-500">*</span>}
// //       </label>

// //       <button
// //         type="button"
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white flex items-center justify-between hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
// //       >
// //         <span className={value ? 'text-gray-900' : 'text-gray-500'}>
// //           {selectedLabel}
// //         </span>
// //         <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
// //       </button>

// //       {isOpen && (
// //         <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
// //           {/* Search Input */}
// //           <div className="p-3 border-b border-gray-200">
// //             <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
// //               <Search size={16} className="text-gray-400" />
// //               <input
// //                 type="text"
// //                 placeholder="Search..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="flex-1 bg-transparent outline-none text-sm"
// //                 autoFocus
// //               />
// //             </div>
// //           </div>

// //           {/* Options List */}
// //           <ul className="max-h-64 overflow-y-auto">
// //             {filteredOptions.length > 0 ? (
// //               filteredOptions.map((opt) => (
// //                 <li key={opt.value}>
// //                   <button
// //                     type="button"
// //                     onClick={() => {
// //                       onChange(opt.value);
// //                       setIsOpen(false);
// //                       setSearchTerm('');
// //                     }}
// //                     className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${value === opt.value ? 'bg-black text-white hover:bg-gray-800' : 'text-gray-900'
// //                       }`}
// //                   >
// //                     <span>{opt.label}</span>
// //                     {value === opt.value && (
// //                       <div className="w-2 h-2 bg-current rounded-full"></div>
// //                     )}
// //                   </button>
// //                 </li>
// //               ))
// //             ) : (
// //               <li className="px-4 py-6 text-center text-gray-500 text-sm">
// //                 No results found
// //               </li>
// //             )}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Address Type Toggle Component
// // const AddressTypeToggle = ({ value, onChange }) => {
// //   const types = [
// //     { label: 'Home', value: 'HOME', icon: '🏠' },
// //     { label: 'Work', value: 'WORK', icon: '💼' },
// //     { label: 'Billing', value: 'BILLING', icon: '📄' },
// //     { label: 'Shipping', value: 'SHIPPING', icon: '📦' },
// //   ];

// //   return (
// //     <div>
// //       <label className="block text-sm font-semibold mb-3">
// //         Address Type <span className="text-red-500">*</span>
// //       </label>
// //       <div className="grid grid-cols-2 gap-3">
// //         {types.map((type) => (
// //           <button
// //             key={type.value}
// //             type="button"
// //             onClick={() => onChange(type.value)}
// //             className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${value === type.value
// //               ? 'bg-black text-white shadow-md scale-105'
// //               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //               }`}
// //           >
// //             <span>{type.icon}</span>
// //             {type.label}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Country Code Dropdown (Mobile Code)
// // const CountryCodeSelector = ({ value, onChange }) => {
// //   const countryCodes = [
// //     { label: '+91 India', value: '+91', flag: '🇮🇳' },
// //     { label: '+1 USA', value: '+1', flag: '🇺🇸' },
// //     { label: '+44 UK', value: '+44', flag: '🇬🇧' },
// //     { label: '+1 Canada', value: '+1', flag: '🇨🇦' },
// //     { label: '+61 Australia', value: '+61', flag: '🇦🇺' },
// //     { label: '+49 Germany', value: '+49', flag: '🇩🇪' },
// //     { label: '+33 France', value: '+33', flag: '🇫🇷' },
// //     { label: '+39 Italy', value: '+39', flag: '🇮🇹' },
// //     { label: '+34 Spain', value: '+34', flag: '🇪🇸' },
// //     { label: '+81 Japan', value: '+81', flag: '🇯🇵' },
// //     { label: '+86 China', value: '+86', flag: '🇨🇳' },
// //     { label: '+55 Brazil', value: '+55', flag: '🇧🇷' },
// //     { label: '+27 South Africa', value: '+27', flag: '🇿🇦' },
// //   ];

// //   return (
// //     <SearchableDropdown
// //       label="Country Code"
// //       value={value}
// //       onChange={onChange}
// //       options={countryCodes}
// //       placeholder="Select country code"
// //       required={true}
// //     />
// //   );
// // };

// // Main Address Modal Component
// // const AddressModal = ({ showAddressModal, handleCloseModal, isEditMode, formData, setFormData, handleSaveAddress, handleDeleteFromModal }) => {
// //   const countries = [
// //     { label: '🇮🇳 India', value: 'IN' },
// //     { label: '🇺🇸 United States', value: 'US' },
// //     { label: '🇬🇧 United Kingdom', value: 'GB' },
// //     { label: '🇨🇦 Canada', value: 'CA' },
// //     { label: '🇦🇺 Australia', value: 'AU' },
// //     { label: '🇩🇪 Germany', value: 'DE' },
// //     { label: '🇫🇷 France', value: 'FR' },
// //     { label: '🇮🇹 Italy', value: 'IT' },
// //     { label: '🇪🇸 Spain', value: 'ES' },
// //     { label: '🇳🇱 Netherlands', value: 'NL' },
// //     { label: '🇧🇪 Belgium', value: 'BE' },
// //     { label: '🇨🇭 Switzerland', value: 'CH' },
// //     { label: '🇸🇪 Sweden', value: 'SE' },
// //     { label: '🇳🇴 Norway', value: 'NO' },
// //     { label: '🇩🇰 Denmark', value: 'DK' },
// //     { label: '🇫🇮 Finland', value: 'FI' },
// //     { label: '🇵🇱 Poland', value: 'PL' },
// //     { label: '🇨🇿 Czech Republic', value: 'CZ' },
// //     { label: '🇦🇹 Austria', value: 'AT' },
// //     { label: '🇮🇪 Ireland', value: 'IE' },
// //     { label: '🇵🇹 Portugal', value: 'PT' },
// //     { label: '🇬🇷 Greece', value: 'GR' },
// //     { label: '🇯🇵 Japan', value: 'JP' },
// //     { label: '🇨🇳 China', value: 'CN' },
// //     { label: '🇧🇷 Brazil', value: 'BR' },
// //     { label: '🇲🇽 Mexico', value: 'MX' },
// //     { label: '🇦🇷 Argentina', value: 'AR' },
// //     { label: '🇿🇦 South Africa', value: 'ZA' },
// //     { label: '🇸🇬 Singapore', value: 'SG' },
// //     { label: '🇲🇾 Malaysia', value: 'MY' },
// //     { label: '🇹🇭 Thailand', value: 'TH' },
// //     { label: '🇻🇳 Vietnam', value: 'VN' },
// //     { label: '🇰🇷 South Korea', value: 'KR' },
// //     { label: '🇳🇿 New Zealand', value: 'NZ' },
// //     { label: '🇦🇪 United Arab Emirates', value: 'AE' },
// //     { label: '🇸🇦 Saudi Arabia', value: 'SA' },
// //   ];

// //   if (!showAddressModal) return null;

// //   return (
// //     <>
// //       <div
// //         className="fixed inset-0 bg-black/30 backdrop-blur-md z-55 animate-fadeIn"
// //         onClick={handleCloseModal}
// //       ></div>

// //       <div className="fixed inset-0 flex items-center justify-center p-4 z-60 pointer-events-none">
// //         <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp pointer-events-auto">
// //           <div className="p-6">
// //             {/* Header */}
// //             <div className="flex items-center justify-between mb-6">
// //               <h2 className="text-xl font-bold">
// //                 {isEditMode ? 'Edit Address' : 'Add New Address'}
// //               </h2>
// //               <button
// //                 onClick={handleCloseModal}
// //                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
// //               >
// //                 <X size={20} />
// //               </button>
// //             </div>

// //             {/* Form Fields */}
// //             <div className="space-y-4">
// //               {/* Address Title */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">
// //                   Address Title *
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={formData.title}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, title: e.target.value })
// //                   }
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                   placeholder="Home, Office, etc."
// //                 />
// //               </div>

// //               {/* Full Name */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">
// //                   Full Name *
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={formData.name}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, name: e.target.value })
// //                   }
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                   placeholder="Enter your name"
// //                 />
// //               </div>

// //               {/* Phone with Country Code - Enhanced */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">
// //                   Phone Number *
// //                 </label>
// //                 <div className="flex gap-2">
// //                   <CountryCodeSelector
// //                     value={formData.countryCode}
// //                     onChange={(code) =>
// //                       setFormData({ ...formData, countryCode: code })
// //                     }
// //                   />
// //                   <input
// //                     type="tel"
// //                     value={formData.phone}
// //                     onChange={(e) =>
// //                       setFormData({ ...formData, phone: e.target.value })
// //                     }
// //                     className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                     placeholder="10 digit mobile number"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Address Line 1 */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">
// //                   Address Line 1 *
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={formData.addressLine1}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, addressLine1: e.target.value })
// //                   }
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                   placeholder="Street, house no."
// //                 />
// //               </div>

// //               {/* Address Line 2 */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">
// //                   Address Line 2
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={formData.addressLine2}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, addressLine2: e.target.value })
// //                   }
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                   placeholder="Apartment, landmark, etc."
// //                 />
// //               </div>

// //               {/* City / Town */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">
// //                   City / Town *
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={formData.city}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, city: e.target.value })
// //                   }
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                   placeholder="City or town"
// //                 />
// //               </div>

// //               {/* State */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">State</label>
// //                 <input
// //                   type="text"
// //                   value={formData.state}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, state: e.target.value })
// //                   }
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                   placeholder="State"
// //                 />
// //               </div>

// //               {/* Postal Code */}
// //               <div>
// //                 <label className="block text-sm font-semibold mb-2">
// //                   Postal Code
// //                 </label>
// //                 <input
// //                   type="text"
// //                   value={formData.postalCode}
// //                   onChange={(e) =>
// //                     setFormData({ ...formData, postalCode: e.target.value })
// //                   }
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
// //                   placeholder="Postal code"
// //                 />
// //               </div>

// //               {/* Country Dropdown - Enhanced with Search */}
// //               <SearchableDropdown
// //                 label="Country"
// //                 value={formData.country}
// //                 onChange={(code) =>
// //                   setFormData({ ...formData, country: code })
// //                 }
// //                 options={countries}
// //                 placeholder="Select country"
// //                 required={true}
// //               />

// //               {/* Address Type - Button Toggle Style */}
// //               <AddressTypeToggle
// //                 value={formData.type}
// //                 onChange={(type) =>
// //                   setFormData({ ...formData, type })
// //                 }
// //               />

// //               {/* Actions */}
// //               <div className="flex gap-3 pt-2">
// //                 <button
// //                   type="button"
// //                   onClick={handleSaveAddress}
// //                   className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
// //                 >
// //                   {isEditMode ? 'Update Address' : 'Save Address'}
// //                 </button>

// //                 {isEditMode && (
// //                   <button
// //                     type="button"
// //                     onClick={handleDeleteFromModal}
// //                     className="px-6 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
// //                   >
// //                     <Trash2 size={18} />
// //                     Delete
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default AddressModal;

// export default function WishlistPage() {
//   const [activeTab, setActiveTab] = useState('addresses');
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       type: 'HOME',
//       name: 'Ayan Seal',
//       phone: '9046431805',
//       address: 'Malabika flat, Auddy Bagan Basti, Behala, Presidency Division, West Bengal - 700034'
//     },
//     {
//       id: 2,
//       type: 'WORK',
//       name: 'Ayan Seal',
//       phone: '9046431805',
//       address: 'Pratima appertment, Roy Bahadur Road, Auddy Bagan Basti, Behala, Presidency Division, West Bengal - 700034'
//     },
//     {
//       id: 3,
//       type: 'HOME',
//       name: 'Ayan Seal',
//       phone: '9046431805',
//       address: 'D.V.C market in near by iit kharagpur, ncc bilding ( House name: Seal bari ), D.V.C market, Kharagpur, West Bengal - 721306'
//     }
//   ]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [deleteTargetId, setDeleteTargetId] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [editingAddressId, setEditingAddressId] = useState(null);

//   const [formData, setFormData] = useState({
//     title: '',
//     name: '',
//     countryCode: '+91', // Default to India
//     phone: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     country: 'IN',
//     type: 'BILLING',
//   });


//   const menuItems = [
//     { id: 'orders', label: 'All Orders', icon: Package },
//     { id: 'addresses', label: 'Manage Addresses', icon: MapPin },
//     { id: 'reviews', label: 'Reviews & Ratings', icon: Star },
//     { id: 'wishlist', label: 'My Wishlist', icon: Heart }
//   ];

//   const removeFromWishlist = (id) => {
//     setWishlistItems(wishlistItems.filter(item => item.id !== id));
//   };

//   const handleOpenAddModal = () => {
//     setFormData({ name: '', phone: '', address: '', type: 'HOME' });
//     setIsEditMode(false);
//     setEditingAddressId(null);
//     setShowAddressModal(true);
//   };

//   const handleOpenEditModal = (address) => {
//     console.log('Opening edit modal with:', address);
//     setFormData({
//       name: address.name,
//       phone: address.phone,
//       address: address.address,
//       type: address.type
//     });
//     setEditingAddressId(address.id);
//     setIsEditMode(true);
//     setShowAddressModal(true);
//   };

//   const handleSaveAddress = () => {
//     // if (!formData.name || !formData.phone || !formData.address) {
//     //   alert('Please fill in all fields');
//     //   return;
//     // }

//     if (isEditMode) {
//       // Update existing address
//       setAddresses(addresses.map(addr =>
//         addr.id === editingAddressId
//           ? { ...formData, id: editingAddressId }
//           : addr
//       ));
//       console.log('Address updated');
//     } else {
//       // Add new address
//       console.log('Adding new address with data:', { ...formData, id: Date.now() });
//       setAddresses([...addresses, { ...formData, id: Date.now() }]);
//       // console.log('New address added');
//     }

//     handleCloseModal();
//   };

//   const handleDeleteAddress = (id) => {
//     setDeleteTargetId(id);
//     setShowDeleteConfirm(true);
//   };

//   const confirmDelete = () => {
//     if (deleteTargetId) {
//       setAddresses(addresses.filter(addr => addr.id !== deleteTargetId));
//       console.log('Address deleted:', deleteTargetId);
//       setShowDeleteConfirm(false);
//       setDeleteTargetId(null);
//     }
//   };

//   const handleDeleteFromModal = () => {
//     if (editingAddressId) {
//       setDeleteTargetId(editingAddressId);
//       setShowAddressModal(false);
//       setShowDeleteConfirm(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowAddressModal(false);
//     setIsEditMode(false);
//     setEditingAddressId(null);
//     setFormData({ name: '', phone: '', address: '', type: 'HOME' });
//   };



//   useEffect(() => {
//     fetchWishlist();
//   }, []);

//   const getCurrentTabLabel = () => {
//     const currentItem = menuItems.find(item => item.id === activeTab);
//     return currentItem ? currentItem.label : 'My Account';
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.3s ease-out;
//         }
//       `}</style>

//       <div className="h-4"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Desktop Sidebar */}
//           <div className="hidden lg:block lg:w-64 flex-shrink-0">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//               <div className="p-4 border-b border-gray-200">
//                 <h2 className="text-lg font-bold">My Account</h2>
//               </div>

//               <nav className="p-2">
//                 {menuItems.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <button
//                       key={item.id}
//                       onClick={() => setActiveTab(item.id)}
//                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1 ${activeTab === item.id
//                         ? 'bg-black text-white shadow-md'
//                         : 'hover:bg-gray-100 text-gray-700'
//                         }`}
//                     >
//                       <Icon size={20} />
//                       <span className="text-sm font-medium">{item.label}</span>
//                     </button>
//                   );
//                 })}

//                 <div className="border-t border-gray-200 mt-4 pt-4">
//                   <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-gray-700">
//                     <LogOut size={20} />
//                     <span className="text-sm font-medium">Logout</span>
//                   </button>
//                 </div>
//               </nav>
//             </div>
//           </div>

//           {/* Mobile Dropdown */}
//           <div className="lg:hidden">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4">
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="w-full flex items-center justify-between px-4 py-3 text-left"
//               >
//                 <span className="font-semibold text-gray-900">{getCurrentTabLabel()}</span>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
//               </button>

//               <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
//                 <div className="border-t border-gray-200">
//                   {menuItems.map((item) => {
//                     const Icon = item.icon;
//                     return (
//                       <button
//                         key={item.id}
//                         onClick={() => {
//                           setActiveTab(item.id);
//                           setMobileMenuOpen(false);
//                         }}
//                         className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${activeTab === item.id ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-700'
//                           }`}
//                       >
//                         <Icon size={18} />
//                         <span className="text-sm font-medium">{item.label}</span>
//                       </button>
//                     );
//                   })}

//                   <div className="border-t border-gray-200">
//                     <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-colors text-gray-700">
//                       <LogOut size={18} />
//                       <span className="text-sm font-medium">Logout</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 min-w-0">
//             {/* Wishlist */}
//             {activeTab === 'wishlist' && (
//               <div>
//                 <div className="mb-6">
//                   <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">My Wishlist</h1>
//                   <p className="text-gray-600">{wishlistItems.length} items saved</p>
//                 </div>

//                 {wishlistItems.length === 0 ? (
//                   <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-16">
//                     <Heart size={64} className="mx-auto mb-4 text-gray-300" />
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
//                     <p className="text-gray-600">Start adding items you love!</p>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//                     {wishlistItems.map((item) => (
//                       <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                         <div className="relative">
//                           <img
//                             // src={item.image}
//                             src={`http://192.168.101.182:8002${item.image}`}

//                             alt={item.item_name} className="w-full h-48 object-cover" />
//                           <button
//                             onClick={() => removeFromWishlist(item.id)}
//                             className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>

//                         <div className="p-3">
//                           <h3 className="font-semibold text-sm mb-2 text-black line-clamp-2 min-h-[40px]">{item.item_name}</h3>
//                           <p className="text-lg font-bold text-black mb-3">₹{item.price_list_rate}</p>

//                           <button className="w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm bg-black text-white hover:bg-gray-800">
//                             <ShoppingCart size={16} />
//                             Add to Cart
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Addresses */}
//             {activeTab === 'addresses' && (
//               <div>
//                 <div className="mb-6">
//                   <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">Manage Addresses</h1>
//                 </div>

//                 <button
//                   onClick={handleOpenAddModal}
//                   className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-5 mb-4 hover:border-black hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-black font-semibold shadow-sm"
//                 >
//                   <Plus size={20} />
//                   <span className="text-sm">ADD A NEW ADDRESS</span>
//                 </button>

//                 <div className="space-y-4">
//                   {addresses.map((address) => (
//                     <div key={address.id} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
//                       <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
//                         <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
//                           {address.type}
//                         </span>

//                         <div className="flex gap-3">
//                           <button
//                             type="button"
//                             onClick={() => handleOpenEditModal(address)}
//                             className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
//                           >
//                             <Edit2 size={14} />
//                             Edit
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => handleDeleteAddress(address.id)}
//                             className="text-red-600 hover:text-red-800 font-semibold text-sm flex items-center gap-1"
//                           >
//                             <Trash2 size={14} />
//                             Delete
//                           </button>
//                         </div>
//                       </div>

//                       <div>
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
//                           <h3 className="font-bold text-black text-base">{address.name}</h3>
//                           <span className="text-gray-600 text-sm">{address.phone}</span>
//                         </div>
//                         <p className="text-gray-700 leading-relaxed text-sm">{address.address}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Other tabs */}
//             {(activeTab === 'orders' || activeTab === 'reviews') && (
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-16">
//                 <Package size={64} className="mx-auto mb-4 text-gray-300" />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon</h3>
//                 <p className="text-gray-600">This section is under development</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <AddressModal
//         showAddressModal={showAddressModal}
//         handleCloseModal={handleCloseModal}
//         isEditMode={isEditMode}
//         formData={formData}
//         setFormData={setFormData}
//         handleSaveAddress={handleSaveAddress}
//         handleDeleteFromModal={handleDeleteFromModal}
//       />



//       {/* Custom Delete Confirmation Modal */}
//       {showDeleteConfirm && (
//         <>
//           <div
//             // className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 animate-fadeIn"
//             className="fixed inset-0 bg-black/30 backdrop-blur-md z-55 animate-fadeIn"
//             onClick={() => setShowDeleteConfirm(false)}
//           ></div>
//           <div className="fixed inset-0 flex items-center justify-center p-4 z-60 pointer-events-none">
//             <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-slideUp pointer-events-auto">
//               <div className="p-6">
//                 <div className="flex justify-center mb-4">
//                   <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
//                     <Trash2 size={32} className="text-red-600" />
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Delete Address?</h3>
//                 <p className="text-center text-gray-600 mb-6">
//                   Are you sure you want to delete this address? This action cannot be undone.
//                 </p>

//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => setShowDeleteConfirm(false)}
//                     className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={confirmDelete}
//                     className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { Heart, ShoppingCart, Trash2, Package, MapPin, Star, LogOut, Plus, Edit2, X, ChevronDown, Search } from 'lucide-react';
import AddressModal from '../components/AddressModal';
import { toast as hotToast } from 'react-hot-toast';
import { apiPost } from '../hooks/erpnextApi';



export default function WishlistPage() {
  const [activeTab, setActiveTab] = useState('addresses');
  const [wishlistItems, setWishlistItems] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Billing',
      title: 'Home Address',
      phone: '9046431805',
      addressLine1: 'Malabika flat, Auddy Bagan Basti',
      addressLine2: 'Near Park',
      city: 'Behala',
      state: 'West Bengal',
      postalCode: '700034',
      country: 'India'
    },
    {
      id: 2,
      type: 'Shipping',
      title: 'Office Address',
      phone: '9046431805',
      addressLine1: 'Pratima apartment, Roy Bahadur Road',
      addressLine2: 'Auddy Bagan Basti',
      city: 'Behala',
      state: 'West Bengal',
      postalCode: '700034',
      country: 'India'
    }
  ]);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    name: '',
    countryCode: '+91', // ✅ Add this
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    type: 'BILLING',
  });

  const showToast = (message, type = 'error') => {
    if (type === 'success') {
      hotToast.success(message);
    } else {
      hotToast.error(message);
    }
  };

  const closeToast = () => {
    setToast(null);
  };

  const menuItems = [
    { id: 'orders', label: 'All Orders', icon: Package },
    { id: 'addresses', label: 'Manage Addresses', icon: MapPin },
    { id: 'reviews', label: 'Reviews & Ratings', icon: Star },
    { id: 'wishlist', label: 'My Wishlist', icon: Heart }
  ];

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };


  const fetchWishlist = async () => {
    try {
      const res = await apiPost('http://192.168.101.182:8002/api/method/custom.api.wishlist.get_wishlist', {
        user: "niranjan.ks@anantdv.com"
      });


      setWishlistItems(res.message)
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchWishlist()
  }, [])

  const handleOpenAddModal = () => {
    // setFormData({
    //   title: '',
    //   addressLine1: '',
    //   addressLine2: '',
    //   city: '',
    //   state: '',
    //   postalCode: '',
    //   country: 'India',
    //   type: 'Billing',
    //   phone: '',
    // });
    setFormData({
      title: '',
      name: '',
      countryCode: '', // ✅ Add this
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      type: 'Billing',
    });
    setIsEditMode(false);
    setEditingAddressId(null);
    setShowAddressModal(true);
  };

  const handleOpenEditModal = (address) => {
    setFormData({
      title: address.title || '',
      addressLine1: address.addressLine1 || '',
      addressLine2: address.addressLine2 || '',
      countryCode: address.countryCode || '', // ✅ Add this
      city: address.city || '',
      state: address.state || '',
      postalCode: address.postalCode || '',
      country: address.country || 'India',
      type: address.type || 'Billing',
      phone: address.phone || '',
    });
    setEditingAddressId(address.id);
    setIsEditMode(true);
    setShowAddressModal(true);
  };


  const handleSaveAddress = () => {
    try {      
      // ✅ Prepare address data
      const addressData = {
        title: formData.title.trim(),
        // name: formData.name.trim(),
        countryCode: formData.countryCode || '+91',
        phone: formData.phone.trim(),
        addressLine1: formData.addressLine1.trim(),
        addressLine2: formData.addressLine2?.trim() || '',
        city: formData.city.trim(),
        state: formData.state?.trim() || '',
        postalCode: formData.postalCode?.trim() || '',
        country: formData.country,
        type: formData.type,
      };
      console.log('Prepared Address Data:', addressData);

      // ✅ NO API CALL - Just save to local state
      if (isEditMode) {
        setAddresses(addresses.map(addr =>
          addr.id === editingAddressId
            ? { ...addressData, id: editingAddressId }
            : addr
        ));
        console.log('Address Updated:', JSON.stringify({ ...addressData, id: editingAddressId }, null, 2));
        showToast('Address updated successfully', 'success');
      } else {
        const newAddress = { ...addressData, id: Date.now() };
        setAddresses([...addresses, newAddress]);
        console.log('New Address Added:', JSON.stringify(newAddress, null, 2));
        showToast('Address added successfully', 'success');
      }

      // ✅ Close modal after successful save
      handleCloseModal();
    } catch (error) {
      console.error('Form Error:', error);
      showToast('An unexpected error occurred. Please try again.', 'error');
    }
  };

  const handleDeleteAddress = (id) => {
    setDeleteTargetId(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (deleteTargetId) {
      setAddresses(addresses.filter(addr => addr.id !== deleteTargetId));
      console.log('Address Deleted - ID:', deleteTargetId);
      showToast('Address deleted successfully', 'success');
      setShowDeleteConfirm(false);
      setDeleteTargetId(null);
    }
  };

  const handleDeleteFromModal = () => {
    if (editingAddressId) {
      setDeleteTargetId(editingAddressId);
      setShowAddressModal(false);
      setShowDeleteConfirm(true);
    }
  };

  const handleCloseModal = () => {
    setShowAddressModal(false);
    setIsEditMode(false);
    setEditingAddressId(null);
    setFormData({
      title: '',
      name: '',  // ✅ ADDED
      countryCode: '+91',  // ✅ ADDED
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      type: 'BILLING',
    });
  };


  const getCurrentTabLabel = () => {
    const currentItem = menuItems.find(item => item.id === activeTab);
    return currentItem ? currentItem.label : 'My Account';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}

      <div className="h-4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-bold">My Account</h2>
              </div>

              <nav className="p-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1 ${activeTab === item.id
                        ? 'bg-black text-white shadow-md'
                        : 'hover:bg-gray-100 text-gray-700'
                        }`}
                    >
                      <Icon size={20} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}

                <div className="border-t border-gray-200 mt-4 pt-4">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-gray-700">
                    <LogOut size={20} />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <span className="font-semibold text-gray-900">{getCurrentTabLabel()}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="border-t border-gray-200">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${activeTab === item.id ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-700'
                          }`}
                      >
                        <Icon size={18} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}

                  <div className="border-t border-gray-200">
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-colors text-gray-700">
                      <LogOut size={18} />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Wishlist */}
            {activeTab === 'wishlist' && (
              <div>
                <div className="mb-6">
                  <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">My Wishlist</h1>
                  <p className="text-gray-600">{wishlistItems.length} items saved</p>
                </div>

                {wishlistItems.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-16">
                    <Heart size={64} className="mx-auto mb-4 text-gray-300" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-600">Start adding items you love!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="relative">
                          <img
                            // src={item.image}
                            src={`http://192.168.101.182:8002${item.image}`}

                            alt={item.item_name}
                            className="w-full h-48 object-cover"
                          />
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="p-3">
                          <h3 className="font-semibold text-sm mb-2 text-black line-clamp-2 min-h-[40px]">{item.item_name}</h3>
                          <p className="text-lg font-bold text-black mb-3">₹{item.price_list_rate}</p>

                          <button className="w-full py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm bg-black text-white hover:bg-gray-800">
                            <ShoppingCart size={16} />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Addresses */}
            {activeTab === 'addresses' && (
              <div>
                <div className="mb-6">
                  <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">Manage Addresses</h1>
                </div>

                <button
                  onClick={handleOpenAddModal}
                  className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-5 mb-4 hover:border-black hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-black font-semibold shadow-sm"
                >
                  <Plus size={20} />
                  <span className="text-sm">ADD A NEW ADDRESS</span>
                </button>

                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                          {address.type}
                        </span>

                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(address)}
                            className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1"
                          >
                            <Edit2 size={14} />
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteAddress(address.id)}
                            className="text-red-600 hover:text-red-800 font-semibold text-sm flex items-center gap-1"
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </div>
                      </div>

                      <div>
                        {address.title && (
                          <h3 className="font-bold text-black text-base mb-2">{address.title}</h3>
                        )}
                        <div className="text-gray-700 leading-relaxed text-sm space-y-1">
                          {address.addressLine1 && <p>{address.addressLine1}</p>}
                          {address.addressLine2 && <p>{address.addressLine2}</p>}
                          <p>
                            {[address.city, address.state, address.postalCode]
                              .filter(Boolean)
                              .join(', ')}
                          </p>
                          {address.country && <p>{address.country}</p>}
                          {address.phone && (
                            <p className="font-medium text-gray-900 mt-2">Phone: {address.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs */}
            {(activeTab === 'orders' || activeTab === 'reviews') && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-16">
                <Package size={64} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon</h3>
                <p className="text-gray-600">This section is under development</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <AddressModal
        showAddressModal={showAddressModal}
        handleCloseModal={handleCloseModal}
        isEditMode={isEditMode}
        formData={formData}
        setFormData={setFormData}
        handleSaveAddress={handleSaveAddress}
        handleDeleteFromModal={handleDeleteFromModal}
      /> */}
      <AddressModal
        showAddressModal={showAddressModal}
        handleCloseModal={handleCloseModal}
        isEditMode={isEditMode}
        formData={formData}
        setFormData={setFormData}
        handleSaveAddress={handleSaveAddress}
        handleDeleteFromModal={handleDeleteFromModal}
      />

      {/* Custom Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] animate-fadeIn"
            onClick={() => setShowDeleteConfirm(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[70] pointer-events-none">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-slideUp pointer-events-auto">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Trash2 size={32} className="text-red-600" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Delete Address?</h3>
                <p className="text-center text-gray-600 mb-6">
                  Are you sure you want to delete this address? This action cannot be undone.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}