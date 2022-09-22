import React, { useState } from 'react'

import Logo from '../assets/logo.png'

const Header = () => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

	const toggleMenuHandler = () => {
		setMobileMenuIsOpen((prevState) => !prevState)
	}

	return (
		<section id="header">
			{/* Header Container */}
			<div className="container max-w-screen-2xl mx-auto px-6 py-18 pt-3 bg-slate-100">
				<nav className="flex items-center justify-between font-bold text-slate-800">
					{/* Logo */}
					<img src={Logo} alt="Logo" />
					{/* Menu */}
					<div className="hidden h-10 font-alata md:flex md:space-x-8">
						<div className="group">
							<a href="#body">About</a>
							<div className="mx-2 group-hover:border-b group-hover:border-slate-800"></div>
						</div>
						<div className="group">
							<a href="#body">Members</a>
							<div className="mx-2 group-hover:border-b group-hover:border-slate-800"></div>
						</div>
						<div className="group">
							<a href="#body">Contacts</a>
							<div className="mx-2 group-hover:border-b group-hover:border-slate-800"></div>
						</div>
						<div className="group">
							<a href="#body">Start Now</a>
							<div className="mx-2 group-hover:border-b group-hover:border-slate-800"></div>
						</div>
					</div>
					{/* Hamburger Button */}
					<div className="md:hidden">
						<button
							id="menu-btn"
							type="button"
							onClick={toggleMenuHandler}
							className={`z-40 block hamburger md:hidden focus:outline-none ${
								mobileMenuIsOpen ? 'open' : ''
							}`}
						>
							<span className="hamburger-top"></span>
							<span className="hamburger-middle"></span>
							<span className="hamburger-bottom"></span>
						</button>
					</div>
				</nav>

				{/* Mobile Menu */}
				<div
					id="menu"
					className={`absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-slate-100 uppercase bg-slate-800 ${
						!mobileMenuIsOpen ? 'hidden' : 'flex'
					}`}
				>
					<a
						href="#body"
						className="hover:text-purple-500 duration-200"
					>
						About
					</a>
					<a
						href="#body"
						className="hover:text-purple-500 duration-200"
					>
						Careers
					</a>
					<a
						href="#body"
						className="hover:text-purple-500 duration-200"
					>
						Events
					</a>
					<a
						href="#body"
						className="hover:text-purple-500 duration-200"
					>
						Products
					</a>
					<a
						href="#body"
						className="hover:text-purple-500 duration-200"
					>
						Support
					</a>
				</div>
			</div>
		</section>
	)
}

export default Header
