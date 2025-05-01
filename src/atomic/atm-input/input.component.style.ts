import { tv } from "tailwind-variants";

export const input = tv({
  base: "h-xl w-xxxl p-sm flex border border-gray-medium rounded-xs font-xsmall",
  variants: {
    variant: {
      primary:
        "border-sm placeholder-gray-xdark focus:outline-none focus:border-brand-primary-dark",
    },
    disabled: {
      true: "bg-gray-xlight placeholder-gray-dark pointer-events-none",
    },
  },
});
