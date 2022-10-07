import React from 'react'

function ProfileContainer({ children }) {
	return (
		<div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-lightSecondary bg-opacity-10">
			{children}
		</div>
	)
}

export default ProfileContainer
