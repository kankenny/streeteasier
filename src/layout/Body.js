import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './body/home/Home'
import About from './body/about/About'

const Body = () => {
	return (
		<Fragment>
			<Routes>
				<Route path="*" element={<Home />}></Route>
				<Route path="/welcome" element={<Home />}></Route>
				<Route path="/about" element={<About />} />
				<Route path="/members" element={<p>members</p>} />
				<Route path="/contact" element={<p>contact</p>} />
				<Route path="/user-login-signup" element={<p>login</p>} />
			</Routes>
		</Fragment>
	)
}

export default Body
