import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/availability/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /_admin/availability/availability!";
}
