import React from 'react'

import Offering from './Offering'

import { motion } from 'framer-motion'

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
				desc: 'Find Your Home',
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
		<motion.div
			className="item-container mb-8 mx-auto"
			initial={'offscreen'}
			whileInView={'onscreen'}
			viewport={{ once: false, amount: 0.2 }}
			transition={{ staggerChildren: 0.3 }}
		>
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
		</motion.div>
	)
}

export default OfferingContainer
