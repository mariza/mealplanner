import React, {useContext, useState} from 'react';
import {MealsContext} from "./MealsContext";
import cn from 'classnames/bind';
import css from '../css/table.module.scss';
import LanguageSelector from './LanguageSelector';
import languageTextMap from './LanguagesText';

const Table = props => {
	const [data, setData] = useContext(MealsContext);
	const [language, setLanguage] = useState('en');
	const print = () => {
		window.print();
	};

	const changeLang = (langId) => {
		setLanguage(langId);
	};
	return (<div className={css.main}>
		<div className={cn(css.buttonBar, css.noPrint)}>
			<div className={css.buttons}>
			</div>
			<LanguageSelector onLanguageChange={changeLang}/>
			<button className={css.printBtn} onClick={print}>Print</button>
		</div>
		<div id="table" className={css.table}>
			<div className={cn(css.row, css.headerRow)}>
				<div className={cn(css.cell, css.headerCell, css.smallCell)}></div>
				<div className={cn(css.cell, css.headerCell)}>{languageTextMap[language].days[0]}</div>
				<div className={cn(css.cell, css.headerCell)}>{languageTextMap[language].days[1]}</div>
				<div className={cn(css.cell, css.headerCell)}>{languageTextMap[language].days[2]}</div>
				<div className={cn(css.cell, css.headerCell)}>{languageTextMap[language].days[3]}</div>
				<div className={cn(css.cell, css.headerCell)}>{languageTextMap[language].days[4]}</div>
				<div className={cn(css.cell, css.headerCell)}>{languageTextMap[language].days[5]}</div>
				<div className={cn(css.cell, css.headerCell)}>{languageTextMap[language].days[6]}</div>
			</div>
			<div className={css.row}>
				<div className={cn(css.cell, css.smallCell)} key='0'>{languageTextMap[language].lunch}</div>
				{data.lunchGen.map((item, index) => {
					return (<div className={css.cell} key={index} title={item} id={index}>{item}</div>)
				})}
			</div>
			{data.mode === '2' ? <div className={css.row}>
				<div className={cn(css.cell, css.smallCell)} key='0'>{languageTextMap[language].dinner}</div>
				{data.dinnerGen.map((item, index) => {
					return (<div className={css.cell} key={index} title={item} id={index}>{item}</div>)
				})}
			</div> : null}
		</div>
	</div>);
};

export default Table;
