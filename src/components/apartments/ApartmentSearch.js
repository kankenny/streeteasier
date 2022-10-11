import React, { useState } from 'react'

import Heading from '../ui/Heading'
import ApartmentSearchContainer from './ApartmentSearchContainer'
import Input from '../ui/Input'
import ApartmentsList from './ApartmentsList'

function ApartmentSearch() {
	const [zipCode, setZipCode] = useState('')
	const [queriedZipCode, setQueriedZipCode] = useState('10000')

	const zipCodeChangeHandler = (e) => {
		setZipCode(e.target.value)
	}

	const searchZipCodeHandler = (e) => {
		e.preventDefault()
		setQueriedZipCode(zipCode)
	}

	return (
		<ApartmentSearchContainer>
			<Heading heading="Apartment Search" />
			<form action="submit" onSubmit={searchZipCodeHandler}>
				<Input
					placeholder="Zipcode"
					onChange={zipCodeChangeHandler}
					value={zipCode}
					className="text-black text-md focus:outline-none"
				/>
			</form>
			<ApartmentsList queriedZipCode={queriedZipCode} />
		</ApartmentSearchContainer>
	)
}

export default ApartmentSearch
