import ChangePassword from "../ChangePassword/changePassword";
import FullName from "../InlineFormElements/FullName/fullName";
import Email from "../InlineFormElements/Email/email";
import dashboard from "./dashboard.module.css";
import { Link, useHistory } from "react-router-dom";
import Layout from "../Layout/layout";

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
						<Link to="/logout">Log Out</Link>
					</button>
					<button>
						<Link to="/signup">Create new Borum Account</Link>
					</button>
					<button className={dashboard.signOut}>
						Sign out of all accounts
					</button>
				</div>
			</article>
		</Layout>
	);
}
