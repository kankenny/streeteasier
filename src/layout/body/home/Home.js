import React from 'react'

import Overview from '../../../components/ui/Overview'
import Features from './Features'
import GetStarted from './GetStarted'
import Offerings from './Offerings'
import Technologies from './Technologies'

import { motion } from 'framer-motion'

const homeParagraph =
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quam dolores excepturi provident ratione officia perspiciatis debitis nostrum, laudantium adipisci necessitatibus, vitae assumenda sint minus illum alias quae, aspernatur vero dicta? Animi exercitationem at, consequatur vitae eius optio doloremque veritatis?'

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="StreetEasier"
				subtitle="An apartment and roommate matching hub"
				paragraph={homeParagraph}
			/>
			<Features />
			<Offerings />
			<GetStarted />
			<Technologies />
		</motion.div>
	)
}

export default Home
