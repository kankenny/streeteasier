import React, { Fragment } from 'react'

import ApartmentsContainer from './ApartmentsContainer'
import Apartment from './Apartment'
import SortingMenu from './sort/SortingMenu'
import Subtitle from '../ui/Subtitle'

import { motion } from 'framer-motion'

function ApartmentsList({ apartments, setApartments, queriedZipCode }) {
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
				subtitle={`Nearby Apartments in Zipcode ${queriedZipCode}:`}
				className="pb-5"
			/>
			<motion.div
				initial={'offscreen'}
				whileInView={'onscreen'}
				transition={{ staggerChildren: 0.3 }}
			>
				<ApartmentsContainer>
					{apartments ? (
						apartments
							.filter(
								(apartment) =>
									apartment.price !== undefined
							)
							.map((apartment, index) => (
								<Apartment
									key={index}
									address={apartment.address}
									price={apartment.price}
									beds={apartment.beds}
									baths={apartment.baths}
									numPeopleInterested={
										apartment.numPeopleInterested
									}
									image={apartment.imgSrc}
									url={apartment.detailUrl}
									brokerName={apartment.brokerName}
								/>
							))
					) : (
						<p>No Apartments Found!</p>
					)}
				</ApartmentsContainer>
			</motion.div>
		</Fragment>
	)
}

export default ApartmentsList
