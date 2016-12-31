import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

//components
import NavBar from './components/NavBar';
import Home from './components/Home';
import CanvasComponent from './components/Canvas';

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
    	 	<IndexRoute component={Home}/>
    	 	<Route path ="game" component={CanvasComponent}/>
   
    	</Route>
  	</Router>),
	document.getElementById('root'))