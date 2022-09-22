import React from 'react'

const MobileLinks = ({ linkText, className }) => {
	return (
		<a href="#body" className={`hover:text-purple-500 duration-200 ${className === 'mainLink' ? 'text-blue-700' : ''}`}>
			{linkText}
		</a>
	)
}

export default MobileLinks
