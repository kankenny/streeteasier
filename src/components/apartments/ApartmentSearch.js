import React, { useRef, useState } from 'react'

import Heading from '../ui/Heading'
import ApartmentSearchContainer from './ApartmentSearchContainer'
import Input from '../ui/Input'
import ApartmentsList from './ApartmentsList'
import DUMMY_DATA2 from './DUMMY_APARTMENTS'
import getApartments from '../../api/getApartments'

function ApartmentSearch() {
	const zipCodeRef = useRef('')
	const zipCode = zipCodeRef.current.value
	const [queriedApartments, setQueriedApartments] = useState(DUMMY_DATA2)

	const zipCodeOnSubmitHandler = (e) => {
		e.preventDefault()
		getApartments(zipCode, setQueriedApartments)
		console.log(queriedApartments)
	}

	return (
		<ApartmentSearchContainer>
			<Heading heading="Apartment Search" />
			<form action="submit" onSubmit={zipCodeOnSubmitHandler}>
				<Input
					ref={zipCodeRef}
					placeholder="Zipcode"
					className="text-black text-md focus:outline-none"
					maxLength={5}
				/>
			</form>
			<ApartmentsList
				apartments={queriedApartments}
				setApartments={setQueriedApartments}
			/>
		</ApartmentSearchContainer>
	)
}

export default ApartmentSearch
