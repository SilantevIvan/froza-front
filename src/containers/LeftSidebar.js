import routes from "../routes/sidebar";
import { NavLink, Routes, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { useDispatch } from "react-redux";

function LeftSidebar() {
  const location = useLocation();

  const dispatch = useDispatch();

  const close = (e) => {
    document.getElementById("left-sidebar-drawer").click();
  };

  return (
    <div className="drawer-side">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu w-80 bg-base-100 text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>

        <li className="font-semibold h-16 m-0">
          <Link to={"/app/welcome"} className="m-0">
            {/* <img
              className="mask w-10"
              src="/froza-logo.png"
              alt="Froza Logo"
            /> */}
            <h1 className="text-4xl">Froza</h1>
          </Link>{" "}
        </li>

        {routes.map((route, k) => {
          return (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "font-semibold  bg-base-200 " : "font-normal"
                    }`
                  }
                >
                  {route.icon} {route.name}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftSidebar;
