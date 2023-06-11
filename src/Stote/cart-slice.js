import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartOpen: false
}
const cartSlice = createSlice({
    name : 'cart',
    initialState: initialCartState,
    reducers: {
        cartHandler(state) {
            state.cartOpen = !state.cartOpen
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;