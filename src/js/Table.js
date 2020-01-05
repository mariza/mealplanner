import React , {useContext,useState} from 'react';
import { MealsContext } from "./MealsContext";
import cn from 'classnames/bind';
import css from '../css/table.module.scss';


const Table = props => {
  const [mealsGen,setMealsGen] = useState(['']);

  const [meals, setMeals] = useContext(MealsContext);
  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
  }
  const generate =()=>{
    console.log(meals);
    let temp = [];
    let tempArray = JSON.parse(JSON.stringify(meals));
    for(var i=0;i<=6;i++){
      var num = getRandomInt(tempArray.length);
      var roll = tempArray.splice(num, 1);
    //  mealsGen.push(roll[0]);
      temp = [...temp,roll[0]];
    }
    setMealsGen(temp);
    console.log(mealsGen);
  };

return (
  <div className={css.main}>
    <button className={css.actionBtn} onClick={generate}>Generate Weekly Plan</button>
    <div className={css.table}>
      <div className={cn(css.row, css.headerRow)}>
        <div className={cn(css.cell,css.headerCell)}>Monday</div>
        <div className={cn(css.cell,css.headerCell)}>Tuesday</div>
        <div className={cn(css.cell,css.headerCell)}>Wednesday</div>
        <div className={cn(css.cell,css.headerCell)}>Thursday</div>
        <div className={cn(css.cell,css.headerCell)}>Friday</div>
        <div className={cn(css.cell,css.headerCell)}>Saturday</div>
        <div className={cn(css.cell,css.headerCell)}>Sunday</div>
      </div>
      <div className={css.row}>
        {mealsGen.map((item,index)=>{
          return (<div className={css.cell} key={index} id={index}>{item}</div>)
        })}
      </div>
    </div>
</div>);
};

export default Table;
