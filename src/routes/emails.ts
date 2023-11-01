import React, { lazy } from "react";

const routes = [
  {
    exact: true,
    path: "/email/confirm/:token",
    component: lazy(() => import("../pages/emails/ConfirmEmail")),
    layout: lazy(() => import("../layouts/EmailLayout")),
  },
  {
    exact: true,
    path: "/email/confirm/failed",
    component: lazy(() => import("../pages/emails/FailedEmailConfirmation")),
    layout: lazy(() => import("../layouts/EmailLayout")),
  },
  {
    exact: true,
    path: "/email/confirm/success",
    component: lazy(() => import("../pages/emails/EmailConfirmationSuccess")),
    layout: lazy(() => import("../layouts/EmailLayout")),
  },
];

export default routes;
