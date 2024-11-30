import { usePathname } from "@/hooks/router";
import { Link } from "@tanstack/react-router";
import { FC, useRef } from "react";
import { navigationItems } from "./sidebarItems";
import { cn } from "@/lib/utils";

const Sidebar: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <div
      ref={ref}
      className="bg-sidebar-background text-sidebar-foreground h-full p-4 shadow-lg"
    >
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-4">Admin Navigation</h2>
        <div className="flex flex-col gap-2">
          {navigationItems?.map((item, i) => {
            const isActive = pathname === item.url;
            return (
              <Link
                to={item.url}
                key={i}
                className={cn(
                  `p-2 rounded-lg transition-colors duration-200  ${isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
