
// import { ChevronDown, Menu, Search, ShoppingCart, User, X } from 'lucide-react'
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { selectCartTotals } from '../features/slices/cartSlice'
// import { useGetCartQuotationQuery } from '../features/cartApi'

// const Header = () => {
//   const [cartCount, setCartCount] = useState(0)
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [searchOpen, setSearchOpen] = useState(false)
//   const { data, isLoading, error, refetch } = useGetCartQuotationQuery();

  

//   const navigate = useNavigate();
  
//   return (
//     <div>
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-4">
//             {/* Mobile Menu Button */}
//             <button 
//               className="lg:hidden text-gray-700"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
            
//             {/* Logo */}
//             <h1 onClick={() => navigate('/')} className="text-2xl sm:text-3xl font-bold text-gray-900 cursor-pointer">Ecomm</h1>
            
//             {/* Desktop Search Bar */}
//             <div className="hidden lg:flex flex-1 max-w-2xl">
//               <select className="px-4 py-2 border border-r-0 border-gray-300 rounded-l text-sm bg-white focus:outline-none">
//                 <option>All Categories</option>
//               </select>
//               <div className="relative flex-1">
//                 <input 
//                   type="text" 
//                   placeholder="Search product" 
//                   className="w-full px-4 py-2 border border-gray-300 text-sm focus:outline-none"
//                 />
//               </div>
//               <button className="px-6 bg-black text-white rounded-r hover:bg-gray-800">
//                 <Search className="w-5 h-5" />
//               </button>
//             </div>
            
//             {/* Right Icons */}
//             <div className="flex items-center gap-3 sm:gap-6">
//               <button 
//                 className="lg:hidden text-gray-700 hover:text-blue-600"
//                 onClick={() => setSearchOpen(!searchOpen)}
//               >
//                 <Search className="w-6 h-6" />
//               </button>
//               <button className="hidden sm:block text-gray-700 hover:text-blue-600">
//                 <User className="w-6 h-6" />
//               </button>
//               <button className="relative text-gray-700 hover:text-blue-600 cursor-pointer">
//                 <ShoppingCart onClick={() => navigate('/checkout/cart')} className="w-6 h-6" />
//                 {/* {cartCount > 0 && ( */}
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
//                     {data?.items.length}
//                   </span>
//                 {/* )} */}
//               </button>
//             </div>
//           </div>
          
//           {/* Mobile Search Bar */}
//           {searchOpen && (
//             <div className="lg:hidden mt-3 flex gap-2">
//               <select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none">
//                 <option>All</option>
//               </select>
//               <div className="relative flex-1">
//                 <input 
//                   type="text" 
//                   placeholder="Search product" 
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none"
//                 />
//               </div>
//               <button className="px-4 bg-black text-white rounded hover:bg-gray-800">
//                 <Search className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Desktop Navigation Bar */}
//       <div className="hidden lg:block bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6">
//           <nav className="flex items-center gap-8 text-sm font-medium">
//             <button className="flex items-center gap-2 py-4 px-3 border-b-2 border-gray-600 text-gray-900 hover:bg-black hover:text-white">
//               <Menu className="w-5 h-5" />
//               SHOP BY CATEGORIES
//             </button>
            
//             <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
//               SHOP
//               <ChevronDown className="w-4 h-4" />
//             </button>
//             <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
//               PRODUCTS
//               <ChevronDown className="w-4 h-4" />
//             </button>
//             <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
//               PAGE
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           </nav>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-white border-b border-gray-200">
//           <div className="px-4 py-2">
//             <nav className="flex flex-col text-sm font-medium">
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-900">
//                 <span className="flex items-center gap-2">
//                   <Menu className="w-5 h-5" />
//                   SHOP BY CATEGORIES
//                 </span>
//               </button>
              
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
//                 <span>SHOP</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
//                 <span>PRODUCTS</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
//                 <span>PAGE</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <button className="flex items-center gap-2 py-3 text-gray-700">
//                 <User className="w-5 h-5" />
//                 <span>Account</span>
//               </button>
//             </nav>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Header


// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronDown, Menu, Search, ShoppingCart, User, X, Loader2 } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { selectCartTotals } from '../features/slices/cartSlice';
// import { useGetCartQuotationQuery } from '../features/cartApi';

// const Header = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const { data, isLoading, error, refetch } = useGetCartQuotationQuery();

//   // Search state
//   const [searchTerm, setSearchTerm] = useState('');
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [searching, setSearching] = useState(false);
  
