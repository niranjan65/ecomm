// import React, { useEffect, useState } from 'react';
// import { ShoppingCart, Heart, User, Search, Menu, Facebook, Youtube, Twitter, Instagram, Linkedin, MapPin, Package,} from 'lucide-react';
// import axios from 'axios';
// import { useGetCartQuotationQuery, useRemoveFromCartMutation, useUpdateCartItemMutation } from '../features/cartApi';
// import { setCartData } from '../features/slices/cartSlice';
// import { useDispatch } from 'react-redux';


// export default function CartPage() {
//   const dispatch = useDispatch();
//   const [cartItems, setCartItems] = useState([]);

//     const [cartCount, setCartCount] = useState(0);
//     const [likedItems, setLikedItems] = useState([]);

//     const { data, isLoading, error, refetch } = useGetCartQuotationQuery();
//     const [removeFromCart] = useRemoveFromCartMutation();
//   const [updateCartItem] = useUpdateCartItemMutation();


//   useEffect(() => {
//     if (data) {
//       dispatch(setCartData(data));
//     }
//   }, [data, dispatch]);

  

//   const getCartItems = async () => {
//     try {

//       console.log("called")
//       const { data } = await axios.get('https://mycardpng.com/api/method/webshop.webshop.shopping_cart.cart.get_cart_quotation',{
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//         }
//       })

//       console.log("data", data?.message.doc?.items)
//       setCartItems(data?.message.doc?.items)

//     } catch (error) {

//     }
//   }

  

//   useEffect(() => {
//     getCartItems()
//   }, [])
  
  

//   const shippingCost = 10.00;
  
//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const orderTotal = subtotal + shippingCost;

//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity > 0) {
//       setCartItems(items =>
//         items.map(item =>
//           item.id === id ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     }
//   };

//   const handleRemoveItem = async(item_code) => {
//     // setCartItems(items => items.filter(item => item.id !== id));

//     await removeFromCart(item_code).unwrap();
//       refetch();

//     // try {
//     //         console.log("add to cart called")
//     //         const { data } = await axios.post('https://mycardpng.com/api/method/webshop.webshop.shopping_cart.cart.update_cart', {
//     //             item_code: item_code,
//     //             qty: quantity
//     //         }, {
//     //             headers: {
//     //                 "Content-Type": "application/json",
//     //                 "Accept": "application/json",
//     //                 'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//     //             }
//     //         }
//     //         )

//     //         console.log("add to cart called", data)

//     //     } catch (error) {

//     //     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
      

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold mb-8">SHOPPING CART</h1>

//         <div className="flex gap-8">
//           {/* Cart Items */}
//           <div className="flex-1">
//             <div className="bg-white rounded shadow">
//               {/* Table Header */}
//               <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-600">
//                 <div className="col-span-5">Item</div>
//                 <div className="col-span-2 text-right">Price</div>
//                 <div className="col-span-2 text-center">Qty</div>
//                 <div className="col-span-3 text-right">Subtotal</div>
//               </div>

//               {/* Cart Items */}
//               {data?.items.map(item => (
//                 <div key={item.idx} className="border-b border-gray-200 p-4">
//                   <div className="grid grid-cols-12 gap-4 items-center">
//                     <div className="col-span-5 flex items-center gap-4">
//                       <img src={`https://mycardpng.com${item?.image}`} alt={item.name} className="w-20 h-20 object-cover rounded" />
//                       <span className="font-medium">{item.item_name}</span>
//                     </div>
//                     <div className="col-span-2 text-right text-gray-900 font-medium">
//                       PGK{item.base_price_list_rate.toFixed(2)}
//                     </div>
//                     <div className="col-span-2 flex justify-center">
//                       <input
//                         type="number"
//                         min="1"
//                         value={item.qty}
//                         onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
//                         className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
//                       />
//                     </div>
//                     <div className="col-span-3 text-right text-gray-900 font-medium">
//                       PGK{(item.base_price_list_rate * item.qty).toFixed(2)}
//                     </div>
//                   </div>

//                   <div className="flex gap-2 mt-4">
//                     <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
//                       Edit
//                     </button>
//                     <button 
//                       onClick={() => handleRemoveItem(item.item_code)}
//                       className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
//                     >
//                       Remove item
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-between mt-4">
//               <button className="px-6 py-3 border border-gray-300 rounded bg-white hover:bg-gray-50">
//                 Continue Shopping
//               </button>
//               <button className="px-6 py-3 border border-gray-300 rounded bg-white hover:bg-gray-50">
//                 Update Shopping Cart
//               </button>
//             </div>
//           </div>

