import { useEffect, useState } from "react";
import { lazy } from "react";

import SidebarRoutesList from "./SidebarRoutesList";
import RenderOneRoute from "./RenderOneRoute";

type Props = {};

const AuthIcon = lazy(() => import("../../../components/icons/AuthIcon"));
import HomeIcon from "../../../components/icons/HomeIcon";

function SidebarNav({}: Props) {
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
      {/* <!-- Menu Group --> */}
      <div className="mt-6 space-y-2">
        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2"></h3>
        {SidebarRoutesList.main.map((route, index: number) => {
          return (
            <RenderOneRoute
              key={`sidebar-other-route-${index}`}
              route={route}
            />
          );
        })}
      </div>
      <div className="h-6"></div>
      <div
        className={
          SidebarRoutesList.project.length === 0 ? "hidden" : "space-y-2"
        }
      >
        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2 ">
          PROJET
        </h3>
        {SidebarRoutesList.project.map((route, index: number) => {
          return (
            <RenderOneRoute
              key={`sidebar-other-route-${index}`}
              route={route}
            />
          );
        })}
      </div>

      {/* <!-- Others Group --> */}
      {/* <div className="mt-6">
        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
          AUTRES
        </h3>
        {SidebarRoutesList.others.map((route, index: number) => {
          return (
            <RenderOneRoute
              key={`sidebar-other-route-${index}`}
              route={route}
            />
          );
        })}
      </div> */}
    </nav>
  );
}

export default SidebarNav;
