import Sidebar from "../Sidebar/sidebar";
import layout from "./layout.module.css";

export default function LoggedInLayout(props) {
    return (
        <div className={`${layout.container} ${layout.loggedInContainer}`}>
            <Sidebar />
            {props.children}
        </div>
    );
}