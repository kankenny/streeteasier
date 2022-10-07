import React, { useContext } from 'react'
import * as Yup from 'yup'

import SolidButton from '../../../../components/ui/buttons/SolidButton'
import LoginSignUpPrompter from '../../../../components/ui/LoginSignUpPrompter'
import UserContext from '../../../../context/UserContext'
import RHFTextField from '../../../../components/RHFTextField'

import img from '../../../../assets/signup-login/login.jpg'
import Overview from '../../../../components/ui/Overview'
import Card from '../../../../components/ui/Card'
import FormContainer from '../../../../components/ui/FormContainer'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Regex } from '../../../../utility/regex'

const loginSchema = Yup.object().shape({
	email: Yup.string()
		.trim()
		.required('Email is required')
		.matches(Regex.Email, 'Please enter valid email address.'),
	password: Yup.string().trim().required('Password is required'),
})

const defaultValues = {
	email: '',
	password: '',
}

const Login = () => {
	const { onLogin } = useContext(UserContext)

	const { handleSubmit, control } = useForm({
		defaultValues,
		mode: 'all',
		resolver: yupResolver(loginSchema)
	})

	const processLogin = (data) => {
		onLogin()
		console.log(data)
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
				noParagraph={true}
			/>
			<Card className="max-w-5xl container mx-auto flex flex-col md:flex-row space-x-8">
				<FormContainer>
					<h1 className="text-2xl font-bold">
						Enter User Details
					</h1>
					<form
						noValidate
						onSubmit={handleSubmit(processLogin)}
						className="flex flex-col mt-4 space-y-4"
					>
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
						<LoginSignUpPrompter
							question="Forgot Password?"
							action="Reset Password"
						/>
						<SolidButton
							buttonType="submit"
							buttonText="Login"
							className="my-4 bg-primary hover:bg-blue-900 focus:ring-blue-300"
						/>
						<LoginSignUpPrompter
							question="Don't have an account?"
							action="Register here"
							isLoggingIn={false}
							isRouterLink={true}
						/>
						<SolidButton
							className="bg-primary"
							onClick={onLogin}
							buttonText="Override Login (this is a test div to access
							main app)"
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

export default Login
