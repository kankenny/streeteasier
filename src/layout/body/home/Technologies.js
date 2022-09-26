import React from 'react'

import DiReact from './tech_stack/React'
import AiFillHtml5 from './tech_stack/HTML'
import DiCss3 from './tech_stack/CSS'
import SiTailwindcss from './tech_stack/Tailwind'
import SiJavascript from './tech_stack/JavaScript'

import { motion } from 'framer-motion'

const headerClasses = 'text-2xl text-center uppercase '

const Technologies = () => {
	return (
		<motion.div
			className="mb-20"
			initial={'offscreen'}
			whileInView={'onscreen'}
			viewport={{ once: false, amount: 0.2 }}
			transition={{ staggerChildren: 0.3 }}
		>
			<div
				className={`${headerClasses} container mx-auto w-max mb-10`}
			>
				Technologies Used
			</div>
			<div className="flex flex-col align-middle w-max container mx-auto gap-y-6 md:flex-row md:justify-center md:gap-y-0 md:gap-x-40">
				<DiReact />
				<AiFillHtml5 />
				<DiCss3 />
				<SiTailwindcss />
				<SiJavascript />
			</div>
		</motion.div>
	)
}

export default Technologies
