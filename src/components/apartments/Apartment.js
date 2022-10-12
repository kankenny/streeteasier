import React, { useState } from 'react'

import Modal from '../ui/Modal'

import img from '../../assets/apartments/dummyApartmentImage.jpg'
import Overview from '../ui/Overview'
import Roommates from '../roommates/Roommates'

function Apartment({
	address,
	price,
	// bedrooms,
	// bathrooms,
	// numPeopleInterested,
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
							src={img}
							alt="Apartment"
							className="rounded-2xl w-full  max-h-[90%] aspect-auto"
						/>
						<Overview
							title={`$${price}/mo`}
							subtitle={address}
							paragraph={`There are currently ${0} in this property`}
						/>
					</div>
					<Roommates />
				</Modal>
			)}
			<img
				src={img}
				alt="Apartment for rent"
				className="w-32 block object-cover rounded-tl-xl rounded-bl-2xl overflow-hidden "
			/>
			<div className="flex flex-col text-right p-2 space-y-2">
				<h1 className="text-md font-bold mb-2">{`$${price}/mo`}</h1>

				<div className="text-xs">
					<p>{address}</p>
					<p>{`${0} people are interested`}</p>
				</div>
			</div>
		</div>
	)
}

export default Apartment
