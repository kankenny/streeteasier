import React from 'react'

import { motion } from 'framer-motion'

import Link from '../../../components/ui/Link'

const headerClasses =
	'text-2xl text-center uppercase md:text-left md:text-3xl py-4 px-12'

function GetStarted() {
	return (
		<motion.div
			className="container mx-auto w-max mb-32"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
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
