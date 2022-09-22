import React, { useState } from 'react'

import Logo from './header/Logo'
import DesktopMenu from './header/DesktopMenu'
import HamburgerButton from './header/HamburgerButton'
import MobileMenu from './header/MobileMenu'

const containerClasses =
	'container max-w-screen-2xl mx-auto px-6 py-18 pt-3 bg-slate-100'
const navBarClasses =
	'flex items-center justify-between font-bold text-slate-800'

const Header = () => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

	const toggleMenuHandler = () => {
		setMobileMenuIsOpen((prevState) => !prevState)
	}

	return (
		<section id="header">
			<div className={containerClasses}>
				<nav className={navBarClasses}>
					<Logo />
					<DesktopMenu />
					<HamburgerButton
						onClick={toggleMenuHandler}
						isMobileOpen={mobileMenuIsOpen}
					/>
				</nav>
				<MobileMenu isMobileOpen={mobileMenuIsOpen} />
			</div>
		</section>
	)
}

export default Header
