import { createSlice } from '@reduxjs/toolkit';

const initialDetailsState = {
	colors: [],
	products: [],
	material: [],
	featured: [],
};

const detailsSlice = createSlice({
	name: 'details',
	initialState: initialDetailsState,
	reducers: {
		fetchDetails(state, action) {
			state.products = action.payload.products;
			state.colors = action.payload.colors;
			state.material = action.payload.material;
			state.featured = action.payload.featured;
		},
	},
});
export const detailsActions = detailsSlice.actions;
export default detailsSlice.reducer;
