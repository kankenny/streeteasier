import React from 'react'

import Header from './layout/Header'
import Body from './layout/Body'
import Footer from './layout/Footer'
import './App.css'

function App() {
	return (
		<div className="h-screen flex flex-col justify-between">
			<Header />
			<Body />
			<Footer />
		</div>
	)
}

export default App
