// import React, { useEffect, useState } from 'react';
// import { ChevronDown, Minus, Grid, List, MoreVertical } from 'lucide-react';
// import axios from 'axios';

// const ProductCard = (productData) => (
//   <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
//     <div className={`relative  flex items-center justify-center`} >
//       {productData?.discount && (
//         <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold">
//           {discount}
//         </div>
//       )}
//       <img src={`http://192.168.101.182:8002${productData?.website_image}`} alt={productData.name} className="w-full h-full object-contain" />
//     </div>
//     <div className="p-4">
//       <h3 className="text-base font-medium mb-2 h-12">{productData.item_name}</h3>
//       <div className="flex items-center gap-2 mb-4">
//         <span className="text-lg font-semibold">{productData.formatted_price}</span>
//         {/* {originalPrice && (
//           <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
//         )} */}
//       </div>
//       <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-md font-medium transition-colors">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// );

// const FilterSection = ({ title, children, defaultOpen = true }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <div className="border-b border-gray-200 py-6">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex justify-between items-center w-full mb-4"
//       >
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <Minus className={`w-5 h-5 transition-transform ${isOpen ? '' : 'rotate-90'}`} />
//       </button>
//       {isOpen && <div>{children}</div>}
//     </div>
//   );
// };

// const WishListItem = ({ name, image }) => (
//   <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
//     <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden">
//       <img src={image} alt={name} className="w-full h-full object-cover" />
//     </div>
//     <div className="flex-1">
//       <p className="text-sm font-medium">{name}</p>
//     </div>
//   </div>
// );

// export default function AllProductsList() {
//   const [viewMode, setViewMode] = useState('grid-4');
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [priceRange, setPriceRange] = useState([20, 145]);

//   const [products, setProducts] = useState([])

//   const sizes = ['XS', 'S', 'M', 'L', 'XL', '37'];
//   const colors = [
//     { name: 'white', class: 'bg-white border-2 border-gray-300' },
//     { name: 'purple', class: 'bg-purple-300' },
//     { name: 'brown', class: 'bg-amber-700' },
//     { name: 'black', class: 'bg-black' },
//     { name: 'blue', class: 'bg-blue-300' },
//     { name: 'tan', class: 'bg-amber-200' },
//   ];

// //   const products = [
// //     { name: 'The Woven Sweet Dreams P.J. Top', price: '50.00', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //     { name: 'The ReNew Merino Long Liner', price: '79.00', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //     { name: 'The Brushed Flannel Caro Shirt', price: '48.00', discount: '-4%', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //     { name: 'The Felted Merino Half-Zip Sweater', price: '145.00', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //     { name: 'The Oversized Alpaca Crew', price: '100.00', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //     { name: 'The Funnel-Neck Smock Top', price: '70.00', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //     { name: 'The Organic Cotton Chunky Beanie', price: '20.00', originalPrice: '48.00', discount: '-58%', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //     { name: 'The Gathered Drape Trench', price: '48.00', image: 'https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg', bgColor: 'bg-gray-50' },
// //   ];

//   const toggleSize = (size) => {
//     setSelectedSizes(prev =>
//       prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
//     );
//   };

//   const toggleColor = (color) => {
//     setSelectedColors(prev =>
//       prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
//     );
//   };

//   const getAllProducts = async () => {
//     try {

//       console.log("called")
//       const { data } = await axios.post('http://192.168.101.182:8002/api/method/webshop.webshop.api.get_product_filter_data',{
//         query_args: {
//             field_filters: {},
//             attribute_filters: {},
//             item_group: null,
//             start: null,
//             from_filters: false
//           }
//       },
//         {
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//         }
//       })

//       console.log("data", data?.message)

//       setProducts(data?.message?.items)


//     } catch (error) {

//     }
//   }

//   useEffect(() => {
//     getAllProducts()
//   }, [])


