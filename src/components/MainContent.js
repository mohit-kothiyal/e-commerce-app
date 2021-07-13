import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './MainContent.module.css';
import { loadDetails } from '../store/actions/detailsAction';
import Sidebar from './Sidebar';
import Product from './Product';
const MainContent = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.details);
	const { filtered } = useSelector((state) => state.filteredProducts);

	useEffect(() => {
		dispatch(loadDetails());
	}, [dispatch]);

	return (
		<main className={classes.content}>
			<div className={classes['sidebar-content']}>
				<Sidebar />
				<div className={classes.section}>
					<ul className={classes['products-listing']}>
						{filtered.length > 0
							? filtered.map((product) => (
									<Product
										key={product.id}
										id={product.id}
										name={product.name}
										image={product.image}
										price={product.price}
										colorId={product.colorId}
										materialId={product.materialId}
									/>
							  ))
							: products &&
							  products.map((product) => (
									<Product
										key={product.id}
										id={product.id}
										name={product.name}
										image={product.image}
										price={product.price}
										colorId={product.colorId}
										materialId={product.materialId}
									/>
							  ))}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default MainContent;
