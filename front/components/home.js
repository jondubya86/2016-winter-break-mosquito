import React from 'react';

const Home = React.createClass({
	render(){
		return(
			<div id='home'>
				<div id='home-title'>
					<h1>Zika Attack!</h1>
				</div>
				<div id='home-body'>
					<p>You are awaken from your slumber and it is your sole duty as a Swat-a-wan to prevent these filthy bloodsuckers from tasting your precious blood. You may not get them all but you shall try and prevail. We have given you a light-swatter to dispose of these parasites. We hope you fare better than those Swat-a-wans who have come before you.</p>
					<p>May the reflex be with you.</p>
				</div>
			</div>
		)
	}
});

module.exports = Home;