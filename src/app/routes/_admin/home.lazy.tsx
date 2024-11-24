import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /_admin/home!";
}
