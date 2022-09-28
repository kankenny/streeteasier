import React from 'react'

const footerContainer = 'mt-10 bg-slate-100 bottom-0 min-w-full max-h-fit'
const mainFooterContainer = 'container py-6 mx-auto bottom:0 '
const footerFlexClasses =
	'flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'

const FooterContainer = ({ children }) => {
	return (
		<footer className={footerContainer}>
			<div className={mainFooterContainer}>
				<div className={footerFlexClasses}>{children}</div>
			</div>
		</footer>
	)
}

export default FooterContainer
