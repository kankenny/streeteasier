import React, { Fragment } from 'react'

import Features from './Features'
import GetStarted from './GetStarted'
import Offerings from './Offerings'
import Technologies from './Technologies'

const Home = () => {
	return (
		<Fragment>
			<Features />
			<Offerings />
			<GetStarted />
			<Technologies />
		</Fragment>
	)
}

export default Home
