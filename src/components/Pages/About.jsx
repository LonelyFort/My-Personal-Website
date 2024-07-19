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
import PFP from "./PFP.png";


export default function About() {
    return (
        <div className="About">
            <div className="self-intro">
                <h1>About Me</h1>
                <p>National University of Singapore student. Year 2. Studying 
                    Computer Science (Hons.).
                </p>
                <p>Favourite past-time: screwing around with stuff to find out about 
                    stuff. 
                </p>
                <div className="techstack">
                    <p>Programming Languages</p>
                    <img src={Java} alt="java"/>
                    <img src={CPP} alt="C++"/>
                    <img src={JS} alt="JS"/>
                    <p>Tools & Frameworks</p>
                    <img src={ReactLogo} alt="react"/>
                    <img src={Vercel} alt="vercel"/>
                    <img src={Telegram} alt="telegram"/>
                    <img src={HTML} alt="html"/>
                    <img src={CSS} alt="css"/>
                    <p>Design</p>
                    <img src={AE} alt="AE"/>
                    <img src={PS} alt="PS"/>
                    <img src={Premiere} alt="premiere"/>
                </div>
            </div>
            <div className="pfp-div">
                <img className="PFP" src={PFP} alt="PFP"/>
                <footer> image taken from @gobou0san from YT </footer>
            </div>
        </div>
    );
}