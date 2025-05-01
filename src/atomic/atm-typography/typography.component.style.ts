import { tv } from "tailwind-variants";

export const typography = tv({
  base: "text-color-dark",
  variants: {
    variant: {
      display: "font-bold text-size-xxl line-height-sm",
      heading1: "font-semibold text-size-xl line-height-sm",
      heading2: "font-semibold text-size-lg line-height-sm",
      heading3: "font-semibold text-size-md line-height-sm",
      heading4: "font-semibold text-size-sm line-height-md",
      body1: "font-regular text-size-xs text-gray-xdark line-height-md",
      body2: "font-regular text-size-xxs text-gray-dark line-height-md",
      link: "font-semibold text-size-xs text-cta-dark line-height-md",
      linkSmall: "font-semibold text-size-xxs text-cta-dark line-height-md",
      inputLabel: "text-size-xxs font-semibold text-gray-dark line-height-md",
      inputValue: "font-regular font-size-sm text-gray-medium line-height-md",
      inputCaption:
        "font-regular font-size-sm text-feedback-warning-dark line-height-md",
    },
  },
});
