import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { GrX } from "react-icons/gr";

interface ResponsivePanelProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  sheetClassName?: string;
}

export function ResponsivePanel({
  open,
  onClose,
  children,
  title,
  sheetClassName,
}: ResponsivePanelProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent
          className={cn(
            "overflow-y-auto max-w-lg w-fit min-w-96 p-3",
            sheetClassName
          )}
        >
          {children}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent>
        {title && (
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerClose>
              <GrX />
            </DrawerClose>
          </DrawerHeader>
        )}
        <div className="max-h-[90vh] overflow-y-auto pb-5">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
