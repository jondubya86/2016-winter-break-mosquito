import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
	render(){
		return(
			<div id='navbar-outer'>
				<ul id='navbar-ul'>
				<li><Link to='/'><a>Home</a></Link></li>
				<li><Link to='/game'><a>New Game</a></Link></li>
				<li><Link to='/score'><a>Top Scores</a></Link></li>
				<li><Link to='/about'><a>About</a></Link></li>
				</ul>
			</div>
		)
	}
});

module.exports = NavBar;