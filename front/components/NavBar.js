import React from 'react';
import {Link} from 'react-router';

const NavBar = React.createClass({
	render(){
		return(
			<div id='navbar-outer'>
				<ul id='navbar-ul'>
				<li><Link to='/'><span>Home</span></Link></li>
				<li><Link to='/game'><span>New Game</span></Link></li>
				<li><Link to='/score'><span>Top Scores</span></Link></li>
				<li><Link to='/about'><span>About</span></Link></li>
				</ul>
			</div>
		)
	}
});

export default NavBar;