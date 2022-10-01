import React from 'react'

function ApartmentsContainer({ children }) {
	return (
		<div className="h-full min-h-[75%] mx-14 rounded-2xl shadow-xl mt-20 relative">
			{children}
		</div>
	)
}

export default ApartmentsContainer
