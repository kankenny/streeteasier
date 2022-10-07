import React from 'react'

function Heading({ heading, className }) {
	return (
		<div
			className={`text-2xl font-extrabold text-center mb-5 ${className}`}
		>
			{heading}
		</div>
	)
}

export default Heading
