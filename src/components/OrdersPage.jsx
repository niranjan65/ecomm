// import React, { useState, useEffect } from 'react';
// import { Package, Search, ChevronDown, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';
// import { get } from 'react-hook-form';
// import { apiPost } from '../hooks/erpnextApi';

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');

//   const getQuotationInfo = async() => {
    
//       try {
//             const res = await apiPost('http://192.168.101.182:8002/api/method/webshop.webshop.shopping_cart.cart.get_user_quotations', {
//               user: "niranjan.ks@anantdv.com"
//             });

//             console.log(res)
//     } catch (error) {
      
//     }
//   }

 
//   useEffect(() => {
//     getQuotationInfo();
//     const mockOrders = [
//       {
//         id: 'ORD-2024-001',
//         date: '2024-01-15',
//         status: 'delivered',
//         total: 2499,
//         items: [
//           {
//             id: 1,
//             name: 'Wireless Headphones',
//             image: '/api/placeholder/80/80',
//             quantity: 1,
//             price: 2499
//           }
//         ],
//         deliveryDate: '2024-01-20'
//       },
//       {
//         id: 'ORD-2024-002',
//         date: '2024-01-18',
//         status: 'shipped',
//         total: 1899,
//         items: [
//           {
//             id: 2,
//             name: 'Smart Watch',
//             image: '/api/placeholder/80/80',
//             quantity: 1,
//             price: 1899
//           }
//         ],
//         estimatedDelivery: '2024-01-25'
//       },
//       {
//         id: 'ORD-2024-003',
//         date: '2024-01-20',
//         status: 'processing',
//         total: 3499,
//         items: [
//           {
//             id: 3,
//             name: 'Laptop Stand',
//             image: '/api/placeholder/80/80',
//             quantity: 2,
//             price: 1749.5
//           }
//         ],
//         estimatedDelivery: '2024-01-28'
//       },
//       {
//         id: 'ORD-2024-004',
//         date: '2024-01-10',
//         status: 'cancelled',
//         total: 999,
//         items: [
//           {
//             id: 4,
//             name: 'Phone Case',
//             image: '/api/placeholder/80/80',
//             quantity: 1,
//             price: 999
//           }
//         ]
//       }
//     ];

//     setTimeout(() => {
//       setOrders(mockOrders);
//       setLoading(false);
//     }, 500);
//   }, []);

//   const getStatusConfig = (status) => {
//     const configs = {
//       delivered: {
//         label: 'Delivered',
//         icon: CheckCircle,
//         color: 'text-green-600',
//         bgColor: 'bg-green-50',
//         borderColor: 'border-green-200'
//       },
//       shipped: {
//         label: 'Shipped',
//         icon: Truck,
//         color: 'text-blue-600',
//         bgColor: 'bg-blue-50',
//         borderColor: 'border-blue-200'
//       },
//       processing: {
//         label: 'Processing',
//         icon: Clock,
//         color: 'text-yellow-600',
//         bgColor: 'bg-yellow-50',
//         borderColor: 'border-yellow-200'
//       },
//       cancelled: {
//         label: 'Cancelled',
//         icon: XCircle,
//         color: 'text-red-600',
//         bgColor: 'bg-red-50',
//         borderColor: 'border-red-200'
//       }
//     };
//     return configs[status] || configs.processing;
//   };

//   const filteredOrders = orders.filter(order => {
//     const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
//     return matchesSearch && matchesFilter;
//   });

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-16">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">All Orders</h1>
//         <p className="text-gray-600">{orders.length} total orders</p>
//       </div>

//       {/* Search and Filter */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
//         <div className="flex flex-col sm:flex-row gap-4">
//           {/* Search */}
//           <div className="flex-1 relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search orders..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             />
//           </div>

