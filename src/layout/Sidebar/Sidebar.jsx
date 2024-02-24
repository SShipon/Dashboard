import { useEffect, useState } from "react";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import dark from "../../assets/mode/Dark.png";
import light from "../../assets/mode/Light.png";
import "./Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import EachNavLink from "./EachNavLink";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  const items = (
    <ul className="nav-list">
      {navigationLinks.map((navLink, index) => {
        if (index == 0) {
          return (
            <Link to="/overview">
              <EachNavLink key={navLink.id} navLink={navLink} />
            </Link>
          );
        } else if (index == 1) {
          return (
            <Link to="/monitors">
              <EachNavLink key={navLink.id} navLink={navLink} />
            </Link>
          );
        } else {
          return <EachNavLink key={navLink.id} navLink={navLink} />;
        }
      })}
    </ul>
  );

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
      </div>

      <nav className="navigation">
        <span className="text-red-500 lg:block sm:hidden">UPTIME</span>
        {items}
      </nav>
      <hr />
      <div className="my-4">
        <button className="btn btn-xs w-full sm:btn-sm md:btn-md justify-between hidden md:hidden lg:block">
          <div className="flex items-center">
            <div className="flex bg-btnWhite rounded-md px-4 py-2">
              <img src={light} alt="" />
              <span className="ml-2 dark:hidden">Light</span>
            </div>
            <div className="flex">
              <img src={dark} alt="" className="dark:block ml-8" />
              <span className="ml-2 dark:text-white">Dark</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
