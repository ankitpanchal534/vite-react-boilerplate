import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/dm/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /_admin/dm/!";
}
