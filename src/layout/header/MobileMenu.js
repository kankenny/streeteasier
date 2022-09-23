import React from 'react'

import Link from '../../components/ui/Link'

const MobileMenu = (props) => {
	return (
		<div
			id="menu"
			className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-slate-100 uppercase bg-zinc-600 ${
				!props.isMobileOpen ? 'hidden' : 'flex'
			}`}
		>
			<Link linkText="About" />
			<Link linkText="Members" />
			<Link linkText="Contact" />
			<Link linkText="Let's Get Started" className="mainLink" />
		</div>
	)
}

export default MobileMenu
