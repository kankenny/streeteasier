import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext({
	firstName: '',
	lastName: '',
	emailAddress: '',
	bio: '',
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: () => {},
})

export const UserContextProvider = (props) => {
	const firstName = 'Kan'
	const lastName = 'Ken'
	const emailAddress = 'kmaddela@nyit.edu'
	const bio =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores nam rem enim amet, veniam minima facere nobis magni, tempora, expedita magnam architecto pariatur quas?'
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem('isLoggedIn') !== null
	)

	const navigate = useNavigate()

	const onLogoutHandler = () => {
		navigate('/welcome')
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	const onLoginHandler = () => {
		navigate('/apartments')
		localStorage.setItem('isLoggedIn', '1')
		setIsLoggedIn(true)
	}

	return (
		<UserContext.Provider
			value={{
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				bio: bio,
				isLoggedIn: isLoggedIn,
				onLogout: onLogoutHandler,
				onLogin: onLoginHandler,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContext
