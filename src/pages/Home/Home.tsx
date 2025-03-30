import { useTranslation } from "react-i18next";
import style from "./Home.module.css"



function Home(){
    const {t} = useTranslation();
    return (
        <div className={style.container}>
        <div className={style.circleContainer}>
            <div className={style.circle}></div>
            <div className={style.circleContent}>
                <p className={style.title}>Welcome</p>
            </div>
        </div>
    </div>
    );
}

export default Home;