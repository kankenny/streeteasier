import React from 'react'

import ApartmentsContainer from './ApartmentsContainer'
import ApartmentSearch from './ApartmentSearch'
import GoogleMaps from './GoogleMaps'

function Apartments() {
	return (
		<ApartmentsContainer>
			<ApartmentSearch />
			<GoogleMaps />
		</ApartmentsContainer>
	)
}

export default Apartments
