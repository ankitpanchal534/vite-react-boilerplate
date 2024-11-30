import { Button, ButtonProps } from "@/components/ui/button";
import { ResponsivePanelv1 } from "@/components/ui/responsive-panel";
import { ReactNode, useState } from "react";

export const ConfirmationPopup = ({
  onConfirm,
  onCancel,
  btnProps,
  cancelBtnText = "Cancel",
  acceptBtnText = "Confirm",
  title,
  children,
  description,
}: {
  onConfirm: () => Promise<unknown>;
  onCancel?: () => void;
  btnProps?: ButtonProps;
  cancelBtnText?: string;
  acceptBtnText?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    onCancel?.();
    setIsOpen(false);
  };

  const handleConfirm = async () => {
    await onConfirm();
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen} {...btnProps}>
        {children}
      </Button>
      <ResponsivePanelv1 open={isOpen} onClose={handleClose} title={title}>
        <div className="p-4">
          {description}
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={handleClose} className="mr-2">
              {cancelBtnText ?? "Cancel"}
            </Button>
            <Button onClick={handleConfirm} className="bg-red-500 text-white">
              {acceptBtnText ?? "Confirm"}
            </Button>
          </div>
        </div>
      </ResponsivePanelv1>
    </>
  );
};
