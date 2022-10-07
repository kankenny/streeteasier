import * as React from 'react'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -100, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.2, duration: 0.5 },
	},
}

function SiFirebase(props) {
	return (
		<motion.svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth={0}
			role="img"
			viewBox="0 0 24 24"
			height="5em"
			width="5em"
			{...props}
			className="duration-300 hover:text-primary"
			variants={imageAnimate}
		>
			<title />
			<path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z" />
		</motion.svg>
	)
}

export default SiFirebase
