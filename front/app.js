import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import './components/styles.css';

//components
import NavBar from './components/NavBar';
import Home from './components/Home.js';
import CanvasComponent from './components/Canvas';
import TopScore from './components/TopScore';
import About from './components/About';

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