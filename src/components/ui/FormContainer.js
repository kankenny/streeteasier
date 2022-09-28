import React from 'react'

const FormContainer = ({ children }) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 ml-10 min-h-[15rem] max-w-sm ">
			{children}
		</div>
	)
}

export default FormContainer
