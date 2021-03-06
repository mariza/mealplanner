import React, {useContext} from 'react';
import {MealsContext} from "../MealsContext";
import css from './list.module.scss';
import ListItem from './ListItem';


const List = props => {
	const [data, setData] = useContext(MealsContext);
	const deleteItem = (item) => {
		const _meals = data.meals.filter(_meals => _meals !== item);
		setData({
			meals: _meals,
			lunchGen: data.lunchGen,
			dinnerGen: data.dinnerGen,
			mode: data.mode
		})
	};
	const items = data.meals.map((item, index) => {
		return <ListItem key={index} index={index} item={item} deleteItem={deleteItem}/>
	});
	return (<ul className={css.list}>{items}</ul>);
};

export default List;
