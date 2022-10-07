import React from 'react'

import Link from '../../components/ui/Link'

const ApartmentsMenu = () => {
	return (
		<div className="hidden font-alata md:flex md:items-center md:space-x-8 min-h-fit">
			<Link linkText="Apartments" urlPath="apartments" />
			<Link linkText="Roommates" urlPath="roommates" />
			<Link linkText="Profile" urlPath="profile" />
		</div>
	)
}

export default ApartmentsMenu
