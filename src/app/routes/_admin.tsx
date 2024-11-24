import { createFileRoute, redirect } from "@tanstack/react-router";
import { SidebarComponent } from "../pages/landing-page/layout/sidebar/Sidebar";

const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

export const Route = createFileRoute("/_admin")({
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      });
    }
  },
  component: SidebarComponent,
});
