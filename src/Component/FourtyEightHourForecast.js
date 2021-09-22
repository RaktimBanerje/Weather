import React from 'react';

import { Row, Accordion } from 'react-bootstrap'

import HourDisclosure from './HourDisclosure'
const FourtyEightHourForecast = props => {
    const hours = Object.values(props)
    return (
    	<Row className="justify-content-center">
    		<Accordion>
	    		{
	    			hours.map((hour, idx) =>
	    				<HourDisclosure  id={idx} {...hour} key={idx}/>
	    			)
	    		}
    		</Accordion>
    	</Row>
    )
}

export default FourtyEightHourForecast
