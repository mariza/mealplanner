import React from 'react';
import ReactDOM from 'react-dom';
import css from './css/main.module.scss';
import cn from 'classnames/bind';
import { MealsProvider,MealsContext } from "./js/MealsContext";
import Table from './js/Table';
import Meals from './js/Meals';


const rootEl = document.getElementById('root');


const App = () => {
    return (
        <div>
        <section className={cn(css.section,css.mainSection)}>
      		<div className={cn(css.topContainer,css.noPrint)}>
      			<div className={css.titleContainer}>
              <i className="fa fa-cutlery"></i>Meal Planner
      			</div>
      			<div className={css.descriptionContainer}>
            Let the lunch planner generate a weekly schedule of meals according to what you already know and like to cook.
      			</div>
      		</div>
      		<div className={css.mainContainer}>
          <MealsProvider>
            <Table/>
            <Meals/>
          </MealsProvider>
      		</div>
	      </section>
      	<footer className={cn(css.footer,css.noPrint)}>
        	<div className={css.socialContainer}>
        			<a className={css.linkItem} href="https://ch.linkedin.com/in/marizametaxa" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin</a>
        			<a className={css.linkItem} href="https://twitter.com/marmetaxa" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
        			<a className={css.linkItem} href="https://goo.gl/maps/fKbQxBBxoLu" target="_blank"><i className="fa fa-map-marker" aria-hidden="true"></i>Based in Zürich</a>
        	</div>
          Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
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
