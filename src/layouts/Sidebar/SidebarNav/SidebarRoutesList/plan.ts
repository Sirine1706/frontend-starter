import { lazy } from "react";

import { SideBarRouteType } from "../RenderOneRoute";
const PlanIcon = lazy(() => import("../../../../components/icons/VideoIcon"));

export default {
  title: "Plan",
  href: "/plan/listing",
  icon: PlanIcon,
  roles: ["ADMIN", "DEVELOPER"],
  shouldBeAuthenticated: true,
  shouldBeGuest: false,
} as SideBarRouteType;
