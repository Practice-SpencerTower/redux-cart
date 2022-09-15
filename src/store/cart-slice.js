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
            let itemInCart = false;
            state.cartItems.forEach((item) => {
                if (item.title === payload.payload.title) {
                    console.log('TRUE');
                    item.quantity += 1;
                    itemInCart = true;

                    return;
                }
            });
            if (itemInCart) return;
            // add to cart if not present
            console.log('NEW ITEM ADDED');
            state.cartItems = [...state.cartItems, payload.payload];
            console.log('CART ITEMS', state.cartItems);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
