import React, { useContext } from 'react'

import UserContext from '../../context/UserContext'

import LogoImage from '../../assets/projectLogo.png'
import { Link } from 'react-router-dom'

const Logo = ({ className }) => {
	const { isLoggedIn } = useContext(UserContext)

	const linkPath = isLoggedIn ? '/apartments' : '/welcome'

	return (
		<Link to={linkPath}>
			<img
				src={LogoImage}
				alt="Logo"
				className={`h-16 pt-2 ${className}`}
			/>
		</Link>
	)
}

export default Logo

// https://www.freelogodesign.org/manager/showcase/79a5301d242d4fa5bdeffa41d85d87d9
