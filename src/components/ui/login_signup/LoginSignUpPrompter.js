import React from 'react'

import { NavLink } from 'react-router-dom'
import Link from '../../../components/ui/Link'

const ExistingUserPrompter = ({
	question,
	action,
	fromSignUp,
	isRouterLink,
}) => {
	return (
		<div className="flex flex-col items-center">
			<p className="mt-1 text-xs font-light text-gray-500 ">
				{question}
				{isRouterLink ? (
					<NavLink
						className="ml-1 font-medium text-blue-400"
						to={fromSignUp ? '/login' : '/signup'}
					>
						{action}
					</NavLink>
				) : (
					<Link
						className="ml-1 font-medium text-blue-400"
						linkText={action}
					></Link>
				)}
			</p>
		</div>
	)
}

export default ExistingUserPrompter
