import React, { useState } from 'react'

import Logo from '../components/ui/Logo'
import DesktopMenu from './header/DesktopMenu'
import HamburgerButton from './header/HamburgerButton'

import MobileMenu from './header/MobileMenu'
import ApartmentsMenu from './header/ApartmentsMenu'

const containerClasses =
	'container min-w-full mx-auto px-6 bg-slate-100 fixed z-40 mb-10'
const navBarClasses = 'flex items-center justify-between font-bold'

const Header = ({ isLoggedIn }) => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

	const toggleMenuHandler = () => {
		setMobileMenuIsOpen((prevState) => !prevState)
	}

	const header = !isLoggedIn ? (
		<div>
			<DesktopMenu />{' '}
			<HamburgerButton
				onClick={toggleMenuHandler}
				isMobileOpen={mobileMenuIsOpen}
			/>
		</div>
	) : (
		<ApartmentsMenu />
	)

	return (
		<section id="header">
			<div className={containerClasses}>
				<nav className={navBarClasses}>
					<Logo />
					{header}
				</nav>
				<MobileMenu isMobileOpen={mobileMenuIsOpen} />
			</div>
		</section>
	)
}

export default Header
