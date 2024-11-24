import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/analytics")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /_admin/analytics!";
}
