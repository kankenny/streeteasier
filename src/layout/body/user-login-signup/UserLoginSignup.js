import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../../components/ui/Card'
import Title from '../../../components/ui/Title'
import SolidButton from '../../../components/ui/button/SolidButton'

import { motion } from 'framer-motion'

function UserLoginSignup() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="mt-[8.5rem]"
		>
			<Card className="mx-auto max-w-[60rem] flex flex-col my-auto">
				<Title
					title="Do you have an account with us?"
					className="text-center mb-20"
				/>
				<div className="mx-auto space-x-20">
					<Link to="/signup">
						<SolidButton
							buttonText="Register"
							className="h-15 w-40 text-2xl bg-blue-500 hover:bg-blue-900 focus:ring-blue-300"
						/>
					</Link>
					<Link to="/login">
						<SolidButton
							buttonText="Log-in"
							className="h-15 w-40 text-2xl bg-fuchsia-700 hover:bg-fuchsia-900 focus:ring-fuchsia-500"
						/>
					</Link>
				</div>
			</Card>
		</motion.div>
	)
}

export default UserLoginSignup
