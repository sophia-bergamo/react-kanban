import { VariantProps } from "tailwind-variants";
import { input } from "./input.component.style";
import { cn } from "@/lib/utils";

type InputProps = VariantProps<typeof input> & {
  disabled?: boolean;
};

export function Input({
  variant = "primary",
  disabled,
  className,
  type,
  ...props
}: InputProps & React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(input({ variant, disabled }), className)}
      {...props}
    />
  );
}
