import React, { useState, Fragment, useEffect } from 'react'

import ApartmentsContainer from './ApartmentsContainer'
import Apartment from './Apartment'
import SortingMenu from './sort/SortingMenu'
import Subtitle from '../ui/Subtitle'
import getApartments from '../../api/getApartments'

import { motion } from 'framer-motion'

const DUMMY_DATA2 = [
	{
		streetAddress: 'Lorem ipsum dolor sit amet cons2ectetur adipisicing.',
		price: 123,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 3,
		peopleInterested: {},
	},
	{
		streetAddress: 'ex velit mag3ni qui eum, corpor123 inventore ',
		price: 345,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 32,
		peopleInterested: {},
	},
	{
		streetAddress: 'praeseium 5ipsam a libero, bditi23123s placeat ',
		price: 234,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 20,
		peopleInterested: {},
	},
	{
		streetAddress: 'siique sed fugiat hic ea 6a23123iam iure ',
		price: 34342,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 31,
		peopleInterested: {},
	},
	{
		streetAddress: 'sunt, plaat7 amet pariatur, ani123123mi eveniet',
		price: 999,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 30,
		peopleInterested: {},
	},
	{
		streetAddress: 'cupiate deiti labori8m x123123ime ducimus!',
		price: 123,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 23,
		peopleInterested: {},
	},
	{
		streetAddress: 'at  accuus cuptate, a3t sed pr12erendis',
		price: 69,
		bedrooms: 69,
		bathrooms: 69,
		zipCode: '69696',
		numPeopleInterested: 69,
		peopleInterested: {},
	},
	{
		streetAddress: 'Lorem ipsum dolor sit a0met consetur adipisicing.',
		price: 123,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 3,
		peopleInterested: {},
	},
	{
		streetAddress: 'ex velit magni qui eum, corporis923 inventore ',
		price: 345,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 32,
		peopleInterested: {},
	},
	{
		streetAddress: 'prenum 4psam a liber blan8tii123123s placeat ',
		price: 234,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 20,
		peopleInterested: {},
	},
	{
		streetAddress: 'simi3ue sed fug9iat hic ea aper12am 1iure ',
		price: 34342,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 31,
		peopleInterested: {},
	},
	{
		streetAddress: 'sunt, placeat ame2t paiatur, ani123123mi eveniet',
		price: 999,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 30,
		peopleInterested: {},
	},
	{
		streetAddress: 'cupate del8ti lasam a13ime ducimus!',
		price: 123,
		bedrooms: 1,
		bathrooms: 3,
		zipCode: '10000',
		numPeopleInterested: 23,
		peopleInterested: {},
	},
	{
		streetAddress: 'at  acus cu9tate, atque sed per123123ferendis',
		price: 69,
		bedrooms: 69,
		bathrooms: 69,
		zipCode: '69696',
		numPeopleInterested: 69,
		peopleInterested: {},
	},
]

function ApartmentsList({ queriedZipCode }) {
	const [apartments, setApartments] = useState(DUMMY_DATA2)

	useEffect(() => {
		getApartments(queriedZipCode)
	}, [queriedZipCode])

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
							key={
								apartment.streetAddress +
								apartment.streetAddress
							}
							address={apartment.streetAddress}
							price={apartment.price}
							bedrooms={apartment.bedrooms}
							bathrooms={apartment.bathrooms}
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
