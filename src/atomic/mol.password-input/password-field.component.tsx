import { useFormContext } from "react-hook-form";
import { InputFieldProps } from "../mol.input-fields/input-field.component";
import { Text } from "../atm-typography/typography.component";
import { Input, InputIcon } from "../atm-input/input.component";
import { useState } from "react";
import { EyeOffIcon } from "@/app/assets/eye-off-icon";
import { EyeOnIcon } from "@/app/assets/eye-on-icon";

export function PasswordField({
  name,
  label,
  placeholder,
  className,
}: Omit<InputFieldProps, "type">) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [visible, setVisible] = useState(false);

  return (
    <div className={className}>
      <Text variant="inputLabel">{label}</Text>
      <div className="relative w-full">
        <Input
          {...register(name)}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          className="w-full pr-10"
        />
        <InputIcon
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          {visible ? <EyeOffIcon /> : <EyeOnIcon />}
        </InputIcon>
      </div>
      {errors[name]?.message && (
        <Text variant="inputCaptionError">{String(errors[name]?.message)}</Text>
      )}
    </div>
  );
}
