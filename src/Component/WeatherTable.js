import React from 'react'

const WeatherTable = (({time, temp, subtemp, iconClass, pop}) => {
	return(
		<div className="WeatherTable">
			<h6>{time}</h6>
			<h1 className="WeatherTable-Temp">{temp}</h1>
			{ subtemp &&  <p>{subtemp}</p>}
			<i className={`WeatherTable-Icon ${iconClass}`}></i>
			<h5>{pop}</h5>
		</div>
	)
})

export default WeatherTable