import React from 'react'

import { Card } from 'react-bootstrap'

const TodayDetailsItem = ({icon, title, data}) => {
	return(
		<Card className="Item mt-md-2">
			<Card.Body className="d-flex">
				<i className={icon}></i>
				<span>{title}</span>
				<span style={{marginLeft: 'auto'}}>{data}</span>
			</Card.Body>
		</Card>	
	)
}

export default TodayDetailsItem