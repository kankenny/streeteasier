import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'
import SolidButton from '../ui/buttons/SolidButton'

function Profile() {
	const { onLogout } = useContext(UserContext)

	return (
		<SolidButton
			onClick={onLogout}
			buttonText="Logout"
			className="bg-primary"
		/>
	)
}

export default Profile
