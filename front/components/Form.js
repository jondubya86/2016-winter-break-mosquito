import React from 'react';
import $ from 'jquery';

const Form = React.createClass({
	getInitialState() {
		return {data:null, input: ''}
	},
	componentDidMount() {
		$.ajax({
			url: '/api/highscore',
			type: 'GET'
		}).done((data)=>
		this.setState({data: data}))
	},
	handleChange(event) {
		this.setState({input: event.target.value})
	},
	addTopScore() {
		$.ajax({
			url: '/api/highscore',
			type: 'POST',
			data: {	name: this.state.input,
					score: this.props.score
				}
		}).then((data)=>console.log(data,'score added!'))
	},
	render() {
    	return (
    		<div id='highscore-form'>
    		<h1>New High Score!</h1>
      		<form id='form' onSubmit={this.addTopScore}>
			<input 	type='text' 
					placeholder='Insert Name Here'
					onChange={this.handleChange}
					value={this.state.input}>
			</input>
			<br />
			<input type="submit" value="Submit"></input>
			</form>
			</div>
    	)
    }
});

module.exports = Form;