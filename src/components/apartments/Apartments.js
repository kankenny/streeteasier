import React from 'react'

import GoogleMapsContainer from './google-maps/GoogleMapsContainer'
import GoogleMaps from './google-maps/GoogleMaps'
import ApartmentSearch from './ApartmentSearch'
import ApartmentsList from './ApartmentsList'

import { motion } from 'framer-motion'

function Apartments() {
	return (
		<motion.div
			className="bg-transparent"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
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
