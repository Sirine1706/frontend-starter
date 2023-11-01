import { lazy } from "react";

import { SideBarRouteType } from "../RenderOneRoute";

const SongIcon = lazy(() => import("../../../../components/icons/SongIcon"));

export default {
  title: "Audio",
  href: "/song/listing",
  icon: SongIcon,
  roles: ["ADMIN", "DEVELOPER"],
  shouldBeAuthenticated: true,
  shouldBeGuest: false,
} as SideBarRouteType;
