import AccountForm from "../AccountForm/accountForm";
import accountForm from "../AccountForm/accountForm.module.css";
import Layout from "../Layout/layout";
import FormField from "../FormField/formField";
import { useState } from "react";
import { CONFIRMED_STATE } from "../lib/states";
import { useHistory } from "react-router";

export default function ResetPassword(props) {
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const getParams = new URLSearchParams(
		document.location.search.substring(1)
	);
	const history = useHistory("");

	const handleNewPasswordChange = e => {
		setNewPassword(e.target.value);
	};

	const handleConfirmNewPasswordChange = e => {
		setConfirmNewPassword(e.target.value);
	};

	const handleResetPasswordSubmit = (e, setConfirmed, setErrorMessage) => {
		if (newPassword !== confirmNewPassword) {
			setErrorMessage(
				"The new password and confirm new password fields must match"
			);
			setConfirmed(CONFIRMED_STATE.FAILURE);
			return;
		}

		const apiKey = getParams.get("key");
		const activationCode = getParams.get("code");
		const email = getParams.get("email");

		fetch(`https://api.borumtech.com/api/login`, {
			method: "PUT",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				authorization: `Basic ${apiKey}`,
			},
			body: `new_password=${newPassword}&code=${activationCode}&email=${email}`,
		})
			.then(response => response.json())
			.then(response => {
				if (response.statusCode >= 200 && response.statusCode < 300) {
					setConfirmed(CONFIRMED_STATE.SUCCESS);
					history.push("/login");
				} else if (response.statusCode === 500) {
					throw new Error(
						"The email could not be sent at this time. Please contact support to change your password"
					);
				} else {
					throw new Error(response.error.message);
				}
			})
			.catch(err => {
				let { message } = err;

				if (err.name !== "Error") {
					message =
						"A system error occurred and you could not be logged in at this time. Please try again another time.";
				}

				console.error(err);
				setErrorMessage(message);
				setConfirmed(CONFIRMED_STATE.FAILURE);

				setConfirmNewPassword("");
				setNewPassword("");
			});
	};

	return (
		<Layout>
			<AccountForm
				heading="Reset your Password"
				handleSubmit={handleResetPasswordSubmit}
				failedAction=" and your password could not be changed"
			>
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
