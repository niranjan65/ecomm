import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../slices/cartSlice";
import { cartApi } from "../cartApi";
import productsReducer from "../slices/productsListSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productsList"], // persist ONLY product list
};

// Combine reducers FIRST
const rootReducer = combineReducers({
  cart: cartReducer,
  productsList: productsReducer,
  [cartApi.reducerPath]: cartApi.reducer,
});

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(cartApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// Persistor
export const persistor = persistStore(store);

// Enable RTK Query listeners
setupListeners(store.dispatch);

export default store;
