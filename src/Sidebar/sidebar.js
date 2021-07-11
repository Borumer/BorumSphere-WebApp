import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import sidebar from "./sidebar.module.css";
import SidebarNav from "./sidebarNav";
import { push as Menu } from "react-burger-menu";
import burgerMenu from "../styles/burgermenu.css";

export default function Sidebar() {
    return window.screen.width >= 800 ? (
        <nav className={sidebar.container}>
            <SidebarNav />
            <Link to="/logout" style={{width: '200px', padding: '1em', borderTop: '1px solid black'}}>Log Out</Link>
            <Footer />
        </nav>
    ) : (
        <Menu styles={burgerMenu} pageWrapId="page-wrap" outerContainerId="outer-container">
            <SidebarNav />
            <Link className='menu-item' to="/logout" style={{width: '200px', padding: '1em', borderTop: '1px solid black'}}>Log Out</Link>
            <Footer />
        </Menu>
    );
}