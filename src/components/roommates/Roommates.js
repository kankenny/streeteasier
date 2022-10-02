import React from 'react'

import RoommatesList from './RoommatesList'

import Overview from '../ui/Overview'
import Heading from '../ui/Heading'

import { motion } from 'framer-motion'

function Roommates() {
	return (
		<motion.div
			className="min-h-full space-y-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="Roommates"
				subtitle="Match with the right people"
				paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique iure sit voluptate excepturi tenetur. Corrupti sed asperiores nesciunt quibusdam."
			/>
			<Heading heading="Matched Roommates" />
			<div>
				<RoommatesList />
			</div>
			<Heading heading="Explore Roommates" />
			<div>
				<RoommatesList />
			</div>
		</motion.div>
	)
}

export default Roommates
