import moment from "moment/moment";
import css from "./Layout.module.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { BiSearch } from "react-icons/bi";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className={css.container}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>
          <div className={css.profile}>
            <img src="./profile.awebp" alt="person image" />
            <div className={css.details}>
              <span>hone</span>
              <span>hhhtheshy@gmail.com</span>
            </div>
          </div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
