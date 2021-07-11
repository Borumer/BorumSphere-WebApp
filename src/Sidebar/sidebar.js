import { Link } from "react-router-dom";
import sidebar from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <ul className={sidebar.container}>
            <li className={window.location.pathname === '/account' ? sidebar.active : ''}>
                <Link to="/account">Account Settings</Link>
            </li>
            <li className={window.location.pathname === '/apps' ? sidebar.active : ''}>
                <Link to="/apps">Activated Apps</Link>
            </li>
            <li>
                <Link to="/logout">Log Out</Link>
            </li>
        </ul>
    );
}