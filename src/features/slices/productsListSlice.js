
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchData = createAsyncThunk("apicall/fetchData", async (payload) => {
//     console.log("fetchData called with page:", payload.page, "category:", payload.category, "PAGE_LENGTH:", payload.pageLength);
//     const start = (payload.page - 1) * payload.pageLength;
//     try {
//         const response = await fetch('http://192.168.101.182:8002/api/method/webshop.webshop.api.get_product_filter_data', {
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

export const fetchData = createAsyncThunk("apicall/fetchData", async (payload) => {
    // console.log("fetchData called with payload:", payload);
    
    const start = (payload.page - 1) * payload.pageLength;
    console.log("body", {
        query_args: {
            field_filters: {},
            attribute_filters: {},
            item_group: payload.category || null,
            start: start,
            from_filters: false,
            page_length: payload.pageLength,
        }
    });
    
    // Build the query_args object according to the required format
    const query_args = {
        field_filters: payload.filters?.field_filters || {},
        attribute_filters: payload.filters?.attribute_filters || {},
        item_group:  null,
        start: start,
        from_filters: payload.from_filters || false,
        page_length: payload.pageLength,
    };

    // console.log("Sending query_args:", query_args);

    try {
        const response = await fetch('http://192.168.101.182:8002/api/method/webshop.webshop.api.get_product_filter_data', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
            },
            body: JSON.stringify({
                query_args: query_args
            })
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        
        const data = await response.json();
        // console.log("API Response:", data);
        return data.message;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
});

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

export const { clearcategory } = productsList.actions;
export default productsList.reducer;