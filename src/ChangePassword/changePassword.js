import FormField from "../FormField/formField";
import { useState } from "react";
import changePassword from "../AccountForm/accountForm.module.css";
import { setFormElement } from "../reactExtensions";

export default function ChangePassword(props) {
    const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	const handleChangePasswordClick = e => {
		e.preventDefault();

		fetch("https://api.borumtech.com/api/login", {
			method: "PUT",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"authorization": "Basic " + localStorage.getItem("apiKey")
			},
			body: `password=${newPassword}`
		}).then(response => response.json()).then(response => {
			if (!response.ok) {
				alert("An error occurred and the password could not be changed.");
			}
		})
	};

	return (
		<form style={{width: "auto"}} onSubmit={handleChangePasswordClick} className={changePassword.form}>
			<FormField
				labelContent="Current Password"
				label="currpass"
				format="password"
				required
				value={currentPassword}
				onChange={setFormElement(setCurrentPassword)}
			/>
			<FormField
				labelContent="New Password"
				label="newpass"
				format="password"
				required
				value={newPassword}
				onChange={setFormElement(setNewPassword)}
			/>
			<FormField
				labelContent="Confirm New Password"
				label="confnewpass"
				format="password"
				required
				value={confirmNewPassword}
				onChange={setFormElement(setConfirmNewPassword)}
			/>

			<button type="submit" className={changePassword.card}>
				Change my Password
			</button>
		</form>
	);
}
