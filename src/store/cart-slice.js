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
            state.cartItems.length &&
                state.cartItems.forEach((item) => {
                    if (item.type === payload.type) {
                        item.count += 1;
                        return;
                    }
                });
            // add to cart if not present
            state.cartItems = [...state.cartItems, payload.payload];
            console.log('CART ITEMS', state.cartItems);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
