import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './reducers/detailsSlice';
import cartSlice from './reducers/cartSlice';
import filteredReducer from './reducers/filteredSlice';

const store = configureStore({
	reducer: {
		details: detailsReducer,
		cart: cartSlice.reducer,
		filteredProducts: filteredReducer,
	},
});

export default store;
