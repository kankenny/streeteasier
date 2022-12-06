import React from 'react'

import SolidButton from '../../ui/buttons/SolidButton'

function SortingMenu({ apartments, setApartments }) {
	const sortByKey = (key) => {
		const compare = (a, b) => {
			if (a[key] < b[key]) {
				return -1
			} else if (a[key] > b[key]) {
				return 1
			}
			return 0
		}
		setApartments([...apartments.sort(compare)])
	}
	return (
		<div className="flex flex-col text-white my-10">
			<h1 className="text-md font-bold text-center p-2">Sort by:</h1>
			<div className="flex flex-col space-y-3 w-full mx-auto">
				<SolidButton
					buttonText="Price"
					className="bg-primary text-lg xl:text-lg"
					onClick={() => sortByKey('price')}
				/>
				<SolidButton
					buttonText="People Interested"
					className="bg-primary text-lg xl:text-lg"
					onClick={() => sortByKey('numPeopleInterested')}
				/>
			</div>
		</div>
	)
}

export default React.memo(SortingMenu)
