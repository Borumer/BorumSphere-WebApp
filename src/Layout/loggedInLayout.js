import Sidebar from "../Sidebar/sidebar";
import layout from "./layout.module.css";

export default function LoggedInLayout(props) {
    return (
        <div id="outer-container" className={`${layout.container} ${layout.loggedInContainer}`}>
            <Sidebar />
            <div id="page-wrap">{props.children}</div>
        </div>
    );
}