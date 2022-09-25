import React, { Fragment } from 'react'
import Overview from '../../../components/ui/Overview'

const membersParagraph =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nostrum debitis consequuntur. Illo voluptatibus accusamus facilis magnam distinctio quo temporibus, fugit omnis unde ipsam, aliquam, adipisci consequuntur tenetur aliquid excepturi voluptate earum a! Quas iusto dolorem ipsum itaque corporis aliquam fugiat, deserunt eos debitis rerum nobis repudiandae hic asperiores optio.'

const Members = () => {
	return (
		<Fragment>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={membersParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={membersParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={membersParagraph}
			/>
			<Overview
				title="Who are we?"
				subtitle="We are simply students with a vision for change"
				paragraph={membersParagraph}
			/>
		</Fragment>
	)
}

export default Members
