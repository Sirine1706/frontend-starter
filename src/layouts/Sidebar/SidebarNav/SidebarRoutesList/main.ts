import { lazy } from "react";

import { SideBarRouteType } from "../RenderOneRoute";
import HomeIcon from "../../../../components/icons/HomeIcon";

export default {
  title: "Accueil",
  href: "/",
  icon: HomeIcon,
  roles: ["ADMIN"],
} as SideBarRouteType;
