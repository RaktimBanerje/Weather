import React from 'react'

import { Accordion } from 'react-bootstrap'

import HourDisclosureHeader from './HourDisclosureHeader'
import HourDisclosureBody from './HourDisclosureBody'

const HourDisclosure = ({id, ...hour}) => {
	return(
		<Accordion.Item eventKey={id}>
			<Accordion.Header>
				<HourDisclosureHeader {...hour} />
			</Accordion.Header>

			<Accordion.Body>
				<HourDisclosureBody {...hour} />				
			</Accordion.Body>
		</Accordion.Item>
	)
}

export default HourDisclosure