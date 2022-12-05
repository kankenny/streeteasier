import React from 'react'

function ApartmentDetails({ beds, baths, brokerName, url }) {
	return (
		<div className=" flex flex-col p-4 space-y-2 text-center md:text-left mx-auto">
			<h1 className="text-2xl font-bold text-primary">
				Apartment Details
			</h1>
			<p>Bedrooms: {beds}</p>
			<p>Bathrooms: {baths}</p>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="underline cursor-pointer text-primary font-bold"
			>
				See More
			</a>
			{brokerName && <p>{brokerName}</p>}
		</div>
	)
}

export default ApartmentDetails
