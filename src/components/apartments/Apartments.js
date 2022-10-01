import React, { Fragment } from 'react'

import ApartmentsContainer from './ApartmentsContainer'
import ApartmentSearch from './ApartmentSearch'
import GoogleMaps from './GoogleMaps'

function Apartments() {
	return (
		<Fragment>
			<ApartmentsContainer>
				<ApartmentSearch />
				<GoogleMaps />
			</ApartmentsContainer>
			<ApartmentsContainer>
				<ApartmentSearch />
				<GoogleMaps />
			</ApartmentsContainer>
		</Fragment>
	)
}

export default Apartments
