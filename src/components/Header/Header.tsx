import { useTranslation } from "react-i18next";
import { mainNavPages } from "../../routing/MainNavPages";
import Settings from "../Settings/Settings";
import styles from "./header.module.css";
import NavElement from "./NavElement";

function Header() {
    const {t} = useTranslation();
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
            {
                mainNavPages.map(page=>{
                    return <NavElement 
                    path={page.path}
                    text={t(page.textKey)}
                    key={page.path}>
                    </NavElement>
                })
            }
            </div>
            <Settings />
        </header>
    );
}

export default Header;