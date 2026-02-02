
import React, { useState, useEffect, useRef, Activity } from 'react';
import { ChevronDown, Menu, Search, ShoppingCart, User, X, Loader2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGetCartQuotationQuery } from '../features/cartApi';
import { apiGet } from '../hooks/erpnextApi';
import { set } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearcategory, fetchData, setCategory } from '../features/slices/productsListSlice';
const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [fetchcategories, setFetchCategories] = useState([]);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showPageDropdown, setShowPageDropdown] = useState(false);

  const navigate = useNavigate()

  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searching, setSearching] = useState(false);
  const [show_shop_categories_options, setShowShopCategories_options] = useState(false);

  const [searchCategory, setSearchCategory] = useState('')

  const { data, isLoading, error, refetch } = useGetCartQuotationQuery();

  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const mobileSuggestionsRef = useRef(null);
  const dispatch = useDispatch();


  const storedCategory = useSelector((state) => state.productsList.category);


  // useEffect(() => {
  //   // console.log("Selected category changed:", selectedcatogary);
  //   console.log("Stored category from Redux:", storedCategory);
  // }, [selectedCatogary]);


  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    apiGet("https://mycardpng.com/api/method/custom.api.get_item_group.get_item_group").then((response) => {
      // console.log("Categories fetched:", response.message);
      setFetchCategories(response.message);
    }).catch((error) => {
      console.error("Error fetching categories:", error);
    });
  }, []);

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
      const response = await fetch('https://mycardpng.com/api/method/custom.api.search_items.get_search_suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search_term: term, limit: 8 }),
      });

      const result = await response.json();
      console.log(searchCategory)
      if (searchCategory) {
       //need to work on this
       let filteredCateories =  result.filter(product => product.category == searchCategory)
       setSuggestions(filteredCateories);
        setShowSuggestions(true);
      } else {
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
      state: { productCode: suggestion?.item_code }
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


  //   const Activity = ({ mode, children }) => {
  //   return (
  //     <div 
  //       className={`overflow-hidden transition-all duration-300 ease-in-out ${
  //         mode === "visible" 
  //           ? 'max-h-screen opacity-100 visible' 
  //           : 'max-h-0 opacity-0 invisible'
  //       }`}
  //     >
  //       {children}
  //     </div>
  //   );
  // };

  const handelNavigateToHome = () => {
    navigate('/')
    dispatch(clearcategory());
  }


  const handleChangeCategoryToRedux = async (category) => {
    dispatch(setCategory(category));

    dispatch(fetchData({
      page: 1,
      pageLength: 9,
      category: category,
      filters: {
        field_filters: {},
        attribute_filters: {}
      },
      from_filters: false
    }));

    navigate('/productlist');
  }

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
            <h1 onClick={handelNavigateToHome} className="text-2xl sm:text-3xl font-bold text-gray-900 cursor-pointer">
              Ecomm
            </h1>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl relative">
              <select className="px-4 py-2 border border-r-0 border-gray-300 rounded-l text-sm bg-white focus:outline-none">
                <option>All Categories</option>
                {fetchcategories && fetchcategories.map((category) => (
                  <option onClick={() => setSearchCategory(category.name)} key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
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
                          src={`https://mycardpng.com${suggestion.image}`}
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
                <Heart onClick={() => navigate('/wishlist')} className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {6}
                </span>
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
                          src={`https://mycardpng.com${suggestion.image}`}
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
            {/* Shop by Categories */}
            <div className="relative group">
              <button
                className="flex items-center gap-2 py-4 px-3 border-b-2 border-gray-600 text-gray-900 hover:bg-black hover:text-white transition-all duration-200"
                onClick={() => setShowShopCategories_options(!show_shop_categories_options)}
              >
                <Menu className="w-5 h-5" />
                SHOP BY CATEGORIES
              </button>

              {/* Premium Dropdown Menu */}
              <Activity mode={show_shop_categories_options ? "visible" : "hidden"}>
                {/* <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"> */}
                <div className="absolute left-0 top-full pt-2 transition-all duration-300 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden min-w-max">
                    <div className="grid grid-cols-2 gap-6 p-6">
                      <div>
                        {/* <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">Shop Categories</h3> */}
                        <ul className="space-y-2">
                          {fetchcategories && fetchcategories.map((category) => (
                            <li key={category.name}>
                              {category.name !== storedCategory ? (<button
                                onClick={() => {
                                  // show_shop_categories_options(false);
                                  // console.log('Category option:', show_shop_categories_options);
                                  // setSelectedcatogary(category.name);
                                  console.log('Stored category from Redux:', storedCategory);
                                  navigate('/productlist', {
                                    state: { category: category.name }
                                  });
                                  setShowShopCategories_options(p => !p);
                                  // console.log('Navigating to category:', category.name);
                                }} className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">
                                {category.name}
                              </button>) : (
                                <button
                                  onClick={() => {
                                    // show_shop_categories_options(false);
                                    console.log('Category option:', show_shop_categories_options);


                                    // navigate('/productlist', {
                                    //   state: { category: category.name }
                                    // });
                                    setShowShopCategories_options(p => !p);

                                    // console.log('Navigating to category:', category.name);
                                  }} className="text-blue-600 pl-1 transition-all duration-200 text-sm">
                                  {category.name}
                                </button>)}
                            </li>
                          ))}
                          {/* <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">New Arrivals</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Best Sellers</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Featured</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">On Sale</a></li> */}
                        </ul>
                      </div>
                      {/* <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">Collections</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Summer</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Winter</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Limited Edition</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Clearance</a></li>
                      </ul>
                    </div> */}
                    </div>
                    {/* <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                      <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700">View All Shop →</a>
                    </div> */}
                  </div>
                </div>
              </Activity>
            </div>

            {/* Shop Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setShowShopCategories_options(false)}
                className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-200">
                SHOP
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Premium Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden min-w-max">
                  <div className="grid grid-cols-2 gap-6 p-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">Shop Categories</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">New Arrivals</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Best Sellers</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Featured</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">On Sale</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">Collections</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Summer</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Winter</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Limited Edition</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Clearance</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                    <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700">View All Shop →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                // onpress={() => {
                //   setShowProductsDropdown(p => !p);
                // }}
                onMouseEnter={() => {
                  // setShowShopDropdown(true);
                  // setShowProductsDropdown(p => !p);
                  // setShowProductsDropdown(true);
                  setShowShopCategories_options(false);
                }}
                // onMouseLeave={()=>{
                //   setShowProductsDropdown(false);
                // }}


                className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-200">
                PRODUCTS
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Premium Dropdown Menu */}
              {/* <Activity mode={showProductsDropdown ? "visible" : "hidden"}> */}
                {/* <div className="absolute left-0 top-full pt-2 transition-all duration-300 z-50"> */}

                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-active:opacity-100 group-active:visible transition-all duration-300 z-50">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden min-w-max">
                    <div className="grid grid-cols-3 gap-6 p-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">Electronics</h3>
                        <ul className="space-y-2">
                          <li
                          className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm"
                          onClick={() => {
                            handleChangeCategoryToRedux("Laptop")
                          }}
                           >
                           Laptop
                          </li>
                          <li
                          className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm"
                          onClick={() => {
                            handleChangeCategoryToRedux("Mobiles")
                          }}
                           >
                           Mobiles
                          </li>
                          <li
                          className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm"
                          onClick={() => {
                            handleChangeCategoryToRedux("Tablet")
                          }}
                           >
                           Tablet
                          </li>
                          
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">Fashion</h3>
                        <ul className="space-y-2">
                          <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Men</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Women</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Kids</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wider">Home & Living</h3>
                        <ul className="space-y-2">
                          <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Furniture</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Decor</a></li>
                          <li><a href="#" className="text-gray-700 hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm">Kitchen</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                      <a href="#" className="text-blue-600 font-semibold text-sm hover:text-blue-700">Browse All Products →</a>
                    </div>
                  </div>
                </div>
              {/* </Activity> */}
            </div>

            {/* Page Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setShowShopCategories_options(false)}

                className="flex items-center gap-1 py-4 text-gray-700 hover:text-blue-600 group-hover:text-blue-600 transition-colors duration-200">
                PAGE
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Premium Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden min-w-max">
                  <div className="p-4 space-y-1">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 text-sm">About Us</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 text-sm">Contact Us</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 text-sm">FAQ</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 text-sm">Privacy Policy</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200 text-sm">Terms & Conditions</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div >

      {/* Mobile Menu with Premium Dropdowns */}
      {/* Mobile Menu with Improved Dropdowns */}
      {
        mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-4 py-2">
              <nav className="flex flex-col text-sm font-medium">

                {/* Shop by Categories */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between py-3 px-3 text-gray-900 hover:bg-gray-50 rounded transition-colors"
                    onClick={() => setShowShopCategories_options(!show_shop_categories_options)}
                  >
                    <span className="flex items-center gap-2">
                      <Menu className="w-5 h-5" />
                      SHOP BY CATEGORIES
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${show_shop_categories_options ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Animated Shop Categories Dropdown - SCROLLABLE */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${show_shop_categories_options ? 'max-h-64' : 'max-h-0'}`}
                  >
                    <div className="bg-gray-50 py-2 px-4 space-y-1 max-h-60 overflow-y-auto">
                      {fetchcategories && fetchcategories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => {
                            navigate('/productlist', {
                              state: { category: category.name }
                            });
                            setShowShopCategories_options(false);
                            setMobileMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded text-sm transition-all duration-200 ${category.name === storedCategory
                            ? 'text-blue-600 font-semibold bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Shop Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between py-3 px-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    onClick={() => setShowShopDropdown(!showShopDropdown)}
                  >
                    <span>SHOP</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${showShopDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Animated Shop Dropdown - SCROLLABLE */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${showShopDropdown ? 'max-h-64' : 'max-h-0'}`}
                  >
                    <div className="bg-gray-50 py-2 px-4 space-y-1 max-h-60 overflow-y-auto">
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        New Arrivals
                      </button>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        Best Sellers
                      </button>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        Featured
                      </button>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        On Sale
                      </button>
                    </div>
                  </div>
                </div>

                {/* Products Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between py-3 px-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                  >
                    <span>PRODUCTS</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${showProductsDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Animated Products Dropdown - SCROLLABLE */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${showProductsDropdown ? 'max-h-64' : 'max-h-0'}`}
                  >
                    <div className="bg-gray-50 py-2 px-4 space-y-1 max-h-60 overflow-y-auto">
                      {/* Electronics */}
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 text-xs uppercase mb-2 px-3">Electronics</h4>
                        <div className="space-y-1">
                          <button
                          onClick={() => {
                            navigate('/productlist', {
                              state: { category: "Laptop" }
                            });
                          }}
                           className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Laptops
                          </button>
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Phones
                          </button>
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Tablets
                          </button>
                        </div>
                      </div>

                      {/* Fashion */}
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 text-xs uppercase mb-2 px-3">Fashion</h4>
                        <div className="space-y-1">
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Men
                          </button>
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Women
                          </button>
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Kids
                          </button>
                        </div>
                      </div>

                      {/* Home & Living */}
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xs uppercase mb-2 px-3">Home & Living</h4>
                        <div className="space-y-1">
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Furniture
                          </button>
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Decor
                          </button>
                          <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            Kitchen
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Page Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between py-3 px-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    onClick={() => setShowPageDropdown(!showPageDropdown)}
                  >
                    <span>PAGE</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${showPageDropdown ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Animated Page Dropdown - SCROLLABLE */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${showPageDropdown ? 'max-h-64' : 'max-h-0'}`}
                  >
                    <div className="bg-gray-50 py-2 px-4 space-y-1 max-h-60 overflow-y-auto">
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        About Us
                      </button>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        Contact Us
                      </button>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        FAQ
                      </button>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        Privacy Policy
                      </button>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                        Terms & Conditions
                      </button>
                    </div>
                  </div>
                </div>

                {/* Account Button */}
                <button className="w-full flex items-center gap-2 py-3 px-3 text-gray-700 hover:bg-gray-50 rounded transition-colors border-b border-gray-100">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
              </nav>
            </div>
          </div>
        )
      }



    </div >
  );
};

export default Header;