import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import SidebarLinkGroup from "../../../components/dashboard/SidebarLinkGroup";
import { hasCommonElement } from "../../../utils/array";

export declare interface SideBarRouteType {
  title: string;
  href: string;
  roles?: ("ADMIN" | "USER" | "DEVELOPER" | "ALL")[];
  shouldBeAuthenticated?: boolean;
  shouldBeGuest?: boolean;
  icon: React.ComponentType<any>;
  children?: SideBarRouteType[] | null;
}

export declare interface SideBarRouteTypeWithChildren extends SideBarRouteType {
  children: SideBarRouteType[];
  icon: React.ComponentType<any>;
}

type Props = {
  route: SideBarRouteTypeWithChildren | SideBarRouteType;
};

function RenderOneRoute({ route }: Props) {
  const location = useLocation();
  const { pathname } = location;
  const { user, isAuthenticated } = useAuth();

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  const Icon = route?.icon;
  const parentVisible = route.shouldBeAuthenticated
    ? isAuthenticated &&
      user &&
      hasCommonElement(
        route.roles as string[],
        user.roles.map((role: any) => role.code)
      )
    : route.shouldBeGuest
    ? !isAuthenticated
    : true;

  if (!parentVisible) return null;
  if (route?.children) {
    return (
      <ul className="mb-6 flex flex-col gap-1.5 list-none">
        <SidebarLinkGroup
          activeCondition={pathname === "/forms" || pathname.includes("forms")}
        >
          {(handleClick, open) => {
            return (
              <React.Fragment>
                <NavLink
                  to={route.href}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    (pathname === "/forms" || pathname.includes("forms")) &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                  }}
                >
                  <Icon />
                  {route.title}
                  <svg
                    className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                      open && "rotate-180"
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                      fill=""
                    />
                  </svg>
                </NavLink>
                {/* <!-- Dropdown Menu Start --> */}
                <div
                  className={`translate transform overflow-hidden ${
                    !open && "hidden"
                  }`}
                >
                  <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6 list-none">
                    {(route.children as any[]).map((child, index: number) => {
                      const childVisible = child.shouldBeAuthenticated
                        ? isAuthenticated &&
                          user &&
                          hasCommonElement(
                            child.roles as string[],
                            user.roles.map((role: any) => role.code)
                          )
                        : child.shouldBeGuest
                        ? !isAuthenticated
                        : true;
                      if (!childVisible) return null;
                      return (
                        <li key={`sidebar-child-${index}`}>
                          <NavLink
                            to={child.href}
                            className={({ isActive }) =>
                              "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                              (isActive && "!text-white")
                            }
                          >
                            {child.title}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* <!-- Dropdown Menu End --> */}
              </React.Fragment>
            );
          }}
        </SidebarLinkGroup>
      </ul>
    );
  }
  return (
    <li className="list-none ">
      <NavLink
        to={route.href}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          pathname.includes("calendar") && "bg-graydark dark:bg-meta-4"
        }`}
      >
        <Icon />
        {route.title}
      </NavLink>
    </li>
  );
}

export default RenderOneRoute;
