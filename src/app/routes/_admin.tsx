import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import SidebarComponent from "../pages/landing-page/layout/sidebar/Sidebar2";

const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

export const Route = createFileRoute("/_admin")({
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => {
    return (
      <SidebarComponent>
        <Outlet />
      </SidebarComponent>
    );
  },
});
