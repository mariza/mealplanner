import React , {useContext,useState} from 'react';
import { MealsContext } from "./MealsContext";
import cn from 'classnames/bind';
import css from '../css/table.module.scss';


const Table = props => {
  const [data, setData] = useContext(MealsContext);

  const print = () =>{
    window.print();
  };
return (
  <div className={css.main}>
    <div className={cn(css.buttonBar, css.noPrint)}>
      <div className={css.buttons}>
      </div>
      <button className={css.printBtn} onClick={print}>Print</button>
    </div>
    <div  id="table" className={css.table}>
      <div className={cn(css.row, css.headerRow)}>
        <div className={cn(css.cell,css.headerCell,css.smallCell)}></div>
        <div className={cn(css.cell,css.headerCell)}>Monday</div>
        <div className={cn(css.cell,css.headerCell)}>Tuesday</div>
        <div className={cn(css.cell,css.headerCell)}>Wednesday</div>
        <div className={cn(css.cell,css.headerCell)}>Thursday</div>
        <div className={cn(css.cell,css.headerCell)}>Friday</div>
        <div className={cn(css.cell,css.headerCell)}>Saturday</div>
        <div className={cn(css.cell,css.headerCell)}>Sunday</div>
      </div>
      <div className={css.row}>
      <div className={cn(css.cell,css.smallCell)} key='0' >Lunch:</div>
        {data.lunchGen.map((item,index)=>{
          return (<div className={css.cell} key={index} title={item} id={index}>{item}</div>)
        })}
      </div>
      {data.mode==='2'?
        <div className={css.row}>
        <div className={cn(css.cell,css.smallCell)} key='0' >Dinner:</div>
          {data.dinnerGen.map((item,index)=>{
            return (<div className={css.cell} key={index} title={item} id={index}>{item}</div>)
          })}
        </div>
        :null}
    </div>
</div>);
};

export default Table;
