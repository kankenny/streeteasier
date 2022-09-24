import React from 'react'

const headerClasses = 'text-8xl text-center'

function Title({ className, title }) {
	return <h2 className={`${className} ${headerClasses}`}>{title}</h2>
}

export default Title
