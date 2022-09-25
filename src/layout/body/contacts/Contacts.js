import React, { Fragment } from 'react'
import Overview from '../../../components/ui/Overview'

const contactsParagraph =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eveniet!'

const Contacts = () => {
	return (
		<Fragment>
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
		</Fragment>
	)
}

export default Contacts
