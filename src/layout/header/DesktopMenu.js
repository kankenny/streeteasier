import React from 'react'

import Link from '../../components/ui/Link'

const DesktopMenu = () => {
	return (
		<div className="hidden h-10 font-alata md:flex md:items-center md:space-x-8 min-h-fit">
			<Link linkText="About" />
			<Link linkText="Members" />
			<Link linkText="Contacts" />
			<Link linkText="Let's Get Started!" type="mainLink" />
		</div>
	)
}

export default DesktopMenu
