import { TTheme } from "@/app/routes/_public/d/$username/$serviceId/index.lazy";
import { Button } from "@/components/ui/button";
import { useDeviceType } from "@/hooks/use-device-type";
import { cn } from "@/lib/utils";

export const SlotButton = ({
  isSelected,
  buttonClassName,
  onClick,
  slot,
  onNext,
  nextButtonText,
  theme,
}: {
  isSelected: boolean;
  buttonClassName?: string;
  onClick: () => void;
  slot: string;
  onNext: () => void;
  nextButtonText?: string;
  theme: TTheme;
}) => {
  const { isDeskTop } = useDeviceType();
  return (
    <div
      className={cn(
        "relative flex items-center overflow-hidden",
        isSelected && "gap-1"
      )}
    >
      <Button
        size={"lg"}
        className={cn(
          "z-0 flex h-auto w-full flex-col gap-0 !rounded-2xl bg-transparent py-3 text-sm font-semibold lowercase",
          isSelected && isDeskTop && "w-1/2",
          isSelected && "hover:bg-opacity-20",
          buttonClassName
        )}
        onClick={onClick}
        variant={"outline"}
        style={{
          borderColor: theme.colors.primary.border,
          color: theme.colors.primary.text,
          backgroundColor: isSelected
            ? `${theme.colors.primary.base}20`
            : "transparent",
        }}
      >
        {slot}
      </Button>
      <Button
        onClick={onNext}
        className={cn(
          "!rounded-2xl transition-transform duration-300",
          isSelected
            ? "w-full translate-x-0"
            : "fixed -left-full -top-full -z-30 translate-x-full"
        )}
        style={{
          padding: "22px 15px",
          background: `linear-gradient(to right, ${theme.colors.primary.gradient.from}, ${theme.colors.primary.gradient.to})`,
          color: "white",
        }}
      >
        {nextButtonText ?? "Next"}
      </Button>
    </div>
  );
};