//           {/* Filter */}
//           <div className="relative">
//             <select
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//               className="appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white cursor-pointer"
//             >
//               <option value="all">All Orders</option>
//               <option value="processing">Processing</option>
//               <option value="shipped">Shipped</option>
//               <option value="delivered">Delivered</option>
//               <option value="cancelled">Cancelled</option>
//             </select>
//             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//           </div>
//         </div>
//       </div>

//       {/* Orders List */}
//       {filteredOrders.length === 0 ? (
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-16">
//           <Package size={64} className="mx-auto mb-4 text-gray-300" />
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">
//             {searchTerm || filterStatus !== 'all' ? 'No orders found' : 'No orders yet'}
//           </h3>
//           <p className="text-gray-600">
//             {searchTerm || filterStatus !== 'all' 
//               ? 'Try adjusting your search or filter' 
//               : 'Start shopping to see your orders here'}
//           </p>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {filteredOrders.map((order) => {
//             const statusConfig = getStatusConfig(order.status);
//             const StatusIcon = statusConfig.icon;

//             return (
//               <div key={order.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
//                 {/* Order Header */}
//                 <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
//                   <div className="flex flex-wrap items-center justify-between gap-3">
//                     <div className="flex items-center gap-4">
//                       <div>
//                         <p className="text-sm text-gray-600">Order ID</p>
//                         <p className="font-semibold text-black">{order.id}</p>
//                       </div>
//                       <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
//                       <div className="hidden sm:block">
//                         <p className="text-sm text-gray-600">Date</p>
//                         <p className="font-semibold text-black">
//                           {new Date(order.date).toLocaleDateString('en-US', { 
//                             month: 'short', 
//                             day: 'numeric', 
//                             year: 'numeric' 
//                           })}
//                         </p>
//                       </div>
//                     </div>

