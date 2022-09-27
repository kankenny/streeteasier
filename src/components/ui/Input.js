import React from 'react'

const Input = ({ type, name, className, placeholder, value, onChange }) => {
	return (
		<input
			type={type}
			name={name}
			className={`px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm ${className}`}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			autoComplete={type === 'password' ? 'on' : 'off'}
			// autoComplete is for passwords
		/>
	)
}

export default Input
