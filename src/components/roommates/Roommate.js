import React from 'react'

import img from '../../assets/roommates/anonymous-person.jpg'

function Roommate({ firstName, lastName, emailAddress }) {
	return (
		<div className="bg-secondary text-white flex flex-row space-y-2 space-x-4 rounded-xl shadow-xl h-20 ">
			<img
				src={img}
				alt="Roommate PFP"
				className="w-32 block object-cover rounded-[5.5rem] rounded-tl-xl rounded-bl-xl hover:scale-110 overflow-hidden"
			/>
			<div className="flex flex-col text-xs space-y-2 pb-2">
				<h1 className="text-lg font-extrabold mb-2">{`${firstName} ${lastName}`}</h1>
				<p className="text-gray-500">{`${emailAddress}`}</p>
			</div>
		</div>
	)
}

export default Roommate
