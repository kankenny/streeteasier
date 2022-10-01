import React from 'react'

import ApartmentsContainer from './google-maps/GoogleMapsContainer'
import GoogleMapsContainer from './google-maps/GoogleMapsContainer'
import GoogleMaps from './google-maps/GoogleMaps'
import ApartmentSearch from './ApartmentSearch'
import ApartmentsList from './ApartmentsList'
import Overview from '../ui/Overview'

function Apartments() {
	return (
		<div className="min-h-full bg-transparent">
			<Overview
				title="Apartments"
				subtitle="Search for your next home"
				paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique iure sit voluptate excepturi tenetur. Corrupti sed asperiores nesciunt quibusdam."
			/>
			<GoogleMapsContainer>
				<ApartmentSearch />
				<GoogleMaps />
			</GoogleMapsContainer>

			<ApartmentsContainer>
				<ApartmentsList />
			</ApartmentsContainer>
		</div>
	)
}

export default Apartments
