import React, { useRef, useState } from "react";

import Heading from "../ui/Heading";
import ApartmentSearchContainer from "./ApartmentSearchContainer";
import ApartmentsList from "./ApartmentsList";
import DUMMY_DATA2 from "./DUMMY_APARTMENTS";
import getApartments from "../../api/getApartments";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";

function ApartmentSearch() {
	const zipCodeRef = useRef("");
	const zipCode = zipCodeRef.current.value;
	const [queriedApartments, setQueriedApartments] = useState(DUMMY_DATA2);
	const [selected, setSelected] = useState(null);

	const zipCodeOnSubmitHandler = (e) => {
		e.preventDefault();
		getApartments(zipCode, setQueriedApartments);
		console.log(queriedApartments);
	};

	const PlacesAutoComplete = ({ setSelected }) => {
		const {
			ready,
			value,
			setValue,
			suggestions: { status, data },
			clearSuggestions,
		} = usePlacesAutocomplete();

		const handleSelect = async (address) => {
			setValue(address, false);
			clearSuggestions();

			const geocode = await getGeocode({ address });
			const { lat, lng } = getLatLng(geocode[0]);
			setSelected(lat, lng);
		};

		return (
			<Combobox>
				<ComboboxInput
					value={value}
					onChange={(e) => setValue(e.target.value)}
					disabled={!ready}
					className="combobox-input"
					placeholder="Search an address"
				/>

				<ComboboxPopover>
					<ComboboxList>
						{status === "OK" &&
							data.map(({ place_id, description }) => (
								<ComboboxOption key={place_id} value={description} />
							))}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		);
	};

	return (
		<ApartmentSearchContainer>
			<Heading heading="Apartment Search" />
			{/* <form action="submit" onSubmit={zipCodeOnSubmitHandler}>
				<Input
					ref={zipCodeRef}
					placeholder="Zipcode"
					className="text-black text-md focus:outline-none"
					maxLength={5}
				/>
			</form> */}

			<div className="search-container">
				<PlacesAutoComplete setSelected={setSelected} />
			</div>

			<ApartmentsList apartments={queriedApartments} setApartments={setQueriedApartments} />
		</ApartmentSearchContainer>
	);
}

export default ApartmentSearch;
