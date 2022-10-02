import React from 'react'
import Card from '../ui/Card'

function RoommatesContainer({ children }) {
	return (
		<Card className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-full min-w-full p-5">
			{children}
		</Card>
	)
}

export default RoommatesContainer
