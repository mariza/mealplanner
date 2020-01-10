import React, {useContext} from 'react';
import {MealsContext} from "./MealsContext";
import css from '../css/meals.module.scss';
import cn from 'classnames/bind';
import List from './list/List';
import MealsInput from './MealsInput';
import Rules from './Rules';


const Meals = props => {
	const [data, setData] = useContext(MealsContext);

	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	const generate = () => {
		let temp = [];
		let tempDinner = [];
		let tempArray1 = JSON.parse(JSON.stringify(data.meals));
		let tempArray2 = JSON.parse(JSON.stringify(data.meals));

		for (var i = 0; i <= 6; i++) {
			var num1 = getRandomInt(tempArray1.length);
			var num2 = getRandomInt(tempArray2.length);

			var roll1 = tempArray1.splice(num1, 1);
			var roll2 = tempArray2.splice(num2, 1);

			temp = [
				...temp,
				roll1[0]
			];
			tempDinner = [
				...tempDinner,
				roll2[0]
			];
		}
		setData({
			lunchGen: temp,
			meals: data.meals,
			mode: data.mode,
			dinnerGen: tempDinner
		});
	};

	return (<div className={cn(css.main, 'noPrint')}>
			<div className={cn(css.mealsInput, css.section)}>
				<div className={css.sectionTitle}>1. Add the meals</div>
				<MealsInput/>
				<List/>
			</div>
			<div className={css.section}>
				<div className={css.sectionTitle}>2. Specify the rules</div>
				<Rules/>
			</div>
			<div className={css.section}>
				<div className={css.sectionTitle}>3. Generate the schedule</div>
				<button className={css.actionBtn} onClick={generate}>Generate Weekly Plan</button>
			</div>
		</div>);
};

export default Meals;
