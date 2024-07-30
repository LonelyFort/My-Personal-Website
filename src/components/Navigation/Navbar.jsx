import homeIcon from "./home-svgrepo-com.svg"
import Github from "./github-icon.svg"
import LinkedIn from "./linkedin-icon.svg"
import { useTranslation } from "react-i18next"

export default function Navbar() {
    const [t, i18n] = useTranslation("translation")

    return (
    <nav className="navbar">
        <div className="links">
            <a className="link" href="/">
                <img className="home-img" src={homeIcon} alt="home"/>
            </a>
            <a className="link" href="/about">{t("nav.about")}</a>
            <a className="link" href="/experience">work</a>
            <a className="link" href="/projects">projects</a>
        </div>
        <div className="ext-link-and-language">
            <a href="https://github.com/LonelyFort" target="_blank" rel="noopener noreferrer">
                <button className="nav_button">
                    <img src={Github} alt="github" />
                </button>
            </a>
            <a href="https://linkedin.com/in/liu-yu-wei-b182a52ab" target="_blank" rel="noopener noreferrer">
                <button className="nav_button">
                    <img src={LinkedIn} alt="linkedin"/>
                </button>
            </a>
            <h1 className="language">EN</h1>
        </div>
    </nav>
    )

}