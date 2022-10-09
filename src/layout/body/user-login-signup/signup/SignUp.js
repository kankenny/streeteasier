import React, { useState } from 'react'
import * as Yup from 'yup'

import Overview from '../../../../components/ui/Overview'
import Card from '../../../../components/ui/Card'
import SolidButton from '../../../../components/ui/buttons/SolidButton'
import ExistingUserPrompter from '../../../../components/ui/LoginSignUpPrompter'
import FormContainer from '../../../../components/ui/FormContainer'

import img from '../../../../assets/signup-login/signup.jpg'
import { motion } from 'framer-motion'

import { doc, setDoc } from 'firebase/firestore'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from 'firebase/auth'

import { auth, db } from '../../../../firebase'
import { useForm } from 'react-hook-form'
import RHFTextField from '../../../../components/RHFTextField'
import RHFDatePicker from '../../../../components/RHFDatePicker'
import { Regex } from '../../../../utility/regex'

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	birthday: null,
}

const signUpSchema = Yup.object().shape({
	firstName: Yup.string().trim().required('First name is required'),
	lastName: Yup.string().trim().required('Last name is required'),
	email: Yup.string()
		.trim()
		.required('Email is required')
		.matches(Regex.Email, 'Please enter valid email address.'),
	birthday: Yup.date()
		.nullable()
		.required('Birthday is required')
		.min(
			new Date(1950, 0, 0),
			'Please enter valid birthday starting from year 1950'
		)
		.max(
			new Date(),
			'Please enter valid birthday starting from year 1950'
		),
	password: Yup.string()
		.trim()
		.required('Password is required')
		.matches(
			/[A-Z]/,
			'Password must have at least one uppercase character'
		)
		.matches(/[a-z]/, 'Password must have at least one lower character')
		.matches(/[0-9]/, 'Password must have at least one number')
		.matches(
			Regex.Password,
			'Password must have at least one special character'
		)
		.min(8, 'Password must be at least 8 characters long'),
	confirmPassword: Yup.string()
		.trim()
		.required('Confirm password is required')
		.oneOf([Yup.ref('password')], 'Passwords do not match'),
})

const SignUp = () => {
	const [isLoading, setIsLoading] = useState(false)

	const { control, handleSubmit, reset } = useForm({
		defaultValues,
		mode: 'all',
		resolver: yupResolver(signUpSchema),
	})

	const processSignUp = async (data) => {
		/*
		User registration.
		This is a promise. When we attempt to create a user, need to use then and catch for the promise.
		If the user has been successfully created, we create a user object with the respective information and place it in our DB. We can use this in a callback later to grab the data.
		If the user has not been successfully created, throw error.
		*/
		setIsLoading(true)
		await createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredentials) => {
				const user = userCredentials.user // Details of a user.
				console.log(user)

				updateProfile(user, {
					displayName: data.firstName + ' ' + data.lastName,
				})
					.then(async () => {
						sendEmailVerification(user)
						const age =
							new Date().getFullYear() -
							data?.birthday?.getFullYear()
						await setDoc(doc(db, 'users', user.uid), {
							// Straight from Firebase documentation: https://firebase.google.com/docs/firestore/manage-data/add-data
							firstName: data.firstName,
							lastName: data.lastName,
							age,
							email: data.email,
						})
							.then((err) => {
								setIsLoading(false)
								reset()
								console.log(err.message)
							})
							.catch((err) => {
								setIsLoading(false)
								console.log(err.message)
							})
					})
					.catch((err) => {
						setIsLoading(false)
						console.log(err.message)
					})
			})
			.catch((err) => {
				setIsLoading(false)
				console.log(err.message)
			})
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className=""
		>
			<Overview
				title="Our team is so excited that you're joining!"
				subtitle="Only a couple more steps to begin finding your new home and roommates"
				noParagraph={true}
			/>
			<Card className="max-w-5xl h-fit max-h-fit mx-auto flex flex-col md:flex-row space-x-8 mt-0">
				<FormContainer>
					<h1 className="text-2xl font-bold">Register</h1>
					<form
						noValidate
						className="flex flex-col mt-4 space-y-5"
						onSubmit={handleSubmit(processSignUp)}
					>
						<RHFTextField
							control={control}
							type="text"
							name="firstName"
							placeholder="First Name"
						/>
						<RHFTextField
							control={control}
							type="text"
							name="lastName"
							placeholder="First Name"
						/>
						<RHFDatePicker
							control={control}
							name="birthday"
							placeholderText="MM/DD/YYYY"
							maxDate={new Date()}
						/>
						<RHFTextField
							control={control}
							type="email"
							name="email"
							placeholder="Email Address"
						/>
						<RHFTextField
							control={control}
							type="password"
							name="password"
							placeholder="Password"
							autoComplete="on"
						/>
						<RHFTextField
							control={control}
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							autoComplete="on"
						/>
						<SolidButton
							buttonText="Register"
							buttonType="submit"
							disabled={isLoading}
							className="bg-primary  text-xl hover:bg-blue-900 focus:ring-blue-300"
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
					className="rounded-xl shadow-2xl sm:mx-auto max-h-[40rem]"
				/>
			</Card>
		</motion.div>
	)
}

export default SignUp
