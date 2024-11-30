import {} from "@tanstack/react-router";

import { useRouter, useRouterState, useSearch } from "@tanstack/react-router";
import { useMemo } from "react";

export function usePathname() {
  const routerState = useRouterState();
  const pathname = routerState.location?.pathname.replace(/\/$/, "");
  return pathname;
}

export function useSearchParams() {
  const searchParams = useSearch({
    strict: false,
    select: (search) => search as Record<string, string>,
  });

  const router = useRouter();

  const setParams = (record: Record<string, string | null>) => {
    router.navigate({
      search(prev: Record<string, string>) {
        Object.entries({ ...prev, ...record }).forEach(([key, value]) => {
          if (!value) {
            delete prev[key];
            return;
          }
          prev[key] = value;
        });
        return prev;
      },
    });
  };

  const value = useMemo(() => {
    return {
      get: (key: string) => searchParams[key] || null,
      set: (key: string, value: string | boolean) => {
        router.navigate({
          search: (prev: Record<string, string>) => ({ ...prev, [key]: value }),
        });
      },
      remove: (key: string) => {
        router.navigate({
          search: (prev: Record<string, string>) => {
            delete prev[key];
            return prev;
          },
        });
      },
      setParams,
    };
  }, [searchParams]);

  return value;
}
