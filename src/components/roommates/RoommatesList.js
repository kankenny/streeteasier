import React, { useState } from 'react'

import Roommate from './Roommate'
import RoommatesContainer from './RoommatesContainer'

const DUMMY_DATA2 = [
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmaddela@1nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmadde2la@nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmad3dela@nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmadd4ela@nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmadd5ela@nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmadde6la@nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmaddela7@nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmaddela8@nyit.edu',
	},
	{
		firstName: 'Kan',
		lastName: 'Ken',
		emailAddress: 'kmadde9la@nyit.edu',
	},
]

function RoommatesList() {
	const [roommates, setRoommates] = useState(DUMMY_DATA2)

	return (
		<RoommatesContainer>
			{roommates.map((roommate) => (
				<Roommate
					key={
						roommate.firstName +
						roommate.lastName +
						roommate.emailAddress
					}
					firstName={roommate.firstName}
					lastName={roommate.lastName}
					emailAddress={roommate.emailAddress}
				/>
			))}
		</RoommatesContainer>
	)
}

export default RoommatesList
