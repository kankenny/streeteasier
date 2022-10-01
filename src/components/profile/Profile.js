import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'
import SolidButton from '../ui/buttons/SolidButton'
import Card from '../ui/Card'

function Profile() {
	const { onLogout } = useContext(UserContext)

	return (
		<Card>
			<SolidButton
				onClick={onLogout}
				buttonText="Logout"
				className="bg-primary"
			/>
		</Card>
	)
}

export default Profile
