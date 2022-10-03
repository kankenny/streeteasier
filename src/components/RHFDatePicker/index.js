import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { Controller } from 'react-hook-form'
import 'react-datepicker/dist/react-datepicker.css'

const baseClasses =
	'px-4 py-3 mt-4 mb-1 w-full rounded-md bg-slate-100 ring-2 focus:outline-none focus:ring-2 focus:bg-white text-sm'

const RHFDatePicker = ({
  className,
  control,
  name,
  dateFormat="MM/dd/yyyy",
  ...rest
}) => {
	return (
		<Controller name={name} control={control} render={({ field, fieldState }) => {
      const borderClasses = fieldState?.error ? 'ring-rose-500' : 'ring-gray-200'
      return (
        <div>
          <ReactDatePicker
            dateFormat={dateFormat}
            selected={field.value}
            {...rest}
            {...field}
            onSelect={(date) => field.onChange(date)}
            onChange={(date) => date && field.onChange(date)}
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

export default RHFDatePicker
