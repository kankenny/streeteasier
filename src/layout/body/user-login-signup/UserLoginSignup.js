import React from 'react'

import Card from '../../../components/ui/Card'
import Title from '../../../components/ui/Title'
import SolidButton from '../../../components/ui/button/SolidButton'

function UserLoginSignup() {
	return (
		<Card className="mx-auto max-w-[60rem] flex flex-col mb-[100rem]">
			<Title
				title="Do you have an account with us?"
				className="text-center mb-20"
			/>
			<div className="mx-auto space-x-20">
				<SolidButton
					buttonText="Register"
					className="h-15 w-40 text-2xl bg-blue-700 hover:bg-blue-900 focus:ring-blue-500"
				/>
				<SolidButton
					buttonText="Log-in"
					className="h-15 w-40 text-2xl bg-fuchsia-700 hover:bg-fuchsia-900 focus:ring-fuchsia-500"
				/>
			</div>
		</Card>
	)
}

export default UserLoginSignup
