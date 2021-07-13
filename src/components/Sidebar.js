import React from 'react';
import classes from './Sidebar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Filters from './Filters';
import { clearProducts } from '../store/actions/filteredAction';
const Sidebar = () => {
	const { colors, material } = useSelector((state) => state.details);
	const dispatch = useDispatch();
	const capitalize = (material) => {
		return material.charAt(0).toUpperCase() + material.slice(1);
	};
	const clearFiltered = () => {
		dispatch(clearProducts());
	};
	return (
		<aside className={classes['page-sidebar']}>
			<ul>
				<p>Tags</p>
				<div>
					<ul className={classes['list-group-items']}>
						<strong>All</strong>
						<li>Generic</li>
						<li>Generic</li>
						<li>Generic</li>
						<li>Generic</li>
					</ul>
				</div>
				<p>Materials</p>
				<div>
					<ul className={classes['list-group-items']}>
						<div onClick={clearFiltered}>All</div>
						{material &&
							material.map((material) => (
								<Filters
									key={material.id}
									id={material.id}
									title={capitalize(material.name)}
									type="byMaterial"
								/>
							))}
					</ul>
				</div>
				<p>Color</p>
				<div>
					<ul className={classes['list-group-items']}>
						<div onClick={clearFiltered}>All</div>
						{colors &&
							colors.map((color) => (
								<Filters
									key={color.id}
									id={color.id}
									title={capitalize(color.name)}
									type="byColor"
								/>
							))}
					</ul>
				</div>
			</ul>
		</aside>
	);
};

export default Sidebar;
