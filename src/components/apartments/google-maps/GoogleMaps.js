import React, { useState, useCallback, memo, useRef, useContext } from "react";

import GoogleMapsContext from "../../../context/GoogleMapsContext";

<<<<<<< Updated upstream
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
=======
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
	const [dibs, setDibs] = useState([]);
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={{
				lat: lat,
				lng: lng,
			}}
			zoom={5}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={mapOptions}
		>
			{selected ? (
				<InfoWindow
					position={{ lat: selected.lat, lng: selected.lng }}
					onCloseClick={() => {
						setSelected(null);
					}}
				>
					<div>
						<h1>Selected</h1>
						<h1>Dibs on this</h1>
					</div>
				</InfoWindow>
			) : null}
			<></>
		</GoogleMap>
>>>>>>> Stashed changes
	) : (
		<></>
	);
}

export default memo(GoogleMaps);
