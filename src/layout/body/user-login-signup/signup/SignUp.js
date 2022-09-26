import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../../../components/ui/Card'
import img from '../../../../assets/signup-login/signup.jpg'
import Overview from '../../../../components/ui/Overview'

import { motion } from 'framer-motion'

const SignUp = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="Our team is so excited that you're joining!"
				subtitle="Only a couple more steps to find your home and roommates"
			/>
			<Card className="max-w-6xl mx-auto flex flex-col md:flex-row space-x-8">
				<div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 ml-10 min-h-[15rem]">
					<h1 className="text-2xl font-bold">Register</h1>
					<form className="flex flex-col mt-4">
						<input
							type="text"
							name="full-name"
							className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							placeholder="Full Name"
						/>
						<input
							type="number"
							name="number"
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							placeholder="Age"
						/>
						<input
							type="email"
							name="email"
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							placeholder="Email address"
						/>

						<input
							type="password"
							name="password"
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							placeholder="Password"
							autoComplete="on"
						/>
						<input
							type="password"
							name="repeat-password"
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							placeholder="Confirm Password"
							autoComplete="on"
						/>
						<button
							type="submit"
							className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium min-w-30 max-w-[20rem]"
						>
							Register
						</button>
						<div className="flex flex-col items-center">
							<p className="mt-1 text-xs font-light text-gray-500 ">
								Are you an existing user?
								<Link
									className="ml-1 font-medium text-blue-400"
									to="/login"
								>
									Sign in now
								</Link>
							</p>
						</div>
					</form>
				</div>
				<img
					src={img}
					alt="bed"
					className="max-w-lg rounded-xl shadow-2xl sm:mx-auto"
				/>
			</Card>
		</motion.div>
	)
}

export default SignUp
