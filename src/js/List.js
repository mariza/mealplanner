import React,{useContext} from 'react';
import { MealsContext } from "./MealsContext";
import cn from 'classnames/bind';
import css from '../css/recipeinput.module.scss';
import ListItem  from './Listitem';


const List = props => {
  const [meals, setMeals] = useContext(MealsContext);
  const deleteItem = (item) => {
    const _meals = meals.filter(_meals => _meals !== item)
    setMeals(_meals)
  };
  const items = meals.map((item, index) => {
      return <ListItem key={index} index={index} item={item} deleteItem={deleteItem}/>
    });
    return (<ul className={css.list}>{items}</ul>);
};

export default List;
