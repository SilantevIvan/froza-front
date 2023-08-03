import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import Cog8Tooth from "@heroicons/react/24/outline/Cog8ToothIcon";
import LanguageIcon from "@heroicons/react/24/solid/LanguageIcon";

import { openRightDrawer } from "../features/common/rightDrawerSlice";

import { NavLink, Routes, Link, useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { noOfNotifications, pageTitle } = useSelector((state) => state.header);

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("language")
  );

  return (
    <>
      <div className="navbar flex justify-between bg-base-100 z-10 shadow-md h-16">
        <div className="">
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
          <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
        </div>

        <div className="flex flex-row gap-4 order-last">
          <button className="btn btn-ghost ml-4  btn-circle">
            <div className="indicator">
              <LanguageIcon className="h-7 w-7" />
            </div>
          </button>

          <div className="tabs tabs-boxed">
            <a className="tab hover:bg-opacity-50 hover:text-black transition-colors duration-300 delay-100 ease-in-out hover:-translate-y-0.4 hover:scale-120">
              CZK
            </a>
            <a className="tab bg-gray-700 rounded-xl text-white hover:bg-opacity-50 hover:text-black transition-colors duration-300 delay-100 ease-in-out hover:-translate-y-0.4 hover:scale-120">
              EUR
            </a>
          </div>

          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle">
              <div tabIndex={0} className="indicator">
                <Cog8Tooth className="mx-auto h-7 w-7" />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="justify-between">
                <Link to={"/"}>Settings 1</Link>
              </li>
              <li className="">
                <Link to={"/"}>Settings 2</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
