import { ReactNode } from "@tanstack/react-router";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { SelectOptionDrawer } from "./SelectOptionDrawer";
import { useDeviceType } from "@/hooks/use-device-type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

// Extend props to accept any custom option type and specify label and value keys
interface GenericSelectProps<
  T extends object,
  K extends keyof T,
  V extends keyof T,
> {
  onChangeSelect: (value: T[V]) => void;
  value: T[V] | undefined;
  disabled?: boolean;
  onFocus?: () => void;
  options: T[]; // Array of generic type T for dynamic options
  labelKey: K; // Key in T to use for labels
  valueKey: V; // Key in T to use for values
  placeholder?: string; // Optional placeholder text for SelectValue
  className?: string;
  onItemClick?: (val: V) => void;
  error?: boolean;
  title?: string;
  triggerElem?: ReactNode;
  isOptionDisabled?: (option: T) => boolean;
  isOptionHidden?: (option: T) => boolean;
  triggerClassName?: string;
}

// Generic Select component
const ResponsiveSelect = <
  T extends object,
  K extends keyof T,
  V extends keyof T,
>({
  onChangeSelect,
  value,
  disabled,
  onFocus,
  options,
  labelKey,
  valueKey,
  placeholder = "Choose an option",
  className,
  error,
  title,
  triggerElem,
  isOptionDisabled,
  isOptionHidden,
  triggerClassName,
}: GenericSelectProps<T, K, V>) => {
  const { isMobile } = useDeviceType();
  const [openDrawer, setOpenDrawer] = useState(false);
  if (isMobile) {
    return (
      <SelectOptionDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer((prev) => !prev)}
        labelKey={labelKey}
        options={options}
        valueKey={valueKey}
        value={value}
        onItemClick={onChangeSelect}
        error={error}
        onFocus={onFocus}
        disabled={disabled}
        title={title}
        placeholder={placeholder}
        triggerElem={triggerElem}
        isOptionDisabled={isOptionDisabled}
        isOptionHidden={isOptionHidden}
        triggerClassName={triggerClassName}
      />
    );
  }
  return (
    <Select
      onValueChange={(selectedValue) => onChangeSelect(selectedValue as T[V])}
      value={value ? String(value) : ""} // Convert default value to string
      disabled={disabled}
    >
      <SelectTrigger
        error={error}
        onFocus={onFocus}
        className={twMerge("w-full bg-white", triggerClassName)}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={twMerge("w-full", className)}>
        {options?.length ? (
          options.map((option, i) => {
            const isDisabled = isOptionDisabled?.(option) ?? false;
            const isHidden = isOptionHidden?.(option) ?? false;
            let Icon = "icon" in option && (option.icon as ReactNode);
            if (isHidden) return null;
            return (
              <SelectItem
                key={i}
                value={String(option[valueKey])}
                disabled={isDisabled}
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon size={20} />}
                  {option[labelKey] as React.ReactNode}
                </div>
              </SelectItem>
            );
          })
        ) : (
          <SelectItem value="novalue" disabled>
            No options found
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
};

export default ResponsiveSelect;
