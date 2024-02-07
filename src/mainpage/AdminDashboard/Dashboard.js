import React,{  useState } from "react";
import "../../styles/Dashboard.css";
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import Home from "./components/Home";
import Joblist from "./components/Joblist";
import Userlist from "./components/Userlist";


export const Dashboard = () => { 
  const [x, setX] = useState(0);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  function addcase(newx){
    setX(newx);
  }

  function delete_token() {
    localStorage.removeItem("token");
    window.location.href="/login"
  }

  function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
         <aside
            id="sidebar"
            className={openSidebarToggle ? "sidebar-responsive" : ""}
          >
            <div className="sidebar-title">
              <div className="sidebar-brand">REPAIR SYSTEM</div>
              <span className="icon close_icon" onClick={OpenSidebar}>
                X
              </span>
            </div>
      
            <ul className="sidebar-list">
              <li className="sidebar-list-item " onClick={() => addcase(0)}> 
                <p style={{color:"whitesmoke"}}>
                  <BsGrid1X2Fill className="icon" /> Dashboard
                </p>
              </li>
      
              <li className="sidebar-list-item" onClick={() => addcase(2)}>
                <p style={{color:"whitesmoke"}}>
                  <BsFillArchiveFill className="icon" /> Jobs
                </p>
              </li>
      
              <li className="sidebar-list-item" onClick={() => addcase(3)}>
                <p style={{color:"whitesmoke"}}>
                  <BsPeopleFill className="icon" /> Users
                </p>
              </li>

              <li className="sidebar-list-item" onClick={() => delete_token()}>
                <p style={{color:"whitesmoke"}}>
                  <BsPeopleFill className="icon" /> Logout
                </p>
              </li>

            </ul>
        </aside>
    );
  }
  switch (x) {
    case 2:
      return (<>
      <div className="grid-container">
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar
             openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
          />
            <Joblist />
          </div>
      </>
      );
    case 3:
      return (
        <div className="grid-container">
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar
             openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
          />
          <Userlist />
        </div>
      );
    default:
      return (
        <>
          <div className="grid-container">
              <Header OpenSidebar={OpenSidebar} />
              <Sidebar
                openSidebarToggle={openSidebarToggle}
                  OpenSidebar={OpenSidebar}
              />
          <Home />
        </div>
        </>
      );
    }


};


