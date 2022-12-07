// requests and gets user profile details such as firstName, lastName, birthday
import { db } from "../firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

let email_holder, first_temp, last_temp, email_temp;

function set_email_holder(email) {
	email_holder = email;
}
function get_email_holder() {
	return email_holder;
}

async function get_first(email_holder) {
	const querySnapshot = await getDocs(collection(db, "users")); //getting the snapshot of the data
	querySnapshot.forEach((doc) => {
		//for each user in the snapshot
		if (doc.data().email == email_holder) {
			//check to see if the email matches the one given by the user
			return doc.data().firstName;
		}
	});
}

async function get_data_first(setFirstName, email_holder) {
	const querySnapshot = await getDocs(collection(db, "users")); //getting the snapshot of the data
	querySnapshot.forEach((doc) => {
		//for each user in the snapshot
		if (doc.data().email == email_holder) {
			//check to see if the email matches the one given by the user
			setFirstName(doc.data().firstName);
		}
	});
}

async function get_data_last(setLastName, email_holder) {
	const querySnapshot = await getDocs(collection(db, "users")); //getting the snapshot of the data
	querySnapshot.forEach((doc) => {
		//for each user in the snapshot
		if (doc.data().email == email_holder) {
			//check to see if the email matches the one given by the user
			setLastName(doc.data().lastName);
		}
	});
}

async function get_email(setEmail, email_holder) {
	const querySnapshot = await getDocs(collection(db, "users")); //getting the snapshot of the data
	querySnapshot.forEach((doc) => {
		//for each user in the snapshot
		if (doc.data().email == email_holder) {
			//check to see if the email matches the one given by the user
			setEmail(doc.data().email);
		}
	});
}

export { get_data_first, get_data_last, get_email, set_email_holder, get_email_holder, get_first };
