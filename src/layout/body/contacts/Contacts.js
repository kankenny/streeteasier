import React from 'react'
import Overview from '../../../components/ui/Overview'

import { motion } from 'framer-motion'

const contactsParagraph =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eveniet!'

const Contacts = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Overview
				title="Reach out to us"
				subtitle="We are friendly and we don't bite"
				paragraph={contactsParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={contactsParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={contactsParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={contactsParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={contactsParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={contactsParagraph}
			/>
		</motion.div>
	)
}

export default Contacts
