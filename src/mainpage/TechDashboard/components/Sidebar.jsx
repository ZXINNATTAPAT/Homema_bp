import React from "react";
import { BsFillArchiveFill } from "react-icons/bs";

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
        <li className="sidebar-list-item">
          <a href="/dashboard_tech/jobaccept">
            <BsFillArchiveFill className="icon" /> Accepting work
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/dashboard_tech/ownjob">
            <BsFillArchiveFill className="icon" /> Your Jobs
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
