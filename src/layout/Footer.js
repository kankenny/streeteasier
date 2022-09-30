import React from 'react'
import Copyright from './footer/Copyright'

import Logo from '../components/ui/Logo'
import IconContainer from './footer/IconContainer'
import FooterMenu from './footer/FooterMenu'
import FooterContainer from './footer/FooterContainer'

const menuAndLogoContainerClasses =
	'flex flex-col items-center space-y-8 md:items-start md:space-y-4'
const socialAndCopyRightClasses =
	'flex flex-col items-start justify-between space-y-4'

const Footer = () => {
	return (
		<FooterContainer>
			<div className={menuAndLogoContainerClasses}>
				<Logo />
				<FooterMenu />
			</div>
			<div className={socialAndCopyRightClasses}>
				<IconContainer />
				<Copyright />
			</div>
		</FooterContainer>
	)
}

export default Footer
