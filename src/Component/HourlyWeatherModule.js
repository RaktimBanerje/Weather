import React, { useState } from 'react'

import { Button, Card } from 'react-bootstrap'

import SixHourForecast from './SixHourForecast'
import FourtyEightHourForecast from './FourtyEightHourForecast'

const HourlyWeatherModule = props => {

	const [toggle, setToggle] = useState(false)

	return (
		<Card> 
			<Card.Header>
				<h4>
					Hourly Foreacst
				</h4>
			</Card.Header>
				
			<Card.Body>
				{	
					toggle? <FourtyEightHourForecast {...props} /> : <SixHourForecast {...props} />
				}
			</Card.Body>

			<Card.Footer>
				<Button variant="primary" onClick={ ()=>setToggle(!toggle) }>
					{
						!toggle ? "Next 48 Hour" : "Next 6 Hour" 
					}
				</Button>
			</Card.Footer>
		</Card>
	)
}

export default HourlyWeatherModule