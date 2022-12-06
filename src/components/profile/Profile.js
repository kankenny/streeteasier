import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'

import ProfileContainer from './ProfileContainer'
import FullName from './FullName'
import EmailAddress from './EmailAddress'
import Bio from './Bio'
import ProfileImage from './ProfileImage'
import LikedApartments from './LikedApartments'
import LikedRoommates from './LikedRoommates'

import SolidButton from '../ui/buttons/SolidButton'

import { motion } from 'framer-motion'

function Profile() {
	const { firstName, lastName, emailAddress, bio, onLogout } =
		useContext(UserContext)

	return (
		<motion.div
			className="flex flex-col min-h-full mt-32 space-y-20 p-32"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
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
			<div className="flex flex-row justify-between">
				<LikedApartments />
				<LikedRoommates />
			</div>
			<SolidButton
				onClick={onLogout}
				buttonText="Logout"
				className="bg-primary text-2xl hover:scale-110 duration-200"
			/>
		</motion.div>
	)
}

export default Profile
