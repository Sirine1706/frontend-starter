import React, { Suspense, ReactNode, Fragment } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import Loading from "../components/common/Loading";
import pages from "./pages";
import authentication from "./authentication";
import emails from "./emails";

type RouteComponent = React.ComponentType<any>;
type RouteGuard = React.ComponentType<any> | typeof Fragment;
type RouteLayout = React.ComponentType<any>;
type CustomRouteItem = {
  component: RouteComponent;
  guard?: RouteGuard;
  layout?: RouteLayout;
} & RouteProps;

export const renderRoutes = (routes: CustomRouteItem[] = []) => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {routes.map((route, index) => {
        const Component = route.component;
        const Guard = route.guard || Fragment;
        const Layout = route.layout;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Guard>
                {Layout ? (
                  <Layout>
                    <Component />
                  </Layout>
                ) : (
                  <Component />
                )}
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes: CustomRouteItem[] = [...pages, ...authentication, ...emails];

export default routes;
