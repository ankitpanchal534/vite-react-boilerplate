import { useDeviceType } from "@/hooks/use-device-type";
import { ReactNode } from "react";

import usePopup from "@/hooks/use-popup";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { BottomDrawerList } from "./BottomDrawerList";

interface IDropdownDrawer {
  options: Array<any>;
  onClose?: () => void;
  drawerClassName?: string;
  title?: string;
  trigger: ReactNode;
}
export default function DropdownDrawer(props: IDropdownDrawer) {
  const { isMobile } = useDeviceType();

  return isMobile ? (
    <MobileComponent {...props} />
  ) : (
    <DesktopComponent {...props} />
  );
}

const DesktopComponent = (props: IDropdownDrawer) => {
  const { options, trigger } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Array.isArray(options) &&
          options.map((item, i) => {
            return (
              <DropdownMenuItem
                className={`flex items-center gap-2 ${item.className || ""}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MobileComponent = (props: IDropdownDrawer) => {
  const { onClose, options, title, drawerClassName, trigger } = props;
  const dialogSt = usePopup();

  return (
    <>
      <BottomDrawerList
        actions={options}
        onClose={() => {
          dialogSt.closePopup();
          onClose?.();
        }}
        open={dialogSt.open}
        className={drawerClassName}
        title={title}
      />
      <div onClick={dialogSt.openPopup} role="button">
        {trigger}
      </div>
    </>
  );
};
