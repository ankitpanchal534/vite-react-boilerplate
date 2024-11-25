import { useRouterState } from "@tanstack/react-router";
import { useMemo } from "react";

export function usePathname() {
  const routerState = useRouterState();
  const pathname = useMemo(() => {
    return routerState.location.pathname;
  }, [routerState.location.pathname]);
  return pathname;
}
