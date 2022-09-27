import React from 'react'

const SolidButton = ({ buttonType, buttonText, className, onClick }) => {
	return (
		<button
			type={buttonType}
			onClick={onClick}
			className={`bg-blue-500 font-serif text-white focus:ring-4 focus:ring-blue-300 font-medium text-2xl rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none shadow-2xl ${className}`}
		>
			{buttonText}
		</button>
	)
}

export default SolidButton