//           {/* Summary */}
//           <div className="w-96">
//             <div className="bg-white rounded shadow p-6">
//               <h2 className="text-xl font-bold mb-6">SUMMARY</h2>

//               <div className="border-b border-gray-200 pb-4 mb-4">
//                 <button className="w-full flex justify-between items-center text-gray-600 hover:text-gray-900">
//                   <span>Estimate Shipping and Tax</span>
//                   <span>▼</span>
//                 </button>
//               </div>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between text-gray-600">
//                   <span>Subtotal</span>
//                   <span>PGK{subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-gray-600">
//                   <span>Shipping (Flat Rate - Fixed)</span>
//                   <span>PGK{shippingCost.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
//                   <span>Order Total</span>
//                   <span>PGK{orderTotal.toFixed(2)}</span>
//                 </div>
//               </div>

//               <div className="border-b border-gray-200 pb-4 mb-4">
//                 <button className="w-full flex justify-between items-center text-gray-600 hover:text-gray-900">
//                   <span>Apply Discount Code</span>
//                   <span>▼</span>
//                 </button>
//               </div>

//               <button className="w-full bg-gray-800 text-white py-4 rounded hover:bg-gray-900 font-medium mb-4">
//                 PROCEED TO CHECKOUT
//               </button>

//               <button className="w-full text-center text-sm text-gray-600 hover:text-gray-900">
//                 Check Out with Multiple Addresses
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }













import React, { useEffect, useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, Loader2 } from 'lucide-react';
import { useGetCartQuotationQuery, useRemoveFromCartMutation, useUpdateCartItemMutation } from '../features/cartApi';
import { setCartData } from '../features/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartQuotation, selectCartItems } from '../features/slices/cartSlice';
import { apiPost } from '../hooks/erpnextApi';