//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex gap-8">
//           {/* Sidebar */}
//           <div className="w-80 shrink-0">
//             <div className="bg-white rounded-lg p-6 sticky top-8">
//               <h2 className="text-2xl font-bold mb-6">Filter</h2>

//               {/* Size Filter */}
//               <FilterSection title="Size">
//                 <div className="grid grid-cols-4 gap-2">
//                   {sizes.map(size => (
//                     <button
//                       key={size}
//                       onClick={() => toggleSize(size)}
//                       className={`py-3 px-4 border rounded-md font-medium transition-colors ${
//                         selectedSizes.includes(size)
//                           ? 'bg-black text-white border-black'
//                           : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </FilterSection>

//               {/* Color Filter */}
//               <FilterSection title="Color">
//                 <div className="grid grid-cols-5 gap-3">
//                   {colors.map(color => (
//                     <button
//                       key={color.name}
//                       onClick={() => toggleColor(color.name)}
//                       className={`w-10 h-10 rounded-full ${color.class} ${
//                         selectedColors.includes(color.name) ? 'ring-2 ring-offset-2 ring-gray-900' : ''
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </FilterSection>

//               {/* Price Filter */}
//               <FilterSection title="Price">
//                 <div className="space-y-4">
//                   <div className="flex justify-between text-sm font-medium">
//                     <span>${priceRange[0]}</span>
//                     <span>${priceRange[1]}</span>
//                   </div>
//                   <div className="relative pt-1">
//                     <input
//                       type="range"
//                       min="20"
//                       max="145"
//                       value={priceRange[1]}
//                       onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                       className="w-full"
//                     />
//                   </div>
//                 </div>
//               </FilterSection>

//               {/* Brand Product Filter */}
//               <FilterSection title="Brand Product">
//                 <div className="space-y-3">
//                   <label className="flex items-center gap-3 cursor-pointer">
//                     <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
//                     <span className="text-sm">Aby <span className="text-gray-400">(4)</span></span>
//                   </label>
//                   <label className="flex items-center gap-3 cursor-pointer">
//                     <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
//                     <span className="text-sm">Chanel <span className="text-gray-400">(1)</span></span>
//                   </label>
//                   <button className="text-sm font-medium hover:underline">Show More</button>
//                 </div>
//               </FilterSection>

//               {/* Wish List */}
//               <div className="mt-8">
//                 <h3 className="text-lg font-semibold mb-4">My Wish List</h3>
//                 <WishListItem name="The Woven Sweet Dreams P.J. Top" image="https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg" />
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1">
//             {/* Header */}
//             <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
//               <h1 className="text-xl font-semibold">12 Items</h1>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium">Position</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </div>
//                 <div className="flex gap-1 ml-4">
//                   <button
//                     onClick={() => setViewMode('grid-1')}
//                     className={`p-2 rounded ${viewMode === 'grid-1' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                   >
//                     <List className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-2')}
//                     className={`p-2 rounded ${viewMode === 'grid-2' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                   >
//                     <Grid className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-3')}
//                     className={`p-2 rounded ${viewMode === 'grid-3' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                   >
//                     <MoreVertical className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-4')}
//                     className={`p-2 rounded ${viewMode === 'grid-4' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
//                   >
//                     <div className="flex gap-0.5">
//                       <div className="w-1 h-5 bg-current"></div>
//                       <div className="w-1 h-5 bg-current"></div>
//                       <div className="w-1 h-5 bg-current"></div>
//                       <div className="w-1 h-5 bg-current"></div>
//                     </div>
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-5')}
//                     className={`p-2 rounded ${viewMode === 'grid-5' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                   >
//                     <div className="flex gap-0.5">
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Product Grid */}
//             <div className={`grid ${
//               viewMode === 'grid-1' ? 'grid-cols-1' :
//               viewMode === 'grid-2' ? 'grid-cols-2' :
//               viewMode === 'grid-3' ? 'grid-cols-3' :
//               viewMode === 'grid-4' ? 'grid-cols-4' :
//               'grid-cols-5'
//             }`}>
//               {products.map((product, index) => (
//                 <ProductCard key={index} {...product} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }















