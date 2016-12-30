import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

//components
import NavBar from './components/NavBar'
import Home from './components/Home'

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
    	 	<Route component={Home}/>
   
    	</Route>
  	</Router>),
	document.getElementById('root'))