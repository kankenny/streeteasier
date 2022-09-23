import React from 'react'

const Link = ({ linkText, className }) => {
	return (
		<a
			className={`group text-zinc-900 transition-all duration-200 ease-in-out ${
				className === 'mainLink' ? 'text-blue-700' : ''
			}`}
			href="#body"
		>
			<span
				className={`bg-left-bottom bg-gradient-to-r  bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${
					className === 'mainLink'
						? 'text-blue-700 from-blue-700 to-blue-700'
						: 'from-zinc-900 to-zinc-900'
				}`}
			>
				{linkText}
			</span>
		</a>
	)
}

export default Link
