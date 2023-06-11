import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart-slice'
import cartItemsReducer from './cartItem-slice'


const store = configureStore({
    reducer: { showCart: cartReducer, cartItems: cartItemsReducer }
})

export default store;