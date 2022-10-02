import React from 'react'

import Heading from '../../ui/Heading'
import SolidButton from '../../ui/buttons/SolidButton'

function SortingMenu() {
	return (
		<div className="flex flex-col text-primary mb-10">
			<Heading heading="Sort by:" />
			<div className="flex-flex-row mx-auto">
				<SolidButton
					buttonText="Price"
					className="bg-primary w-50 text-md"
				/>
				<SolidButton
					buttonText="Number of People Interested"
					className="bg-primary w-50 text-md"
				/>
			</div>
		</div>
	)
}

export default SortingMenu
