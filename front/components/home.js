import React from 'react';

function Home(){
	return(
		<div id='home'>
				<div id='home-title'>
					<img id='logo' src='http://i.imgur.com/NkPAl5R.png'></img>
					<span><h1>Zika Attack!</h1></span>
				</div>
				<div id='home-body'>
					<p>You were abruptly awoken from your slumber with buzzing sounds and notice there has been a breach in your screen window! A swarm of mosquitos has overrun your room and hiding. It is your sole duty as a Swat-a-wan to prevent these bloodsuckers from feasting upon your delicious blood. </p>
					<p>You may not get them all but you shall try! We have given you a light-swatter to dispose of these parasites. We hope you fare better than past Swat-a-wans whom have also risen to the challenge.</p>
					<p>May the reflex be with you.</p>
				</div>
			</div>
		)
	};

module.exports = Home;