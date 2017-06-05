import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// --------------------------------------
// Page component imports
// --------------------------------------
import NavBar from './NavBar/NavBar.js';
import HomePage from './HomePage/HomePage.js';

ReactDOM.render(
	<Router>
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	</Router>,
	 document.getElementById('root'));
