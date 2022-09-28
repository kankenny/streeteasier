import React, { useState } from 'react'

import Logo from '../components/ui/Logo'
import DesktopMenu from './header/DesktopMenu'
import HamburgerButton from './header/HamburgerButton'

import MobileMenu from './header/MobileMenu'

const containerClasses =
	'container min-w-full mx-auto px-6 bg-slate-100 fixed z-40'
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
