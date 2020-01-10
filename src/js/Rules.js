import React, {useContext} from 'react';
import Meals from "./Meals";
import css from "../css/rules.module.scss";
import {MealsContext} from "./MealsContext";

const Rules = props => {
	const [data, setData] = useContext(MealsContext);
	const modeChange = (ev) => {
		setData({
			mode: ev.target.value,
			lunchGen: data.lunchGen,
			meals: data.meals,
			dinnerGen: data.dinnerGen
		});
	};
	return (<div className={css.radioInputs}>
		<label className={css.radioLabel}><input type="radio" name="mealtype" value="1" checked={data.mode === '1'} onChange={modeChange}/>Just Lunch</label>
		<label className={css.radioLabel}><input type="radio" name="mealtype" value="2" checked={data.mode === '2'} onChange={modeChange}/>Lunch and Dinner</label>
	</div>);
};
export default Rules;