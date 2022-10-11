import React, { useState } from 'react'

import Modal from '../ui/Modal'

import img from '../../assets/apartments/dummyApartmentImage.jpg'
import Overview from '../ui/Overview'
import Roommates from '../roommates/Roommates'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -150, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { ease: 'linear', type: 'tween', duration: 0.2 },
	},
}

function Apartment({
	streetAddress,
	price,
	// bedrooms,
	// bathrooms,
	numPeopleInterested,
}) {
	const [apartmentModalIsOpen, setApartmentModalIsOpen] = useState(false)

	const apartmentModalVisibilityHandler = (e) => {
		setApartmentModalIsOpen((prevState) => !prevState)
	}

	return (
		<motion.div
			className="bg-secondary text-white flex space-y-2 space-x-4 rounded-xl shadow-lg h-36 cursor-pointer hover:bg-primary duration-200"
			onClick={apartmentModalVisibilityHandler}
			variants={imageAnimate}
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
							subtitle={streetAddress}
							paragraph={`There are currently ${numPeopleInterested} in this property`}
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
			<div className="flex flex-col text-right p-2 text-xs space-y-2">
				<h1 className="text-lg font-bold mb-2">{`$${price}/mo`}</h1>

				<p>{streetAddress}</p>
				<p>{`${numPeopleInterested} people are interested`}</p>
			</div>
		</motion.div>
	)
}

export default Apartment
