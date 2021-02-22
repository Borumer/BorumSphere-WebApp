import inlineFormElements from "../inlineFormElements.module.css";

export default function FullName(props) {
	const firstName = sessionStorage.getItem("firstName") ?? "";
	const lastName = sessionStorage.getItem("lastName") ?? "";
	const fullName = firstName + " " + lastName;

	const saveNewName = () => {
		fetch("https://api.bforborum.com/api/login", {
			method: "PUT",
			headers: {
				authorization: `Basic ${sessionStorage.getItem("apiKey")}`,
				"content-type": "application/x-www-form-urlencoded",
			},
			body: `firstName=${firstName}&lastName=${lastName}`,
		})
			.then(response => response.json())
			.then(response => {
				if (
					response.statusCode < 200 ||
					response.statusCode >= 300 ||
					!response.ok
				) {
					alert(
						"Your first name and last name could not be updated because of a system error"
					);
				}
			});
	};

	return (
		<div className={inlineFormElements.inlineFormElement}>
			<label>Full Name</label>
            <h2 contentEditable="true" suppressContentEditableWarning="true">{fullName}</h2>
			<button onClick={saveNewName}>Save</button>
		</div>
	);
}