import React from 'react'

function RoommatesContainer({ children }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-full overflow-y-scroll min-w-full p-5">
			{children}
		</div>
	)
}

export default RoommatesContainer
