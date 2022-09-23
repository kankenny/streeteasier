import React from 'react'

const FooterIcon = ({ iconName }) => {
	return (
		<div className="h-8 group">
			<a href="#body">
				<img
					src={require(`../../assets/icons/${iconName}`)}
					alt="logo"
					className="max-h-10 aspect-auto"
				/>
			</a>
		</div>
	)
}

export default FooterIcon
