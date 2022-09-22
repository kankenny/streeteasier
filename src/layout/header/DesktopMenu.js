import React from 'react'

import HeaderLink from './HeaderLink'

const DesktopMenu = () => {
	return (
		<div className="hidden h-10 font-alata md:flex md:space-x-8">
			<HeaderLink linkText="About" />
			<HeaderLink linkText="Members" />
			<HeaderLink linkText="Contacts" />
			<HeaderLink linkText="Let's Get Started" className='mainLink'/>
		</div>
	)
}

export default DesktopMenu
