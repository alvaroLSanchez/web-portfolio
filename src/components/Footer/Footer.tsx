import style from "./Footer.module.css";
import linkedinIcon from "../../assets/svg/LinkedIn_icon.svg";
import { useTranslation } from "react-i18next";

function Footer(){
    const {t} = useTranslation();
    return (
    <footer className={style.container}>
        <p>WORK  IN  PROGRESS</p>
        <a href="https://www.linkedin.com/in/%C3%A1lvaro-l%C3%B3pez-s%C3%A1nchez-4a5355357/">
            <img className={style.linkedinIcon} src={linkedinIcon} title={t("footer.linkedin_title")} />
        </a>
    </footer>
    );
}

export default Footer;