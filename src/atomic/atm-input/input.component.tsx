import React, { ComponentProps, forwardRef } from "react";
import { VariantProps } from "tailwind-variants";
import { input } from "./input.component.style";
import { cn } from "@/lib/utils";

type InputProps = VariantProps<typeof input> & {
  disabled?: boolean;
} & React.ComponentProps<"input">;

interface InputIconProps extends ComponentProps<"button"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled, className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(input({ disabled }), className)}
        {...props}
      />
    );
  }
);

export function InputIcon({ children, ...props }: InputIconProps) {
  return (
    <button className="flex" {...props}>
      {children}
    </button>
  );
}