//   const navigate = useNavigate();
//   const searchInputRef = useRef(null);
//   const mobileSearchInputRef = useRef(null);
//   const suggestionsRef = useRef(null);
//   const mobileSuggestionsRef = useRef(null);

//   // Debounce search term
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearchTerm(searchTerm);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   // Fetch suggestions when debounced term changes
//   useEffect(() => {
//     if (debouncedSearchTerm && debouncedSearchTerm.length >= 2) {
//       fetchSuggestions(debouncedSearchTerm);
//     } else {
//       setSuggestions([]);
//       setShowSuggestions(false);
//     }
//   }, [debouncedSearchTerm]);

//   const fetchSuggestions = async (term) => {
//     setSearching(true);
//     try {
//       const response = await fetch('http://192.168.101.182:8002/api/method/custom.api.search_items.get_search_suggestions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ search_term: term, limit: 8 }),
//       });

//       const result = await response.json();
//       if (result.message) {
//         setSuggestions(result.message);
//         setShowSuggestions(true);
//       }
//     } catch (err) {
//       console.error('Error fetching suggestions:', err);
//     } finally {
//       setSearching(false);
//     }
//   };

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       setShowSuggestions(false);
//       setSearchOpen(false);
//       navigate(`/productlist?search=${encodeURIComponent(searchTerm)}`);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchTerm(suggestion.label);
//     setShowSuggestions(false);
//     setSearchOpen(false);
    // navigate(`/product/${encodeURIComponent(suggestion.label)}`, {
    //   state: {productCode: suggestion?.item_code }
    // })
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   const handleClearSearch = () => {
//     setSearchTerm('');
//     setDebouncedSearchTerm('');
//     setSuggestions([]);
//     setShowSuggestions(false);
//   };

//   // Close suggestions when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       console.log(event)
//       if (
//         suggestionsRef.current &&
//         !suggestionsRef.current.contains(event.target) &&
//         searchInputRef.current &&
//         !searchInputRef.current.contains(event.target) &&
//         mobileSuggestionsRef.current &&
//         !mobileSuggestionsRef.current.contains(event.target) &&
//         mobileSearchInputRef.current &&
//         !mobileSearchInputRef.current.contains(event.target)
//       ) {
//         setShowSuggestions(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div>
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
//           <div className="flex items-center justify-between gap-4">
//             {/* Mobile Menu Button */}
//             <button 
//               className="lg:hidden text-gray-700"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
            
//             {/* Logo */}
//             <h1 onClick={() => navigate('/')} className="text-2xl sm:text-3xl font-bold text-gray-900 cursor-pointer">
//               Ecomm
//             </h1>
            
//             {/* Desktop Search Bar */}
//             <div className="hidden lg:flex flex-1 max-w-2xl relative">
//               <select className="px-4 py-2 border border-r-0 border-gray-300 rounded-l text-sm bg-white focus:outline-none">
//                 <option>All Categories</option>
//               </select>
//               <div className="relative flex-1">
//                 <input
//                   ref={searchInputRef}
//                   type="text"
//                   placeholder="Search product"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
//                   className="w-full px-4 py-2 border border-gray-300 text-sm focus:outline-none"
//                 />
//                 {searching && (
//                   <Loader2 className="absolute right-3 top-2.5 h-5 w-5 animate-spin text-gray-400" />
//                 )}
//               </div>
//               <button 
//                 onClick={handleSearch}
//                 className="px-6 bg-black text-white rounded-r hover:bg-gray-800"
//               >
//                 <Search className="w-5 h-5" />
//               </button>

//               {/* Desktop Autocomplete Suggestions */}
//               {showSuggestions && suggestions.length > 0 && (
//                 <div
//                   ref={suggestionsRef}
//                   className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50"
//                   style={{ left: '120px' }}
//                 >
//                   {suggestions.map((suggestion, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleSuggestionClick(suggestion)}
//                       className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0"
//                     >
//                       {suggestion.image ? (
//                         <img
//                           src={`http://192.168.101.182:8002${suggestion.image}`}
//                           alt={suggestion.label}
//                           className="w-10 h-10 object-cover rounded"
//                         />
//                       ) : (
//                         <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
//                           <Search className="h-5 w-5 text-gray-400" />
//                         </div>
//                       )}
//                       <div className="flex-1">
//                         <p className="font-medium text-gray-900 text-sm">{suggestion.label}</p>
//                         {suggestion.category && (
//                           <p className="text-xs text-gray-500">{suggestion.category}</p>
//                         )}
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             {/* Right Icons */}
//             <div className="flex items-center gap-3 sm:gap-6">
//               <button 
//                 className="lg:hidden text-gray-700 hover:text-blue-600"
//                 onClick={() => setSearchOpen(!searchOpen)}
//               >
//                 <Search className="w-6 h-6" />
//               </button>
//               <button className="hidden sm:block text-gray-700 hover:text-blue-600">
//                 <User className="w-6 h-6" />
//               </button>
//               <button className="relative text-gray-700 hover:text-blue-600 cursor-pointer">
//                 <ShoppingCart onClick={() => navigate('/checkout/cart')} className="w-6 h-6" />
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
//                   {data?.items?.length || 0}
//                 </span>
//               </button>
//             </div>
//           </div>
          
//           {/* Mobile Search Bar */}
//           {searchOpen && (
//             <div className="lg:hidden mt-3 relative">
//               <div className="flex gap-2">
//                 <select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none">
//                   <option>All</option>
//                 </select>
//                 <div className="relative flex-1">
//                   <input
//                     ref={mobileSearchInputRef}
//                     type="text"
//                     placeholder="Search product"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                     onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none"
//                   />
//                   {searching && (
//                     <Loader2 className="absolute right-3 top-2.5 h-5 w-5 animate-spin text-gray-400" />
//                   )}
//                 </div>
//                 <button 
//                   onClick={handleSearch}
//                   className="px-4 bg-black text-white rounded hover:bg-gray-800"
//                 >
//                   <Search className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Mobile Autocomplete Suggestions */}
//               {showSuggestions && suggestions.length > 0 && (
//                 <div
//                   ref={mobileSuggestionsRef}
//                   className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50"
//                 >
//                   {suggestions.map((suggestion, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleSuggestionClick(suggestion)}
//                       className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 border-b border-gray-100 last:border-b-0"
//                     >
//                       {suggestion.image ? (
//                         <img
//                           src={`http://192.168.101.182:8002${suggestion.image}`}
//                           alt={suggestion.label}
//                           className="w-8 h-8 object-cover rounded"
//                         />
//                       ) : (
//                         <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
//                           <Search className="h-4 w-4 text-gray-400" />
//                         </div>
//                       )}
//                       <div className="flex-1">
//                         <p className="font-medium text-gray-900 text-sm">{suggestion.label}</p>
//                         {suggestion.category && (
//                           <p className="text-xs text-gray-500">{suggestion.category}</p>
//                         )}
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Desktop Navigation Bar */}
//       <div className="hidden lg:block bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6">
//           <nav className="flex items-center gap-8 text-sm font-medium">
//             <button className="flex items-center gap-2 py-4 px-3 border-b-2 border-gray-600 text-gray-900 hover:bg-black hover:text-white">
//               <Menu className="w-5 h-5" />
//               SHOP BY CATEGORIES
//             </button>
            
