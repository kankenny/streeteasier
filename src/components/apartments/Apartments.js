import React from 'react'

import GoogleMapsContainer from './google-maps/GoogleMapsContainer'
import GoogleMaps from './google-maps/GoogleMaps'
import ApartmentSearch from './ApartmentSearch'
import ApartmentsList from './ApartmentsList'
import Overview from '../ui/Overview'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -100, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.1, duration: 0.4 },
	},
}

function Apartments() {
	return (
		<motion.div
			className="min-h-full bg-transparent"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="StreetEasier Apartments"
				subtitle="Search for your next home"
				paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique iure sit voluptate excepturi tenetur. Corrupti sed asperiores nesciunt quibusdam."
			/>
			<GoogleMapsContainer>
				<ApartmentSearch />
				<GoogleMaps />
			</GoogleMapsContainer>

			<div className="p-12 mx-auto">
				<ApartmentsList />
			</div>
		</motion.div>
	)
}

export default Apartments
