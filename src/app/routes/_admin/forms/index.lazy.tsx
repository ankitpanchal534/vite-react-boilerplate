import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/forms/")({
  component: RouteComponent,
});

function RouteComponent() {
  console.log("rendered");
  return "Hello /_admin/forms/!";
}
