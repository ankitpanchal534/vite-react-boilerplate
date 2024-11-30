import { cn, normalize } from "@/lib/utils";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import ColorfulSvg from "../colorful-svg";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";

interface IProps<T extends object, K extends keyof T, V extends keyof T> {
  open: boolean;
  onClose: () => void;
  options: T[]; // Array of generic type T for dynamic options
  labelKey: K; // Key in T to use for labels
  valueKey: V; // Key in T to use for values
  placeholder?: string;
  value: T[V] | undefined;
  onItemClick: (val: T[V]) => void;
  error?: boolean;
  onFocus?: () => void;
  disabled?: boolean;
  title?: string;
  triggerElem?: ReactNode;
  isOptionDisabled?: (option: T) => boolean;
  isOptionHidden?: (option: T) => boolean;
  triggerClassName?: string;
}
export const SelectOptionDrawer = <
  T extends object,
  K extends keyof T,
  V extends keyof T,
>({
  onClose,
  open,
  labelKey,
  options,
  valueKey,
  placeholder,
  value,
  onItemClick,
  error,
  onFocus,
  disabled,
  title,
  triggerElem,
  isOptionDisabled,
  isOptionHidden,
  triggerClassName,
}: IProps<T, K, V>) => {
  const valuesMap = normalize(options || [], valueKey);
  const selectedVal =
    value !== undefined
      ? valuesMap?.[value as keyof typeof valuesMap]?.[labelKey]
      : undefined;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetTrigger asChild className="block">
        {triggerElem || (
          <button
            disabled={disabled}
            onClick={onFocus}
            className={twMerge(
              "-border-c-input/40 text flex w-full items-center justify-between gap-4 whitespace-nowrap rounded-2xl border bg-white p-2 text-[#363942]",
              error && "border-destructive",
              triggerClassName
            )}
          >
            <span className="line-clamp-1 flex flex-grow items-start justify-start p-0">
              {selectedVal !== undefined
                ? (selectedVal as string)
                : placeholder}
            </span>
            <ColorfulSvg
              className="h-3 w-3 flex-shrink-0 whitespace-nowrap"
              svgUrl="https://assets.orufy.in/Vector_d3a153290f.svg"
            />
          </button>
        )}
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className={twMerge(
          "flex max-h-[70dvh] min-h-12 flex-col items-start  rounded-t-2xl bg-white p-0",
          !title && "py-4"
        )}
      >
        {title ? (
          <div
            className={twMerge(
              "sticky top-0 z-20 flex w-full items-center justify-start bg-white p-4 pb-0 text-lg font-semibold"
            )}
          >
            <div className="flex w-full items-center justify-between">
              <p className="flex flex-grow items-center justify-start text-lg font-semibold">
                {title}
              </p>
              <div onClick={onClose}>
                <ColorfulSvg svgUrl="https://assets.orufy.in/close_Icon_abfc0dc8ce.svg" />
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-0 w-full p-4 px-4 py-0 pb-4 pt-0 overflow-auto">
          <div className="flex w-full flex-col gap-4">
            {!options?.length ? (
              <p className="pb-4 text-gray-500">No options found</p>
            ) : (
              options.map((option, i) => {
                const isDisabled = isOptionDisabled?.(option) ?? false;
                const isHidden = isOptionHidden?.(option) ?? false;
                if (isHidden) return null;
                return (
                  <div
                    className={cn(
                      "rounded-theme flex w-full items-start p-2 px-3 text-base font-medium duration-20 transition-all cursor-pointer",
                      selectedVal === option[labelKey] && "bg-primary/10",
                      isDisabled && "opacity-60",
                      !isDisabled && "hover:bg-primary/10"
                    )}
                    key={i}
                    onClick={
                      isDisabled
                        ? () => {}
                        : () => {
                            onItemClick(option[valueKey] as T[V]);
                            onClose();
                          }
                    }
                  >
                    {option[labelKey] as React.ReactNode}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
