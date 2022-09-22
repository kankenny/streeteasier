import React from 'react'

const HeaderLink = ({ linkText, className }) => {
	return (
		<div className="group">
			<a href="#body" className={className === 'mainLink' ? 'text-blue-700' : ''}>{linkText}</a>
			<div className={`mx-2 group-hover:border-b group-hover:border-slate-800 ${className === 'mainLink' ? 'group-hover:border-blue-700' : ''}`}></div>
		</div>
	)
}

export default HeaderLink