// import React, { useEffect, useState } from 'react';
// import { ChevronDown, Minus, Grid, List, MoreVertical } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// // import { addToCart } from '../features/slices/cartSlice';


// const ProductCard = (productData) => {
//   const dispatch = useDispatch()
//     const handleAddToCart = async (item_code) => {
//       // dispatch(addToCart(productData))
//         try {
//             console.log("add to cart called")
//             const { data } = await axios.post('http://192.168.101.182:8002/api/method/webshop.webshop.shopping_cart.cart.update_cart', {
//                 item_code: item_code,
//                 qty: 1
//             }, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json",
//                     'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//                 }
//             }
//             )

//             console.log("add to cart called", data)

//         } catch (error) {

//         }
//     }


//      return ( 
//   <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//     <div className="relative bg-gray-50 aspect-square flex items-center justify-center p-4">
//       {productData?.discount && (
//         <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded">
//           {productData.discount}
//         </div>
//       )}
//       <img 
//         src={`http://192.168.101.182:8002${productData?.website_image}`} 
//         alt={productData?.item_name || 'Product'} 
//         className="w-full h-full object-contain"
//         onError={(e) => {
//           e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
//         }}
//       />
//     </div>
//     <div className="p-4">
//       <Link to={`/product/${productData?.route}`}>
//         <h3 className="text-sm font-medium mb-2 line-clamp-2 min-h-10">
//         {productData?.item_name || 'Product Name'}
//       </h3>
//       </Link>
//       <div className="flex items-center gap-2 mb-4">
//         <span className="text-lg font-semibold text-gray-900">
//           {productData?.formatted_price || 'K 0.00'}
//         </span>
//         {productData?.formatted_mrp && productData?.formatted_mrp !== productData?.formatted_price && (
//           <span className="text-gray-400 line-through text-sm">
//             {productData.formatted_mrp}
//           </span>
//         )}
//       </div>
//       <button onClick={() => handleAddToCart(productData?.item_code)} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-md font-medium transition-colors">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// )}

// const FilterSection = ({ title, children, defaultOpen = true }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <div className="border-b border-gray-200 py-6">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex justify-between items-center w-full mb-4 text-left"
//       >
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <Minus className={`w-5 h-5 transition-transform ${isOpen ? '' : 'rotate-90'}`} />
//       </button>
//       {isOpen && <div>{children}</div>}
//     </div>
//   );
// };

// const WishListItem = ({ name, image }) => (
//   <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
//     <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
//       <img src={image} alt={name} className="w-full h-full object-cover" />
//     </div>
//     <div className="flex-1 min-w-0">
//       <p className="text-sm font-medium truncate">{name}</p>
//     </div>
//   </div>
// );

