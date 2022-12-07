import React, { useRef, useState } from 'react'

import Heading from '../ui/Heading'
import ApartmentSearchContainer from './ApartmentSearchContainer'
import Input from '../ui/Input'
import ApartmentsList from './ApartmentsList'
import DUMMY_DATA2 from './DUMMY_APARTMENTS'
import getApartments from '../../api/getApartments'

function ApartmentSearch() {
	const zipCodeRef = useRef('')
	const [queriedApartments, setQueriedApartments] = useState(DUMMY_DATA2)
	const [queriedZipCode, setQueriedZipCode] = useState(10021)

	const zipCodeOnSubmitHandler = (e) => {
		e.preventDefault()
		setQueriedZipCode(zipCodeRef.current.value)
		getApartments(zipCodeRef.current.value, setQueriedApartments)
	}

	return (
		<ApartmentSearchContainer>
			<Heading heading="Apartment Search" />
			<form onSubmit={zipCodeOnSubmitHandler}>
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
				queriedZipCode={queriedZipCode}
			/>
		</ApartmentSearchContainer>
	)
}

export default ApartmentSearch
