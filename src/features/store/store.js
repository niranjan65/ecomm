// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../slices/cartSlice";


// export const store = configureStore({
//     reducer: {
//         cartSlice: cartReducer,
//     },
//     middleware: (getDefaultMiddleware) => 
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
//         devTools: process.env.NODE_ENV !== 'production'
// });

// export default store



import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../slices/cartSlice';
import { cartApi } from '../cartApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware),
});

// Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export default store;