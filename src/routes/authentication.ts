import React, { lazy } from "react";

const routes = [
  {
    exact: true,
    path: "/auth/login",
    component: lazy(() => import("../pages/authentication/Login")),
    layout: lazy(() => import("../layouts/EmailLayout")),
    guard: lazy(() => import("../layouts/guards/GuestGuard")),
  },
  {
    exact: true,
    path: "/auth/logout",
    component: lazy(() => import("../pages/authentication/Logout")),
    layout: lazy(() => import("../layouts/DefaultLayout")),
    guard: lazy(() => import("../layouts/guards/AuthGuard")),
  },
];

export default routes;
