//import ProjectSliderPanel from "../Projects/ProjectSliderPanel";
import Navbar from "../Navigation/Navbar";
import { useTranslation } from "react-i18next";

export default function Home() {
    // eslint-disable-next-line
    const [t, i18n] = useTranslation();

    return(
        <div className="Home">
            <Navbar/>
            <div className="HomePage">
                <h1>Hi, I am Jeff</h1>
                <h3>{t("home.self-intro")}</h3>
            </div>
        </div>
    );
}