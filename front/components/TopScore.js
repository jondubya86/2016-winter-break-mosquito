import React from 'react';
import $ from 'jquery';

const TopScore = React.createClass({
	getInitialState() {
		return {topscore: null}
	},
	componentDidMount(){
		$.ajax({
			url: '/api/highscore',
			type: 'GET',
		}).done((data)=>
		this.setState({topscore: data}))
	},
	render(){
		console.log(this.state.topscore)
		return(
			<div id='topscore'>
			<ul id='topscore-ul'>
			{(this.state.topscore)?
				this.state.topscore.map((a,idx)=><li key={idx}>{a.name} {a.score} points!</li>):
					<h1>Loading...</h1>}
			</ul>
			</div>
		)
	}
});

module.exports = TopScore;