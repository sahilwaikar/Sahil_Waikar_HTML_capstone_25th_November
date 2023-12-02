import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Redux/addToCart";
import favreducer from "./Redux/addToFav";
// import favoritereducer from "./redux/favorite";
export default configureStore({
    reducer: {
        Cart: cartreducer,
        Fav: favreducer
    }
});