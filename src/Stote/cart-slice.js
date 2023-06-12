import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartOpen: false,
    notification: null,
}
const cartSlice = createSlice({
    name : 'showCart',
    initialState: initialCartState,
    reducers: {
        cartHandler(state) {
            state.cartOpen = !state.cartOpen
        },
        showNotification (state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;