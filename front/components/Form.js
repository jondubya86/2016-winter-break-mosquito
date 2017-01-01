import React from 'react';

function Form() {
    return (
    	<div>
    	<h1>New High Score!</h1>
      	<form>
		<input type='text' placeholder='Insert Name Here'></input>
		<br />
		<input type="submit" value="Submit"></input>
		</form>
		</div>
    );
}

module.exports = Form;