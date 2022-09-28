import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cartVisible: false,
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
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
            state.totalQuantity += 1;
            const newItem = action.payload;
            console.log('TotalAmount', state.totalAmount);
            state.totalAmount = state.totalAmount + newItem.price;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            if (!existingItem) {
                console.log('Item not found!!! New Item Created');
                console.log('CART: ', state.cartItems);
                state.cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
            console.log('CART ITEMS', state.cartItems);
        },
        removeFromCart(state, action) {
            // find item index in cart
            state.totalQuantity--;
            state.totalAmount -= action.payload.price;
            // let existingItem;
            // state.cartItems.forEach((item) => {
            //     console.log('ITEM', item);
            //     if (item.id === action.payload.id) {
            //         existingItem = item;
            //     }
            // });
            // console.log('existingItem', existingItem);
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            console.log('REMOVE ITEM', existingItem);
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                // keep item in cart but decrease amount
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
                console.log('UPDATED ITEMS', state.cartItems);
            }
            console.log(state);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
