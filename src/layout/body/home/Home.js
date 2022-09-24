import React, { Fragment } from 'react'

import Overview from '../../../components/ui/Overview'
import Features from './Features'
import GetStarted from './GetStarted'
import Offerings from './Offerings'
import Technologies from './Technologies'

const homeParagraph =
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quam dolores excepturi provident ratione officia perspiciatis debitis nostrum, laudantium adipisci necessitatibus, vitae assumenda sint minus illum alias quae, aspernatur vero dicta? Animi exercitationem at, consequatur vitae eius optio doloremque veritatis?'

const Home = () => {
	return (
		<Fragment>
			<Overview
				title="StreetEasier"
				subtitle="An apartment and roommate matching hub"
				paragraph={homeParagraph}
			/>
			<Features />
			<Offerings />
			<GetStarted />
			<Technologies />
		</Fragment>
	)
}

export default Home
