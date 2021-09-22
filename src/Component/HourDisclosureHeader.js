import React from 'react'

import { getDate, getTime, getTemp, getFeels_like, getIcon, getPop } from './DataParser'
import { Row, Col } from 'react-bootstrap'

const HourDisclosureHeader = props => {
	var {id, icon} = props.weather[0]

	var date = getDate(props.dt)
	var time = getTime(props.dt)
	var temp = getTemp(props.temp)
	var feels_like = getFeels_like(props.feels_like)
	var iconClass = getIcon(id, icon)
	var pop = getPop(props.pop)

	return(
		<Row style={{width: "100%"}}>
			<Col className="fs-6">{date} {time}</Col>
			<Col className="fs-2" style={{color: "#1b4ddf"}}>{temp}</Col>
			<Col className="disclosure-header-icon"> 
				<i style={{fontSize: "2rem"}} className={iconClass}></i>
			</Col>
			<Col className="disclosure-header-pop">{pop}</Col>
		</Row>
	)
}

export default HourDisclosureHeader