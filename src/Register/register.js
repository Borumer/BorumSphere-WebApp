import register from "./register.module.css";
import FormField from "../FormField/formField";
import { useState } from "react";
import LogoImage from "../LogoImage";
import Layout from "../Layout/layout";
import { Link } from "react-router-dom";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleEmailChange = e => setEmail(e.target.value);
	const handlePasswordChange = e => setPassword(e.target.value);
	const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value);
	const handleFirstNameChange = e => setFirstName(e.target.value);
	const handleLastNameChange = e => setLastName(e.target.value);

	const handleRegister = e => {
		e.preventDefault();

		fetch("https://api.borumtech.com/api/register", {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			},
			body: `email=${email}&password=${password}&first_name=${firstName}&last_name=${lastName}`,
		})
			.then(response => response.json())
			.catch(response => {
				alert("You could not be registered at this time");
			})
			.then(response => {
				if (response.statusCode >= 200 && response.statusCode < 300) {
					setEmail("");
					setPassword("");
					setConfirmPassword("");
					setFirstName("");
					setLastName("");

					sessionStorage.setItem("email", email);
					sessionStorage.setItem("id", response.data.id);
					sessionStorage.setItem("firstName", firstName);
					sessionStorage.setItem("lastName", lastName);
					sessionStorage.setItem("apiKey", response.data.api_key);
				} else {
					alert(
						"A system error occurred and you could not be registered. We apologize for the inconvenience. "
					);
				}
			});
	};

	return (
		<Layout>
			<div className={register.accountForm}>
				<LogoImage />
				<h1>Register for Borum</h1>
				<form
					onSubmit={handleRegister}
					method="post"
					className={register.form}
				>
					<FormField
						required
						onChange={handleEmailChange}
						value={email}
						focus
						format="email"
						label="Email"
					/>
					<FormField
						required
						onChange={handleFirstNameChange}
						value={firstName}
						focus
						format="text"
						label="First Name"
					/>
					<FormField
						required
						onChange={handleLastNameChange}
						value={lastName}
						focus
						format="text"
						label="Last Name"
					/>
					<FormField
						required
						onChange={handlePasswordChange}
						value={password}
						format="password"
						label="Password"
					/>
					<FormField
						required
						onChange={handleConfirmPasswordChange}
						value={confirmPassword}
						format="password"
						label="Confirm Password"
					/>
					<Link to="/login">Already have an account? Login</Link>
					<button type="submit" className={register.card}>
						Register
					</button>
				</form>
			</div>
		</Layout>
	);
}
