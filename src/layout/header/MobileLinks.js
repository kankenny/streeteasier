import React from 'react'

const MobileLinks = ({ linkText }) => {
	return (
		<a href="#body" className="hover:text-purple-500 duration-200">
			{linkText}
		</a>
	)
}

export default MobileLinks