//                     <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig.bgColor} border ${statusConfig.borderColor}`}>
//                       <StatusIcon size={16} className={statusConfig.color} />
//                       <span className={`text-sm font-semibold ${statusConfig.color}`}>
//                         {statusConfig.label}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Order Items */}
//                 <div className="p-4 sm:p-6">
//                   <div className="space-y-4">
//                     {order.items.map((item) => (
//                       <div key={item.id} className="flex gap-4">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-20 h-20 object-cover rounded-lg border border-gray-200"
//                         />
//                         <div className="flex-1 min-w-0">
//                           <h3 className="font-semibold text-black mb-1">{item.name}</h3>
//                           <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                           <p className="text-lg font-bold text-black mt-1">₹{item.price.toLocaleString()}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Order Footer */}
//                   <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
//                     <div>
//                       <p className="text-sm text-gray-600 mb-1">
//                         {order.status === 'delivered' ? 'Delivered on' : 'Estimated Delivery'}
//                       </p>
//                       <p className="font-semibold text-black">
//                         {order.deliveryDate 
//                           ? new Date(order.deliveryDate).toLocaleDateString('en-US', { 
//                               month: 'short', 
//                               day: 'numeric', 
//                               year: 'numeric' 
//                             })
//                           : order.estimatedDelivery 
//                             ? new Date(order.estimatedDelivery).toLocaleDateString('en-US', { 
//                                 month: 'short', 
//                                 day: 'numeric', 
//                                 year: 'numeric' 
//                               })
//                             : 'N/A'}
//                       </p>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-sm text-gray-600 mb-1">Total Amount</p>
//                       <p className="text-xl font-bold text-black">₹{order.total.toLocaleString()}</p>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="mt-4 flex flex-wrap gap-3">
//                     <button className="flex-1 sm:flex-none px-6 py-2 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
//                       View Details
//                     </button>
//                     {order.status === 'delivered' && (
//                       <button className="flex-1 sm:flex-none px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
//                         Rate & Review
//                       </button>
//                     )}
//                     {order.status === 'processing' && (
//                       <button className="flex-1 sm:flex-none px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
//                         Cancel Order
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { Package, Search, ChevronDown, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getQuotationInfo = async() => {
    try {
      const res = await fetch('http://192.168.101.182:8002/api/method/webshop.webshop.shopping_cart.cart.get_user_quotations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: "niranjan.ks@anantdv.com"
        })
      });

      const data = await res.json();
      
      // Transform the API data to match our UI structure
      if (data.message && Array.isArray(data.message)) {
        const transformedOrders = data.message.map(quotation => ({
          id: quotation.name,
          date: quotation.transaction_date || quotation.creation.split(' ')[0],
          status: mapQuotationStatus(quotation.status),
          total: quotation.grand_total || 0,
          currency: quotation.currency || 'PGK',
          items: quotation.items?.map(item => ({
            id: item.name,
            name: item.item_name || item.item_code || 'Unknown Item',
            image: item.image || '/api/placeholder/80/80',
            quantity: item.qty || 0,
            price: item.amount || 0
          })) || [],
          totalQty: quotation.total_qty || 0,
          contactPerson: quotation.contact_person,
          partyName: quotation.party_name
        }));
        
        setOrders(transformedOrders);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quotations:', error);
      setLoading(false);
    }
  }

  // Map quotation status to order status
  const mapQuotationStatus = (status) => {
    const statusMap = {
      'Open': 'processing',
      'Submitted': 'processing',
      'Ordered': 'shipped',
      'Cancelled': 'cancelled',
      'Lost': 'cancelled',
      'Expired': 'cancelled'
    };
    return statusMap[status] || 'processing';
  };

  useEffect(() => {
    getQuotationInfo();
  }, []);

  const getStatusConfig = (status) => {
    const configs = {
      delivered: {
        label: 'Delivered',
        icon: CheckCircle,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      },
      shipped: {
        label: 'Shipped',
        icon: Truck,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
      },
      processing: {
        label: 'Processing',
        icon: Clock,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
      },
      cancelled: {
        label: 'Cancelled',
        icon: XCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      }
    };
    return configs[status] || configs.processing;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-black mb-2">All Orders</h1>
        <p className="text-gray-600">{orders.length} total orders</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white cursor-pointer"
            >
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          </div>
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 text-center py-16">
          <Package size={64} className="mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {searchTerm || filterStatus !== 'all' ? 'No orders found' : 'No orders yet'}
          </h3>
          <p className="text-gray-600">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter' 
              : 'Start shopping to see your orders here'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const statusConfig = getStatusConfig(order.status);
            const StatusIcon = statusConfig.icon;

            return (
              <div key={order.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
                {/* Order Header */}
                <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Order ID</p>
                        <p className="font-semibold text-black">{order.id}</p>
                      </div>
                      <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
                      <div className="hidden sm:block">
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-semibold text-black">
                          {new Date(order.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig.bgColor} border ${statusConfig.borderColor}`}>
                      <StatusIcon size={16} className={statusConfig.color} />
                      <span className={`text-sm font-semibold ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-4 sm:p-6">
                  {order.items.length > 0 ? (
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-black mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            <p className="text-lg font-bold text-black mt-1">
                              {order.currency} {item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      <p>No items in this order</p>
                      <p className="text-sm mt-1">Total Quantity: {order.totalQty}</p>
                    </div>
                  )}

                  {/* Order Footer */}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      {order.contactPerson && (
                        <div className="mb-2">
                          <p className="text-sm text-gray-600">Contact</p>
                          <p className="font-semibold text-black text-sm">{order.contactPerson}</p>
                        </div>
                      )}
                      <p className="text-sm text-gray-600">Total Items</p>
                      <p className="font-semibold text-black">{order.totalQty}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                      <p className="text-xl font-bold text-black">
                        {order.currency} {order.total.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button className="flex-1 sm:flex-none px-6 py-2 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                      View Details
                    </button>
                    {order.status === 'delivered' && (
                      <button className="flex-1 sm:flex-none px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                        Rate & Review
                      </button>
                    )}
                    {order.status === 'processing' && (
                      <button className="flex-1 sm:flex-none px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}