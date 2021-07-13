import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Filters.module.css';
import { filterProducts } from '../store/actions/filteredAction';
const Filters = ({ id, title, type }) => {
	const [selected, setSelected] = useState(false);
	const { products } = useSelector((state) => state.details);
	const dispatch = useDispatch();
	const clickHandler = (e) => {
		console.log(e.target.id, id);
		dispatch(filterProducts(products, id, type));
		setSelected((prevState) => !prevState);
	};
	const selectedClass = selected ? classes.filterSelected : classes.filter;
	return (
		<>
			<li className={selectedClass} id={id} onClick={clickHandler}>
				{title}
			</li>
		</>
	);
};

export default Filters;
