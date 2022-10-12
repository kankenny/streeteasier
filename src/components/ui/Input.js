import React from 'react'

const inputClasses =
	'px-4 py-3 mt-4 w-full rounded-md bg-slate-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'

const Input = React.forwardRef((props, ref) => {
	return (
		<input
			type={props.type}
			name={props.name}
			className={`${inputClasses} ${props.className}`}
			placeholder={props.placeholder}
			onChange={props.onChange}
			autoComplete={props.type === 'password' ? 'on' : 'off'}
			// autoComplete is for passwords
			required={props.required}
			onSubmit={props.onSubmit}
			maxLength={props.maxLength}
			minLength={props.minLength}
			ref={ref}
		/>
	)
})

export default Input
