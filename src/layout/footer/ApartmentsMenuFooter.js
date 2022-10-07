import React from 'react'

import Link from '../../components/ui/Link'

const ApartmentsMenuFooter = () => {
	return (
		<div className="flex flex-col items-center space-y-4 font-bold  md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
			<Link linkText="Apartments" urlPath="apartments" />
			<Link linkText="Roommates" urlPath="roommates" />
			<Link linkText="Profile" urlPath="profile" />
		</div>
	)
}

export default ApartmentsMenuFooter
