import { lazy } from "react";

import { SideBarRouteTypeWithChildren } from "../RenderOneRoute";

const AuthIcon = lazy(() => import("../../../../components/icons/AuthIcon"));

export default {
  title: "Authentification",
  href: "#",
  children: [
    {
      title: "Se connecter",
      href: "/auth/login",
      roles: ["DEVELOPER", "ADMIN"],
      shouldBeAuthenticated: false,
      shouldBeGuest: true,
    },
    {
      title: "Se déconnecter",
      href: "/auth/logout",
      roles: ["DEVELOPER", "ADMIN"],
      shouldBeAuthenticated: true,
      shouldBeGuest: false,
    },
  ],
  icon: AuthIcon,
  roles: ["DEVELOPER", "ADMIN"], // TODO: get all roles routes
  shouldBeAuthenticated: false,
  shouldBeGuest: false,
} as any;
