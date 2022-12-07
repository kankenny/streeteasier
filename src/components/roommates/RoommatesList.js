import React, { useState } from 'react'

import Roommate from './Roommate'
import RoommatesContainer from './RoommatesContainer'

import { motion } from 'framer-motion'

// Dummy Data
import { DUMMY_DATA2 } from './DUMMY_ROOMMATES'

function RoommatesList() {
	const [roommates] = useState(DUMMY_DATA2)

	return (
		<motion.div
			initial={'offscreen'}
			whileInView={'onscreen'}
			transition={{ staggerChildren: 0.2 }}
		>
			<RoommatesContainer>
				{roommates.map((roommate, index) => (
					<Roommate
						key={
							roommate.firstName +
							roommate.lastName +
							roommate.emailAddress
						}
						firstName={roommate.firstName}
						lastName={roommate.lastName}
						emailAddress={roommate.emailAddress}
						profilePictureSrc={index + 1}
						bio={roommate.bio}
					/>
				))}
			</RoommatesContainer>
		</motion.div>
	)
}

export default RoommatesList
