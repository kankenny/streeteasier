import React, { useState } from 'react'

import Logo from '../components/ui/Logo'
import DesktopMenu from './header/DesktopMenu'
import HamburgerButton from './header/HamburgerButton'

import MobileMenu from './header/MobileMenu'
import ApartmentsMenu from './header/ApartmentsMenu'

const containerClasses = 'min-w-full px-6 bg-slate-100 fixed z-40'
const navBarClasses = 'flex items-center justify-between font-bold'

const Header = ({ isLoggedIn }) => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

	const toggleMenuHandler = () => {
		setMobileMenuIsOpen((prevState) => !prevState)
	}

	const header = !isLoggedIn ? (
		<div>
			<DesktopMenu />
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
			<nav>
				<div className={containerClasses}>
					<nav className={navBarClasses}>
						<Logo />
						{header}
					</nav>
					<MobileMenu isMobileOpen={mobileMenuIsOpen} />
				</div>
			</nav>
		</section>
	)
}

export default Header
