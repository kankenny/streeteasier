import React, { useRef, useState } from "react";

import Heading from "../ui/Heading";
import ApartmentSearchContainer from "./ApartmentSearchContainer";
import Input from "../ui/Input";
import ApartmentsList from "./ApartmentsList";
import DUMMY_DATA2 from "./DUMMY_APARTMENTS";
import getApartments from "../../api/getApartments";
import { db } from "../../firebase";
import { doc, setDoc, collection, query, getDocs, addDoc } from "firebase/firestore";

function ApartmentSearch() {
	const zipCodeRef = useRef("");
	const [queriedApartments, setQueriedApartments] = useState(DUMMY_DATA2);
	const [queriedZipCode, setQueriedZipCode] = useState(10021);

	const storeDefaultApartments = async (zipCode, queriedApartments) => {
		console.log(queriedApartments);
		const queriedApartmentsCollectionReference = collection(db, "apartments", `${zipCode}`, "listings"); // Reference to the collection where apartments will be stored

		// const listingQuery = await getDocs(queriedApartmentsCollectionReference);
		// listingQuery.forEach((listing) => {
		// 	console.log(listing.id)
		// })

		for (let i = 0; i < Object.getOwnPropertyNames(queriedApartments).length; i++) {
			// console.log(queriedApartments[i].id);
			console.log(queriedApartments.i.address);
			console.log(queriedApartments.i.price);
			console.log(queriedApartments.i.beds);
			console.log(queriedApartments.i.baths);

			const data = {
				address: queriedApartments.i.address,
				price: queriedApartments.i.price,
				bedrooms: queriedApartments.i.beds,
				bathrooms: queriedApartments.i.baths,
				numPeopleInterested: 0,
				interestedUsers: [],
			};

			try {
				setDoc(doc(db, queriedApartmentsCollectionReference, queriedApartments[i].id), data);
			} catch (error) {
				console.error();
			}
		}

	};

	const zipCodeOnSubmitHandler = async (e) => {
		e.preventDefault();
		getApartments(zipCodeRef.current.value, setQueriedApartments);
		storeDefaultApartments(zipCodeRef.current.value, queriedApartments);
	};

	return (
		<ApartmentSearchContainer>
			<Heading heading="Apartment Search" />
			<form onSubmit={zipCodeOnSubmitHandler}>
				<Input
					ref={zipCodeRef}
					placeholder="Zipcode"
					className="text-black text-md focus:outline-none"
					maxLength={5}
				/>
			</form>
			<ApartmentsList
				apartments={queriedApartments}
				setApartments={setQueriedApartments}
				queriedZipCode={queriedZipCode}
			/>
		</ApartmentSearchContainer>
	);
}

export default ApartmentSearch;
