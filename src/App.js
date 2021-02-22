import Register from "./Register/register";
import Login from "./Login/login";
import Logout from "./Logout/logout";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signup">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/logout">
					<Logout />
				</Route>
				<Route path="/">
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
