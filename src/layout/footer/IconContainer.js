import React from 'react'

import FooterIcon from './FooterIcon'

const IconContainer = (props) => {
	return (
		<div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
			<FooterIcon iconName="github.png" />
			<FooterIcon iconName="nyit.png" />
		</div>
	)
}

export default IconContainer
