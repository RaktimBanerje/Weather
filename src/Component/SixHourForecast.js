import React from 'react';

import {getTime, getTemp, getIcon, getPop} from './DataParser'

import { Row, Col } from 'react-bootstrap'

import WeatherTable from './WeatherTable'
 
const SixHourForecast = props => {
	const sixHourData = Object.values(props).slice(0, 6)
    return (
      	<Row className="justify-content-center">
	        	{
					sixHourData.map((hour, idx) => {
						var {dt, temp, weather, rain, pop} = hour
						var {id, main, icon} = weather[0]

						var time = getTime(dt)
						var temp = getTemp(temp)
						var iconClass = getIcon(id, icon)
						var pop = getPop(pop)

		        		return (
			        		<Col md={4} lg={2} key={idx}>
			        			<WeatherTable 
				        			time={time} 
				        			temp={temp}
				        			iconClass={iconClass} 
				        			pop={pop}
			        			/> 
			        		</Col>							
			        	)
					})	        		
	        	}
       	</Row>
    )
}

export default SixHourForecast
