import React from 'react'

const LoadingSpinner = () => {
	return (
		<div class="flex justify-center items-center">
			<div
				class="spinner-border animate-spin inline-block w-8 h-8 border-4 text-primary rounded-full"
				role="status"
			>
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}

export default LoadingSpinner
