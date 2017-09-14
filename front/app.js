import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import './components/styles.css';

//components
import NavBar from './components/navbar.jsx';
import Home from './components/home.js';
import CanvasComponent from './components/canvas.jsx';
import TopScore from './components/topscore.jsx';
import About from './components/about.js';


const App = React.createClass({
	render(){
		return(
			<div>
			<NavBar/>
				{this.props.children}
			</div>
		)
	}
});

render((
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    	 	<IndexRoute component={Home} />
    	 	<Route path="game" component={CanvasComponent} />
    	 	<Route path="score" component={TopScore} />
    	 	<Route path="about" component={About} />
    	</Route>
  	</Router>),
	document.getElementById('root'))