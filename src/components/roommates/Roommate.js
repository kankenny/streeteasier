import React, { useState } from 'react'

import Modal from '../ui/Modal'
import img from '../../assets/roommates/anonymous-person.jpg'
import Overview from '../ui/Overview'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -150, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { ease: 'linear', type: 'tween', duration: 0.2 },
	},
}

function Roommate({ firstName, lastName, emailAddress }) {
	const [roommateModalIsOpen, setRoommateModalIsOpen] = useState(false)

	const roommateModalVisibilityHandler = () => {
		setRoommateModalIsOpen((prevState) => !prevState)
	}

	return (
		<motion.div
			variants={imageAnimate}
			onClick={roommateModalVisibilityHandler}
		>
			<div className="bg-secondary text-white flex flex-row space-y-2 space-x-4 rounded-xl shadow-xl h-20 cursor-pointer hover:scale-105 duration-200">
				{roommateModalIsOpen && (
					<Modal>
						<img
							src={img}
							alt="Roommate"
							className="rounded-2xl w-full aspect-auto max-h-[90%]"
						/>
						<Overview
							title={`${firstName} ${lastName}`}
							subtitle={`Contact: ${emailAddress}`}
						/>
					</Modal>
				)}
				<img
					src={img}
					alt="Roommate PFP"
					className="w-32 block object-cover rounded-[5.5rem] rounded-tl-2xl rounded-bl-2xl overflow-hidden"
				/>
				<div className="flex flex-col text-xs space-y-2 pb-2">
					<h1 className="text-lg font-extrabold mb-2">{`${firstName} ${lastName}`}</h1>
					<p className="text-gray-500">{`${emailAddress}`}</p>
				</div>
			</div>
		</motion.div>
	)
}

export default Roommate
