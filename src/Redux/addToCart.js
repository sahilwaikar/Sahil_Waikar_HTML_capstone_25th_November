import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addToMyCart: (state, action) => {
           
            const ProductToAdd = action.payload;
            console.log(ProductToAdd);
            state.push(ProductToAdd);
        },
        removeFromMyCart: (state, action) => {
            const ProductToRemove = action.payload;
            state.pop(ProductToRemove);
        }
    }
})

export const {addToMyCart, removeFromMyCart} = cartSlice.actions;

export default cartSlice.reducer;