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
			<div className="flex flex-col space-y-3 mx-auto xl:flex-row xl:space-x-5 xl:space-y-0">
				<SolidButton
					buttonText="Price"
					className="bg-primary w-36 text-lg lg:text-2xl"
					onClick={() => sortByKey('price')}
				/>
				<SolidButton
					buttonText="People Interested"
					className="bg-primary w-36 text-lg lg:text-2xl"
					onClick={() => sortByKey('numPeopleInterested')}
				/>
			</div>
		</div>
	)
}

export default SortingMenu
