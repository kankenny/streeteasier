import React from 'react'

const Card = ({ children, className }) => {
	return (
		<div
			className={`${className} bg-white rounded-xl shadow-lg md:p-20 p-8 m-4`}
		>
			{children}
		</div>
	)
}

export default Card
