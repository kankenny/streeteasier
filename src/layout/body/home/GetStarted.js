import React from 'react'

import Link from '../../../components/ui/Link'

const headerClasses = 'text-4xl text-center uppercase md:text-left md:text-5xl'

function GetStarted() {
	return (
		<div className="container mx-auto w-max mb-32">
			<Link
				className={headerClasses}
				linkText="Let's Get Started!"
				type="mainLink"
			/>
		</div>
	)
}

export default GetStarted
