import React, {useState} from 'react';
import css from '../css/languageselector.module.scss';

import greekFlag from '../css/icons/greece.svg';
import germanFlag from '../css/icons/germany.svg';
import ukFlag from '../css/icons/united-kingdom.svg';

const flagIconMap = {
	'en': ukFlag,
	'de': germanFlag,
	'gr': greekFlag,
};

const LanguageSelector = props => {
	const [toggle, setToggle] = useState(false);
	const [language, setLanguage] = useState('en');
	const toggleMenu = () => {
		if (toggle === true) {
			setToggle(false);
		} else {
			setToggle(true);
		}
	};

	const selectLang = (data, ev) => {
		setToggle(false);
		props.onLanguageChange(data);
		setLanguage(data);
	};
	return (<div className={css.wrapper}>
			<button className={css.dropdown} onClick={toggleMenu}>Select language<img className={css.flagIcon} src={flagIconMap[language]}/></button>
			{toggle ? <div className={css.menu}>
				<div value="en" className={css.menuItem} onClick={selectLang.bind(this, 'en')} id="en"><img className={css.flagIcon} src={ukFlag}></img></div>
				<div value="de" className={css.menuItem} onClick={selectLang.bind(this, 'de')} id="de"><img className={css.flagIcon} src={germanFlag}></img></div>
				<div value="el" className={css.menuItem} onClick={selectLang.bind(this, 'gr')} id="gr"><img className={css.flagIcon} src={greekFlag}></img></div>
			</div> : null}
		</div>);
};


export default LanguageSelector;