export default function CartPage() {
  const dispatch = useDispatch();
  const [updatingItems, setUpdatingItems] = useState(new Set());
  
  // Get data from Redux store
  const quotation = useSelector(selectCartQuotation);
  const storeCartItems = useSelector(selectCartItems);

  // RTK Query hooks
  const { data, isLoading, error, refetch } = useGetCartQuotationQuery();
  const [removeFromCart, { isLoading: isRemoving }] = useRemoveFromCartMutation();
  const [updateCartItem, { isLoading: isUpdating }] = useUpdateCartItemMutation();

  // Sync data to Redux store
  useEffect(() => {
    if (data) {
      dispatch(setCartData(data));
    }
  }, [data, dispatch]);

  // Handle quantity change
  const handleQuantityChange = async (itemCode, currentQty, change) => {
    const newQty = currentQty + change;
    
    if (newQty < 1) return;

    setUpdatingItems(prev => new Set(prev).add(itemCode));
    
    try {
      await updateCartItem({ itemCode, qty: newQty }).unwrap();
      await refetch();
    } catch (err) {
      console.error('Failed to update quantity:', err);
      alert('Failed to update quantity. Please try again.');
    } finally {
      setUpdatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemCode);
        return newSet;
      });
    }
  };

  // Handle direct input change
  const handleDirectQtyChange = async (itemCode, value) => {
    const newQty = parseInt(value);
    
    if (isNaN(newQty) || newQty < 1) return;

    setUpdatingItems(prev => new Set(prev).add(itemCode));
    
    try {
      await updateCartItem({ itemCode, qty: newQty }).unwrap();
      await refetch();
    } catch (err) {
      console.error('Failed to update quantity:', err);
    } finally {
      setUpdatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemCode);
        return newSet;
      });
    }
  };

  // Handle remove item
  const handleRemoveItem = async (itemCode) => {
    if (!window.confirm('Are you sure you want to remove this item?')) return;

    try {
      await removeFromCart(itemCode).unwrap();
      await refetch();
    } catch (err) {
      console.error('Failed to remove item:', err);
      alert('Failed to remove item. Please try again.');
    }
  };


  const handleRequestQuotation = async () => {
    try {
       const res = await apiPost('https://mycardpng.com/api/method/webshop.webshop.shopping_cart.cart.request_for_quotation',{}, {
         'Authorization': `token 1a5cfcab01776e5:63628feef82aa59`
       });

       console.log("quotation request response", res);
    } catch (error) {
      
    }
  }

  // Calculate totals from quotation
  const subtotal = quotation?.base_total || 0;
  const taxAmount = quotation?.total_taxes_and_charges || 0;
  const grandTotal = quotation?.grand_total || 0;
  const currency = quotation?.currency || 'PGK';
  const totalQty = quotation?.total_qty || 0;

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-gray-600" />
          <p className="text-gray-600">Loading your cart...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Error Loading Cart</h2>
          <p className="text-gray-600 mb-4">We couldn't load your cart. Please try again.</p>
          <button 
            onClick={() => refetch()}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Empty cart state
  if (!data?.items || data.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <div className="text-sm text-gray-600">
            {totalQty} {totalQty === 1 ? 'item' : 'items'}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Table Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {data.items.map((item) => {
                  const isItemUpdating = updatingItems.has(item.item_code);
                  
                  return (
                    <div key={item.name} className="p-4 hover:bg-gray-50 transition-colors">
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                        {/* Product Info */}
                        <div className="col-span-6 flex items-center gap-4">
                          <div className="w-20 h-20 shrink-0 bg-gray-100 rounded overflow-hidden">
                            <img 
                              src={`https://mycardpng.com${item.image}`} 
                              alt={item.item_name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate">{item.item_name}</h3>
                            {item.item_group && (
                              <p className="text-sm text-gray-500 mt-1">{item.item_group}</p>
                            )}
                            {/* {!item.in_stock && (
                              <span className="inline-block mt-2 px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded">
                                Out of Stock
                              </span>
                            )} */}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-center">
                          <p className="font-medium text-gray-900">
                            {currency} {item.base_price_list_rate?.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="col-span-2 flex items-center justify-center">
                          <div className="flex items-center border border-gray-300 rounded-lg ">
                            <button
                              onClick={() => handleQuantityChange(item.item_code, item.qty, -1)}
                              disabled={isItemUpdating || item.qty <= 1}
                              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.qty}
                              onChange={(e) => handleDirectQtyChange(item.item_code, e.target.value)}
                              disabled={isItemUpdating}
                              className="w-16 px-2 py-1 text-center border-x border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 disabled:bg-gray-50"
                            />
                            <button
                              onClick={() => handleQuantityChange(item.item_code, item.qty, 1)}
                              disabled={isItemUpdating}
                              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          {isItemUpdating && (
                            <Loader2 className="w-4 h-4 animate-spin ml-2 text-gray-600" />
                          )}
                        </div>

                        {/* Total */}
                        <div className="col-span-2 text-right">
                          <p className="font-bold text-gray-900">
                            {currency} {(item.base_price_list_rate * item.qty).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden">
                        <div className="flex gap-4 mb-4">
                          <div className="w-24 h-24 shrink-0 bg-gray-100 rounded overflow-hidden">
                            <img 
                              src={`https://mycardpng.com${item.image}`} 
                              alt={item.item_name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/96?text=No+Image';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 mb-1">{item.item_name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{item.item_group}</p>
                            <p className="font-bold text-gray-900">
                              {currency} {item.base_price_list_rate?.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                              onClick={() => handleQuantityChange(item.item_code, item.qty, -1)}
                              disabled={isItemUpdating || item.qty <= 1}
                              className="p-2 hover:bg-gray-100 disabled:opacity-50"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-1 border-x border-gray-300 font-medium">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.item_code, item.qty, 1)}
                              disabled={isItemUpdating}
                              className="p-2 hover:bg-gray-100 disabled:opacity-50"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="font-bold text-lg text-gray-900">
                            {currency} {(item.base_price_list_rate * item.qty).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button 
                          onClick={() => handleRemoveItem(item.item_code)}
                          disabled={isRemoving}
                          className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button 
                onClick={() => window.history.back()}
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </button>
              <button 
                onClick={() => refetch()}
                disabled={isLoading}
                className="flex-1 px-6 py-3 border-2 border-gray-800 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Updating...' : 'Update Cart'}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalQty} items)</span>
                  <span className="font-medium">{currency} {subtotal.toFixed(2)}</span>
                </div>
                
                {taxAmount > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-medium">{currency} {taxAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {currency} {grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button onClick={handleRequestQuotation} className="w-full bg-gray-800 text-white py-4 rounded-lg hover:bg-gray-900 font-semibold transition-colors mb-3">
                Proceed to Checkout
              </button>

              <div className="text-center">
                <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                  Apply Discount Code
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600 space-y-2">
                <p>✓ Secure checkout</p>
                <p>✓ Free shipping on orders over {currency} 100</p>
                <p>✓ Easy returns within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}