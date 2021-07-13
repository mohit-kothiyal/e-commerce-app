import React from 'react';
import classes from './Nav.module.css';
import cartIcon from '../assets/Shopping Cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, clearProducts } from '../store/actions/filteredAction';
const Nav = () => {
	const { totalQuantity } = useSelector((state) => state.cart);
	const { products, featured } = useSelector((state) => state.details);
	const dispatch = useDispatch();
	const loadFeaturedHandler = () => {
		const type = 'featured';
		dispatch(filterProducts(products, featured, type));
	};
	const clearFeaturedHandler = () => {
		dispatch(clearProducts());
	};
	return (
		<nav>
			<div className={classes.breadcrumb}>
				<div onClick={clearFeaturedHandler}>
					<span>All Products</span>
				</div>
				<div onClick={loadFeaturedHandler}>
					<span>Featured Products</span>
				</div>
			</div>
			<div className={classes['cart-icon']}>
				<img src={cartIcon} alt="cart"></img>
				<span>{totalQuantity}</span>
			</div>
		</nav>
	);
};

export default Nav;
