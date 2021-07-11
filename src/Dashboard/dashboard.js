import { Link, useHistory } from "react-router-dom";
import AccountSettings from "../AccountSettings/accountSettings";
import ActivatedApps from "../ActivatedAppsList/activatedAppsList";
import Layout from "../Layout/layout";
import dashboard from "./dashboard.module.css";

export default function Dashboard() {
	const history = useHistory();

	if (localStorage.getItem("apiKey") == null) {
		history.push("/login");
	}

	return (
		<Layout>
			<AccountSettings />
			<ActivatedApps />
			<div className={dashboard.linkButtons}>
					<button>
						<Link to="/signup">Create new Borum Account</Link>
					</button>
					<button className={dashboard.signOut}>
						<Link to="/logout">Log Out</Link>
					</button>
				</div>
		</Layout>
	);
}
