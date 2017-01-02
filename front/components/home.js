import React from 'react';

const Home = React.createClass({
	render(){
		return(
			<div id='home'>
				<div id='home-title'>
					<img id='logo' src='http://i.imgur.com/NkPAl5R.png'></img>
					<span><h1>Zika Attack!</h1></span>
				</div>
				<div id='home-body'>
					<p>You are abruptly disturbed from your slumber with a buzzing sound and noticed there has been a breach in your screen window! There is a mosquito infestation in your room and it is your sole duty as a Swat-a-wan to prevent these filthy bloodsuckers from tasting your precious blood. </p>
					<p>You may not get them all but you shall try, and prevail! We have given you a light-swatter to dispose of these parasites. We hope you fare better than past Swat-a-wans whom have also risen to the challenge.</p>
					<p>May the reflex be with you.</p>
				</div>
			</div>
		)
	}
});

module.exports = Home;