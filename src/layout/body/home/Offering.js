import React from 'react'

import { motion } from 'framer-motion'
const imageAnimate = {
	offscreen: { y: -75, opacity: 0 },
	onscreen: {
		y: 0,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.2, duration: 0.5 },
	},
}

const Offering = ({ offeringName, fileName }) => {
	return (
		<motion.div
			className="group item max-w-[275px] max-h-[450px] shadow-2xl rounded-xl"
			variants={imageAnimate}
		>
			<img
				src={require(`../../../assets/home/${fileName}`)}
				alt=""
				className="hidden w-full duration-200 md:block group-hover:scale-110"
			/>
			<img
				src={require(`../../../assets/home/${fileName}`)}
				alt=""
				className="w-full md:hidden"
			/>
			<div className="item-gradient"></div>
			<h5>{offeringName}</h5>
		</motion.div>
	)
}

export default Offering
