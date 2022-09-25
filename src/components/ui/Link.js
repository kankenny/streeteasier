import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ linkText, type, className, urlPath }) => {
	const activeLinkClasses = `bg-purple-900 rounded-full text-white px-4 py-2 group text-zinc-900 transition-all duration-200 ease-in-out ${className} ${
		type === 'mainLink'
			? ' bg-blue-700 align-text-middle rounded-full px-4 py-2 shadow-2xl'
			: ''
	}`

	const inactiveLinkClasses = `group text-zinc-900 transition-all duration-200 ease-in-out ${className} ${
		type === 'mainLink'
			? ' bg-blue-700 align-text-middle rounded-full px-4 py-2 shadow-2xl'
			: ''
	}`

	return (
		<NavLink
			to={`/${urlPath}`}
			className={({ isActive }) => {
				return isActive ? activeLinkClasses : inactiveLinkClasses
			}}
		>
			<span
				className={`bg-left-bottom bg-gradient-to-r bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${
					type === 'mainLink'
						? 'text-white from-white to-white'
						: 'from-zinc-900 to-zinc-900'
				}`}
			>
				{linkText}
			</span>
		</NavLink>
	)
}

export default Link
