import { AdminLayout } from "layouts/AdminLayout";
import React from "react";
import { RouteObject } from "react-router-dom";
import { Homepage } from "views/Homepage/Homepage";

interface Route extends RouteObject {
  title?: string;
  children?: Route[];
  icon?: React.ReactNode;
  breadcrumb?: string;
  isHide?: boolean;
}

export const adminRoutes: Route[] = [
  {
    title: "Dashboard",
    path: "/",
    element: <Homepage />,
  },
  // {
  //   title: "Appointment",
  //   path: "/appointment",
  //   breadcrumb: "Appointment",
  //   index: true,
  //   element: <AppointmentPage title="Appointment" />,
  // },
];

const routes: Route[] = [
  {
    element: <AdminLayout />,
    children: adminRoutes,
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];

export { routes };
