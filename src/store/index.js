import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';

const store = configureStore({
    cartReducer,
});

export default store;
