import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext({
	firstName: '',
	lastName: '',
	emailAddress: '',
	userContextBio: '',
	setUserContextBio: () => {},
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
	const [bio, setBio] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem('isLoggedIn') !== null
	)

	console.log(bio)

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

	const setUserContextBio = (newBio) => {
		setBio(newBio)
	}

	return (
		<UserContext.Provider
			value={{
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				userContextBio: bio,
				isLoggedIn: isLoggedIn,
				onLogout: onLogoutHandler,
				onLogin: onLoginHandler,
				likedApartments: likedApartments,
				likedRoommates: likedRoommates,
				setUserContextBio: setUserContextBio,
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContext
