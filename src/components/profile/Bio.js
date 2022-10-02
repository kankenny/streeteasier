import React from 'react'

function Bio({ bio }) {
	return (
		<div className="mt-6 py-6 border-t border-slate-600 text-center">
			<p className="font-light leading-relaxed text-slate-600 mb-4">
				{bio}
			</p>
		</div>
	)
}

export default Bio
