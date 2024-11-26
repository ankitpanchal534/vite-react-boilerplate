import { cn } from "@/lib/utils";
import { ReactNode } from "@tanstack/react-router";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "../drawer";

interface IProps {
  onClose: () => void;
  open: boolean;
  actions: {
    label: string | ReactNode;
    onClick: () => void;
    hidden?: boolean | null;
    icon?: ReactNode;
  }[];
  title?: string;
  className?: string;
}

export const BottomDrawerList: FC<IProps> = ({
  onClose,
  open,
  actions,
  title,
  className,
}) => {
  if (!open || !actions?.length) return null;

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="pt-0 bg-background"
      >
        {title && (
          <DrawerHeader className={twMerge("pt-0")}>
            <DrawerTitle className="flex justify-between border-b border-border px-2 pb-4 text-foreground">
              {title}
              <IoMdClose
                size={20}
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              />
            </DrawerTitle>
          </DrawerHeader>
        )}
        <div
          className={twMerge(
            "w-full max-w-full overflow-auto p-0 outline-none",
            className
          )}
        >
          <div className="mb-4 flex flex-col gap-2 px-2 pt-0">
            {actions?.map((item, i) => {
              if (item?.hidden) return null;
              return (
                <button
                  onClick={() => {
                    item.onClick();
                    onClose();
                  }}
                  key={i}
                  type="button"
                  role="menuitem"
                  aria-label={
                    typeof item.label === "string" ? item.label : "menu item"
                  }
                  className={cn(
                    "rounded-theme w-full border-none p-4 py-2 text-start",
                    "text-foreground hover:bg-accent focus-visible:bg-accent",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "flex items-center gap-2",
                    !i && "mt-0"
                  )}
                >
                  {item.icon && item.icon}
                  <p className="text-base font-medium">{item.label}</p>
                </button>
              );
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
