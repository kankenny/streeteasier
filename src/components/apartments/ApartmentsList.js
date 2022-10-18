import React, { useState, Fragment } from 'react'

import ApartmentsContainer from './ApartmentsContainer'
import Apartment from './Apartment'
import SortingMenu from './sort/SortingMenu'
import Subtitle from '../ui/Subtitle'
import { motion } from 'framer-motion'


const DUMMY_DATA2 = [
	{
		address:'Lorem ipsuimdjsap dsjfopa',
		pricePerMonth: 322,
		numBedrooms:2,
		numBathrooms: 1,
		zipCode: '34323',
		numPeopleInterested: 3,
		peopleInterested: {},
	},
	{
		address: 'ex velit mag3ni qui eum, corpor123 inventore ',
		pricePerMonth: 345,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 32,
		peopleInterested: {},
	},
	{
		address: 'praeseium 5ipsam a libero, bditi23123s placeat ',
		pricePerMonth: 234,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 20,
		peopleInterested: {},
	},
	{
		address: 'siique sed fugiat hic ea 6a23123iam iure ',
		pricePerMonth: 34342,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 31,
		peopleInterested: {},
	},
	{
		address: 'sunt, plaat7 amet pariatur, ani123123mi eveniet',
		pricePerMonth: 999,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 30,
		peopleInterested: {},
	},
	{
		address: 'cupiate deiti labori8m x123123ime ducimus!',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 23,
		peopleInterested: {},
	},
	{
		address: 'at  accuus cuptate, a3t sed pr12erendis',
		pricePerMonth: 69,
		numBedrooms: 69,
		numBathrooms: 69,
		zipCode: '69696',
		numPeopleInterested: 69,
		peopleInterested: {},
	},
	{
		address: 'Lorem ipsum dolor sit a0met consetur adipisicing.',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 3,
		peopleInterested: {},
	},
	{
		address: 'ex velit magni qui eum, corporis923 inventore ',
		pricePerMonth: 345,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 32,
		peopleInterested: {},
	},
	{
		address: 'prenum 4psam a liber blan8tii123123s placeat ',
		pricePerMonth: 234,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 20,
		peopleInterested: {},
	},
	{
		address: 'simi3ue sed fug9iat hic ea aper12am 1iure ',
		pricePerMonth: 34342,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 31,
		peopleInterested: {},
	},
	{
		address: 'sunt, placeat ame2t paiatur, ani123123mi eveniet',
		pricePerMonth: 999,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 30,
		peopleInterested: {},
	},
	{
		address: 'cupate del8ti lasam a13ime ducimus!',
		pricePerMonth: 123,
		numBedrooms: 1,
		numBathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 23,
		peopleInterested: {},
	},
	{
		address: 'at  acus cu9tate, atque sed per123123ferendis',
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
		<Fragment>
			<SortingMenu
				apartments={apartments}
				setApartments={setApartments}
			/>
			<h1 className="text-md font-bold text-center p-2">
				Search Results:
			</h1>
			<Subtitle
				subtitle="Nearby Apartments in ZipCode 10000:"
				className="pb-5"
			/>
			<motion.div
				initial={'offscreen'}
				whileInView={'onscreen'}
				transition={{ staggerChildren: 0.3 }}
			>
				<ApartmentsContainer>
					{apartments.map((apartment) => (
						<Apartment
							key={apartment.address + apartment.address}
							address={apartment.address}
							pricePerMonth={apartment.pricePerMonth}
							numBedRooms={apartment.numBedrooms}
							numBathrooms={apartment.numBathrooms}
							numPeopleInterested={
								apartment.numPeopleInterested
							}
						/>
					))}
				</ApartmentsContainer>
			</motion.div>
		</Fragment>
	)
}

export default ApartmentsList
