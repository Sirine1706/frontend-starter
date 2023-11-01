import { lazy } from "react";

import { SideBarRouteType } from "../RenderOneRoute";
const UserIcon = lazy(() => import("../../../../components/icons/UserIcon"));

export default {
  title: "Utilisateurs",
  href: "/user/listing",
  icon: UserIcon,
  roles: ["ADMIN", "DEVELOPER"],
  shouldBeAuthenticated: true,
  shouldBeGuest: false,
} as SideBarRouteType;
