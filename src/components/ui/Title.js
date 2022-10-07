import React from 'react'

const headerClasses =
	'text-7xl text-center font-serif font-bold text-blue-700 mb-3'

function Title({ className, title }) {
	return <h2 className={`${className} ${headerClasses}`}>{title}</h2>
}

export default Title
