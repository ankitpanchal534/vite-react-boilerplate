import { RouteComponent } from "@tanstack/react-router";

const checkLogin = (WrappedComponent: RouteComponent<any>) => {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  const currentPath = window.location.pathname;
  const routes = ["/login", "/sign-up"];
  if (isAuthenticated && routes.includes(currentPath)) {
    window.location.href = "/dashboard";
  }
  return WrappedComponent;
};

export default checkLogin;
