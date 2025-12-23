import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Lock, Eye, EyeOff, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

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

export default function PasswordResetPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success',
    message: ''
  });

  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");

  console.log('the value of key ', key)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  const closeModal = () => {
    setModalState({ isOpen: false, type: 'success', message: '' });
  };

  const showModal = (type, message) => {
    setModalState({ isOpen: true, type, message });
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/(?=.*[a-z])/.test(value)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/(?=.*\d)/.test(value)) {
      return 'Password must contain at least one number';
    }
    if (!/(?=.*[@$!%*?&#])/.test(value)) {
      return 'Password must contain at least one special character (@$!%*?&#)';
    }
    return true;
  };

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      console.log('Password Reset Data:', data);
      
      const response = await axios.post(
      "http://192.168.101.182:8002/api/method/custom.api.update_password.custom_update_password",   {
        key,
        new_password: password
      },
       {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
  }
}
   
    );

    console.log(response.data.message);

      // For demo purposes:
      showModal('success', 'Your password has been reset successfully!');
    } catch (error) {
      console.error('Error:', error);
      showModal('error', 'An error occurred. Please try again.');
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: '', color: '', width: '0%' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/(?=.*[a-z])/.test(password)) strength++;
    if (/(?=.*[A-Z])/.test(password)) strength++;
    if (/(?=.*\d)/.test(password)) strength++;
    if (/(?=.*[@$!%*?&#])/.test(password)) strength++;

    if (strength <= 2) return { strength: 'Weak', color: 'bg-red-500', width: '33%' };
    if (strength <= 4) return { strength: 'Medium', color: 'bg-yellow-500', width: '66%' };
    return { strength: 'Strong', color: 'bg-green-500', width: '100%' };
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="min-h-screen bg-white py-8 px-5 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-[#F0DAC5] rounded-lg shadow-lg">
          {/* Logo Section */}
          {/* <div className="flex w-full justify-center pt-8">
            <div className="w-24 h-24 bg-[#2d5f4f] rounded-full flex items-center justify-center">
              <Lock className="w-12 h-12 text-white" />
            </div>
          </div> */}

          {/* Header */}
          <div className="border-b border-gray-300 px-10 py-7">
            <h1 className="text-3xl font-medium text-[#252c3e] text-center">
              Reset Password
            </h1>
            <p className="text-center text-[#5a7a6d] mt-2 text-sm">
              Please enter your new password
            </p>
          </div>

          {/* Form */}
          <div className="p-10 space-y-6">
            {/* New Password */}
            <div className="mb-6">
              <label className="block text-[#252c3e] font-medium text-base mb-2">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a7a6d] w-5 h-5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    validate: validatePassword
                  })}
                  placeholder="Enter new password"
                  className="w-full px-3 py-2.5 pl-10 pr-10 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a7a6d] hover:text-[#2eb79f] transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#5a7a6d]">Password Strength:</span>
                    <span className={`text-xs font-medium ${
                      passwordStrength.strength === 'Weak' ? 'text-red-600' :
                      passwordStrength.strength === 'Medium' ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {passwordStrength.strength}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${passwordStrength.color} transition-all duration-300`}
                      style={{ width: passwordStrength.width }}
                    />
                  </div>
                </div>
              )}

              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
              )}

              {/* Password Requirements */}
              <div className="mt-3 space-y-1">
                <p className="text-xs text-[#5a7a6d] font-medium">Password must contain:</p>
                <ul className="text-xs text-[#5a7a6d] space-y-1 ml-4">
                  <li className={password?.length >= 8 ? 'text-green-600' : ''}>
                    • At least 8 characters
                  </li>
                  <li className={/(?=.*[a-z])/.test(password) ? 'text-green-600' : ''}>
                    • One lowercase letter
                  </li>
                  <li className={/(?=.*[A-Z])/.test(password) ? 'text-green-600' : ''}>
                    • One uppercase letter
                  </li>
                  <li className={/(?=.*\d)/.test(password) ? 'text-green-600' : ''}>
                    • One number
                  </li>
                  <li className={/(?=.*[@$!%*?&#])/.test(password) ? 'text-green-600' : ''}>
                    • One special character (@$!%*?&#)
                  </li>
                </ul>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-[#252c3e] font-medium text-base mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a7a6d] w-5 h-5 pointer-events-none" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2.5 pl-10 pr-10 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a7a6d] hover:text-[#2eb79f] transition"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                onClick={handleSubmit(onSubmit)}
                className="w-full bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
              >
                Reset Password
              </button>
            </div>
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