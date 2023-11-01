import { lazy } from "react";

import { SideBarRouteType } from "../RenderOneRoute";

const LayersIcon = lazy(
  () => import("../../../../components/icons/LayersIcon")
);

export default {
  title: "Filigrame",
  href: "/filigrame/listing",
  icon: LayersIcon,
  roles: ["DEVELOPER", "ADMIN"],
  shouldBeAuthenticated: true,
  shouldBeGuest: false,
} as SideBarRouteType;
