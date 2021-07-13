import { filteredActions } from '../reducers/filteredSlice';
export const filterProducts = (products, id, type) => async (dispatch) => {
	if (type === 'byMaterial') {
		const filteredProducts = products
			.filter((product) => product.materialId === id)
			.map((product) => product);
		dispatch(
			filteredActions.fetchFilteredProducts({
				filteredProducts,
			})
		);
	} else if (type === 'byColor') {
		const filteredProducts = products
			.filter((product) => product.colorId === id)
			.map((product) => product);
		dispatch(
			filteredActions.fetchFilteredProducts({
				filteredProducts,
			})
		);
	} else if (type === 'featured') {
		const filteredProducts = products.filter((product) =>
			id.find((featured) => featured.productId === product.id)
		);

		dispatch(
			filteredActions.fetchFilteredProducts({
				filteredProducts,
			})
		);
	}
};

export const clearProducts = () => async (dispatch) => {
	dispatch(
		filteredActions.fetchFilteredProducts({
			filteredProducts: [],
		})
	);
};
