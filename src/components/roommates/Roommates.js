import React from 'react'

import RoommatesList from './RoommatesList'

import Overview from '../ui/Overview'
import Heading from '../ui/Heading'

function Roommates() {
	return (
		<div className="min-h-full space-y-10">
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
		</div>
	)
}

export default Roommates
