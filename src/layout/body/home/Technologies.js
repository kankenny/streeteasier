import React from 'react'

import DiReact from './tech_stack/React'
import AiFillHtml5 from './tech_stack/HTML'
import DiCss3 from './tech_stack/CSS'
import SiTailwindcss from './tech_stack/Tailwind'

const headerClasses = 'text-2xl text-center uppercase '

const Technologies = () => {
	return (
		<div className="mb-20">
			<div
				className={`${headerClasses} container mx-auto w-max mb-10`}
			>
				Technologies Used
			</div>
			<div className="flex flex-col align-middle w-max container mx-auto gap-y-4 md:flex-row md:justify-center md:gap-y-0 md:gap-x-40">
				<DiReact />
				<AiFillHtml5 />
				<DiCss3 />
				<SiTailwindcss />
			</div>
		</div>
	)
}

export default Technologies
