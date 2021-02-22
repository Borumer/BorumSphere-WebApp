import FormField from "../FormField/formField";
import { useState } from "react";
import changePassword from "../Register/register.module.css";
import { setFormElement } from "../reactExtensions";

export default function ChangePassword(props) {
    const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	return (
		<form className={changePassword.form}>
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
