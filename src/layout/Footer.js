import React from 'react'

import Logo from '../components/ui/Logo'
import IconContainer from './footer/IconContainer'
import FooterMenu from './footer/FooterMenu'
import FooterContainer from './footer/FooterContainer'
import ApartmentsMenuFooter from './footer/ApartmentsMenuFooter'

import Copyright from './footer/Copyright'

const menuAndLogoContainerClasses =
	'flex flex-col items-center space-y-8 md:items-start md:space-y-4'
const socialAndCopyRightClasses =
	'flex flex-col items-start justify-between space-y-4'

const Footer = ({ isLoggedIn }) => {
	const menu = !isLoggedIn ? <FooterMenu /> : <ApartmentsMenuFooter />

	return (
		<FooterContainer>
			<div className={menuAndLogoContainerClasses}>
				<Logo />
				{menu}
			</div>
			<div className={socialAndCopyRightClasses}>
				<IconContainer />
				<Copyright />
			</div>
		</FooterContainer>
	)
}

export default Footer
