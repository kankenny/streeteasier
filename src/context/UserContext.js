import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get_data_first, get_data_last, get_email, get_email_holder } from "../api/getUserProfile";

let holder;
const UserContext = React.createContext({
	firstName: "",
	lastName: "",
	emailAddress: "",
	bio: "",
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: () => {},
	onFirstNameChange: () => {},
	onLastNameChange: () => {},
	onEmailChange: () => {},
	onRefershHandler: () => {},
});

export const UserContextProvider = (props) => {
	const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
	const [lastName, setLastName] = useState(localStorage.getItem("lastName"));
	const [emailAddress, setEmail] = useState(localStorage.getItem("emailAddress"));
	const bio =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores nam rem enim amet, veniam minima facere nobis magni, tempora, expedita magnam architecto pariatur quas?";
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") !== null);

	const navigate = useNavigate();

	const onLogoutHandler = () => {
		navigate("/welcome");
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("firstName");
		localStorage.removeItem("lastName");
		localStorage.removeItem("emailAddress");
		setIsLoggedIn(false);
	};

	const onLoginHandler = () => {
		navigate("/apartments");
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
		onFirstNameChange(get_email_holder());
		onLastNameChange(get_email_holder());
		onEmailChange(get_email_holder());
	};

	const onFirstNameChange = (email) => {
		get_data_first(setFirstName, email);
		localStorage.setItem("firstName", firstName);
	};

	const onLastNameChange = (email) => {
		get_data_last(setLastName, email);
		localStorage.setItem("lastName", lastName);
	};

	const onEmailChange = (email) => {
		get_email(setEmail, email);
		localStorage.setItem("emailAddress", email);
	};

	const onRefershHandler = () => {};
	return (
		<UserContext.Provider
			value={{
				firstName: firstName,
				lastName: lastName,
				emailAddress: emailAddress,
				bio: bio,
				isLoggedIn: isLoggedIn,
				onLogout: onLogoutHandler,
				onLogin: onLoginHandler,
				onFirstNameChange: onFirstNameChange,
				onLastNameChange: onLastNameChange,
				onEmailChange: onEmailChange,
				onRefershHandler: onRefershHandler,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContext;
