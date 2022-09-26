import React from 'react'
import Overview from '../../../components/ui/Overview'

import { motion } from 'framer-motion'

const aboutParagraph =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla necessitatibus nemo officia, assumenda ipsam dignissimos nobis quas ipsum nesciunt repellat sapiente ipsa sunt, sit earum fuga deserunt illum temporibus blanditiis soluta laudantium, enim iste. Labore quasi perspiciatis debitis, vel quibusdam quas consequatur officiis sint cumque enim praesentium reprehenderit laudantium quo inventore, sunt esse repellendus neque? Dolores at laboriosam aspernatur illo hic fugit placeat velit nobis blanditiis nemo, sapiente deserunt amet maxime consectetur, reprehenderit, expedita facilis minima excepturi quasi sint accusantium ducimus sunt quod! Necessitatibus expedita, iste laboriosam possimus sequi repellendus alias tempore illum minima eum, nulla tenetur beatae dicta.'

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="About"
				subtitle="Our team designed this project to help people"
				paragraph={aboutParagraph}
			/>
			<Overview
				title="About"
				subtitle="Our team designed this project to help people"
				paragraph={aboutParagraph}
			/>
			<Overview
				title="About"
				subtitle="Our team designed this project to help people"
				paragraph={aboutParagraph}
			/>
			<Overview
				title="About"
				subtitle="Our team designed this project to help people"
				paragraph={aboutParagraph}
			/>
		</motion.div>
	)
}

export default About
