// import { Toaster, toast } from 'react-hot-toast';
// // import { Toaster } from 'react-hot-toast';
// import { X, ChevronDown, Search } from 'lucide-react';
// import { useState } from 'react';

// // Country to Country Code Mapping
// const countryCodeMap = {
//   'India': '+91',
//   'United States': '+1',
//   'United Kingdom': '+44',
//   'Canada': '+1',
//   'Australia': '+61',
//   'Germany': '+49',
//   'France': '+33',
//   'Italy': '+39',
//   'Spain': '+34',
//   'Netherlands': '+31',
//   'Belgium': '+32',
//   'Switzerland': '+41',
//   'Sweden': '+46',
//   'Norway': '+47',
//   'Denmark': '+45',
//   'Finland': '+358',
//   'Poland': '+48',
//   'Czech Republic': '+420',
//   'Austria': '+43',
//   'Ireland': '+353',
//   'Portugal': '+351',
//   'Greece': '+30',
//   'Japan': '+81',
//   'China': '+86',
//   'Brazil': '+55',
//   'Mexico': '+52',
//   'Argentina': '+54',
//   'South Africa': '+27',
//   'Singapore': '+65',
//   'Malaysia': '+60',
//   'Thailand': '+66',
//   'Vietnam': '+84',
//   'South Korea': '+82',
//   'New Zealand': '+64',
//   'United Arab Emirates': '+971',
//   'Saudi Arabia': '+966',
// };

// // Phone Input with Country Code Component
// const PhoneInputWithCountryCode = ({ value, onChange, countryCode = '+91' }) => {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Phone <span className="text-red-500">*</span>
//       </label>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={countryCode}
//           disabled
//           className="w-20 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-600 cursor-not-allowed"
//         />
//         <input
//           type="tel"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
//           placeholder="Enter phone number"
//         />
//       </div>
//     </div>
//   );
// };

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
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>

//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white flex items-center justify-between hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm"
//       >
//         <span className={value ? 'text-gray-900' : 'text-gray-400'}>
//           {selectedLabel}
//         </span>
//         <ChevronDown size={18} className={`transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50">
//           {/* Search Input */}
//           <div className="p-3 border-b border-gray-200">
//             <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-md">
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
//                     className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${value === opt.value ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-900'
//                       }`}
//                   >
//                     <span>{opt.label}</span>
//                     {value === opt.value && (
//                       <div className="w-2 h-2 bg-black rounded-full"></div>
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
//     { label: 'Billing', value: 'Billing' },
//     { label: 'Shipping', value: 'Shipping' },
//   ];

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Address Type <span className="text-red-500">*</span>
//       </label>
//       <div className="grid grid-cols-2 gap-3">
//         {types.map((type) => (
//           <button
//             key={type.value}
//             type="button"
//             onClick={() => onChange(type.value)}
//             className={`py-2.5 px-4 rounded-md font-medium transition-all duration-200 text-sm ${value === type.value
//               ? 'bg-black text-white'
//               : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
//               }`}
//           >
//             {type.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Main Address Modal Component
// const AddressModal = ({
//   showAddressModal,
//   handleCloseModal,
//   isEditMode,
//   formData,
//   setFormData,
//   handleSaveAddress,
//   handleDeleteFromModal
// }) => {
//   const countries = [
//     { label: 'India', value: 'India' },
//     { label: 'United States', value: 'United States' },
//     { label: 'United Kingdom', value: 'United Kingdom' },
//     { label: 'Canada', value: 'Canada' },
//     { label: 'Australia', value: 'Australia' },
//     { label: 'Germany', value: 'Germany' },
//     { label: 'France', value: 'France' },
//     { label: 'Italy', value: 'Italy' },
//     { label: 'Spain', value: 'Spain' },
//     { label: 'Netherlands', value: 'Netherlands' },
//     { label: 'Belgium', value: 'Belgium' },
//     { label: 'Switzerland', value: 'Switzerland' },
//     { label: 'Sweden', value: 'Sweden' },
//     { label: 'Norway', value: 'Norway' },
//     { label: 'Denmark', value: 'Denmark' },
//     { label: 'Finland', value: 'Finland' },
//     { label: 'Poland', value: 'Poland' },
//     { label: 'Czech Republic', value: 'Czech Republic' },
//     { label: 'Austria', value: 'Austria' },
//     { label: 'Ireland', value: 'Ireland' },
//     { label: 'Portugal', value: 'Portugal' },
//     { label: 'Greece', value: 'Greece' },
//     { label: 'Japan', value: 'Japan' },
//     { label: 'China', value: 'China' },
//     { label: 'Brazil', value: 'Brazil' },
//     { label: 'Mexico', value: 'Mexico' },
//     { label: 'Argentina', value: 'Argentina' },
//     { label: 'South Africa', value: 'South Africa' },
//     { label: 'Singapore', value: 'Singapore' },
//     { label: 'Malaysia', value: 'Malaysia' },
//     { label: 'Thailand', value: 'Thailand' },
//     { label: 'Vietnam', value: 'Vietnam' },
//     { label: 'South Korea', value: 'South Korea' },
//     { label: 'New Zealand', value: 'New Zealand' },
//     { label: 'United Arab Emirates', value: 'United Arab Emirates' },
//     { label: 'Saudi Arabia', value: 'Saudi Arabia' },
//   ];

