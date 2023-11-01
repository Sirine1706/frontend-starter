import { lazy } from "react";

import { SideBarRouteType } from "../RenderOneRoute";
const SceneIcon = lazy(() => import("../../../../components/icons/SceneIcon"));

export default {
  title: "Scene",
  href: "/scene/listing",
  icon: SceneIcon,
  roles: ["ADMIN", "DEVELOPER"],
  shouldBeAuthenticated: true,
  shouldBeGuest: false,
} as SideBarRouteType;
