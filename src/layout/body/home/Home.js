import React, { Fragment } from 'react'

import Features from './Features'
import GetStarted from './GetStarted'
import Offerings from './Offerings'

const Home = () => {
	return (
		<Fragment>
			<Features />
			<Offerings />
			<GetStarted />
		</Fragment>
	)
}

export default Home
