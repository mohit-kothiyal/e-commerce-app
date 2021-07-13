import React from 'react';
import classes from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/reducers/cartSlice';
const Product = ({ id, name, image, price, colorId, materialId }) => {
	const { colors, material } = useSelector((state) => state.details);

	const productColor = (colorId) => {
		return colors
			.filter((color) => color.id === colorId)
			.map((color) => color.name.toUpperCase());
	};
	const productMaterial = (materialId) => {
		return material
			.filter((mat) => mat.id === materialId)
			.map((mat) => mat.name.toUpperCase());
	};
	const dispatch = useDispatch();
	const addToCartHandler = () => {
		dispatch(cartActions.addProduct({ id, name, price }));
	};
	return (
		<li key={id} className={classes['product-item']}>
			<article className={classes['item']}>
				<div className={classes['image-container']} onClick={addToCartHandler}>
					<a href="_target">
						<img src={image} alt="product-item" />
					</a>

					<div className={classes['overlay']}>
						<span className={classes.text}>Add to Cart</span>
					</div>
				</div>

				<div className={classes['item-details']}>
					<h3 className={classes['item-heading']}>
						<a className="link" href="_target">
							{name}
						</a>
					</h3>
					<strong className="item-color">{productColor(colorId)}</strong>
					<p>{productMaterial(materialId)}</p>
					<span className={classes['item-price']}>INR {price}</span>
				</div>
			</article>
		</li>
	);
};

export default Product;
