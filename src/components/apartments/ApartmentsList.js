import React, { useState } from 'react'

import ApartmentsContainer from './ApartmentsContainer'
import Apartment from './Apartment'

const DUMMY_DATA = [
	{
		address: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 3,
		peopleInterested: {},
	},
]

const DUMMY_DATA2 = [
	{
		address: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 3,
		peopleInterested: {},
	},
	{
		address: 'ex velit magni qui eum, corporis123123 inventore ',
		pricePerMonth: 345,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 32,
		peopleInterested: {},
	},
	{
		address: 'praesentium ipsam a libero, blanditii123123s placeat ',
		pricePerMonth: 234,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 20,
		peopleInterested: {},
	},
	{
		address: 'similique sed fugiat hic ea aper123123iam iure ',
		pricePerMonth: 34342,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 31,
		peopleInterested: {},
	},
	{
		address: 'sunt, placeat amet pariatur, ani123123mi eveniet',
		pricePerMonth: 999,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 30,
		peopleInterested: {},
	},
	{
		address: 'cupiditate deleniti laboriosam max123123ime ducimus!',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 23,
		peopleInterested: {},
	},
	{
		address: 'at  accusamus cupiditate, atque sed per123123ferendis',
		pricePerMonth: 69,
		numBedrooms: 69,
		numBathrooms: 69,
		zipCode: '69696',
		numPeopleInterested: 69,
		peopleInterested: {},
	},
	{
		address: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 3,
		peopleInterested: {},
	},
	{
		address: 'ex velit magni qui eum, corporis123123 inventore ',
		pricePerMonth: 345,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 32,
		peopleInterested: {},
	},
	{
		address: 'praesentium ipsam a libero, blanditii123123s placeat ',
		pricePerMonth: 234,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 20,
		peopleInterested: {},
	},
	{
		address: 'similique sed fugiat hic ea aper123123iam iure ',
		pricePerMonth: 34342,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 31,
		peopleInterested: {},
	},
	{
		address: 'sunt, placeat amet pariatur, ani123123mi eveniet',
		pricePerMonth: 999,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 30,
		peopleInterested: {},
	},
	{
		address: 'cupiditate deleniti laboriosam max123123ime ducimus!',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 23,
		peopleInterested: {},
	},
	{
		address: 'at  accusamus cupiditate, atque sed per123123ferendis',
		pricePerMonth: 69,
		numBedrooms: 69,
		numBathrooms: 69,
		zipCode: '69696',
		numPeopleInterested: 69,
		peopleInterested: {},
	},
]

function ApartmentsList() {
	const [apartments, setApartments] = useState(DUMMY_DATA2)

	return (
		<ApartmentsContainer>
			{apartments.map((apartment) => (
				<Apartment
					key={apartment.address + apartment.address}
					address={apartment.address}
					pricePerMonth={apartment.pricePerMonth}
					numBedRooms={apartment.numBedrooms}
					numBathrooms={apartment.numBathrooms}
					numPeopleInterested={apartment.numPeopleInterested}
				/>
			))}
		</ApartmentsContainer>
	)
}

export default ApartmentsList
