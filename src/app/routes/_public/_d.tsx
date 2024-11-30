import { ThemeProvider } from "@/app/pages/_public/d/booking-page/CalenderTheme";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_d")({
  component: () => (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  ),
});
