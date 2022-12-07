import React from 'react'

function EmailAddress({ emailAddress }) {
	return (
		<a
			className="text-lg mt-0 mb-2 text-primary font-bold"
			href={`#user-${emailAddress}`}
		>
			{emailAddress}
		</a>
	)
}

export default EmailAddress
