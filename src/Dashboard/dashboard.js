import { Link, useHistory } from "react-router-dom";
import ChangePassword from "../ChangePassword/changePassword";
import Email from "../InlineFormElements/Email/email";
import FullName from "../InlineFormElements/FullName/fullName";
import Layout from "../Layout/layout";
import dashboard from "./dashboard.module.css";

export default function Dashboard() {
	const history = useHistory();

	if (sessionStorage.getItem("apiKey") == null) {
		history.push("/login");
	}

	return (
		<Layout>
			<article>
				<h1>Borum Sphere Dashboard</h1>
				<FullName />
				<Email />
				<ChangePassword />
				<div className={dashboard.linkButtons}>
					<button>
						<Link to="/signup">Create new Borum Account</Link>
					</button>
					<button className={dashboard.signOut}>
						<Link to="/logout">Log Out</Link>
					</button>
				</div>
			</article>
		</Layout>
	);
}
