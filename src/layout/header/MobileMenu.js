import React from 'react'

import Logo from '../../components/ui/Logo'
import Link from '../../components/ui/Link'

const MobileMenu = (props) => {
	return (
		<div
			id="menu"
			className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-max py-20 pl-12 space-y-3 text-lg text-slate-100 uppercase bg-zinc-600 z-40 ${
				!props.isMobileOpen ? 'hidden' : 'flex'
			}`}
		>
			<Logo className="max-w-[10rem]" />
			<Link linkText="About" />
			<Link linkText="Members" />
			<Link linkText="Contact" />
			<Link linkText="Let's Get Started" type="mainLink" />
		</div>
	)
}

export default MobileMenu
