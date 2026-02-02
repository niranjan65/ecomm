
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchData = createAsyncThunk("apicall/fetchData", async (payload) => {
//     console.log("fetchData called with page:", payload.page, "category:", payload.category, "PAGE_LENGTH:", payload.pageLength);
//     const start = (payload.page - 1) * payload.pageLength;
//     try {
//         const response = await fetch('https://mycardpng.com/api/method/webshop.webshop.api.get_product_filter_data', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//             },
//             body: JSON.stringify({
//                 query_args: {
//                     field_filters: {"item_group": ['Products']} || {},
//                     attribute_filters: payload.filters?.attribute_filters || {},
//                     item_group: payload.category || null,
//                     start: start,
//                     from_filters: true,
//                     page_length: payload.pageLength,
//                 }
//             })
//         });
//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         return data.message;
//     } catch (error) {
//         throw error;
//     }
// });

// const productsList = createSlice({
//     name: "productsList",
//     initialState: {
//         state: "idle",
//         data: [],
//         category: "",
//         error: "null",
//     },
//     reducers: {
//         clearcategory: (state) => {
//             state.category = "";
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchData.pending, (state) => {
//             state.state = "loading";
//         })
//             .addCase(fetchData.fulfilled, (state, action) => {
//                 state.state = "succeeded";
//                 state.category = action.meta.arg.category || "";
//                 state.data = action.payload;
//             })
//             .addCase(fetchData.rejected, (state, action) => {
//                 state.state = "failed";
//                 state.error = action.error.message || "Something went wrong";
//             });
//     },
// });
// export const { clearcategory } = productsList.actions;
// export default productsList.reducer;




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "apicall/fetchData",
  async (payload) => {
console.log("payload", payload)
    const start = (payload.page - 1) * payload.pageLength;
    const showCategory = {};
    const fieldFilters = payload.filters?.field_filters || {};
    const attributeFilters = payload.filters?.attribute_filters || {};

    if(!payload.from_filters && payload.category){
      showCategory.category = payload.category
    } else {
      showCategory.category = null
    }

    const query_args = {
      field_filters: fieldFilters,
      attribute_filters: attributeFilters,
      item_group: showCategory.category,
      start,
      from_filters: payload.from_filters || false,
      page_length: payload.pageLength,
    };

    console.log("query args",query_args)
    
    // if (!payload.from_filters && payload.category) {
    //   query_args.item_group = payload.category;
    //   query_args.category= payload.category
    // }


    try {
      const response = await fetch(
        "https://mycardpng.com/api/method/webshop.webshop.api.get_product_filter_data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: "token 1a5cfcab01776e5:63628feef82aa59",
          },
          body: JSON.stringify({ query_args }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      return data.message;

    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
);



const productsList = createSlice({
    name: "productsList",
    initialState: {
        state: "idle",
        data: {
            items: [],
            filters: {},
            items_count: 0,
            start: 0,
            has_more: false
        },
        category: "",
        error: null,
    },
    reducers: {
        setCategory: (state, action) => {
      state.category = action.payload;
    },
        clearcategory: (state) => {
            state.category = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.state = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.state = "succeeded";
                state.category = action.meta.arg.category || "";
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.state = "failed";
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export const { setCategory, clearcategory } = productsList.actions;
export default productsList.reducer;