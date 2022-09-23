import React from 'react'
import Copyright from './footer/Copyright'

import Logo from '../components/ui/Logo'
import IconContainer from './footer/IconContainer'
import FooterMenu from './footer/FooterMenu'

const footerContainer = 'bg-slate-100 fixed bottom-0 min-w-full max-h-fit'
const mainFooterContainer = 'container max-w-6xl py-10 mx-auto bottom:0 '
const footerFlexClasses =
	'flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'
const menuAndLogoContainerClasses =
	'flex flex-col items-center space-y-8 md:items-start md:space-y-4'
const socialAndCopyRightClasses =
	'flex flex-col items-start justify-between space-y-4 text-gray-900'

const Footer = () => {
	return (
		<footer className={footerContainer}>
			<div className={mainFooterContainer}>
				<div className={footerFlexClasses}>
					<div className={menuAndLogoContainerClasses}>
						<Logo />
						<FooterMenu />
					</div>

					<div className={socialAndCopyRightClasses}>
						<IconContainer />
						<Copyright />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
