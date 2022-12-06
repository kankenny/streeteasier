import React, { useContext } from 'react'

import Apartment from '../apartments/Apartment'

import UserContext from '../../context/UserContext'

function LikedApartments() {
	const { likedApartments } = useContext(UserContext)

	return (
		<div className="flex flex-col p-5 gap-5 w-[45%] bg-lightSecondary bg-opacity-10 shadow-2xl rounded-lg">
			<h2 className="text-center font-bold text-xl text-primary">
				Liked Apartments:
			</h2>
			<div className="flex flex-col gap-3">
				{likedApartments.length !== 0 ? (
					likedApartments
						.filter(
							(apartment) => apartment.price !== undefined
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
					<p className="text-center text-primary font-bold">
						Like an apartment first!
					</p>
				)}
			</div>
		</div>
	)
}

export default LikedApartments
