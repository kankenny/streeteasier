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
	likedApartments: [],
	likedRoommates: [],
})

export const UserContextProvider = (props) => {
	const firstName = 'John'
	const lastName = 'Doe'
	const emailAddress = 'jdoe@nyit.edu'
	const [likedApartments] = useState([])
	const [likedRoommates] = useState([])
	const bio = 'I like people who are quiet and cleans up after themselves'
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
				likedApartments: likedApartments,
				likedRoommates: likedRoommates,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContext
