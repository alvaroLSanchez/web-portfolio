import SettingsIcon from "./SettingsIcon";
import styles from "./Settings.module.css";
import SettingsPanel from "./SettingsPanel";
import { useState } from "react";

function Settings() {
    const [open, setOpen] = useState(false);
    return (
        <div 
        className={styles.settingsContainer}>
            <SettingsIcon 
            onClick={()=>setOpen(!open)}
            active={open} />
            <SettingsPanel open={open} />
        </div>
);
}
export default Settings;