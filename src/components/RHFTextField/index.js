import React from 'react'
import { Controller } from 'react-hook-form'

const baseClasses =
	'px-4 py-3 mt-4 mb-1 w-full rounded-md bg-slate-100 ring-2 focus:outline-none focus:ring-2 focus:bg-white text-sm'

const RHFTextField = ({
  className,
  control,
  name,
  ...rest
}) => {
	return (
		<Controller name={name} control={control} render={({ field, fieldState }) => {
      const borderClasses = fieldState?.error ? 'ring-rose-500' : 'ring-gray-200'
      return (
        <div>
          <input
            {...rest}
            {...field}
            name={name}
            className={`${baseClasses} ${borderClasses} ${className} 
            `}
          />
          {fieldState?.error && (
            <span className='text-xs text-rose-500'>
              {fieldState?.error?.message}
            </span>
          )}
        </div>
      )
    }} />
	)
}

export default RHFTextField
