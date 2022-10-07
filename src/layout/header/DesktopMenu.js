import React from 'react'

import Link from '../../components/ui/Link'

const DesktopMenu = () => {
	return (
		<div className="hidden font-alata md:flex md:items-center md:space-x-8 min-h-fit">
			<Link linkText="Home" urlPath="welcome" />
			<Link linkText="About" urlPath="about" />
			<Link linkText="Members" urlPath="members" />
			<Link linkText="Contacts" urlPath="contact" />
			<Link
				linkText="Let's Get Started!"
				type="mainLink"
				urlPath="user-login-signup"
			/>
		</div>
	)
}

export default DesktopMenu
