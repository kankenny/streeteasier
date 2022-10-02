import React from 'react'

import Heading from '../../ui/Heading'
import SolidButton from '../../ui/buttons/SolidButton'

function SortingMenu({ apartments, setApartments}) {
	const sortByKey = (key) => {
		const compare = (a, b) => {
		if (a[key] < b[key]) {
			return -1;
		} else if (a[key] > b[key]) {
			return 1;
		}
		return 0;
		};
		setApartments([...apartments.sort(compare)]);
  	};
	return (
		<div className="flex flex-col text-primary mb-10">
			<Heading heading="Sort by:" />
			<div className="flex-flex-row mx-auto">
				<SolidButton
					buttonText="Price"
					className="bg-primary w-50 text-md"
					onClick={() => sortByKey('pricePerMonth')}

				/>
				<SolidButton
					buttonText="Number of People Interested"
					className="bg-primary w-50 text-md"
					onClick={() => sortByKey('numPeopleInterested')}
				/>
			</div>
		</div>
	)
}

export default SortingMenu
