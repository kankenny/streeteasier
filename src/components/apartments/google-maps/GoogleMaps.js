import React, { useState, useCallback, memo, useRef, useContext } from "react";

import GoogleMapsContext from "../../../context/GoogleMapsContext";

import { GoogleMap, useJsApiLoader, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";

import dibUrl from "../../../assets/google-maps/Marker.svg";

const containerStyle = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
};

const mapOptions = {
	disableDefaultUI: true,
};

const libraries = ["places"];

function GoogleMaps() {
	const { isLoaded, loadError } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyC3GbmTmVZ_48oazWqcjczMuS8jV6CRFG0",
		libraries,
	});

	const { lat, lng, setCenterHandler } = useContext(GoogleMapsContext);

	const [, setMap] = useState(null);
	const [dibs, setDibs] = useState([]);
	const [selected, setSelected] = useState(null);

	const mapRef = useRef();

	const onLoad = useCallback(
		function callback(map) {
			const bounds = new window.google.maps.LatLngBounds({
				lat: lat,
				lng: lng,
			});
			mapRef.current = map;
			map.fitBounds(bounds);
			setMap(map);
		},
		[lat, lng]
	);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	if (loadError) {
		return "Failed to load Google Maps API";
	}
	if (!isLoaded) {
		return "Fetching Google Maps API";
	}

	return isLoaded ? (
		<>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={{
					lat: lat,
					lng: lng,
				}}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={mapOptions}
			>
				{selected && <Marker position={selected} />}
				<></>
			</GoogleMap>
		</>
	) : (
		<></>
	);
}

export default memo(GoogleMaps);