//   // Validation function
//   const validateForm = () => {
//     if (!formData.title.trim()) {
//       toast.error('Address Title is required');
//       return false;
//     }
//     if (!formData.type) {
//       toast.error('Address Type is required');
//       return false;
//     }
//     if (!formData.addressLine1.trim()) {
//       toast.error('Address Line 1 is required');
//       return false;
//     }
//     if (!formData.city.trim()) {
//       toast.error('City/Town is required');
//       return false;
//     }
//     if (!formData.phone.trim()) {
//       toast.error('Phone number is required');
//       return false;
//     }
//     if (!formData.country) {
//       toast.error('Country is required');
//       return false;
//     }
//     if (formData.phone.trim().length < 10) {
//       toast.error('Phone number must be at least 10 digits');
//       return false;
//     }
//     return true;
//   };

//   // Handle save address
//   const handleSave = () => {
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       handleSaveAddress();
//       toast.success(isEditMode ? 'Address updated successfully!' : 'Address saved successfully!');
//     } catch (error) {
//       toast.error('Error saving address. Please try again.');
//     }
//   };

//   // Handle delete address
//   const handleDelete = () => {
//     try {
//       handleDeleteFromModal();
//       toast.success('Address deleted successfully!');
//     } catch (error) {
//       toast.error('Error deleting address. Please try again.');
//     }
//   };

//   if (!showAddressModal) return null;


//   return (
//     <>
//       <Toaster position="top-center" />
//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
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
//           animation: fadeIn 0.3s ease-out;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.3s ease-out;
//         }
//       `}</style>

//       <div
//         className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] animate-fadeIn"
//         onClick={handleCloseModal}
//       ></div>

//       <div className="fixed inset-0 flex items-center justify-center p-4 z-[70] pointer-events-none">
//         <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp pointer-events-auto scrollbar-hide">
//           <div className="p-6">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
//               <h2 className="text-xl font-semibold text-gray-900">
//                 {isEditMode ? 'Edit Address' : 'Add New Address'}
//               </h2>
//               <button
//                 onClick={handleCloseModal}
//                 className="p-1.5 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-700"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Form Fields */}
//             <div className="space-y-5">
//               {/* Row 1: Address Title and Type */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Address Title <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.title}
//                     onChange={(e) =>
//                       setFormData({ ...formData, title: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
//                     placeholder="e.g., Home, Office, Apartment"
//                   />
//                 </div>

//                 <AddressTypeToggle
//                   value={formData.type}
//                   onChange={(type) =>
//                     setFormData({ ...formData, type })
//                   }
//                 />
//               </div>

//               {/* Row 2: Address Line 1 and Postal Code */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Address Line 1 <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.addressLine1}
//                     onChange={(e) =>
//                       setFormData({ ...formData, addressLine1: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
//                     placeholder="Street, house no."
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.postalCode}
//                     onChange={(e) =>
//                       setFormData({ ...formData, postalCode: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
//                     placeholder="e.g., 700001"
//                   />
//                 </div>
//               </div>

//               {/* Row 3: Address Line 2 and Phone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.addressLine2}
//                     onChange={(e) =>
//                       setFormData({ ...formData, addressLine2: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
//                     placeholder="Apartment, landmark, etc."
//                   />
//                 </div>

//                 <PhoneInputWithCountryCode
//                   value={formData.phone}
//                   onChange={(phone) =>
//                     setFormData({ ...formData, phone })
//                   }
//                   countryCode={formData.countryCode}
//                 />
//               </div>

//               {/* Row 4: City and State */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     City/Town <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.city}
//                     onChange={(e) =>
//                       setFormData({ ...formData, city: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
//                     placeholder="Enter city or town"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     State/Province
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.state}
//                     onChange={(e) =>
//                       setFormData({ ...formData, state: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
//                     placeholder="Enter state or province"
//                   />
//                 </div>
//               </div>

