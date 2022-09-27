import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Card from '../../../../components/ui/Card'
import img from '../../../../assets/signup-login/signup.jpg'
import Overview from '../../../../components/ui/Overview'

import { motion } from 'framer-motion'

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile
} from 'firebase/auth'

import { 
	auth,
} from '../../../../firebase'

const SignUp = () => {

	// Storing table below into variable userInfo. setUserInfo is the function name that we call to change the values of the table.
	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		age: "",
		email: "",
		password: "",
		confirmPassword: ""
	})

	const handleUserInput = (e) => {
		e.preventDefault(); // Prevents default event from being accept (in this case passing in nothing)

		/* 
		{name} refers to the name of a HTML node property, {value} refers to the actual input.
		Needed to target and grab the appropriate node (in our case, specific use input fields) and destructuring it. 

		It is coded this way to support multifunctional handlers. Otherwise, we would have to create a handler for each input field, which is not ideal.
		*/
		
		const {name, value} = e.target; 
		setUserInfo((userInput) => {
			return {...userInput, [name] : value};
		})
	}

	const handleSignUpRequest = (e) => {
		e.preventDefault();

		/*
		User registeratiion.
		This is a promise. When we attempt to create a user, need to use then and catch for the promise.
		If the user has been sucessfully created, we create a user object with the respective information and place it in our DB. We can use this in a callback later to grab the data.
		If the user has not been sucessfully created, throw error.
		*/

		createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
		.then((UserCredentials) => {
			const user = UserCredentials.user; // Details of a user.
			console.log(user);

			updateProfile(user, {displayName: userInfo.firstName + ' ' + userInfo.lastName})
			.then(() => {
				console.log("Profile updated. ")
				console.log(user);

				sendEmailVerification(user);
				console.log("Sent verification email");
			})
			.catch((err) => {
				console.log(err.message)
			}) 
			
		}).catch((err) => {
			console.log(err.message);
		})

	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="Our team is so excited that you're joining!"
				subtitle="Only a couple more steps to begin finding your new home and roommates"
			/>
			<Card className="max-w-6xl mx-auto flex flex-col md:flex-row space-x-8">
				<div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 ml-10 min-h-[15rem]">
					<h1 className="text-2xl font-bold">Register</h1>
					<form className="flex flex-col mt-4 space-y-5">
						<input
							type="text"
							name="firstName"
							className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							placeholder="First Name"
							value={userInfo.firstName}
							onChange={handleUserInput}
						/>
						<input
							type="text"
							name="lastName"
							className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							placeholder="Last Name"
							value={userInfo.lastName}
							onChange={handleUserInput}
						/>
						<input
							type="number"
							name="age"
							placeholder="Age"
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							value={userInfo.age}
							onChange={handleUserInput}
						/>
						<input
							type="email"
							name="email"
							value={userInfo.email}
							placeholder="Email Address"
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							onChange={handleUserInput}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={userInfo.password}
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							autoComplete="on"
							onChange={handleUserInput}
						/>
						<input
							type="password"
							name="repeat-password"
							placeholder="Confirm Password"
							value={userInfo.confirmPassword}
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							autoComplete="on"
							onChange={handleUserInput}
						/>
						<button
							type="submit"
							className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium min-w-30 max-w-[20rem]"
							onClick = {handleSignUpRequest}
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
