import React, { useState } from 'react'

import Modal from '../ui/Modal'

import dummyImage from '../../assets/apartments/dummyApartmentImage.jpg'
import Overview from '../ui/Overview'
import Roommates from '../roommates/Roommates'

function Apartment({
	address,
	price,
	bedrooms,
	bathrooms,
	numPeopleInterested,
	image,
	url,
}) {
	const [apartmentModalIsOpen, setApartmentModalIsOpen] = useState(false)

	const apartmentModalVisibilityHandler = () => {
		setApartmentModalIsOpen((prevState) => !prevState)
	}

	return (
		<div
			className="bg-secondary text-white flex space-y-2 space-x-4 rounded-xl shadow-lg h-36 cursor-pointer hover:bg-primary duration-200"
			onClick={apartmentModalVisibilityHandler}
		>
			{apartmentModalIsOpen && (
				<Modal onClose={apartmentModalVisibilityHandler}>
					<div className="flex flex-col">
						<img
							src={image ? image : dummyImage}
							alt="Apartment"
							className="rounded-2xl w-full  max-h-[90%] aspect-auto"
						/>
						<Overview
							title={price}
							subtitle={address}
							paragraph={`There are currently ${
								numPeopleInterested || 0
							} in this property`}
						/>
					</div>
					<Roommates />
				</Modal>
			)}
			<img
				src={image ? image : dummyImage}
				alt="Apartment for rent"
				className="w-32 block object-cover rounded-tl-xl rounded-bl-2xl overflow-hidden "
			/>
			<div className="flex flex-col text-right p-2 space-y-2">
				<h1 className="text-md font-bold mb-2">{price}</h1>

				<div className="text-xs">
					<p>{address}</p>
					<p>{`${
						numPeopleInterested || 0
					} people are interested`}</p>
				</div>
			</div>
		</div>
	)
}

export default Apartment
