import { useState } from "react";
import { CONFIRMED_STATE } from "../lib/states";
import LogoImage from "../LogoImage";
import accountForm from "./accountForm.module.css";

export default function AccountForm(props) {
	const [confirmed, setConfirmed] = useState(CONFIRMED_STATE.BEFORE);

	const handleSubmit = e => {
		e.preventDefault();
		setConfirmed(CONFIRMED_STATE.PENDING);
		props.handleSubmit(e, setConfirmed);
	};

	return (
		<main style={props.style || {}} className={accountForm.container}>
			<LogoImage />
			<h1>{props.heading}</h1>
			<p
				style={
					confirmed === CONFIRMED_STATE.BEFORE
						? {}
						: { display: "none" }
				}
			>
				{props.instructions || ""}
			</p>
			<p style={
				confirmed === CONFIRMED_STATE.SUCCESS
				? {}
				: {display: "none"}
			}>{props.messageAfterSubmission || ""}</p>
			<p
				style={
					confirmed === CONFIRMED_STATE.FAILURE
						? {}
						: { display: "none" }
				}
			>
				A system error occurred. Please try again
			</p>
			<form
				{...props.formProps}
				onSubmit={handleSubmit}
				className={accountForm.form}
				style={
					confirmed === CONFIRMED_STATE.BEFORE
						? {}
						: { display: "none" }
				}
			>
				{props.children}
			</form>
		</main>
	);
}
