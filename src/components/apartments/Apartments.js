import React from 'react'

import GoogleMapsContainer from './google-maps/GoogleMapsContainer'
import GoogleMaps from './google-maps/GoogleMaps'
import ApartmentSearch from './ApartmentSearch'
import ApartmentsList from './ApartmentsList'
import Overview from '../ui/Overview'

function Apartments() {
	return (
		<div className="min-h-full bg-transparent">
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
		</div>
	)
}

export default Apartments
