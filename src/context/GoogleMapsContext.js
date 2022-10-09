import React, { useState } from 'react'

const GoogleMapsContext = React.createContext({
	lat: 40.776676,
	lng: -73.971321,
	setCenterHandler: () => {},
})

export const GoogleMapsContextProvider = (props) => {
	const [latitude, setLatitude] = useState(40.776676)
	const [longitude, setLongitude] = useState(-73.971321)

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
