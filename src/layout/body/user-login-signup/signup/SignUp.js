import React, { useState } from 'react'

import Input from '../../../../components/ui/Input'
import Overview from '../../../../components/ui/Overview'

import Card from '../../../../components/ui/Card'
import SolidButton from '../../../../components/ui/button/SolidButton'
import ExistingUserPrompter from '../../../../components/ui/signup/ExistingUserPrompter'

import img from '../../../../assets/signup-login/signup.jpg'
import { motion } from 'framer-motion'

const signUpContainerClasses =
	'w-full md:w-1/2 lg:w-1/3 mx-auto my-12 ml-10 min-h-[15rem]'

const SignUp = () => {
	const [userInfo, setUserInfo] = useState({
		firstName: '',
		lastName: '',
		birthday: '',
		age: '',
		emailAddress: '',
		password: '',
		confirmPassword: '',
	})

	const firstNameChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			firstName: e.target.value,
		}))
	}

	const lastNameChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			lastName: e.target.value,
		}))
	}

	const ageChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			age: e.target.value,
		}))
	}

	const emailChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			emailAddress: e.target.value,
		}))
	}

	const birthdayChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			birthday: e.target.value,
		}))
	}

	const passwordChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			password: e.target.value,
		}))
	}

	const confirmPasswordChangeHandler = (e) => {
		setUserInfo((prevState) => ({
			...prevState,
			confirmPassword: e.target.value,
		}))
	}

	const onUserSubmitHandler = (e) => {
		e.preventDefault()
		console.log(userInfo)
	}

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
				<div className={signUpContainerClasses}>
					<h1 className="text-2xl font-bold">Register</h1>
					<form className="flex flex-col mt-4 space-y-5">
						<Input
							type="text"
							name="firstName"
							placeholder="First Name"
							value={userInfo.firstName}
							onChange={firstNameChangeHandler}
						/>
						<Input
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={userInfo.lastName}
							onChange={lastNameChangeHandler}
						/>
						<Input
							type="number"
							name="age"
							placeholder="Age"
							value={userInfo.age}
							onChange={ageChangeHandler}
						/>
						<Input
							type="email"
							name="email"
							placeholder="Email Address"
							value={userInfo.emailAddress}
							onChange={emailChangeHandler}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							value={userInfo.password}
							onChange={passwordChangeHandler}
						/>
						<Input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={userInfo.confirmPassword}
							onChange={confirmPasswordChangeHandler}
						/>
						<SolidButton
							buttonText="Register"
							buttonType="submit"
							onClick={onUserSubmitHandler}
						/>
						<ExistingUserPrompter />
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
