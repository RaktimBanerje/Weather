import React from 'react'

import { Row, Col } from 'react-bootstrap' 

import { getTime, getHumidity, getPressure, getVisibility, getUvi, getWind_speed, getDew_point, getFeels_like } from './DataParser'

import TodayDetailsItem from './TodayDetailsItem'

const TodayDetails = ({
	feels_like, 
	pressure, 
	humidity, 
	dew_point, 
	uvi, 
	clouds, 
	visibility, 
	wind_speed, 
	wind_deg, 
	sunrise, 
	sunset
}) => {
	const name = "Howrah"
	const country = "IN"
	feels_like = getFeels_like(feels_like)
	humidity = getHumidity(humidity)
	pressure = getPressure(pressure)
	visibility = getVisibility(visibility)
	uvi = getUvi(uvi)	
	wind_speed = getWind_speed(wind_speed)
	dew_point = getDew_point(dew_point)
	sunrise = getTime(sunrise)
	sunset = getTime(sunset)

	const TodayDetailsList = [
		{ icon: "wi wi-humidity", title: "Humidity", data: humidity},
		{ icon: "", title: "Visibility", data: visibility },
		{ icon: "wi wi-strong-wind", title: "Wind", data: wind_speed },
		{ icon: "wi wi-solar-eclipse", title: "UV Index" , data: uvi },
		{ icon: "wi wi-barometer", title: "Pressure" , data: pressure },
		{ icon: "", title: "Dew Point" , data: dew_point },
		{ icon: "wi wi-sunrise", title: "Sunrise", data: sunrise },
		{ icon: "wi wi-sunset", title: "Sunset", data: sunset }
	]

	return(
		<div className="TodayDetails p-4">
			<div>
				<h5 className="text-light">Weather Today in {name}, {country}</h5>
			</div>
			<div>
				<h1 className="text-light">{feels_like}</h1>
				<h6 className="text-light">Feels Like</h6>
			</div>
			<Row>
				{
					TodayDetailsList.map((item, idx) =>( 
						<Col md={6} key={idx}>
							<TodayDetailsItem {...item} />
						</Col>
					))
				}
			</Row>
		</div>
	)	
}

export default TodayDetails