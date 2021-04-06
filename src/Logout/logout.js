import { Link } from "react-router-dom";
import Layout from "../Layout/layout";
import logout from "./logout.module.css";

export default function Logout() {
    localStorage.clear();
    
	return (
		<Layout>
			<main className={logout.page}>
				<p className={logout.logout}>You've successfully logged out!</p>
				<Link to="/login">Log In</Link>
				<Link to="/signup">Sign Up</Link>
			</main>
		</Layout>
	);
}
