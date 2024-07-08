import { SideBarData } from "./SideBarData";

const Sidebar = () => {

  return (
    <div className='SideBar'>
      <ul className="SideBarList">
        {SideBarData.map((val, key) => {
          return (
            <li key={key} 
            className="row"
            onClick={() => {window.location.pathname = val.link}}>
              {" "}
              <div>
                {val.title}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Sidebar;