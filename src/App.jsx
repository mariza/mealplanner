import React from 'react';
import ReactDOM from 'react-dom';
import css from './css/main.module.scss';
import cn from 'classnames/bind';



const rootEl = document.getElementById('root');


const App = () => {
    return (
        <div>
            <section className={cn(css.section,css.mainSection)}>
      		<div className={css.topContainer}>
      			<div className={css.titleContainer}>
      				Lunch Planner
      			</div>
      			<div className={css.descriptionContainer}>
      			</div>
      		</div>
      		<div className={css.mainContainer}>
      			<button className={css.actionBtn}>Generate Weekly Plan</button>
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
      					<div className={css.cell} id="1"></div>
      					<div className={css.cell} id="2"></div>
      					<div className={css.cell} id="3"></div>
      					<div className={css.cell} id="4"></div>
      					<div className={css.cell} id="5"></div>
      					<div className={css.cell} id="6"></div>
      					<div className={css.cell} id="7"></div>
      				</div>
      			</div>
      		</div>

	        </section>
      	<footer className={css.footer}>
        	<div className={css.footerContainer}>
        			<a className={css.linkItem} href="https://ch.linkedin.com/in/marizametaxa" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin</a>
        			<a className={css.linkItem} href="https://twitter.com/marmetaxa" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
        			<a className={css.linkItem} href="https://goo.gl/maps/fKbQxBBxoLu" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>Based in Zürich</a>
        	</div>
        			<div className={cn(css.silentItem,css.copyrightItem)}><i className="fa fa-copyright" aria-hidden="true"></i>Lunch Planner</div>
      	</footer>
    </div>
        );
};

const renderApp = () => {
    ReactDOM.render(
        <App />, rootEl
    );
}

renderApp();


// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}
