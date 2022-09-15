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
            let itemIndex = state.cartItems.findIndex(
                (item) => item.type === payload.type
            );
            let item = state.cartItems[itemIndex];
            let updatedItems;
            if (item.quantity === 1) {
                updatedItems = state.cartItems.filter(
                    (item) => item.title !== payload.payload.title
                );
            } else {
                // keep item in cart but decrease amount
                const updatedItem = {
                    ...item,
                    quantity: item.quantity--,
                };
                updatedItems = [...state.cartItems];
                updatedItems[itemIndex] = updatedItem;
            }
            return {
                cartItems: updatedItems,
            };
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
