import React, { useState, useRef } from 'react'

import Input from '../ui/Input'

function Bio({ userContextBio, setUserContextBio }) {
	const [isEnabled, setIsEnabled] = useState(userContextBio.length === 0)
	const inputRef = useRef(null)

	const onEditClickHandler = () => {
		if (userContextBio.length === 0) {
			inputRef.current.focus()
			return
		}

		setIsEnabled(() => !isEnabled)
		inputRef.current.focus()
	}

	const onBioChangeHandler = (e) => {
		setUserContextBio(e.target.value)
	}

	const fieldSet = isEnabled ? (
		<fieldset>
			<Input
				className="w-[35rem] my-auto"
				onChange={onBioChangeHandler}
				inputValue={userContextBio}
				placeholder="Let us know a little bit more about you!"
				ref={inputRef}
			/>
		</fieldset>
	) : (
		<fieldset disabled>
			<Input
				className="w-[35rem] bg-lightSecondary bg-opacity-0 my-auto"
				onChange={onBioChangeHandler}
				inputValue={userContextBio}
				placeholder="Let us know a little bit more about you!"
				ref={inputRef}
			/>
		</fieldset>
	)

	return (
		<div className="flex justify-between mt-6 py-6 border-t border-slate-600 text-center">
			{fieldSet}
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 1024 1024"
				className="mb-1 text-primary duration-200 hover:scale-110 my-auto cursor-pointer"
				height="2em"
				width="2em"
				xmlns="http://www.w3.org/2000/svg"
				onClick={onEditClickHandler}
			>
				<path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path>
			</svg>
		</div>
	)
}

export default Bio
