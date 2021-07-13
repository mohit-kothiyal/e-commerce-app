import axios from 'axios';
import { detailsActions } from '../reducers/detailsSlice';
// Action Creator
export const loadDetails = () => async (dispatch) => {
	// Fetch Axios
	const productData = await axios.get(
		`https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products`
	);
	const colorsData = await axios.get(
		`https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors`
	);
	const materialsData = await axios.get(
		`https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material`
	);
	const featuredData = await axios.get(
		`https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured`
	);
	dispatch(
		detailsActions.fetchDetails({
			products: productData.data.products,
			colors: colorsData.data.colors,
			material: materialsData.data.material,
			featured: featuredData.data.featured,
		})
	);
};
