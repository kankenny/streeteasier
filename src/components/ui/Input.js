import React from 'react'

const inputClasses =
	'px-4 py-3 mt-4 w-full rounded-md bg-slate-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'

const Input = ({
	type,
	name,
	className,
	placeholder,
	value,
	onChange,
	required,
}) => {
	return (
		<input
			type={type}
			name={name}
			className={`${inputClasses} ${className}`}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			autoComplete={type === 'password' ? 'on' : 'off'}
			// autoComplete is for passwords
			required={required}
		/>
	)
}

export default Input
