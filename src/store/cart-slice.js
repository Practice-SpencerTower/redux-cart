import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cartVisible: false,
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
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
