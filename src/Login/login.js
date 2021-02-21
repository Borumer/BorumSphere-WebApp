import login from "../Register/register.module.css";
import FormField from "../FormField/formField";
import { useState } from "react";
import LogoImage from "../LogoImage";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = e => {
        e.preventDefault();
        
		fetch("https://api.bforborum.com/api/login", {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			},
			body: `email=${email}&password=${password}`,
		})
			.then(response => response.json())
			.then(response => {
				if (response.statusCode >= 200 && response.statusCode < 300) {
				} else {
					alert(
						"A system error occurred and you could not be logged in. "
					);
				}
			});
	};

	return (
		<main className={login.accountForm}>
			<h1>Login into Borum</h1>
            <LogoImage />
			<form onSubmit={handleLogin} method="post" className={login.form}>
				<FormField
					autofocus
					label="email"
					format="email"
					required
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<FormField
					label="password"
					format="password"
					required
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<a
					target="_blank"
					rel="noreferrer"
					href="http://forum.bforborum.com/reset_password"
				>
					Forgot password? Reset it
				</a>
				<button type="submit" className={login.card}>
					Login
				</button>
			</form>
		</main>
	);
}
