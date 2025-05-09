import { useFormContext } from "react-hook-form";
import { Text } from "../atm-typography/typography.component";
import { Input } from "../atm-input/input.component";

export interface InputFieldProps {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  className?: string;
}

export function InputField({
  name,
  label,
  type,
  placeholder,
  className,
}: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className}>
      <Text variant="inputLabel">{label}</Text>
      <Input type={type} {...register(name)} placeholder={placeholder} />
      {errors[name]?.message && (
        <Text variant="inputCaptionError">{String(errors[name]?.message)}</Text>
      )}
    </div>
  );
}
