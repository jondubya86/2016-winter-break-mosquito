import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
	render(){
		return(
			<div id='navbar-outer'>
				<ul id='navbar-inner'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/game'>New Game</Link></li>
				<li><Link to='/score'>Top Scores</Link></li>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/login'>Log-In</Link></li>
				</ul>
			</div>
		)
	}
});

module.exports = NavBar;