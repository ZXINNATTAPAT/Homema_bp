import { useState } from "react";
import "../../styles/Dashboard.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Joblist from "./components/Joblist";

export const Jobs = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Joblist />
    </div>
  );
};
