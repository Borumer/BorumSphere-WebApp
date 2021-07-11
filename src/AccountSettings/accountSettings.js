import { useEffect } from "react";
import ChangePassword from "../ChangePassword/changePassword";
import Email from "../InlineFormElements/Email/email";
import FullName from "../InlineFormElements/FullName/fullName";
import LoggedInLayout from "../Layout/loggedInLayout";
import accountSettings from "./accountSettings.module.css";

export default function AccountSettings() {
    useEffect(() => {
        document.title = "Account Settings - Borum Sphere";
    }, []);
    
    return (
        <LoggedInLayout>
            <main className={accountSettings.container}>
                <h2>Account Settings</h2>
                <FullName />
                <Email />
                <ChangePassword />
            </main>
        </LoggedInLayout>
    );
}