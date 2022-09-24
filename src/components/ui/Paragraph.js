import React from 'react'

const paragraphClasses =
	'text-center text-gray-500 max-w-4xl mx-auto tracking-wide'

const Paragraph = ({ className, paragraph }) => {
	return <p className={`${className} ${paragraphClasses}`}>{paragraph}</p>
}

export default Paragraph
