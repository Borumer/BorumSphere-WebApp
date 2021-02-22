import ChangePassword from "../ChangePassword/changePassword";
import FullName from "../InlineFormElements/FullName/fullName";
import Email from "../InlineFormElements/Email/email";
import dashboard from "./dashboard.module.css";

export default function Dashboard() {
	return (
		<article>
			<h1>Borum Sphere Dashboard</h1>
			<FullName />
			<Email />
			<ChangePassword />
			<button className={dashboard.signOut}>Sign out of all accounts</button>
		</article>
	);
}
