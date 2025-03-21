import { HTMLAttributes } from "react";
import { typography } from "./typography.component.style";

type TypographyProps = HTMLAttributes<HTMLSpanElement> & {
  variant?:
    | "display"
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "body1"
    | "body2"
    | "link"
    | "linkSmall"
    | "inputLabel"
    | "inputValue"
    | "inputCaption";
};

export function Typography({
  variant = "heading1",
  children,
  ...props
}: TypographyProps) {
  return (
    <span className={typography({ variant })} {...props}>
      {children}
    </span>
  );
}
