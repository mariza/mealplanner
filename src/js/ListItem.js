import React from 'react';
import css from '../css/recipeinput.module.scss';


const ListItem = props => {
	return (<li className={css.listItem} key={props.index}>
		<div>{props.item}</div>
		<div className={css.deleteBtn} onClick={props.deleteItem.bind(this, props.item)}><i className="fa fa-trash" aria-hidden="true"/></div>
	</li>);
};

export default ListItem;
