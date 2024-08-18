import { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import { useTranslation } from "react-i18next";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
    // eslint-disable-next-line
    const [t, i18n] = useTranslation();

    const [animationStart, setAnimationStart] = useState(false);

    const [animationStart1, setAnimationStart1] = useState(false);

    const [animationStart2, setAnimationStart2] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimationStart((animationStart) => !animationStart), 1800);
        
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimationStart1((animationStart1) => !animationStart1), 3500);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimationStart2((animationStart2) => !animationStart2), 2500);

        return () => clearTimeout(timeout);
    }, []);


    return(
        <div className="Home">
            <div className={`nav-animation ${animationStart1 ? "start-nav-animation" : null}`}>
                <Navbar/>
            </div>
            <div className="HomePage">
                <DotLottieReact
                src="https://lottie.host/62635c8b-c62d-4cca-8f08-20ed6e720842/vD8go1ZWFG.json" 
                autoplay/>
                <div className="homepage-text">
                    <h1 className={`homepage-title ${animationStart ? "start-home-animation" : null}`}>Hi, I am Jeff</h1>
                    <h3 className={`homepage-title ${animationStart2 ? "start-home-animation" : null}`}>{t("home.self-intro")}</h3>
                </div>
            </div>
        </div>
    );
}