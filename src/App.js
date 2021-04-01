import Register from "./Register/register";
import Login from "./Login/login";
import Logout from "./Logout/logout";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";

function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

export default App;
