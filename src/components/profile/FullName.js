import React from 'react'

function FullName({ firstName, lastName }) {
	return (
		<h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
			{`${firstName} ${lastName}`}
		</h3>
	)
}

export default FullName
