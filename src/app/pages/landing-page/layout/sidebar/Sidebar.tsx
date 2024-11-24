"use client";

import * as React from "react";

// import {
//   Calendar,
//   Chart,
//   Home,
//   Settings,
//   User,
// } from "@/components/ui/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Link, Outlet } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import AppLogo from "../logo/AppLogo";
import { navigationItems } from "./sidebarItems";

const sidebarClasses = cn(
  "hidden md:flex bg-sidebar-background border-r border-sidebar-border",
  "transition-all duration-300 ease-in-out"
);
const SidebarComponent1 = () => {
  return (
    <Sidebar className={sidebarClasses}>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <AppLogo className="h-8 w-auto" link="/home" />
      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-2 p-4">
        {navigationItems.map((item) => (
          <SidebarMenu key={item.title}>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="flex items-center gap-3 px-3 py-6 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-primary transition-colors"
              >
                <Link to={item.url} className="flex items-center gap-3 ">
                  {item.icon && <item.icon size={20} />}
                  <span className="text-sidebar-foreground ">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        ))}
      </SidebarContent>

      <div className="mt-auto p-4 border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent"
            >
              <Link to="/settings" className="flex items-center gap-3">
                <Settings className="h-5 w-5" />
                <span className="text-sidebar-foreground">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>

      <SidebarRail className=" " />
    </Sidebar>
  );
};

const SidebarComponentMemo = React.memo(SidebarComponent1);
function Component() {
  return (
    <SidebarProvider>
      <SidebarComponentMemo />
      <SidebarInset className="bg-secondary">
        <header className="sticky top-0 z-10 h-16 bg-background border-b flex items-center px-4">
          <SidebarTrigger className="md:hidden" />
        </header>
        <div className="p-2 md:p-4">
          <section className=" p-4 rounded-2xl bg-background min-h-[calc(99dvh-80px)]">
            <Outlet />
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const MemoComponent = React.memo(Component);
export { MemoComponent as SidebarComponent };
