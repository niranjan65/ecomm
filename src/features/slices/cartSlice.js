

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotation: null,
  items: [],
  cartSettings: null,
  totalQty: 0,
  totalAmount: 0,
  grandTotal: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      const { quotation, items, cartSettings } = action.payload;
      state.quotation = quotation;
      state.items = items;
      state.cartSettings = cartSettings;
      state.totalQty = quotation?.total_qty || 0;
      state.totalAmount = quotation?.total || 0;
      state.grandTotal = quotation?.grand_total || 0;
    },

    clearCart: (state) => {
      state.quotation = null;
      state.items = [];
      state.totalQty = 0;
      state.totalAmount = 0;
      state.grandTotal = 0;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCartData, clearCart, setLoading, setError } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartQuotation = (state) => state.cart.quotation;
export const selectCartSettings = (state) => state.cart.cartSettings;
export const selectCartTotals = (state) => ({
  totalQty: state.cart.totalQty,
  totalAmount: state.cart.totalAmount,
  grandTotal: state.cart.grandTotal,
});
export const selectCartLoading = (state) => state.cart.loading;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;