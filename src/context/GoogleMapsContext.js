import React, { useState } from 'react'

const GoogleMapsContext = React.createContext({
	lat: 40.78,
	lng: -73.96,
	setCenterHandler: () => {},
})

export const GoogleMapsContextProvider = (props) => {
	const [latitude, setLatitude] = useState(40.78)
	const [longitude, setLongitude] = useState(-73.96)

	const setCenterHandler = (center) => {
		setLatitude(center.lat)
		setLongitude(center.lng)
	}

	return (
		<GoogleMapsContext.Provider
			value={{
				lat: latitude,
				lng: longitude,
				setCenterHandler: setCenterHandler,
			}}
		>
			{props.children}
		</GoogleMapsContext.Provider>
	)
}

export default GoogleMapsContext
