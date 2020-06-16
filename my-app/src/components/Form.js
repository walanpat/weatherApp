import React from "react";

const Form = props => (
	<form  className="boxform" onSubmit={props.getWeather}>
		<input className="inputBox"type="text" name="city" placeholder="City..."/>
		<input className="inputBox" type="text" name="country" placeholder="Country..."/>
		<button className="submitButton">Get Weather</button>
	</form>
);

export default Form;