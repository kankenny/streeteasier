import * as React from 'react'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -100, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.1, duration: 0.4 },
	},
}

function SiFramer(props) {
	return (
		<motion.svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth={0}
			role="img"
			viewBox="0 0 24 24"
			height="5.5em"
			width="5.5em"
			className="duration-300 hover:text-primary"
			variants={imageAnimate}
			{...props}
		>
			<title />
			<path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
		</motion.svg>
	)
}

export default SiFramer
