import React from 'react'

const HamburgerButton = (props) => {
	return (
		<div className="md:hidden">
			<button
				id="menu-btn"
				type="button"
				onClick={props.onClick}
				className={`z-40 block hamburger md:hidden focus:outline-none ${
					props.isMobileOpen ? 'open' : ''
				}`}
			>
				<span className="hamburger-top"></span>
				<span className="hamburger-middle"></span>
				<span className="hamburger-bottom"></span>
			</button>
		</div>
	)
}

export default HamburgerButton
