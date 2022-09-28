import React, { useState } from 'react'

import Input from '../../../../components/ui/Input'
import SolidButton from '../../../../components/ui/button/SolidButton'
import LoginSignUpPrompter from '../../../../components/ui/login_signup/LoginSignUpPrompter'

import img from '../../../../assets/signup-login/login.jpg'
import Overview from '../../../../components/ui/Overview'
import Card from '../../../../components/ui/Card'
import FormContainer from '../../../../components/ui/FormContainer'

import { motion } from 'framer-motion'

const Login = () => {
	const [userInfo, setUserInfo] = useState({
		emailAddress: '',
		password: '',
	})

	const userInputHandler = (e) => {
		e.preventDefault()

		const { name: userInputField, value } = e.target
		setUserInfo((userInput) => {
			return { ...userInput, [userInputField]: value }
		})
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
				title="Welcome Back!"
				subtitle="It's great to see you again!"
			/>
			<Card className="max-w-6xl container mx-auto flex flex-col md:flex-row space-x-8">
				<FormContainer>
					<h1 className="text-2xl font-bold">
						Enter User Details
					</h1>
					<form className="flex flex-col mt-4 space-y-4">
						<Input
							type="email"
							name="emailAddress"
							placeholder="Email Address"
							value={userInfo.emailAddress}
							onChange={userInputHandler}
							required={true}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							value={userInfo.password}
							onChange={userInputHandler}
							required={true}
						/>
						<LoginSignUpPrompter
							question="Forgot Password?"
							action="Reset Password"
						/>
						<SolidButton
							buttonType="submit"
							buttonText="Login"
							className="my-4 bg-blue-500 hover:bg-blue-900 focus:ring-blue-300"
							onClick={onUserSubmitHandler}
						/>
						<LoginSignUpPrompter
							question="Don't have an account?"
							action="Register here"
							isLoggingIn={false}
							isRouterLink={true}
						/>
					</form>
				</FormContainer>
				<img
					src={img}
					alt="bed"
					className="max-h-[100rem] h-50 max-w-lg rounded-xl shadow-2xl sm:mx-auto"
				/>
			</Card>
		</motion.div>
	)
}

export default Login
