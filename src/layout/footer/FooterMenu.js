import React from 'react'

import Link from '../../components/ui/Link'

const FooterMenu = () => {
	return (
		<div className="flex flex-col items-center space-y-4 font-bold text-zinc-900 md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
			<Link linkText="About" urlPath="about" />
			<Link linkText="Members" urlPath="members" />
			<Link linkText="Contact" urlPath="contact" />
		</div>
	)
}

export default FooterMenu
