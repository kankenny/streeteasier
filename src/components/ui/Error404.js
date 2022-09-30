import React from 'react'

import Card from './Card'
import Overview from './Overview'

const errorParagraph =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam debitis magnam. Illum, laborum mollitia? Nam quisquam odio animi repellat dolores. Debitis rerum totam asperiores autem corrupti nostrum? Beatae debitis ullam, eum commodi, ratione quam cumque magni ipsa sint delectus recusandae aliquid magnam consectetur dolor incidunt blanditiis enim? Dolorem, debitis?'

function Error404() {
	return (
		<Card className="max-w-6xl mx-auto">
			<Overview
				title="404 Error: Page not found!"
				subtitle="It looks like you accessed a dead-end url"
				paragraph={errorParagraph}
			/>
		</Card>
	)
}

export default Error404
