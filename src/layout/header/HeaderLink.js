import React from 'react'

const HeaderLink = ({ linkText }) => {
	return (
		<div className="group">
			<a href="#body">{linkText}</a>
			<div className="mx-2 group-hover:border-b group-hover:border-slate-800"></div>
		</div>
	)
}

export default HeaderLink
