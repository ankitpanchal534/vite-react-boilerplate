import { motion } from "framer-motion";
import * as React from "react";

import AppLogo from "@/app/pages/landing-page/layout/logo/AppLogo";
import { navigationItems } from "@/app/pages/landing-page/layout/sidebar/sidebarItems";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "@/hooks/router";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <Sidebar
      {...props}
      className="bg-sidebar-background text-sidebar-foreground"
    >
      <SidebarHeader className="text-sidebar-primary-foreground p-6 pb-2">
        <AppLogo />
      </SidebarHeader>
      <SidebarContent className="list-none">
        {navigationItems.map((item) => {
          const isActive = pathName === item.url;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <SidebarMenuItem
                className={cn(
                  " py-0.5 px-2 transition-colors duration-200 ease-in-out",
                  isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
              >
                <Link href={item.url}>
                  <motion.div
                    className={cn(
                      "px-6 flex items-center gap-2 py-3 rounded-lg border-transparent transition-all duration-200 ease-in-out  hover:rounded-md  hover:border-primary/50 hover:text-primary",
                      isActive && "bg-primary/5  text-primary font-semibold"
                    )}
                    role="button"
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-sm">{item.title}</span>
                  </motion.div>
                </Link>
              </SidebarMenuItem>
            </motion.div>
          );
        })}
      </SidebarContent>
      {/* <SidebarRail className="border-sidebar-border" /> */}
    </Sidebar>
  );
}

const AppSidebar1 = React.memo(AppSidebar);
export { AppSidebar1 as AppSidebar };
