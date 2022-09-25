import React from 'react'

const SolidButton = ({ buttonType, buttonText, className, onClick }) => {
	return (
		<button
			type={buttonType}
			onClick={onClick}
			className={`font-serif text-white focus:ring-4 focus:ring-blue-300 font-medium text-md rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none shadow-2xl ${className}`}
		>
			{buttonText}
		</button>
	)
}

export default SolidButton
