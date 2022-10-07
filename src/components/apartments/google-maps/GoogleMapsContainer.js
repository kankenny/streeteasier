import React from 'react'

function GoogleMapsContainer({ children, className }) {
	return (
		<div
			className={`h-[50rem] mx-14 rounded-2xl shadow-xl mt-20 relative ${className}`}
		>
			{children}
		</div>
	)
}

export default GoogleMapsContainer
