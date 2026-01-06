import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://192.168.101.182:8002';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL,
    credentials: 'include', 
    prepareHeaders: (headers) => {
        headers.set('Authorization', `token 1a5cfcab01776e5:63628feef82aa59`)
    }
  }),
  tagTypes: ['Cart', 'Wishlist'],
  endpoints: (builder) => ({
    // Get cart quotation
    getCartQuotation: builder.query({
      query: () => '/api/method/webshop.webshop.shopping_cart.cart.get_cart_quotation',
      providesTags: ['Cart'],
      transformResponse: (response) => {
        const doc = response.message?.doc;
        return {
          quotation: doc,
          items: doc?.items || [],
          cartSettings: response.message?.cart_settings,
          shippingAddresses: response.message?.shipping_addresses || [],
          billingAddresses: response.message?.billing_addresses || [],
        };
      },
    }),

    // Add item to cart
    addToCart: builder.mutation({
      query: ({ itemCode, qty = 1 }) => ({
        url: '/api/method/webshop.webshop.shopping_cart.cart.update_cart',
        method: 'POST',
        headers: {
            'Authorization': `token 1a5cfcab01776e5:63628feef82aa59`
        },
        body: {
          item_code: itemCode,
          qty: qty,
        },
      }),
      invalidatesTags: ['Cart'],
    }),

    // Update cart item quantity
    updateCartItem: builder.mutation({
      query: ({ itemCode, qty }) => ({
        url: '/api/method/webshop.webshop.shopping_cart.cart.update_cart',
        method: 'POST',
        headers: {
            'Authorization': `token 1a5cfcab01776e5:63628feef82aa59`
        },
        body: {
          item_code: itemCode,
          qty: qty,
        },
      }),
      invalidatesTags: ['Cart'],
    }),

    // Remove from cart
    removeFromCart: builder.mutation({
      query: (itemCode) => ({
        url: '/api/method/webshop.webshop.shopping_cart.cart.update_cart',
        method: 'POST',
        headers: {
            'Authorization': `token 1a5cfcab01776e5:63628feef82aa59`
        },
        body: {
          item_code: itemCode,
          qty: 0,
        },
      }),
      invalidatesTags: ['Cart'],
    }),

    // Add to wishlist
    addToWishlist: builder.mutation({
      query: (itemCode) => ({
        url: '/api/method/webshop.webshop.wishlist.add_to_wishlist',
        method: 'POST',
        headers: {
            'Authorization': `token 1a5cfcab01776e5:63628feef82aa59`
        },
        body: {
          item_code: itemCode,
        },
      }),
      invalidatesTags: ['Wishlist'],
    }),

    // Remove from wishlist
    removeFromWishlist: builder.mutation({
      query: (itemCode) => ({
        url: '/api/method/webshop.webshop.wishlist.remove_from_wishlist',
        method: 'POST',
        headers: {
            'Authorization': `token 1a5cfcab01776e5:63628feef82aa59`
        },
        body: {
          item_code: itemCode,
        },
      }),
      invalidatesTags: ['Wishlist'],
    }),

    //Request for Quotation
     requestQuotation: builder.query({
      query: () => '/api/method/webshop.webshop.shopping_cart.cart.request_for_quotation',
      providesTags: ['Cart'],
      transformResponse: (response) => {
        const doc = response.message;

        console.log("request quotation", doc)
        // return {
        //   quotation: doc,
        //   items: doc?.items || [],
        //   cartSettings: response.message?.cart_settings,
        //   shippingAddresses: response.message?.shipping_addresses || [],
        //   billingAddresses: response.message?.billing_addresses || [],
        // };
      },
    }),
  }),
});

export const {
  useGetCartQuotationQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useRequestQuotationQuery
} = cartApi;