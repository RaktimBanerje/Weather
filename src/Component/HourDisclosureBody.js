import React from 'react'

import { Row, Col } from 'react-bootstrap'

import { getHumidity, getPressure, getVisibility, getUvi, getWind_speed, getDew_point } from './DataParser'

import TodayDetailsItem from './TodayDetailsItem'

const HourDisclosureBody = props => {
	let {humidity, pressure, visibility, uvi, wind_speed, dew_point} = props

	humidity = getHumidity(humidity)
	pressure = getPressure(pressure)
	visibility = getVisibility(visibility)
	uvi = getUvi(uvi)	
	wind_speed = getWind_speed(wind_speed)
	dew_point = getDew_point(dew_point)

	const TodayDetailsList = [
		{ icon: "wi wi-humidity", title: "Humidity", data: humidity},
		{ icon: "wi wi-barometer", title: "Pressure" , data: pressure },
		{ icon: "", title: "Visibility", data: visibility },
		{ icon: "wi wi-strong-wind", title: "Wind", data: wind_speed },
		{ icon: "wi wi-solar-eclipse", title: "UV Index" , data: uvi },
		{ icon: "", title: "Dew Point" , data: dew_point },
	]
	
	return (
		<Row>
			{
				TodayDetailsList.map((item, idx) =>( 
					<Col md={6} key={idx} className="HourDisclosure">
						<TodayDetailsItem {...item} />
					</Col>
				))
			}
		</Row>
	)
}

export default HourDisclosureBody