//               {/* Row 5: Country */}
//               <SearchableDropdown
//                 label="Country"
//                 value={formData.country}
//                 onChange={(country) =>
//                   setFormData({
//                     ...formData,
//                     country,
//                     countryCode: countryCodeMap[country] || '+1'
//                   })
//                 }
//                 options={countries}
//                 placeholder="Select country"
//                 required={true}
//               />

//               {/* Actions */}
//               <div className="flex gap-3 pt-4 border-t border-gray-200">
//                 {isEditMode && (
//                   <button
//                     type="button"
//                     onClick={handleDelete}
//                     className="px-6 bg-white border-2 border-red-600 text-red-600 py-3 rounded-md font-medium hover:bg-red-50 transition-colors text-sm"
//                   >
//                     Delete
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={handleSave}
//                   className="flex-1 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm"
//                 >
//                   {isEditMode ? 'Update Address' : 'Save Address'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddressModal;

import { Toaster, toast } from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';
import { X, ChevronDown, Search } from 'lucide-react';
import { useState, useEffect } from 'react';


// import { useState, useEffect } from 'react';



const useToasterPosition = () => {
  const [position, setPosition] = useState('bottom-right');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPosition('top-center');
      } else {
        setPosition('bottom-right');
      }
    };

    // Set initial position
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return position;
};



// Country to Country Code Mapping
const countryCodeMap = {
  'India': '+91',
  'United States': '+1',
  'United Kingdom': '+44',
  'Canada': '+1',
  'Australia': '+61',
  'Germany': '+49',
  'France': '+33',
  'Italy': '+39',
  'Spain': '+34',
  'Netherlands': '+31',
  'Belgium': '+32',
  'Switzerland': '+41',
  'Sweden': '+46',
  'Norway': '+47',
  'Denmark': '+45',
  'Finland': '+358',
  'Poland': '+48',
  'Czech Republic': '+420',
  'Austria': '+43',
  'Ireland': '+353',
  'Portugal': '+351',
  'Greece': '+30',
  'Japan': '+81',
  'China': '+86',
  'Brazil': '+55',
  'Mexico': '+52',
  'Argentina': '+54',
  'South Africa': '+27',
  'Singapore': '+65',
  'Malaysia': '+60',
  'Thailand': '+66',
  'Vietnam': '+84',
  'South Korea': '+82',
  'New Zealand': '+64',
  'United Arab Emirates': '+971',
  'Saudi Arabia': '+966',
};

// Phone Input with Country Code Component
// const PhoneInputWithCountryCode = ({ value, onChange, countryCode, onclick }) => {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Phone <span className="text-red-500">*</span>
//       </label>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={countryCode}
//           disabled
//           className="w-20 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-600 cursor-not-allowed"
//         />

//           <input
//             type="tel"
//             value={value}
//             // disabled={countryCode ? false : true}
//             onClick={(e) => onclick()}
//             onChange={(e) => onChange(e.target.value)}
//             className={`flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400 ${countryCode ? '' : 'cursor-not-allowed'}`}
//             placeholder="Enter phone number"
//           />
//         </div>
//       </div>

//   );
// };
// const PhoneInputWithCountryCode = ({
//   value,
//   onChange,
//   countryCode,
//   onClick,
// }) => {
//   const disabled = !countryCode;

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Phone <span className="text-red-500">*</span>
//       </label>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={countryCode}
//           disabled
//           className="w-20 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-600 cursor-not-allowed"
//         />

//         <input
//           type="tel"
//           value={value}
//           disabled={disabled}
//           onClick={onClick}
//           onChange={(e) => onChange(e.target.value)}
//           className={`flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400 ${disabled ? 'cursor-not-allowed bg-gray-100' : ''
//             }`}
//           placeholder="Enter phone number"
//         />
//       </div>
//     </div>
//   );
// };

// const PhoneInputWithCountryCode = ({
//   value,
//   onChange,
//   countryCode,
//   readOnly,
//   onClick,
// }) => {
//   const disabled = !countryCode;

//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Phone <span className="text-red-500">*</span>
//       </label>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={countryCode}
//           disabled
//           className="w-20 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-600 cursor-not-allowed"
//         />

