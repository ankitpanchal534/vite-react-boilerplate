import * as React from "react";

import { cn } from "@/lib/utils";

interface Iinput extends React.ComponentProps<"input"> {
  error?: string;
}
const Input = React.forwardRef<HTMLInputElement, Iinput>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 
            text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm 
            file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-xs 
            md:placeholder:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
            placeholder:opacity-60
            `,
            error && "border-red-500",
            className
          )}
          ref={ref}
          {...props}
        />

        {/* {error && ( */}
        <span className="text-red-500 text-[10px] pl-2 pt-1 h-[10px]">
          {error || ""}
        </span>
        {/* )} */}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
