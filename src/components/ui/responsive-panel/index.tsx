import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useDeviceType } from "@/hooks/use-device-type";
import { cn } from "@/lib/utils";
import { IoMdClose } from "react-icons/io";
import { Dialog, DialogContent, DialogTitle } from "../dialog";

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
  // const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isDeskTop } = useDeviceType();

  if (isDeskTop) {
    return (
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent
          className={cn(
            "overflow-y-auto max-w-lg w-fit min-w-[450px] p-3",
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
      <DrawerContent className="px-2">
        {title && (
          <DrawerHeader className="flex items-center justify-between pt-1 px-2 border-b-[0.5px]">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerClose className="text-black ">
              <IoMdClose color="black" size={22} />
            </DrawerClose>
          </DrawerHeader>
        )}
        <div className="max-h-[80vh] overflow-y-auto pb-5 px-0">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
export function ResponsivePanelv1({
  open,
  onClose,
  children,
  title,
  sheetClassName,
}: ResponsivePanelProps) {
  // const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isDeskTop } = useDeviceType();

  if (isDeskTop) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent
          className={cn(
            "overflow-y-auto max-w-md w-fit min-w-[450px] p-3 ",
            sheetClassName
          )}
        >
          {title && (
            <DrawerHeader className="pb-0 ">
              <DialogTitle>{title}</DialogTitle>
            </DrawerHeader>
          )}
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="px-2">
        {title && (
          <DrawerHeader className="flex items-center justify-between pt-1 px-2 border-b-[0.5px]">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerClose className="text-black ">
              <IoMdClose color="black" size={22} />
            </DrawerClose>
          </DrawerHeader>
        )}
        <div className="max-h-[80vh] overflow-y-auto pb-5 px-0">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
