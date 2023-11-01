import { lazy } from "react";

import { SideBarRouteType } from "../RenderOneRoute";

const HomeIcon = lazy(() => import("../../../../components/icons/HomeIcon"));

export default {
  title: "Bien",
  href: "/project/listing",
  icon: HomeIcon,
  roles: ["DEVELOPER", "ADMIN"],
  shouldBeAuthenticated: true,
  shouldBeGuest: false,
} as SideBarRouteType;
