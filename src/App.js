import React, { 
	Fragment, 
	// useState,
	// useEffect
} from 'react'

// import {
// 	collection, 
// 	getDocs,
// } from 'firebase/firestore'

import Header from './layout/Header'
import Body from './layout/Body'
import Footer from './layout/Footer'
import './App.css'
// import { db } from './firebase-config'

function App() {
	return (
		<Fragment>
			<Header />
			<Body />
			<Footer />
		</Fragment>
	)
}

export default App
