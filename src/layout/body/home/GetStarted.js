import React from 'react'

import { motion } from 'framer-motion'

import Link from '../../../components/ui/Link'

const headerClasses =
	'text-4xl text-center uppercase px-12 py-4'

function GetStarted() {
	return (
		<motion.div
			className="container mx-auto w-max mb-32"
			animate={{ opacity: 1 }}
			initial={'offscreen'}
			whileInView={'onscreen'}
			exit={{ opacity: 0 }}
			viewport={{ once: false, amount: 0.2 }}
		>
			<Link
				className={headerClasses}
				linkText="Let's Get Started!"
				type="mainLink"
				urlPath="user-login-signup"
			/>
		</motion.div>
	)
}

export default GetStarted
