import React, { useState } from 'react'

import Input from '../../../../components/ui/Input'
import Overview from '../../../../components/ui/Overview'

import Card from '../../../../components/ui/Card'
import SolidButton from '../../../../components/ui/button/SolidButton'
import ExistingUserPrompter from '../../../../components/ui/login_signup/LoginSignUpPrompter'

import img from '../../../../assets/signup-login/signup.jpg'
import { motion } from 'framer-motion'

import { doc, setDoc } from 'firebase/firestore'

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from 'firebase/auth'

import { auth, db } from '../../../../firebase'

const signUpContainerClasses =
	'w-full md:w-1/2 lg:w-1/3 mx-auto my-12 ml-10 min-h-[15rem]'

const SignUp = () => {
	// Storing table below into variable userInfo. setUserInfo is the function name that we call to change the values of the table.
	const [userInfo, setUserInfo] = useState({
		firstName: '',
		lastName: '',
		age: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const handleUserInput = (e) => {
		e.preventDefault() // Prevents default event from being accept (in this case passing in nothing)

		/* 
		{name} refers to the name of a HTML node property, {value} refers to the actual input.
		Needed to target and grab the appropriate node (in our case, specific use input fields) and destructuring it. 

		It is coded this way to support multifunctional handlers. Otherwise, we would have to create a handler for each input field, which is not ideal.
		*/

		const { name: userInputField, value } = e.target
		setUserInfo((userInput) => {
			return { ...userInput, [userInputField]: value }
		})
	}

	const handleSignUpRequest = async (e) => {
		e.preventDefault()

		/*
		User registeratiion.
		This is a promise. When we attempt to create a user, need to use then and catch for the promise.
		If the user has been sucessfully created, we create a user object with the respective information and place it in our DB. We can use this in a callback later to grab the data.
		If the user has not been sucessfully created, throw error.
		*/

		await createUserWithEmailAndPassword(
			auth,
			userInfo.email,
			userInfo.password
		)
			.then((userCredentials) => {
				const user = userCredentials.user // Details of a user.
				console.log(user)

				updateProfile(user, {
					displayName:
						userInfo.firstName + ' ' + userInfo.lastName,
				})
					.then(async () => {
						sendEmailVerification(user)
						await setDoc(doc(db, 'users', user.uid), {
							// Straight from Firebase documentation: https://firebase.google.com/docs/firestore/manage-data/add-data
							firstName: userInfo.firstName,
							lastName: userInfo.lastName,
							age: userInfo.age,
							email: userInfo.email,
						})
					})
					.catch((err) => {
						console.log(err.message)
					})
			})
			.catch((err) => {
				console.log(err.message)
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
				<div className={signUpContainerClasses}>
					<h1 className="text-2xl font-bold">Register</h1>
					<form className="flex flex-col mt-4 space-y-5">
						<Input
							type="text"
							name="firstName"
							placeholder="First Name"
							value={userInfo.firstName}
							onChange={handleUserInput}
						/>
						<Input
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={userInfo.lastName}
							onChange={handleUserInput}
						/>
						<Input
							type="number"
							name="age"
							placeholder="Age"
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							value={userInfo.age}
							onChange={handleUserInput}
						/>
						<Input
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
						<Input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={userInfo.confirmPassword}
							className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
							autoComplete="on"
							onChange={handleUserInput}
						/>
						<SolidButton
							buttonText="Register"
							buttonType="submit"
							onClick={handleSignUpRequest}
						/>
						<ExistingUserPrompter
							question="Are you an existing user?"
							action="Sign in now"
							fromSignUp={true}
							isRouterLink={true}
						/>
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
