import React from 'react'

import Link from '../../../components/ui/Link'

const headerClasses =
	'text-2xl text-center uppercase md:text-left md:text-3xl py-4 px-12'

function GetStarted() {
	return (
		<div className="container mx-auto w-max mb-32">
			<Link
				className={headerClasses}
				linkText="Let's Get Started!"
				type="mainLink"
				urlPath="user-login-signup"
			/>
		</div>
	)
}

export default GetStarted
