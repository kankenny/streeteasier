import React from 'react'

function ApartmentsContainer({ children }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-full overflow-y-scroll">
			{children}
		</div>
	)
}

export default ApartmentsContainer