//             <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
//               SHOP
//               <ChevronDown className="w-4 h-4" />
//             </button>
//             <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
//               PRODUCTS
//               <ChevronDown className="w-4 h-4" />
//             </button>
//             <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
//               PAGE
//               <ChevronDown className="w-4 h-4" />
//             </button>
//           </nav>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-white border-b border-gray-200">
//           <div className="px-4 py-2">
//             <nav className="flex flex-col text-sm font-medium">
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-900">
//                 <span className="flex items-center gap-2">
//                   <Menu className="w-5 h-5" />
//                   SHOP BY CATEGORIES
//                 </span>
//               </button>
              
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
//                 <span>SHOP</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
//                 <span>PRODUCTS</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
//                 <span>PAGE</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <button className="flex items-center gap-2 py-3 text-gray-700">
//                 <User className="w-5 h-5" />
//                 <span>Account</span>
//               </button>
//             </nav>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;













import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, Search, ShoppingCart, User, X, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGetCartQuotationQuery } from '../features/cartApi';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate()

  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searching, setSearching] = useState(false);

  const { data, isLoading, error, refetch } = useGetCartQuotationQuery();
  
  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const mobileSuggestionsRef = useRef(null);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch suggestions when debounced term changes
  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length >= 2) {
      fetchSuggestions(debouncedSearchTerm);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [debouncedSearchTerm]);

  const fetchSuggestions = async (term) => {
    setSearching(true);
    try {
      const response = await fetch('http://192.168.101.182:8002/api/method/custom.api.search_items.get_search_suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search_term: term, limit: 8 }),
      });

      const result = await response.json();
      if (result.message) {
        setSuggestions(result.message);
        setShowSuggestions(true);
      }
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    } finally {
      setSearching(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setShowSuggestions(false);
      setSearchOpen(false);
      navigate(`/productlist?search=${encodeURIComponent(searchTerm)}`);
      console.log('Searching for:', searchTerm);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.label);
    setShowSuggestions(false);
    setSearchOpen(false);
    navigate(`/product/${encodeURIComponent(suggestion.label)}`, {
      state: {productCode: suggestion?.item_code }
    })
    console.log('Clicked suggestion:', suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is inside any of the search-related elements
      const clickedInsideSuggestions = 
        (suggestionsRef.current && suggestionsRef.current.contains(event.target)) ||
        (mobileSuggestionsRef.current && mobileSuggestionsRef.current.contains(event.target));
      
      const clickedInsideInput = 
        (searchInputRef.current && searchInputRef.current.contains(event.target)) ||
        (mobileSearchInputRef.current && mobileSearchInputRef.current.contains(event.target));

      // Only close if clicked outside both suggestions and inputs
      if (!clickedInsideSuggestions && !clickedInsideInput) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {/* Logo */}
            <h1 onClick={() => navigate('/')} className="text-2xl sm:text-3xl font-bold text-gray-900 cursor-pointer">
              Ecomm
            </h1>
            
            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl relative">
              <select className="px-4 py-2 border border-r-0 border-gray-300 rounded-l text-sm bg-white focus:outline-none">
                <option>All Categories</option>
              </select>
              <div className="relative flex-1">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search product"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  className="w-full px-4 py-2 border border-gray-300 text-sm focus:outline-none"
                />
                {searching && (
                  <Loader2 className="absolute right-3 top-2.5 h-5 w-5 animate-spin text-gray-400" />
                )}
              </div>
              <button 
                onClick={handleSearch}
                className="px-6 bg-black text-white rounded-r hover:bg-gray-800"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Desktop Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div
                  ref={suggestionsRef}
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50"
                  style={{ left: '120px' }}
                >
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                    >
                      {suggestion.image ? (
                        <img
                          src={`http://192.168.101.182:8002${suggestion.image}`}
                          alt={suggestion.label}
                          className="w-10 h-10 object-cover rounded"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                          <Search className="h-5 w-5 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{suggestion.label}</p>
                        {suggestion.category && (
                          <p className="text-xs text-gray-500">{suggestion.category}</p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Right Icons */}
            <div className="flex items-center gap-3 sm:gap-6">
              <button 
                className="lg:hidden text-gray-700 hover:text-blue-600"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-6 h-6" />
              </button>
              <button className="hidden sm:block text-gray-700 hover:text-blue-600">
                <User className="w-6 h-6" />
              </button>
              <button className="relative text-gray-700 hover:text-blue-600 cursor-pointer">
                <ShoppingCart onClick={() => navigate('/checkout/cart')} className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {data?.items?.length || 0}
                </span>
              </button>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          {searchOpen && (
            <div className="lg:hidden mt-3 relative">
              <div className="flex gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none">
                  <option>All</option>
                </select>
                <div className="relative flex-1">
                  <input
                    ref={mobileSearchInputRef}
                    type="text"
                    placeholder="Search product"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none"
                  />
                  {searching && (
                    <Loader2 className="absolute right-3 top-2.5 h-5 w-5 animate-spin text-gray-400" />
                  )}
                </div>
                <button 
                  onClick={handleSearch}
                  className="px-4 bg-black text-white rounded hover:bg-gray-800"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div
                  ref={mobileSuggestionsRef}
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50"
                >
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 border-b border-gray-100 last:border-b-0"
                    >
                      {suggestion.image ? (
                        <img
                          src={`http://192.168.101.182:8002${suggestion.image}`}
                          alt={suggestion.label}
                          className="w-8 h-8 object-cover rounded"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                          <Search className="h-4 w-4 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{suggestion.label}</p>
                        {suggestion.category && (
                          <p className="text-xs text-gray-500">{suggestion.category}</p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Desktop Navigation Bar */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-8 text-sm font-medium">
            <button className="flex items-center gap-2 py-4 px-3 border-b-2 border-gray-600 text-gray-900 hover:bg-black hover:text-white">
              <Menu className="w-5 h-5" />
              SHOP BY CATEGORIES
            </button>
            
            <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
              SHOP
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
              PRODUCTS
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600">
              PAGE
              <ChevronDown className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-2">
            <nav className="flex flex-col text-sm font-medium">
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-900">
                <span className="flex items-center gap-2">
                  <Menu className="w-5 h-5" />
                  SHOP BY CATEGORIES
                </span>
              </button>
              
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
                <span>SHOP</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
                <span>PRODUCTS</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700">
                <span>PAGE</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 py-3 text-gray-700">
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;