//         <input
//           type="tel"
//           value={value}
//           readOnly={readOnly}
//           disabled={disabled}
//           onClick={onClick}
//           onChange={(e) => onChange(e.target.value)}
//           className={`flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400 ${
//             disabled ? 'cursor-not-allowed bg-gray-100' : ''
//           }`}
//           placeholder="Enter phone number"
//         />
//       </div>
//     </div>
//   );
// };
// const PhoneInputWithCountryCode = ({
//   value,
//   onChange,
//   countryCode,
//   onClick,
// }) => {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Phone <span className="text-red-500">*</span>
//       </label>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={countryCode}
//           disabled
//           className="w-20 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-600 cursor-not-allowed"
//         />

//         <input
//           type="tel"
//           value={value}
//           readOnly                         // cannot type, still focusable/clickable [web:23][web:59][web:67]
//           onClick={onClick}
//           onChange={(e) => onChange(e.target.value)}
//           className="flex-1 px-4 py-3 border border-gray-300 rounded-md
//                      bg-gray-100 text-gray-500 cursor-not-allowed
//                      focus:outline-none focus:ring-0 focus:border-gray-300"  // remove active focus look
//           placeholder="Enter phone number"
//         />
//       </div>
//     </div>
//   );
// };
const PhoneInputWithCountryCode = ({
  value,
  onChange,
  countryCode,
  disabled = false,
  onDisabledClick
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Phone <span className="text-red-500">*</span>
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={countryCode}
          disabled
          className="w-20 px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-sm font-medium text-gray-600 cursor-not-allowed"
        />
        <input
          type="tel"
          value={value}
          onChange={(e) => !disabled && onChange(e.target.value)}
          readOnly={disabled}
          onClick={() => {
            if (disabled && onDisabledClick) {
              onDisabledClick();
            }
          }}
          className={`flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm placeholder-gray-400 transition-all ${disabled
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
              : 'focus:outline-none focus:ring-2 focus:ring-black focus:border-black'
            }`}
          placeholder={disabled ? "Select country first" : "Enter phone number"}
        />
      </div>
    </div>
  );
};






