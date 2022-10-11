import React from 'react'

function GoogleMapsContainer({ children, className }) {
	return (
		<div className={`h-screen shadow-xl mt-16 relative ${className}`}>
			{children}
		</div>
	)
}

export default GoogleMapsContainer
