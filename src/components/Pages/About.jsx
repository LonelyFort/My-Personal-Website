import Navbar from "../Navigation/Navbar"
import Java from "./logos/java.svg"
import CPP from "./logos/c-plusplus.svg"
import JS from "./logos/javascript.svg"
import ReactLogo from "./logos/react.svg"
import Vercel from "./logos/vercel.svg"
import Telegram from "./logos/telegram.svg"
import AE from "./logos/adobe-after-effects.svg"
import PS from "./logos/adobe-photoshop.svg"
import Premiere from "./logos/adobe-premiere.svg"
import HTML from "./logos/html-5.svg"
import CSS from "./logos/css-3.svg"
import PFP from "./assets/PFP.png";
import { useTranslation } from "react-i18next";


export default function About() {
    // eslint-disable-next-line
    const [t, i18n] = useTranslation();

    return (
        <div>
            <Navbar/>
            <div className="about">
                <div className="self-intro">
                    <h1>{t("about.title")}</h1>
                    <p>{t("about.self-intro")}
                        <br/>
                        {t("about.self-intro2")}
                    </p>
                    <div className="techstack">
                        <p>{t("about.programming-lang")}</p>
                        <img src={Java} alt="java"/>
                        <img src={CPP} alt="C++"/>
                        <img src={JS} alt="JS"/>
                        <p>{t("about.tools")}</p>
                        <img src={ReactLogo} alt="react"/>
                        <img src={Vercel} alt="vercel"/>
                        <img src={Telegram} alt="telegram"/>
                        <img src={HTML} alt="html"/>
                        <img src={CSS} alt="css"/>
                        <p>{t("about.design")}</p>
                        <img src={AE} alt="AE"/>
                        <img src={PS} alt="PS"/>
                        <img src={Premiere} alt="premiere"/>
                    </div>
                </div>
                <div className="pfp-div">
                    <img className="PFP" src={PFP} alt="PFP"/>
                </div>
            </div>
        </div>
    );
}