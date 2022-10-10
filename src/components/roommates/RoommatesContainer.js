import React from 'react'

function RoommatesContainer({ children }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
			{children}
		</div>
	)
}

export default RoommatesContainer
