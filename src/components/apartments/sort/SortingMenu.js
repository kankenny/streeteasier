import React from 'react'

import Card from '../../ui/Card'
import Heading from '../../ui/Heading'
import SolidButton from '../../ui/buttons/SolidButton'

function SortingMenu() {
	return (
		<Card className="flex flex-col">
			<Heading heading="Sort by:" />
			<div className="flex-flex-row mx-auto">
				<SolidButton
					buttonText="Price"
					className="bg-primary w-50"
				/>
				<SolidButton
					buttonText="Number of People Interested"
					className="bg-primary w-50"
				/>
			</div>
		</Card>
	)
}

export default SortingMenu
