import React from 'react'

const SolidButton = ({ buttonType, buttonText, className, onClick }) => {
	return (
		<button
			type={buttonType}
			onClick={onClick}
			className={`font-serif text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-md rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow-2xl ${className}`}
		>
			{buttonText}
		</button>
	)
}

export default SolidButton
