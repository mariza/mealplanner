import React, {useState,useContext} from 'react';
import { MealsProvider,MealsContext } from "./MealsContext";
import cn from 'classnames/bind';
import css from '../css/recipeinput.module.scss';

const MealsInput = props =>{
 const [meals, setMeals] = useContext(MealsContext);
 const [value, setValue] = useState('');
 const ref = React.createRef();
  var foodArray = ["Lentil soup","Bean soup","Pasta with rahm","Steak", "Shoes","Salmon","Pizza","Bolognese"];

  const saveMeal = (ev) =>{
    const node = ref.current;
    setMeals([...meals,node.value]);
    setValue('');
  };

  return (
      <div className={css.main}>
        <input ref={ref} className={css.inputfield} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button className={css.saveBtn} onClick={saveMeal}>Save</button>
      </div>
  );
};

export default MealsInput;
