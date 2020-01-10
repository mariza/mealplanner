import React, {useState, useContext} from 'react';
import {MealsContext} from "./MealsContext";

import css from '../css/recipeinput.module.scss';

const MealsInput = props => {
	const [data, setData] = useContext(MealsContext);
	const [value, setValue] = useState('');
	const ref = React.createRef();
	const saveMeal = (ev) => {
		const node = ref.current;
		setData({
			meals: [
				...data.meals,
				node.value
			],
			lunchGen: data.lunchGen,
			dinnerGen: data.dinnerGen,
			mode: data.mode
		});
		setValue('');
		ref.current.focus();
	};

	return (<div className={css.main}>
			<div className={css.inputLabel}>Which meals you usually cook and want to add to the weekly schedule?</div>
			<div className={css.form}>
				<input ref={ref} className={css.inputField} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
				<button className={css.saveBtn} onClick={saveMeal}>Add</button>
			</div>
		</div>);
};

export default MealsInput;
