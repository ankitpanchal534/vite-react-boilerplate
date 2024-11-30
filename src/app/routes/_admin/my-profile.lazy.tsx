import Profile from "@/app/pages/my-profile/Profile";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/my-profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Profile />
    </>
  );
}
