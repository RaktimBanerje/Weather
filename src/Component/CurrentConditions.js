import React from 'react'

import {getDate, getTime, getTemp, getIcon} from './DataParser'

const CurrentConditions = ({temp, weather, dt})=>{
	const {id, description, icon} = weather[0]
	var name = "Howrah"
	var country = "IN"
	
	var date = getDate(dt)
	var time = getTime(dt)
	var temp = getTemp(temp)
	var iconClass = getIcon(id, icon)

	return(
		<div className="CurrentConditions p-4">
			<div className="CurrentConditions-header">
				<div className="CurrentConditions-location">
					<h5>{name}, {country}</h5>
				</div>
				<div className="CurrentConditions-timestamp">
					<h6>As of {date} {time}</h6>
				</div>
			</div>
			<div className="CurrentConditions-dataWrapper d-flex justify-content-between">
				<div className="CurrentConditions-primary">
					<div className="CurrentConditions-temparature">{temp}</div>
					<div className="CurrentConditions-phraseValue">
						<h4 className="text-light">{description}</h4>
					</div>
				</div>
				<div className="CurrentConditions-secondary">
					<i className={`CurrentConditions-phraseIcon ${iconClass}`}></i>
				</div>
			</div>
		</div>
	)
} 

export default CurrentConditions