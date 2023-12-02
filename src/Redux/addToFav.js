import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
    name: 'Fav',
    initialState: [],
    reducers: {
        addToMyfav: (state, action) => {
            const ProductToAdd = action.payload;
            state.push(ProductToAdd);

        },
        removeFromFav: (state, action) => {
            const ProductToRemove = action.payload;
            state.pop(ProductToRemove);
        }
    }
})

export const { addToMyfav, removeFromFav } = favSlice.actions;

export default favSlice.reducer;