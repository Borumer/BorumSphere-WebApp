import Register from "./Register/register";
import Login from "./Login/login";
import Logout from "./Logout/logout";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/dashboard";
import ForgotPassword from "./ForgotPassword/forgotPassword";
import ResetPassword from "./ResetPassword/resetPassword";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Dashboard />
				</Route>
				<Route path="/signup">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/logout">
					<Logout />
				</Route>
				<Route path="/forgot-password">
					<ForgotPassword />
				</Route>
				<Route path="/reset-password">
					<ResetPassword />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
