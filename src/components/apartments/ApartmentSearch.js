import React, { useState } from 'react'

import Heading from '../ui/Heading'
import ApartmentSearchContainer from './ApartmentSearchContainer'
import Input from '../ui/Input'

function ApartmentSearch() {
	const [zipCode, setZipCode] = useState('')

	const zipCodeChangeHandler = (e) => {
		setZipCode(e.target.value)
	}

	const searchZipCodeHandler = (e) => {
		e.preventDefault()
		console.log(zipCode)
	}

	return (
		<ApartmentSearchContainer>
			<Heading heading="Apartment Search" />
			<form action="submit" onSubmit={searchZipCodeHandler}>
				<Input
					placeholder="Zipcode"
					onChange={zipCodeChangeHandler}
					value={zipCode}
					className="text-black text-lg focus:outline-none"
				/>
			</form>
		</ApartmentSearchContainer>
	)
}

export default ApartmentSearch