// export default function AllProductsList() {
//   const [viewMode, setViewMode] = useState('grid-4');
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [priceRange, setPriceRange] = useState([20, 145]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const dispatch = useDispatch()

//   const sizes = ['XS', 'S', 'M', 'L', 'XL', '37'];
//   const colors = [
//     { name: 'white', class: 'bg-white border-2 border-gray-300' },
//     { name: 'purple', class: 'bg-purple-300' },
//     { name: 'brown', class: 'bg-amber-700' },
//     { name: 'black', class: 'bg-black' },
//     { name: 'blue', class: 'bg-blue-300' },
//     { name: 'tan', class: 'bg-amber-200' },
//   ];



//   const toggleSize = (size) => {
//     setSelectedSizes(prev =>
//       prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
//     );
//   };

//   const toggleColor = (color) => {
//     setSelectedColors(prev =>
//       prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
//     );
//   };

//   const getAllProducts = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch('http://192.168.101.182:8002/api/method/webshop.webshop.api.get_product_filter_data', {
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//         },
//         body: JSON.stringify({
//           query_args: {
//             field_filters: {},
//             attribute_filters: {},
//             item_group: null,
//             start: null,
//             from_filters: false
//           }
//         })
//       });

//       const data = await response.json();

//       if (data?.message?.items) {
//         setProducts(data.message.items);
//       } else {
//         setProducts([]);
//       }
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setError('Failed to load products. Please try again.');
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const gridClasses = {
//     'grid-1': 'grid-cols-1',
//     'grid-2': 'grid-cols-1 sm:grid-cols-2',
//     'grid-3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
//     'grid-4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
//     'grid-5': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="w-full lg:w-80 lg:shrink-0">
//             <div className="bg-white rounded-lg p-6 lg:sticky lg:top-8">
//               <h2 className="text-2xl font-bold mb-6">Filter</h2>

//               {/* Size Filter */}
//               <FilterSection title="Size">
//                 <div className="grid grid-cols-4 gap-2">
//                   {sizes.map(size => (
//                     <button
//                       key={size}
//                       onClick={() => toggleSize(size)}
//                       className={`py-3 px-4 border rounded-md font-medium transition-colors ${
//                         selectedSizes.includes(size)
//                           ? 'bg-black text-white border-black'
//                           : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </FilterSection>

//               {/* Color Filter */}
//               <FilterSection title="Color">
//                 <div className="grid grid-cols-5 gap-3">
//                   {colors.map(color => (
//                     <button
//                       key={color.name}
//                       onClick={() => toggleColor(color.name)}
//                       className={`w-10 h-10 rounded-full ${color.class} ${
//                         selectedColors.includes(color.name) ? 'ring-2 ring-offset-2 ring-gray-900' : ''
//                       } transition-all hover:scale-110`}
//                       aria-label={`Select ${color.name} color`}
//                     />
//                   ))}
//                 </div>
//               </FilterSection>

//               {/* Price Filter */}
//               <FilterSection title="Price">
//                 <div className="space-y-4">
//                   <div className="flex justify-between text-sm font-medium">
//                     <span>K {priceRange[0]}</span>
//                     <span>K {priceRange[1]}</span>
//                   </div>
//                   <div className="relative pt-1">
//                     <input
//                       type="range"
//                       min="20"
//                       max="145"
//                       value={priceRange[1]}
//                       onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
//                     />
//                   </div>
//                 </div>
//               </FilterSection>

//               {/* Brand Product Filter */}
//               <FilterSection title="Brand Product">
//                 <div className="space-y-3">
//                   <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
//                     <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-gray-900" />
//                     <span className="text-sm">Aby <span className="text-gray-400">(4)</span></span>
//                   </label>
//                   <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
//                     <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-gray-900" />
//                     <span className="text-sm">Chanel <span className="text-gray-400">(1)</span></span>
//                   </label>
//                   <button className="text-sm font-medium hover:underline text-gray-700">Show More</button>
//                 </div>
//               </FilterSection>

//               {/* Wish List */}
//               <div className="mt-8">
//                 <h3 className="text-lg font-semibold mb-4">My Wish List</h3>
//                 <WishListItem 
//                   name="The Woven Sweet Dreams P.J. Top" 
//                   image="https://minimog.nextsky.co/minimog/media/catalog/product/cache/29af84b56a9361b7fcf1117183344176/p/r/product_megastore_16_1.jpg" 
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 min-w-0">
//             {/* Header */}
//             <div className="bg-white rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//               <h1 className="text-xl font-semibold">
//                 {loading ? 'Loading...' : `${products.length} Items`}
//               </h1>
//               <div className="flex items-center gap-4 w-full sm:w-auto">
//                 <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded transition-colors">
//                   <span className="text-sm font-medium">Position</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </div>
//                 <div className="flex gap-1 ml-auto">
//                   <button
//                     onClick={() => setViewMode('grid-1')}
//                     className={`p-2 rounded transition-colors ${viewMode === 'grid-1' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                     aria-label="Single column view"
//                   >
//                     <List className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-2')}
//                     className={`p-2 rounded transition-colors ${viewMode === 'grid-2' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                     aria-label="Two column view"
//                   >
//                     <Grid className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-3')}
//                     className={`p-2 rounded transition-colors ${viewMode === 'grid-3' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                     aria-label="Three column view"
//                   >
//                     <MoreVertical className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-4')}
//                     className={`p-2 rounded transition-colors ${viewMode === 'grid-4' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
//                     aria-label="Four column view"
//                   >
//                     <div className="flex gap-0.5">
//                       <div className="w-1 h-5 bg-current"></div>
//                       <div className="w-1 h-5 bg-current"></div>
//                       <div className="w-1 h-5 bg-current"></div>
//                       <div className="w-1 h-5 bg-current"></div>
//                     </div>
//                   </button>
//                   <button
//                     onClick={() => setViewMode('grid-5')}
//                     className={`p-2 rounded transition-colors ${viewMode === 'grid-5' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//                     aria-label="Five column view"
//                   >
//                     <div className="flex gap-0.5">
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                       <div className="w-0.5 h-5 bg-current"></div>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Product Grid */}
//             {loading ? (
//               <div className="flex items-center justify-center py-20">
//                 <div className="text-center">
//                   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
//                   <p className="text-gray-600">Loading products...</p>
//                 </div>
//               </div>
//             ) : error ? (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
//                 <p className="text-red-600 mb-4">{error}</p>
//                 <button 
//                   onClick={getAllProducts}
//                   className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
//                 >
//                   Retry
//                 </button>
//               </div>
//             ) : products.length === 0 ? (
//               <div className="bg-white rounded-lg p-8 text-center">
//                 <p className="text-gray-600">No products found.</p>
//               </div>
//             ) : (
//               <div className={`grid ${gridClasses[viewMode]} gap-6`}>
//                 {products.map((product, index) => (
//                   <ProductCard key={product.name || index} {...product} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useCallback, useEffect, useState } from 'react';
import { ChevronDown, Minus, Grid, List, MoreVertical, Heart, ShoppingCart, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../features/slices/productsListSlice";
import {
  useAddToCartMutation,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useGetCartQuotationQuery
} from '../features/cartApi';
import { set } from 'react-hook-form';

const ProductCard = ({ productData, onAddToCart, onToggleWishlist, isAddingToCart }) => {
  const [isWished, setIsWished] = useState(productData?.wished || false);
  const [isTogglingWish, setIsTogglingWish] = useState(false);

  const handleWishlistClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTogglingWish(true);
    await onToggleWishlist(productData?.item_code, !isWished);
    setIsWished(!isWished);
    setIsTogglingWish(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group">
      <div className="relative bg-gray-50 aspect-square flex items-center justify-center p-4 overflow-hidden">
        {productData?.discount && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded z-10">
            {productData.discount}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          disabled={isTogglingWish}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all z-10 disabled:opacity-50"
          aria-label="Add to wishlist"
        >
          {isTogglingWish ? (
            <Loader2 className="w-5 h-5 animate-spin text-gray-600" />
          ) : (
            <Heart
              className={`w-5 h-5 transition-colors ${isWished ? 'fill-red-500 text-red-500' : 'text-gray-600'
                }`}
            />
          )}
        </button>

        {/* Stock Status */}
        {!productData?.in_stock && (
          <div className="absolute inset-0 bg-white opacity-90 flex items-center justify-center z-10">
            <span className="text-red-600 font-semibold text-lg">Out of Stock</span>
          </div>
        )}

        <Link to={`/product/${productData?.item_name}`} state={{ productCode: productData?.name }} className="w-full h-full flex items-center justify-center">
          <img
            src={`http://192.168.101.182:8002${productData?.website_image}`}
            alt={productData?.item_name || 'Product'}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          // onError={(e) => {
          //   e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
          // }}
          />
        </Link>
      </div>

      <div className="p-4">
        <Link to={`/product/${productData?.item_name}`} state={{ productCode: productData?.name }}>
          <h3 className="text-sm font-medium mb-2 line-clamp-2 min-h-10 hover:text-gray-600 transition-colors">
            {productData?.item_name || 'Product Name'}
          </h3>
        </Link>

        {productData?.item_group && (
          <p className="text-xs text-gray-500 mb-2">{productData.item_group}</p>
        )}

        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-semibold text-gray-900">
            {productData?.formatted_price || 'K 0.00'}
          </span>
          {productData?.formatted_mrp && productData?.formatted_mrp !== productData?.formatted_price && (
            <>
              <span className="text-gray-400 line-through text-sm">
                {productData.formatted_mrp}
              </span>
              {productData?.price_list_rate && productData?.formatted_price && (
                <span className="text-green-600 text-xs font-medium">
                  {Math.round(((productData.price_list_rate - parseFloat(productData.formatted_price.replace(/[^0-9.-]+/g, ""))) / productData.price_list_rate) * 100)}% OFF
                </span>
              )}
            </>
          )}
        </div>

        <button
          onClick={() => onAddToCart(productData?.item_code)}
          disabled={!productData?.in_stock || isAddingToCart}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isAddingToCart ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Adding...
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              {productData?.in_stock ? 'Add to Cart' : 'Out of Stock'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full mb-4 text-left hover:text-gray-600 transition-colors"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <Minus className={`w-5 h-5 transition-transform duration-200 ${isOpen ? '' : 'rotate-90'}`} />
      </button>
      {isOpen && <div className="animate-fadeIn">{children}</div>}
    </div>
  );
};

const WishListItem = ({ name, image, route }) => (
  <Link to={`/product/${route}`}>
    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
      <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/64?text=No+Image';
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{name}</p>
      </div>
    </div>
  </Link>
);

export default function AllProductsList() {
  const [viewMode, setViewMode] = useState('grid-4');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([20, 145]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCartId, setAddingToCartId] = useState(null);
  const [category, setCategory] = useState(null)
  const dispatch = useDispatch();


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);


  const PAGE_LENGTH = 9;

  const location = useLocation()
  // useCallback(() => {
  //   console.log("location state:", location?.state.category)
  //   if (location?.state?.category) {
  //     setCategory(location.state.category)
  //   }
  // }, [location]);



  useEffect(() => {
    console.log("location state:", location?.state.category)
    if (location?.state?.category) {
      let payload = {
        page: 1,
        category: location.state.category,
        pageLength: PAGE_LENGTH
      }
      dispatch(fetchData(payload));
      setCategory(location.state.category)
    }
  }, [location?.state?.category]);

  const apidata = useSelector((state) => state.productsList);

  useEffect(() => {
    if (!apidata) return;

    // setLoading(apidata.loading);
    console.log("apidata:", apidata.data);
    // setError(apidata.error);
    // console.log("apidata loading:", apidata.state == "loading");
    setLoading(apidata.state == "loading");
    // setError(apidata.error);

    console.log("apidata from redux:", apidata.data.items)
    setProducts(apidata.data.items || []);
    setItemsCount(apidata.data.items_count + apidata.data.start || 0);
    setHasMore(apidata.data.has_more || false);
    // setCurrentPage(currentPage);
    // setProducts(result.items);
        // setFilters(result.filters || {});
        // setItemsCount(result.items_count + result.start);
        // setHasMore(result.has_more);
        // setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [apidata,currentPage]);



  // useEffect(() => {
  //   // console.log("category state changed:", category)
  //   // dispatch(fetchproduct()); 
  //   dispatch(fetchData(1, false, category, PAGE_LENGTH));
  //   console.log("apidata:", apidata)
  // }, []);


  // RTK Query hooks
  const [addToCart] = useAddToCartMutation();
  const [addToWishlist] = useAddToWishlistMutation();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();
  const { refetch: refetchCart } = useGetCartQuotationQuery();

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '37'];
  const colors = [
    { name: 'white', class: 'bg-white border-2 border-gray-300' },
    { name: 'purple', class: 'bg-purple-300' },
    { name: 'brown', class: 'bg-amber-700' },
    { name: 'black', class: 'bg-black' },
    { name: 'blue', class: 'bg-blue-300' },
    { name: 'tan', class: 'bg-amber-200' },
  ];

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  // Handle add to cart
  const handleAddToCart = async (itemCode) => {
    if (!itemCode) return;

    setAddingToCartId(itemCode);
    try {
      await addToCart({ itemCode, qty: 1 }).unwrap();
      await refetchCart();

      // Optional: Show success message
      alert('Item added to cart successfully!');
    } catch (err) {
      console.error('Failed to add to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    } finally {
      setAddingToCartId(null);
    }
  };

  // Handle toggle wishlist
  const handleToggleWishlist = async (itemCode, shouldAdd) => {
    if (!itemCode) return;

    try {
      if (shouldAdd) {
        await addToWishlist(itemCode).unwrap();
      } else {
        await removeFromWishlist(itemCode).unwrap();
      }
    } catch (err) {
      console.error('Failed to toggle wishlist:', err);
      alert('Failed to update wishlist. Please try again.');
    }
  };

  // Fetch all products

  const getAllProducts = async (page, resetFilters = false) => {
    const start = (page - 1) * PAGE_LENGTH;
    try {
      setLoading(true);
      setError(null);



      const response = await fetch('http://192.168.101.182:8002/api/method/webshop.webshop.api.get_product_filter_data', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
        },
        body: JSON.stringify({
          query_args: {
            field_filters: {},
            attribute_filters: {},
            item_group: location?.state?.category || null,
            start: start,
            from_filters: false,
            page_length: PAGE_LENGTH,
          }
        })
      });

      const data = await response.json();

      if (data.message) {
        const result = data.message;
        setProducts(result.items);
        // setFilters(result.filters || {});
        setItemsCount(result.items_count + result.start);
        setHasMore(result.has_more);
        setCurrentPage(page);


        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // if (data?.message?.items) {
      //   setProducts(data.message.items);
      // } else {
      //   setProducts([]);
      // }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // getAllProducts(1);
  }, []);

  const gridClasses = {
    'grid-1': 'grid-cols-1',
    'grid-2': 'grid-cols-1 sm:grid-cols-2',
    'grid-3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    'grid-4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    'grid-5': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
  };


  const wishlistItems = products.filter(p => p.wished).slice(0, 5);


  const handleNextPage = () => {
    if (hasMore && !loading) {
      // getAllProducts(currentPage + 1, false);
      let payload = {
        page: currentPage + 1,
        category: category,
        pageLength: PAGE_LENGTH
      }
      dispatch(fetchData(payload));
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1 && !loading) {
      // getAllProducts(currentPage - 1, false);
      let payload = {
        page: currentPage - 1,
        category: category,
        pageLength: PAGE_LENGTH
      }
      dispatch(fetchData(payload));
      setCurrentPage(currentPage - 1);
    }
  };


  const totalPages = Math.ceil(itemsCount / PAGE_LENGTH);
  const startItem = (currentPage - 1) * PAGE_LENGTH + 1;
  const endItem = Math.min(currentPage * PAGE_LENGTH, itemsCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 lg:shrink-0">
            <div className="bg-white rounded-lg p-6 lg:sticky lg:top-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Filter</h2>
                <button
                  onClick={() => {
                    setSelectedSizes([]);
                    setSelectedColors([]);
                    setPriceRange([20, 145]);
                    setCategory(null)
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  Clear All
                </button>
              </div>

              {/* Size Filter */}
              <FilterSection title="Size">
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-3 px-4 border rounded-lg font-medium transition-all duration-200 ${selectedSizes.includes(size)
                        ? 'bg-black text-white border-black scale-95'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400 hover:scale-105'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </FilterSection>

              {/* Color Filter */}
              <FilterSection title="Color">
                <div className="grid grid-cols-6 gap-3">
                  {colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={`w-10 h-10 rounded-full ${color.class} ${selectedColors.includes(color.name)
                        ? 'ring-2 ring-offset-2 ring-gray-900 scale-110'
                        : 'hover:scale-110'
                        } transition-all duration-200`}
                      aria-label={`Select ${color.name} color`}
                      title={color.name}
                    />
                  ))}
                </div>
              </FilterSection>

              {/* Price Filter */}
              <FilterSection title="Price">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="px-3 py-1 bg-gray-100 rounded">K {priceRange[0]}</span>
                    <span className="px-3 py-1 bg-gray-100 rounded">K {priceRange[1]}</span>
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range"
                      min="20"
                      max="145"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                    />
                  </div>
                </div>
              </FilterSection>

              {/* Brand Product Filter */}
              <FilterSection title="Brand Product">
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer" />
                    <span className="text-sm">Aby <span className="text-gray-400">(4)</span></span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer" />
                    <span className="text-sm">Chanel <span className="text-gray-400">(1)</span></span>
                  </label>
                  <button className="text-sm font-medium hover:underline text-gray-700">Show More</button>
                </div>
              </FilterSection>

              {/* Wish List */}
              {wishlistItems.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">My Wish List</h3>
                    <span className="text-sm text-gray-500">({wishlistItems.length})</span>
                  </div>
                  <div className="space-y-2">
                    {wishlistItems.map((item, index) => (
                      <WishListItem
                        key={item.item_code || index}
                        name={item.item_name}
                        image={`http://192.168.101.182:8002${item.website_image}`}
                        route={item.route}
                      />
                    ))}
                  </div>
                  {products.filter(p => p.wished).length > 5 && (
                    <Link
                      to="/wishlist"
                      className="block text-center mt-3 text-sm text-gray-600 hover:text-gray-900 underline"
                    >
                      View All
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h1 className="text-xl font-semibold text-gray-800">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading products...
                  </span>
                ) : (
                  `${products.length} ${products.length === 1 ? 'Item' : 'Items'}`
                )}
              </h1>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded transition-colors">
                  <span className="text-sm font-medium">Sort by</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex gap-1 ml-auto border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid-2')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid-2' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                    aria-label="Two column view"
                    title="2 Columns"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('grid-3')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid-3' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                    aria-label="Three column view"
                    title="3 Columns"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('grid-4')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid-4' ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}
                    aria-label="Four column view"
                    title="4 Columns"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-gray-900 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Loading products...</p>
                  <p className="text-sm text-gray-400 mt-2">Please wait a moment</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
                <div className="text-red-600 text-5xl mb-4">⚠️</div>
                <p className="text-red-600 font-semibold mb-2 text-lg">{error}</p>
                <p className="text-red-500 text-sm mb-4">Something went wrong while loading the products</p>
                <button
                  onClick={getAllProducts}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium inline-flex items-center gap-2"
                >
                  Retry
                </button>
              </div>
            ) : products.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-gray-300 text-6xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or check back later</p>
              </div>
            ) : (
              <div className={`grid ${gridClasses[viewMode]} gap-6`}>
                {products.map((product, index) => (
                  <ProductCard
                    key={product.name || index}
                    productData={product}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    isAddingToCart={addingToCartId === product.item_code}
                  />
                ))}
              </div>
            )}

            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              {/* Previous Button */}
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1 || loading}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </button>

              {/* Page Info */}
              {/* <div className="text-center">
                    <p className="text-sm text-gray-700">
                      Page <span className="font-semibold">{currentPage}</span> of{' '}
                      <span className="font-semibold">{totalPages}</span>
                    </p>
                  </div> */}

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={!hasMore || loading}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}