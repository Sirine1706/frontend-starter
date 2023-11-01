import React, { lazy } from "react";

const routes = [
  {
    exact: true,
    path: "*",
    component: lazy(() => import("../pages/NotFound")),
    layout: lazy(() => import("../layouts/DefaultLayout")),
  },
];

export default routes;
