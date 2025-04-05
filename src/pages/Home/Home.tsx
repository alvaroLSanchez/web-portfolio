import { useTranslation } from "react-i18next";
import style from "./Home.module.css";
import reactIcon from "../../assets/svg/react_icon.svg";
import GithubIcon from "../../components/svg/GithubIcon";


function Home() {
    const { t } = useTranslation();

    return (
        <div className={style.container}>
            <div className={style.introduction}>
                <div className={style.flexHorizontal}>
                    <div className={style.welcomeContainer}>
                        <div className={style.welcome + " outlineText "}>
                            {t("home.welcome")}
                        </div>
                    </div>
                    <div className={style.heading}>
                        {t("home.subtitle")}
                        <br />
                    </div>
                </div>
            </div>
            <div className={style.rest}>
                <div className={style.arrow}></div>
                <p className={style.madeWith}>{t("home.made_with")}</p>
                <div className={style.logos}>
                    <div className={style.logoName}>
                        <p>{t("home.react")}</p>
                        <img src={reactIcon} className={style.logo + " " + style.reactLogo} />
                    </div>

                    <div className={style.logoName}>
                        <p>{t("home.github_pages")}</p>
                        <div className={style.githubContainer}>
                            <GithubIcon />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;