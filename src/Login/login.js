import login from "../Register/register.module.css";
import FormField from "../FormField/formField";
import Layout from "../Layout/layout";
import { useState } from "react";
import LogoImage from "../LogoImage";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const history = useHistory("");

	const handleLogin = e => {
		e.preventDefault();

		fetch("https://api.borumtech.com/api/login", {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			},
			body: `email=${email}&password=${password}`,
		})
			.then(response => response.json())
			.then(response => {
				if (response.statusCode >= 200 && response.statusCode < 300) {
					sessionStorage.setItem("id", response.data.id);
					sessionStorage.setItem("email", email);
					sessionStorage.setItem(
						"firstName",
						response.data.first_name
					);
					sessionStorage.setItem("lastName", response.data.last_name);
					sessionStorage.setItem("apiKey", response.data.api_key);

					history.push("/");
				} else {
					alert(
						"A system error occurred and you could not be logged in. "
					);
				}
			});
	};

	return (
		<Layout>
			<main className={login.accountForm}>
				<h1>Login into Borum</h1>
				<LogoImage />
				<form
					onSubmit={handleLogin}
					method="post"
					className={login.form}
				>
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
						href="http://forum.borumtech.com/reset_password"
					>
						Forgot password? Reset it
					</a>
					<Link to="/signup">Don't have an account yet? Register</Link>
					<button type="submit" className={login.card}>
						Login
					</button>
				</form>
			</main>
		</Layout>
	);
}
