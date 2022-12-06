import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

import Roommate from '../roommates/Roommate'

function LikedRoommates() {
	const { likedRoommates } = useContext(UserContext)

	return (
		<div className="flex flex-col p-5 gap-5 w-[45%] bg-lightSecondary bg-opacity-10 shadow-2xl rounded-lg">
			<h1 className="text-center font-bold text-xl text-primary">
				Liked Profiles:
			</h1>
			<div className="flex flex-col gap-3">
				{likedRoommates.length !== 0 ? (
					likedRoommates.map((roommate) => (
						<Roommate
							key={
								roommate.firstName +
								roommate.lastName +
								roommate.emailAddress
							}
							firstName={roommate.firstName}
							lastName={roommate.lastName}
							emailAddress={roommate.emailAddress}
							profilePictureSrc={
								roommate.profilePictureSrc
							}
							bio={roommate.bio}
						/>
					))
				) : (
					<p className="text-center font-bold text-primary">
						Like a roommate first!
					</p>
				)}
			</div>
		</div>
	)
}

export default LikedRoommates
