
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
import { apiPost } from '../hooks/erpnextApi';


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
            src={`https://mycardpng.com${productData?.website_image}`}
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
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedItemGrop, setSelectedItemGroup] = useState([]);

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([])

  const [brandList, setBrandList] = useState([]);


  const apidata = useSelector((state) => state.productsList);

  //filters state
  const [appliedFilters, setAppliedFilters] = useState({
  field_filters: {},
  attribute_filters: {},
});



  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);


  const PAGE_LENGTH = 9;

  const location = useLocation();

 
  console.log("location", location)

  const getAllProducts = async (page, resetFilters = false) => {
    const start = (page - 1) * PAGE_LENGTH;
    try {
      setLoading(true);
      setError(null);



      const response = await fetch('https://mycardpng.com/api/method/webshop.webshop.api.get_product_filter_data', {
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


  const fetchBrandData = async() => {
    try {
      const res = await apiPost('https://mycardpng.com/api/method/custom.get_doc_value.get_doc_list', {
              doctype: "Brand",
              fields: "name"
            });

        setBrandList(res.message)
        // console.log("Response", res.message)
    } catch (error) {
      
    }
  }

   const fetchAttributeData = async() => {
    try {
      const res = await apiPost('https://mycardpng.com/api/method/custom.get_doc_value.get_item_attribute', {
              attribute_name: "Colour"
            });

      const res1 = await apiPost('https://mycardpng.com/api/method/custom.get_doc_value.get_item_attribute', {
              attribute_name: "Size"
            });

        setColors(res.message)
        setSizes(res1.message)
        // console.log("Response", res.message)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    // getAllProducts(1)

    
      

    fetchBrandData()
    fetchAttributeData()
  }, [])
 

  //for size
  useEffect(() => {
  if(selectedSizes.length > 0) {
    setAppliedFilters(prev => ({
    ...prev,
    attribute_filters: {
      ...prev.attribute_filters,
      Size: selectedSizes
    }
  }));
  }
}, [selectedSizes]);


//for color
useEffect(() => {
  if(selectedColors.length > 0) {
    setAppliedFilters(prev => ({
    ...prev,
    attribute_filters: {
      ...prev.attribute_filters,
      Color: selectedColors
    }
  }));
  }
}, [selectedColors]);





  useEffect(() => {
    
    // if (location?.state?.category) {
    //   let payload = {
    //     page: 1,
    //     category: location.state.category,
    //     pageLength: PAGE_LENGTH,
    //      filters: appliedFilters,
    //      from_filters: true
    //   }
    //   dispatch(fetchData(payload));
    //   setCategory(location.state.category)
    // }

    if(Object.keys(appliedFilters.attribute_filters).length !== 0 || Object.keys(appliedFilters.field_filters).length !== 0 ) {
        let payload = {
        page: 1,
        // category: location.state.category,
        pageLength: PAGE_LENGTH,
         filters: appliedFilters,
         from_filters: true
      }
      dispatch(fetchData(payload));
  }

  }, [appliedFilters]);

  

  

  

 

  useEffect(() => {
    if (!apidata) return;

    setLoading(apidata.state == "loading");

    setProducts(apidata.data.items || []);
    setItemsCount(apidata.data.items_count + apidata.data.start || 0);
    setHasMore(apidata.data.has_more || false);
 
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [apidata,currentPage]);





  const resetAllFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedItemGroup([]);
    setPriceRange([20, 145]);

    setAppliedFilters({
      field_filters: {},
      attribute_filters: {},
    });

    setCurrentPage(1);

    // Fetch products without filters
    dispatch(fetchData({
      page: 1,
      category: null,
      pageLength: PAGE_LENGTH,
    }));
  };



  // RTK Query hooks
  const [addToCart] = useAddToCartMutation();
  const [addToWishlist] = useAddToWishlistMutation();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();
  const { refetch: refetchCart } = useGetCartQuotationQuery();

 
 



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


useEffect(() => {
 
  if(selectedBrands.length > 0) {
    setAppliedFilters(prev => ({
    ...prev,
    field_filters: {
      ...prev.field_filters,
      brand: selectedBrands
    }
  }));
  }
}, [selectedBrands]);






useEffect(() => {
 
  if(selectedItemGrop.length > 0) {
    setAppliedFilters(prev => ({
    ...prev,
    field_filters: {
      ...prev.field_filters,
      item_group: selectedItemGrop
    }
  }));
  }
}, [selectedItemGrop]);



 
  const handleFilterChange = (filterType, filterName, value) => {

    
    setAppliedFilters(prev => {
      const currentValues = prev[filterType][filterName] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];

      // Remove the filter if no values are selected
      const newFilters = { ...prev[filterType] };
      if (updatedValues.length === 0) {
        delete newFilters[filterName];
      } else {
        newFilters[filterName] = updatedValues;
      }

      return {
        ...prev,
        [filterType]: newFilters
      };
    });
  };


// useEffect(() => {
//   dispatch(fetchData({
//     page: 1,
//     pageLength: PAGE_LENGTH,
//     category,
//     filters: appliedFilters,
//     from_filters: true
//   }));
// }, [appliedFilters]);





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
                  onClick={resetAllFilters}
                  className="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {/* Item Group Filter */}
              <FilterSection title="Item Group">
                <div className="space-y-3">

                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer"
                      checked={appliedFilters.field_filters["item_group"]?.includes("Products") || false}
                      // onChange={() => handleFilterChange('field_filters', "item_group", "Products")}
                      onChange={(e) => {
                        const checked = e.target.checked

                       

                        if (!checked) {
                          
                          resetAllFilters();
                        } else {
                          
                          handleFilterChange('field_filters', 'item_group', 'Products');
                        }
                      }}
                    />
                    <span className="text-sm">
                      Products
                    </span>
                  </label>
                </div>
              </FilterSection>

              {/* Brand Filter */}
              <FilterSection title="BRAND">
                {
                  brandList && brandList.map((brand) => (
                    <div key={brand.name} className="space-y-3">

                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer"
                      checked={appliedFilters.field_filters["brand"]?.includes(brand.name) || false}
                      // onChange={() => handleFilterChange('field_filters', "brand", brand.name)}
                       onChange={(e) => {
                        const checked = e.target.checked

                       

                        if (!checked) {
                          
                          resetAllFilters();
                        } else {
                          
                          handleFilterChange('field_filters', 'brand', brand.name);
                        }
                      }}
                    />
                    <span className="text-sm">
                      {brand.name}
                    </span>
                  </label>
                </div>
                  ))
                }
              </FilterSection>


              {/* Color Filter */}
              <FilterSection title="Color">
                <div className="space-y-3">
                  
                  {
                  colors && colors.map((color) => (
                    <div key={color.name} className="space-y-3">

                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer"
                      checked={appliedFilters.field_filters["color"]?.includes(color.attribute_value) || false}
                      // onChange={() => handleFilterChange('attribute_filters', "Colour", color.attribute_value)}
                       onChange={(e) => {
                        const checked = e.target.checked

                       

                        if (!checked) {
                          
                          resetAllFilters();
                        } else {
                          
                          handleFilterChange('attribute_filters', 'Colour', color.attribute_value);
                        }
                      }}
                    />
                    <span className="text-sm">
                      {color.attribute_value}
                    </span>
                  </label>
                </div>
                  ))
                }
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

              {/* Size Filter */}
              <FilterSection title="BRAND">
                {
                  sizes && sizes.map((size) => (
                    <div key={size.name} className="space-y-3">

                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-gray-900 cursor-pointer"
                      checked={appliedFilters.field_filters["size"]?.includes(size.attribute_value) || false}
                      onChange={() => handleFilterChange('attribute_filters', "Size", size.attribute_value)}
                    />
                    <span className="text-sm">
                      {size.attribute_value}
                    </span>
                  </label>
                </div>
                  ))
                }
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
                        image={`https://mycardpng.com${item.website_image}`}
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