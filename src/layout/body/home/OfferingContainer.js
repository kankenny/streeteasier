import React from 'react'

import Offering from './Offering'

const OfferingContainer = ({ setNumber }) => {
	let offering = {}

	if (setNumber === 1) {
		offering = {
			offering1: {
				desc: 'Rural Side Apartments',
				fileName: 'offering1.jpg',
			},
			offering2: {
				desc: 'Get Travel Diagnostics',
				fileName: 'offering2.jpg',
			},
			offering3: {
				desc: 'Assists in Home Searching',
				fileName: 'offering3.jpg',
			},
			offering4: {
				desc: 'Urban Side Apartments',
				fileName: 'offering4.jpg',
			},
		}
	} else {
		offering = {
			offering1: {
				desc: 'Match with Roommates',
				fileName: 'offering5.jpg',
			},
			offering2: {
				desc: 'Enjoy Specific Amenities',
				fileName: 'offering6.jpg',
			},
			offering3: {
				desc: 'Get Safety Statistics',
				fileName: 'offering7.jpg',
			},
			offering4: {
				desc: 'Home Sweet Home',
				fileName: 'offering8.jpg',
			},
		}
	}

	return (
		<div className="item-container mb-10 mx-auto">
			<Offering
				offeringName={offering.offering1.desc}
				fileName={offering.offering1.fileName}
			/>
			<Offering
				offeringName={offering.offering2.desc}
				fileName={offering.offering2.fileName}
			/>
			<Offering
				offeringName={offering.offering3.desc}
				fileName={offering.offering3.fileName}
			/>
			<Offering
				offeringName={offering.offering4.desc}
				fileName={offering.offering4.fileName}
			/>
		</div>
	)
}

export default OfferingContainer
