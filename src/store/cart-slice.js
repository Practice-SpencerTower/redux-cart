import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cartVisible: false,
    cartItems: [],
    totalAmount: 0,
    numItems: 0,
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
            state.numItems += 1;
            console.log('TotalAmount', state.totalAmount);
            state.totalAmount = state.totalAmount + payload.payload.price;
            let itemInCart = false;
            state.cartItems.forEach((item) => {
                if (item.title === payload.payload.title) {
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
        removeFromCart(state, payload) {
            // find item index in cart
            state.numItems -= 1;
            let itemIndex = state.cartItems.findIndex(
                (item) => item.type === payload.payload.type
            );
            let item = state.cartItems[itemIndex];
            console.log('ITEM IN REMOVE', item);
            if (item.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.title !== payload.payload.title
                );
            } else {
                // keep item in cart but decrease amount
                item.quantity = item.quantity - 1;
                state.cartItems[itemIndex] = item;
                console.log('UPDATED ITEMS', state.cartItems);
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
