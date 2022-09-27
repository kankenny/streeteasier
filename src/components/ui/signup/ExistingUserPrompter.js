import React from 'react'

import { Link } from 'react-router-dom'

const ExistingUserPrompter = () => {
	return (
		<div className="flex flex-col items-center">
			<p className="mt-1 text-xs font-light text-gray-500 ">
				Are you an existing user?
				<Link
					className="ml-1 font-medium text-blue-400"
					to="/login"
				>
					Sign in now
				</Link>
			</p>
		</div>
	)
}

export default ExistingUserPrompter
