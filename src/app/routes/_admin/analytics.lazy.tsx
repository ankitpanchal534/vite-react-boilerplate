import DashboardPage from "@/app/dashboard/page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/analytics")({
  component: DashboardPage,
});
