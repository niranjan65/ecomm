import React, { useEffect, useState } from 'react';
import { Heart, ShoppingCart, Trash2, Package, MapPin, Star, LogOut } from 'lucide-react';
import { apiPost } from '../hooks/erpnextApi';

export default function WishlistPage() {
  const [activeTab, setActiveTab] = useState('wishlist');
  const [wishlistItems, setWishlistItems] = useState([]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const menuItems = [
    { id: 'orders', label: 'All Orders', icon: Package },
    { id: 'addresses', label: 'Manage Addresses', icon: MapPin },
    { id: 'reviews', label: 'Reviews & Ratings', icon: Star },
    { id: 'wishlist', label: 'My Wishlist', icon: Heart }
  ];


    const fetchWishlist = async() => {
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

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white text-black min-h-screen p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold">My Account</h2>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-black text-white'
                      : 'hover:bg-black hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors mt-8 border-t border-gray-700 pt-8">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-black mb-2">My Wishlist</h1>
              <p className="text-gray-600">{wishlistItems.length} items saved</p>
            </div>

            {wishlistItems.length === 0 ? (
              <div className="text-center py-16">
                <Heart size={64} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-600">Start adding items you love!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                {wishlistItems?.map((item) => (
                  <div key={item.id} className="border-2 border-black rounded-lg overflow-hidden group hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img
                        src={`http://192.168.101.182:8002${item.image}`}
                        alt={item.name}
                        className="w-full h-40 object-cover"
                      />
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-black hover:text-white transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                      {!item.inStock && (
                        <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 text-sm font-semibold rounded">
                          Out of Stock
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-[15px] mb-2 text-black">{item.item_name?.slice(0, 20)}</h3>
                      <p className="text-xs font-bold text-black mb-4">K{item.price_list_rate}</p>
                      
                      <div className='w-full flex items-center justify-center'>
                        <button
                        disabled={!item.inStock}
                        className={`w-fit py-3 px-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                          item.inStock
                            ? 'bg-white text-black hover:bg-gray-800'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart size={20} />
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}