// Custom Searchable Dropdown Component
const SearchableDropdown = ({ label, value, onChange, options, placeholder, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(opt =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opt.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white flex items-center justify-between hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {selectedLabel}
        </span>
        <ChevronDown size={18} className={`transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-md">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
                autoFocus
              />
            </div>
          </div>

          {/* Options List */}
          <ul className="max-h-64 overflow-y-auto scrollbar-hide">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <li key={opt.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                      setSearchTerm('');
                    }}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${value === opt.value ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-900'
                      }`}
                  >
                    <span>{opt.label}</span>
                    {value === opt.value && (
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    )}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-6 text-center text-gray-500 text-sm">
                No results found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// Address Type Toggle Component
const AddressTypeToggle = ({ value, onChange }) => {
  const types = [
    { label: 'Billing', value: 'Billing' },
    { label: 'Shipping', value: 'Shipping' },
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Address Type <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-2 gap-3">
        {types.map((type) => (
          <button
            key={type.value}
            type="button"
            onClick={() => onChange(type.value)}
            className={`py-2.5 px-4 rounded-md font-medium transition-all duration-200 text-sm ${value === type.value
              ? 'bg-black text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Address Modal Component
const AddressModal = ({
  showAddressModal,
  handleCloseModal,
  isEditMode,
  formData,
  setFormData,
  handleSaveAddress,
  handleDeleteFromModal
}) => {
  const countries = [
    { label: 'India', value: 'India' },
    { label: 'United States', value: 'United States' },
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Germany', value: 'Germany' },
    { label: 'France', value: 'France' },
    { label: 'Italy', value: 'Italy' },
    { label: 'Spain', value: 'Spain' },
    { label: 'Netherlands', value: 'Netherlands' },
    { label: 'Belgium', value: 'Belgium' },
    { label: 'Switzerland', value: 'Switzerland' },
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Norway', value: 'Norway' },
    { label: 'Denmark', value: 'Denmark' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Poland', value: 'Poland' },
    { label: 'Czech Republic', value: 'Czech Republic' },
    { label: 'Austria', value: 'Austria' },
    { label: 'Ireland', value: 'Ireland' },
    { label: 'Portugal', value: 'Portugal' },
    { label: 'Greece', value: 'Greece' },
    { label: 'Japan', value: 'Japan' },
    { label: 'China', value: 'China' },
    { label: 'Brazil', value: 'Brazil' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'Argentina', value: 'Argentina' },
    { label: 'South Africa', value: 'South Africa' },
    { label: 'Singapore', value: 'Singapore' },
    { label: 'Malaysia', value: 'Malaysia' },
    { label: 'Thailand', value: 'Thailand' },
    { label: 'Vietnam', value: 'Vietnam' },
    { label: 'South Korea', value: 'South Korea' },
    { label: 'New Zealand', value: 'New Zealand' },
    { label: 'United Arab Emirates', value: 'United Arab Emirates' },
    { label: 'Saudi Arabia', value: 'Saudi Arabia' },
  ];
  const toasterPosition = useToasterPosition();

  // Validation function
  const validateForm = () => {
    if (!formData.title.trim()) {
      toast.error('Address Title is required');
      return false;
    }
    if (!formData.type) {
      toast.error('Address Type is required');
      return false;
    }
    if (!formData.addressLine1.trim()) {
      toast.error('Address Line 1 is required');
      return false;
    }
    if (!formData.city.trim()) {
      toast.error('City/Town is required');
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error('Phone number is required');
      return false;
    }
    if (!formData.country) {
      toast.error('Country is required');
      return false;
    }
    if (formData.phone.trim().length < 10) {
      toast.error('Phone number must be at least 10 digits');
      return false;
    }
    return true;
  };

  // Handle save address
  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    try {
      handleSaveAddress();
      toast.success(isEditMode ? 'Address updated successfully!' : 'Address saved successfully!');
    } catch (error) {
      toast.error('Error saving address. Please try again.');
    }
  };

  // Handle delete address
  const handleDelete = () => {
    try {
      handleDeleteFromModal();
      toast.success('Address deleted successfully!');
    } catch (error) {
      toast.error('Error deleting address. Please try again.');
    }
  };

  if (!showAddressModal) return null;



  return (
    <>
      <Toaster position={toasterPosition} />
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>

      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] animate-fadeIn"
        onClick={handleCloseModal}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center p-4 z-[70] pointer-events-none">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp pointer-events-auto scrollbar-hide">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {isEditMode ? 'Edit Address' : 'Add New Address'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              {/* Row 1: Address Title and Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
                    placeholder="e.g., Home, Office, Apartment"
                  />
                </div>

                {/* <AddressTypeToggle
                  value={formData.type}
                  onChange={(type) =>
                    setFormData({ ...formData, type })
                  }
                /> */}
                <SearchableDropdown
                  label="Country"
                  value={formData.country}
                  onChange={(country) =>
                    setFormData({
                      ...formData,
                      country,
                      countryCode: countryCodeMap[country] || '+1'
                    })
                  }
                  options={countries}
                  placeholder="Select country"
                  required={true}
                />
              </div>

              {/* Row 2: Address Line 1 and Postal Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Line 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.addressLine1}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLine1: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
                    placeholder="Street, house no."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData({ ...formData, postalCode: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
                    placeholder="e.g., 700001"
                  />
                </div>
              </div>

              {/* Row 3: Address Line 2 and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    value={formData.addressLine2}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLine2: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
                    placeholder="Apartment, landmark, etc."
                  />
                </div>

                {/* <PhoneInputWithCountryCode
                  value={formData.phone}
                  readOnly={true}
                  onclick={() => { !formData.country && toast.error('Please select a country first'); }}
                  onChange={(phone) =>
                    setFormData({ ...formData, phone })
                  }
                  countryCode={formData.countryCode}
                /> */}
                {/* <PhoneInputWithCountryCode
                  value={formData.phone}
                  countryCode={formData.countryCode}
                  onClick={() => {
                    if (!formData.country) {
                      toast.error('Please select a country first');
                    }
                  }}
                  onChange={(phone) =>
                    setFormData({ ...formData, phone })
                  }
                /> */}
                {/* Row 5: Phone */}
                <PhoneInputWithCountryCode
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData({ ...formData, phone })
                  }
                  countryCode={formData.countryCode}
                  disabled={!formData.country}  // ✅ Read-only when NO country selected
                  onDisabledClick={() => {
                    if (!formData.country) {
                      toast.error('Please select a country first');
                    }
                  }}
                />




              </div>

              {/* Row 4: City and State */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City/Town <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
                    placeholder="Enter city or town"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State/Province
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm placeholder-gray-400"
                    placeholder="Enter state or province"
                  />
                </div>
              </div>

              {/* Row 5: Country */}

              <AddressTypeToggle
                value={formData.type}
                onChange={(type) =>
                  setFormData({ ...formData, type })
                }
              />

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                {isEditMode && (
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="px-6 bg-white border-2 border-red-600 text-red-600 py-3 rounded-md font-medium hover:bg-red-50 transition-colors text-sm"
                  >
                    Delete
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex-1 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm"
                >
                  {isEditMode ? 'Update Address' : 'Save Address'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressModal;