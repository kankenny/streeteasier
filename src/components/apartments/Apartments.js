import React from 'react'

import GoogleMapsContainer from './google-maps/GoogleMapsContainer'
import GoogleMaps from './google-maps/GoogleMaps'
import ApartmentSearch from './ApartmentSearch'

import { motion } from 'framer-motion'

function Apartments() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<GoogleMapsContainer>
				<ApartmentSearch />
				<GoogleMaps />
			</GoogleMapsContainer>
		</motion.div>
	)
}

export default Apartments
