import React, { useContext } from 'react'

import UserContext from './context/UserContext'

import Header from './layout/Header'
import Body from './layout/Body'
import Footer from './layout/Footer'
import './App.css'

function App() {
	const currentUserCtx = useContext(UserContext)

	return (
		<div className="h-screen flex flex-col justify-between">
			<Header isLoggedIn={currentUserCtx.isLoggedIn} />
			<Body />
			<Footer isLoggedIn={currentUserCtx.isLoggedIn} />
		</div>
	)
}

export default App
