import React, { useState } from 'react'

import Input from '../../../../components/ui/Input'
import Overview from '../../../../components/ui/Overview'
import DatePicker from 'react-datepicker'
import Card from '../../../../components/ui/Card'
import SolidButton from '../../../../components/ui/button/SolidButton'
import ExistingUserPrompter from '../../../../components/ui/login_signup/LoginSignUpPrompter'
import FormContainer from '../../../../components/ui/FormContainer'
import 'react-datepicker/dist/react-datepicker.css'

import img from '../../../../assets/signup-login/signup.jpg'
import { motion } from 'framer-motion'

import { doc, setDoc } from 'firebase/firestore'

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from 'firebase/auth'

import { auth, db } from '../../../../firebase'

const SignUp = () => {
	// Storing table below into variable userInfo. setUserInfo is the function name that we call to change the values of the table.
	const [userInfo, setUserInfo] = useState({
		firstName: '',
		lastName: '',
		birthday: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const [birthday, setBirthday] = useState()

	const userInputHandler = (e) => {
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
				className="mb-0 pb-0"
			/>
			<Card className="max-w-6xl mx-auto flex flex-col md:flex-row space-x-8 mt-0">
				<FormContainer>
					<h1 className="text-2xl font-bold">Register</h1>
					<form className="flex flex-col mt-4 space-y-5">
						<Input
							type="text"
							name="firstName"
							placeholder="First Name"
							value={userInfo.firstName}
							onChange={userInputHandler}
						/>
						<Input
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={userInfo.lastName}
							onChange={userInputHandler}
						/>
						<DatePicker
							selected={birthday}
							onSelect={setBirthday}
							onChange={setBirthday}
							className="px-4 py-3 text-sm w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500
							"
							placeholderText={'MM/DD/YY'}
						/>
						<Input
							type="email"
							name="email"
							value={userInfo.email}
							placeholder="Email Address"
							onChange={userInputHandler}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							value={userInfo.password}
							autoComplete="on"
							onChange={userInputHandler}
						/>
						<Input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={userInfo.confirmPassword}
							onChange={userInputHandler}
							autoComplete="on"
						/>
						<SolidButton
							buttonText="Register"
							buttonType="submit"
							onClick={handleSignUpRequest}
							className="bg-blue-500 hover:bg-blue-900 focus:ring-blue-300"
						/>
						<ExistingUserPrompter
							question="Are you an existing user?"
							action="Sign in now"
							fromSignUp={true}
							isRouterLink={true}
						/>
					</form>
				</FormContainer>
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
