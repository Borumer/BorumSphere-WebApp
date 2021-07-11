import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import sidebar from "./sidebar.module.css";
import SidebarNav from "./sidebarNav";

export default function Sidebar() {
    return (
        <nav className={sidebar.container}>
            <SidebarNav />
            <Link to="/logout" style={{width: '200px', padding: '1em', borderTop: '1px solid black'}}>Log Out</Link>
            <Footer />
        </nav>
    );
}