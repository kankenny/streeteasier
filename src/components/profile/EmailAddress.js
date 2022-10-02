import React from 'react'

function EmailAddress({ emailAddress }) {
	return (
		<a
			className="text-xs mt-0 mb-2 text-primary font-bold uppercase"
			href={`#user-${emailAddress}`}
		>
			{emailAddress}
		</a>
	)
}

export default EmailAddress
