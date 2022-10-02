import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'

import ProfileContainer from './ProfileContainer'
import FullName from './FullName'
import EmailAddress from './EmailAddress'
import Bio from './Bio'
import ProfileImage from './ProfileImage'

import SolidButton from '../ui/buttons/SolidButton'

function Profile() {
	const { firstName, lastName, emailAddress, bio, onLogout } =
		useContext(UserContext)

	return (
		<div className="flex flex-col min-h-full mt-32 space-y-20 p-32">
			<ProfileContainer>
				<div className="px-6">
					<ProfileImage />
					<div className="text-center mt-24">
						<FullName
							firstName={firstName}
							lastName={lastName}
						/>
						<EmailAddress emailAddress={emailAddress} />
					</div>
					<Bio bio={bio} />
				</div>
			</ProfileContainer>
			<SolidButton
				onClick={onLogout}
				buttonText="Logout"
				className="bg-primary hover:scale-110 duration-200"
			/>
		</div>
	)
}

export default Profile
