import React from 'react'

import MobileLinks from './MobileLinks'

const MobileMenu = (props) => {
	return (
		<div
			id="menu"
			className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-slate-100 uppercase bg-slate-900 ${
				!props.isMobileOpen ? 'hidden' : 'flex'
			}`}
		>
			<MobileLinks linkText="About" />
			<MobileLinks linkText="Members" />
			<MobileLinks linkText="Contact" />
			<MobileLinks linkText="Let's Get Started" />
		</div>
	)
}

export default MobileMenu
