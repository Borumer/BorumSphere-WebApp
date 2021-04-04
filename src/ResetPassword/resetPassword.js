import AccountForm from "../AccountForm/accountForm";
import accountForm from "../AccountForm/accountForm.module.css";
import Layout from "../Layout/layout";
import FormField from "../FormField/formField";
import { useState } from "react";

export default function ResetPassword(props) {
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	const handleNewPasswordChange = e => {
		setNewPassword(e.target.value);
	};

	const handleConfirmNewPasswordChange = e => {
		setConfirmNewPassword(e.target.value);
	};

	return (
		<Layout>
			<AccountForm heading="Reset your Password">
				<FormField
					autofocus
					label="newpass"
					labelContent="New Password"
					format="password"
					required
					value={newPassword}
					onChange={handleNewPasswordChange}
				/>
				<FormField
					label="confirmpass"
					labelContent="Confirm Password"
					format="password"
					required
					value={confirmNewPassword}
					onChange={handleConfirmNewPasswordChange}
				/>
				<button type="submit" className={accountForm.card}>
					Reset your Password
				</button>
			</AccountForm>
		</Layout>
	);
}
