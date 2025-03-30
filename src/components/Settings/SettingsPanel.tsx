import style from "./Settings.module.css";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";

interface SettingsPanelProps {
    open: boolean;
}

function SettingsPanel(props: SettingsPanelProps) {

    return (
        <div className={style.settingsPanel + " " + (props.open ? style.settingsPanelOpen : "")}>
            <ThemeSelector />
            <LanguageSelector />
        </div>
    );
}

export default SettingsPanel;