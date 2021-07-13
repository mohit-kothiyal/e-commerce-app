import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
	filtered: [],
};

const filteredSlice = createSlice({
	name: 'filteredProducts',
	initialState: initialFilterState,
	reducers: {
		fetchFilteredProducts(state, action) {
			state.filtered = action.payload.filteredProducts;
		},
	},
});
export const filteredActions = filteredSlice.actions;
export default filteredSlice.reducer;
