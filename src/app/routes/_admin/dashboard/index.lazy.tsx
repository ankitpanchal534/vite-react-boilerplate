import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /_admin/dashboard/!";
}
