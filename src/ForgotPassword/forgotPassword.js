import { useState } from "react";
import AccountForm from "../AccountForm/accountForm";
import accountForm from "../AccountForm/accountForm.module.css";
import FormField from "../FormField/formField";
import Layout from "../Layout/layout";
import { CONFIRMED_STATE } from "../lib/states";

export default function ForgotPassword(props) {
	const [email, setEmail] = useState("");

	const handleEmailSubmit = (e, setConfirmed) => {
		fetch(`https://forum.borumtech.com/reset_password`, {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded"
			},
			body: `email=${email}`
		})
			.then(response => setConfirmed(CONFIRMED_STATE.SUCCESS))
			.catch(response => {
				setConfirmed(CONFIRMED_STATE.FAILURE);
				console.error(response);
			});
	};

	return (
		<Layout>
			<AccountForm
				heading="Reset your Password"
				instructions="We'll send you an email with instructions on how to reset
					your password"
				messageAfterSubmission={
					"An email will be sent to you shortly with instructions to change your password."
				}
				formProps={{
					method: "post",
				}}
				handleSubmit={handleEmailSubmit}
			>
				<FormField
					autofocus
					label="email"
					labelContent="Enter your Email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<button type="submit" className={accountForm.card}>
					Send Email
				</button>
			</AccountForm>
		</Layout>
	);
}
