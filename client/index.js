import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// --------------------------------------
// Page component imports sfssf
// --------------------------------------
import HomePage from './HomePage/HomePage.js';
import ProjectPage from './ProjectPage/ProjectPage.js';
import ShipOfTheseus from './Articles/ShipOfTheseus.js';

ReactDOM.render(
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/projects" component={ProjectPage} />
				<Route exact path="/ship-of-theseus" component={ShipOfTheseus} />
			</Switch>
		</div>
	</Router>,
	 document.getElementById('root'));
