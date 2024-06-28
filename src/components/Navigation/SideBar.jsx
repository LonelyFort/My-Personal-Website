import { SideBarData } from "./SideBarData";

const Sidebar = () => {

  return (
    <div className='SideBar'>
      <ul>
        {SideBarData.map((val, key) => {
          return (
            <li key={key} onClick={() => {window.location.pathname = val.link}}>
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