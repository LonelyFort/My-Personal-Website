import homeIcon from "./home-svgrepo-com.svg"

export default function Navbar() {
    return (
    <nav className="navbar">
        <div className="links">
            <a className="link" href="/">
                <img className="home-img" src={homeIcon} alt="home"/>
            </a>
            <a className="link" href="/about">about</a>
            <a className="link" href="/experience">work</a>
            <a className="link" href="/projects">projects</a>
            <a className="link" href="/socials">socials</a>
        </div>
        <h1 className="language">EN</h1>
    </nav>
    )

}