import {
  SideBarRouteType,
  SideBarRouteTypeWithChildren,
} from "../RenderOneRoute";

import MainSideRoute from "./main";
import PlanSideRoute from "./plan";
import SceneSideRoute from "./scene";
import SongSideRoute from "./song";
import ProjectSideRoute from "./project";
import UserSideRoute from "./user";
import FiligrameSideRoute from "./filigrame";

const sidebarRoutes: {
  project: SideBarRouteType[];
  main: SideBarRouteType[];
} = {
  project: [
    PlanSideRoute,
    SceneSideRoute,
    SongSideRoute,
    ProjectSideRoute,
    FiligrameSideRoute,
  ],
  main: [MainSideRoute, UserSideRoute],
};

export default sidebarRoutes;
