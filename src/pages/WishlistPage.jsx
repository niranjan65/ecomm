
import React, { useEffect, useState } from 'react';
import { Heart, ShoppingCart, Trash2, Package, MapPin, Star, LogOut, Plus, Edit2, X, ChevronDown, Search } from 'lucide-react';
import AddressModal from '../components/AddressModal';
import { toast as hotToast } from 'react-hot-toast';
import { apiPost } from '../hooks/erpnextApi';
import OrdersPage from '../components/OrdersPage';



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
      // countryCode: address.countryCode || '', // ✅ Add this
      city: address.city || '',
      state: address.state || '',
      postalCode: address.postalCode || '',
      countryCode: address.countryCode || '', // ✅ Add this
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
            {/* Orders */}
            {activeTab === 'orders' && <OrdersPage />}

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
            {( activeTab === 'reviews') && (
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