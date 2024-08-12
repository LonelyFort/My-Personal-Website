import homeIcon from "./home-svgrepo-com.svg"
import Github from "./github-icon.svg"
import LinkedIn from "./linkedin-icon.svg"
import Dropdown from "./LanguageDropdown/Dropdown"
import { Languages } from "./LanguageDropdown/Languages"
import DropdownItem from "./LanguageDropdown/DropdownItem"
import { useTranslation } from "react-i18next";

export default function Navbar() {
    // eslint-disable-next-line
    const [t, i18n] = useTranslation();

    const handleChangeLang = (lang) => {
        i18n.changeLanguage(lang);
    }    

    return (
        <nav className="navbar">
            <div className="links">
                <a className="link" href="/">
                    <img className="home-img" src={homeIcon} alt="home"/>
                </a>
                <a className="link" href="/about">about</a>
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
                <Dropdown buttonText="EN" content={
                    <>
                        {Languages.map((item, key) => (
                            <DropdownItem key={key} 
                            onClick={() => handleChangeLang(item.language_code)}>
                                {item.language}
                            </DropdownItem>
                        ))}
                    </>
                    }
                />
            </div>
        </nav>
    )
}