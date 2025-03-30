import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import style from "./RouterLayout.module.css";
import Footer from "../components/Footer/Footer";

function RouterLayout() {
    return (
        <div className={style.container}>
                <Header />
                <Outlet />
                <Footer />
        </div>
    );
}

export default RouterLayout;