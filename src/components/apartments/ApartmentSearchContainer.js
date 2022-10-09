import React from 'react'

function ApartmentSearchContainer({ children }) {
	return (
		<div className="h-full bg-secondary bg-opacity-80 w-[25%] p-4 absolute left-0 z-20 text-white overflow-scroll lg:w-[17.5%]">
			{children}
		</div>
	)
}

export default ApartmentSearchContainer
