import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/calendar/")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /_admin/calendar/!";
}
