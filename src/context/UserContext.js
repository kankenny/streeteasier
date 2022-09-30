import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: () => {},
})

export const UserContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const navigate = useNavigate()

	const onLogoutHandler = () => {
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}

	const onLoginHandler = () => {
		navigate('/central')
		localStorage.setItem('isLoggedIn', '1')
		setIsLoggedIn(true)
	}

	return (
		<UserContext.Provider
			value={{
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
