import { ButtonHTMLAttributes } from "react";
import { button } from "./button.component.style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "primaryDestructive"
    | "secondaryDestructive"
    | "cta"
    | "link";
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  disabled,
  children,
}: ButtonProps) {
  return <button className={button({ variant, disabled })}>{children}</button>;
}
