import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

const App = React.createClass({
	render(){
		return(
			<div>
				Hi
			</div>
		)
	}
});

render((
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    	</Route>
  	</Router>),
	document.getElementById('root'))