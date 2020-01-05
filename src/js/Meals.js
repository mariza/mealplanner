import React from 'react';
import { MealsProvider } from "./MealsContext";
import css from '../css/recipeinput.module.scss';
import List from './List';
import MealsInput from './MealsInput';


const Meals = props =>{
  return (
    <div className={css.mainMeals}>
        <MealsInput/>
        <List />
    </div>
  );
};

export default Meals;
