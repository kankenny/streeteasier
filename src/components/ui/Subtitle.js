import React from 'react'

const subTitleClasses = 'text-xs text-center pb-20'

const Subtitle = ({ subtitle, className }) => {
	return <p className={`${className} ${subTitleClasses}`}>{subtitle}</p>
}

export default Subtitle
