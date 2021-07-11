import { Link } from "react-router-dom";
import sidebar from "./sidebar.module.css";

export default function SidebarNav() {
    return (
        <ul className={sidebar.container}>
            <li className={window.location.pathname === '/account' ? sidebar.active : ''}>
                <Link className='menu-item' to="/account">Account Settings</Link>
            </li>
            <li className={window.location.pathname === '/apps' ? sidebar.active : ''}>
                <Link className='menu-item' to="/apps">Activated Apps</Link>
            </li>
        </ul>
    );
}