
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, X, CheckCircle, AlertCircle } from 'lucide-react';
import bg_image from '../assets/red_background.png'
import logo from '../assets/mycard_new_logo.png'
import axios from "axios";


function Modal({ isOpen, onClose, type, message }) {
  if (!isOpen) return null;

  const isSuccess = type === 'success';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
        <div className={`p-6 ${isSuccess ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              {isSuccess ? (
                <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className={`text-lg font-semibold ${isSuccess ? 'text-green-900' : 'text-red-900'}`}>
                  {isSuccess ? 'Success!' : 'Error'}
                </h3>
                <p className={`mt-2 text-sm ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
                  {message}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`${isSuccess ? 'text-green-600 hover:text-green-800' : 'text-red-600 hover:text-red-800'} transition`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="p-4 bg-white flex justify-end">
          <button
            onClick={onClose}
            className={`px-6 py-2 rounded-full text-white font-medium transition ${
              isSuccess 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Custom DatePicker Component
function CustomDatePicker({ value, onChange, name, placeholder = "Select date" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef(null);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDateSelect = (day) => {
    if (day) {
      const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(newDate);
      const formattedDate = newDate.toISOString().split('T')[0];
      onChange(formattedDate);
      setIsOpen(false);
    }
  };

  const handleMonthChange = (increment) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1));
  };

  const formatDisplayDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const days = getDaysInMonth(currentMonth);
  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           currentMonth.getMonth() === today.getMonth() && 
           currentMonth.getFullYear() === today.getFullYear();
  };

  const isSelected = (day) => {
    if (!selectedDate || !day) return false;
    return day === selectedDate.getDate() && 
           currentMonth.getMonth() === selectedDate.getMonth() && 
           currentMonth.getFullYear() === selectedDate.getFullYear();
  };

  return (
    <div className="relative" ref={datePickerRef}>
      <div className="relative">
        <input
          type="text"
          value={formatDisplayDate(selectedDate)}
          placeholder={placeholder}
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2.5 pl-10  bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition cursor-pointer"
        />
        <Calendar 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a7a6d] w-5 h-5 pointer-events-none" 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border border-[#b8bbd3] rounded-lg shadow-xl p-4 w-80">
          {/* Month/Year Selector */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => handleMonthChange(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3">
              <select
                value={currentMonth.getMonth()}
                onChange={(e) => setCurrentMonth(new Date(currentMonth.getFullYear(), parseInt(e.target.value), 1))}
                className="px-3 py-1 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-[#2eb79f]"
              >
                {months.map((month, idx) => (
                  <option key={month} value={idx}>{month}</option>
                ))}
              </select>

              <select
                value={currentMonth.getFullYear()}
                onChange={(e) => setCurrentMonth(new Date(parseInt(e.target.value), currentMonth.getMonth(), 1))}
                className="px-3 py-1 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-[#2eb79f]"
              >
                {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => handleMonthChange(1)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                {day}
              </div>
            ))}
            {days.map((day, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDateSelect(day)}
                disabled={!day}
                className={`
                  p-2 text-sm rounded-full transition
                  ${!day ? 'invisible' : ''}
                  ${isSelected(day) ? 'bg-[#2eb79f] text-white font-medium' : ''}
                  ${isToday(day) && !isSelected(day) ? 'border border-[#2eb79f] text-[#2eb79f]' : ''}
                  ${day && !isSelected(day) && !isToday(day) ? 'hover:bg-gray-100' : ''}
                `}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
   const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success',
    message: ''
  });
  const [dateValues, setDateValues] = useState({
    dob: '',
    graduationYear: '',
    signatureDate: ''
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

   const closeModal = () => {
    setModalState({ isOpen: false, type: 'success', message: '' });
  };

  const showModal = (type, message) => {
    setModalState({ isOpen: true, type, message });
  };

  const totalSteps = 5;

  const handleDateChange = (name, value) => {
    setDateValues(prev => ({ ...prev, [name]: value }));
    setValue(name, value);
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };


  async function sendResetPasswordEmail(email) {
  try {
//     const response = await axios.post(
//       "http://192.168.101.182:8002/api/method/frappe.core.doctype.user.user.reset_password",   {
//         user: email, 
//       },
//        {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//   }
// }
   
//     );

    const response = await axios.post(
      "http://192.168.101.182:8002/api/method/custom.api.reset_password.custom_reset_password",   {
        email: email, 
      },
       {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
  }
}
   
    );
    
    console.log(response.data.message);
    alert("Reset password email sent successfully");
  } catch (error) {
    console.error(error);
    alert("Failed to send reset email");
  }
}

    const createUser = async (data) => {
        try {
            const user_payload = {
                email: data.email,
                is_submitted: 1,
                first_name: data.firstName,
                role_profile_name: "User All Access"
            }


            const response = await fetch(`http://192.168.101.182:8002/api/resource/User`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59',
                },
                credentials: "omit",
                body: JSON.stringify(user_payload),
            });

            const result = await response.json()

            return result

        } catch (error) {
            console.error(error)
        }
    }

    const updateUser = async (user, cbd_no) => {
        try {

            const card_blome_payload = {
      card_blo_me_number: cbd_no,
      is_submitted: 1
    }
            const update_user = await fetch(`http://192.168.101.182:8002/api/resource/User/${user}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59',
      },
      credentials: "omit",
      body: JSON.stringify(card_blome_payload),
    });
        } catch (error) {
            console.log(error)
        }
    }

  const createCardBloMePage1 = async(data) => {
    try {
        const erpNextPayload1 = {
      first_name: data.firstName,
      last_name: data.lastName,
      gender: data.gender,
      date_of_birth: data.dob,
      town: data.city,
      country: data.country,
      
    };

    
    const response = await fetch('http://192.168.101.182:8002/api/resource/Card Blo Me Page1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59',
      },
      credentials: "omit",
      body: JSON.stringify(erpNextPayload1),
    });

    const result = await response.json();

    return result

    } catch (error) {
        console.warn("Error creating the Card Blo Me Page 1", error)
    }
  }

  const onSubmit = async(data) => {
    const canvas = canvasRef.current;
    const signatureData = canvas.toDataURL();
    console.log('Form Data:', { ...data, ...dateValues, signature: signatureData });

    

    // const user = await createUser(data)

  

    // if(user.exc_type) {
        
    //     showModal('error', 'Duplicate Entry Error');
    // }

    // if(user.data){
    //     const cardBloMeData = await createCardBloMePage1(data)
    //     await updateUser(data.email, cardBloMeData?.data?.name)
    //     await sendResetPasswordEmail(data.email)
    //     showModal('success', 'Form has been successfully submitted! Please check your email')
    // }

    
  };

  return (
    <div
    
     className="min-h-screen bg-white py-8 px-5 ">
      <div className="max-w-4xl mx-auto">
        <div
         className="bg-[#F0DAC5] rounded-lg shadow-lg">
            <div className='flex w-full  justify-center'>
                <img height={100} width={100} src={logo} alt="" />
            </div>
          {/* Header */}
          <div className="border-b border-gray-300 px-10 py-7 rounded-t-lg">
            
            <h1 className="text-3xl font-medium text-[#252c3e] text-center">
              Personal Information Form
            </h1>
          </div>

          <div className="p-10 space-y-8">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  General Info
                </h2>

                {/* Name */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Name
                  </label>
                  <div className="flex gap-4 flex-wrap">
                    <input
                      type="text"
                      {...register("firstName")}
                      placeholder="First Name"
                      className="flex-1 px-3 bg-white py-2.5 border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                    <input
                      type="text"
                      {...register("lastName")}
                      placeholder="Last Name"
                      className="flex-1 px-3 bg-white py-2.5 border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                  </div>
                </div>

                {/* Date of Birth - Custom Date Picker */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Date of Birth
                  </label>
                  <CustomDatePicker
                    value={dateValues.dob}
                    onChange={(value) => handleDateChange('dob', value)}
                    placeholder="Select date of birth"
                  />
                </div>

                {/* Gender */}
                {/* <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Gender
                  </label>
                  <div className="flex gap-6">
                    {['Male', 'Female', 'Other'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value={option}
                          {...register("gender")}
                          className="w-5 h-5 border-2 bg-white border-[#47476b] rounded appearance-none checked:border-[#2eb79f] checked:shadow-[0_0_2px_0_#2eb79f] cursor-pointer relative
                          checked:after:content-[''] checked:after:block checked:after:w-1 checked:after:h-2.5 checked:after:border-r-2 checked:after:border-b-2 checked:after:border-[#2eb79f] checked:after:rotate-45 checked:after:absolute checked:after:-top-0.5 checked:after:left-1.5"
                        />
                        <span className="text-[#47476b] text-base">{option}</span>
                      </label>
                    ))}
                  </div>
                </div> */}

                {/* Marital Status */}
                {/* <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Marital Status
                  </label>
                  <input
                    type="text"
                    {...register("maritalStatus")}
                    className="w-full px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div> */}



                {/* Gender */}
<div className="mb-6 relative">
  <label className="block text-[#252c3e] font-medium text-base mb-2">
    Gender
  </label>
  <div className="relative">
    <select
      {...register("gender")}
      className="w-full px-3 py-2.5 pr-10 border bg-white border-[#b8bbd3] rounded-full 
      focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none 
      text-[#252c3e] text-base transition appearance-none"
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderqueer">Genderqueer</option>
      <option value="Non-Conforming">Non-Conforming</option>
      <option value="Prefer not to say">Prefer not to say</option>
      <option value="Transgender">Transgender</option>
      <option value="Other">Other</option>
    </select>

    {/* Custom Arrow */}
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2eb79f]">
      ▼
    </span>
  </div>
</div>

{/* Marital Status */}
<div className="mb-6 relative">
  <label className="block text-[#252c3e] font-medium text-base mb-2">
    Marital Status
  </label>
  <div className="relative">
    <select
      {...register("maritalStatus")}
      className="w-full px-3 py-2.5 pr-10 border bg-white border-[#b8bbd3] rounded-full 
      focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none 
      text-[#252c3e] text-base transition appearance-none"
    >
      <option value="">Select Marital Status</option>
      <option value="Single">Single</option>
      <option value="Married">Married</option>
      <option value="Separated">Separated</option>
      <option value="Widowed">Widowed</option>
    </select>

    {/* Custom Arrow */}
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#2eb79f]">
      ▼
    </span>
  </div>
</div>


                {/* Nationality */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    {...register("nationality")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                {/* Address */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Address
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      {...register("addressLine1")}
                      placeholder="Street Address"
                      className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                    <input
                      type="text"
                      {...register("addressLine2")}
                      placeholder="Address Line 2"
                      className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                    <div className="flex gap-4 flex-wrap">
                      <input
                        type="text"
                        {...register("city")}
                        placeholder="City"
                        className="flex-1 px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                      <input
                        type="text"
                        {...register("region")}
                        placeholder="State/Region/Province"
                        className="flex-1 px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <input
                        type="text"
                        {...register("zipCode")}
                        placeholder="Postal / Zip Code"
                        className="flex-1 px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                      <input
                        type="text"
                        {...register("country")}
                        placeholder="Country"
                        className="flex-1 px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>
              </div>
            )}

            {/* Medical Info Section */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Medical Info
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Medical Information if any (Existing conditions/ Allergies)
                  </label>
                  <textarea
                    {...register("medicalInfo")}
                    rows="4"
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-lg focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition resize-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    {...register("emergencyContactName")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    {...register("emergencyContactNumber")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>
              </div>
            )}

            {/* Education Info Section */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Education Info
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Highest Level of Education
                  </label>
                  <input
                    type="text"
                    {...register("education")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    School/ University Name
                  </label>
                  <input
                    type="text"
                    {...register("schoolName")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Graduation Year
                  </label>
                  <CustomDatePicker
                    value={dateValues.graduationYear}
                    onChange={(value) => handleDateChange('graduationYear', value)}
                    placeholder="Select graduation date"
                  />
                </div>
              </div>
            )}

            {/* Employment Info Section */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Employment Info
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Current Employer
                  </label>
                  <input
                    type="text"
                    {...register("currentEmployer")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    {...register("jobTitle")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    {...register("yearsExperience")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>
              </div>
            )}

            {/* Acknowledgement Section */}
            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Acknowledgement
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Signature
                  </label>
                  <canvas
                    ref={canvasRef}
                    width={720}
                    height={130}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="w-full h-32  border border-[#b8bbd3] rounded-lg bg-white cursor-crosshair"
                  />
                  <button
                    type="button"
                    onClick={clearSignature}
                    className="mt-2 text-sm text-[#465475] underline"
                  >
                    Clear
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Date
                  </label>
                  <CustomDatePicker
                    value={dateValues.signatureDate}
                    onChange={(value) => handleDateChange('signatureDate', value)}
                    placeholder="Select signature date"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="px-8 py-6 flex justify-center gap-4 border-t border-gray-200 relative">
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-sm text-[#5a7a6d] font-medium">
              {currentStep}/{totalSteps}
            </div>
            
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
              >
                Back
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      
      <Modal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        message={modalState.message}
      />
    </div>
  );
}