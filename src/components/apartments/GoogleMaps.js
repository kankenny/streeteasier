import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
	width: '100%',
	height: '100%',
	borderRadius: 16,
	overflow: 'hidden',
}

const center = {
	lat: 40.78,
	lng: -73.96,
}

function GoogleMaps() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyC3GbmTmVZ_48oazWqcjczMuS8jV6CRFG0',
	})

	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center)
		map.fitBounds(bounds)
		setMap(map)
	}, [])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, [])

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={12}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={{
				disableDefaultUI: true,
			}}
		>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	)
}

export default React.memo(GoogleMaps)
