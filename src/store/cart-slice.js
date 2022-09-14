import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cartVisible: false,
    cartItems: [],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        showCart(state) {
            state.cartVisible = true;
        },
        hideCart(state) {
            state.cartVisible = false;
        },
        addToCart(state, payload) {
            state.cartItems = [...state.cartItems, payload];
            console.log('CART ITEMS', state.cartItems);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
