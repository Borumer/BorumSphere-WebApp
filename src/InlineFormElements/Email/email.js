import { useState } from "react";
import { setFormElement } from "../../reactExtensions";
import inlineFormElements from "../inlineFormElements.module.css";

export default function Email(props) {
	const [email, setEmail] = useState(sessionStorage.getItem("email"));

	const onEmailSaveClick = e => {
		fetch("https://api.bforborum.com/api/login", {
			method: "PUT",
			body: `email=${email}`,
		});
	};

	return (
		<div className={inlineFormElements.inlineFormElement}>
			<label>Email</label>
			<p contentEditable="true" onChange={setFormElement(setEmail)}>{email}</p>
            <button onClick={onEmailSaveClick}>Save</button>
		</div>
	);
}
