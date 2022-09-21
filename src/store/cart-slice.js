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
        addToCart(state, action) {
            state.numItems += 1;
            console.log('TotalAmount', state.totalAmount);
            state.totalAmount = state.totalAmount + action.payload.price;
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            if (!existingItem) {
                state.cartItems.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
            // state.cartItems.forEach((item) => {
            //     if (item.title === action.payload.title) {
            //         item.quantity++;
            //         item.total += item.price;
            //         return;
            //     }
            // });
            // add to cart if not present
            console.log('NEW ITEM ADDED');
            console.log('CART ITEMS', state.cartItems);
        },
        removeFromCart(state, action) {
            // find item index in cart
            state.numItems -= 1;
            state.totalAmount -= action.payload.price;
            console.log('TotalAmount', state.totalAmount);
            const itemIndex = state.cartItems.findIndex(
                (item) => item.type === action.payload.type
            );
            const item = state.cartItems[itemIndex];
            console.log('ITEM IN REMOVE', item);
            if (item.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.title !== action.payload.title
                );
            } else {
                // keep item in cart but decrease amount
                item.quantity--;
                item.total -= item.price;
                state.cartItems[itemIndex] = item;
                console.log('UPDATED ITEMS', state.cartItems);
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
