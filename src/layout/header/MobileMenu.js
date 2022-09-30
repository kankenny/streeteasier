import React from 'react'

import Logo from '../../components/ui/Logo'
import Link from '../../components/ui/Link'

const MobileMenu = (props) => {
	return (
		<div
			id="menu"
			className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-max py-20 pl-12 space-y-3 text-lg text-white uppercase bg-lightSecondary z-40 ${
				!props.isMobileOpen ? 'hidden' : 'flex'
			}`}
		>
			<Logo className="max-w-[10rem]" />
			<Link linkText="About" urlPath="about" />
			<Link linkText="Members" urlPath="members" />
			<Link linkText="Contact" urlPath="contact" />
			<Link
				linkText="Let's Get Started"
				type="mainLink"
				urlPath="user-login-signup"
			/>
		</div>
	)
}

export default MobileMenu
