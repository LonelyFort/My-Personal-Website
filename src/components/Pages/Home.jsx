import SideBar from "../Navigation/SideBar";

export default function Home() {
    return(
        <div className="Home">
            <div className="TopLayout">
                <SideBar/>
                <div className="HomePage">
                    <h1 className="Home">Home</h1>
                </div>
            </div>
            <div className="ProjectPanel">
            </div>
        </div>
    );
}