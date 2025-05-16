import { Button } from "@/atomic/atm-button";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/atomic/mol.input-fields/input-field.component";
import { loginStrings } from "./login.strings";

const formSchema = z.object({
  userEmail: z
    .string({ message: loginStrings.email })
    .email({ message: loginStrings.emailError }),
  userPassword: z
    .string({ message: loginStrings.password })
    .min(7, { message: loginStrings.passwordError }),
});

export default function LoginPage() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log("dados: " + values);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-xxxl p-md bg-white shadow-md rounded-lg"
        >
          <div className="flex flex-col gap-md">
            <InputField
              name="userEmail"
              type="email"
              label={loginStrings.labelEmail}
              placeholder={loginStrings.emailPlacheholder}
              className="flex flex-col gap-sm"
            />
            <InputField
              name="userPassword"
              type="password"
              label={loginStrings.labelPassword}
              placeholder={loginStrings.passwordPlaceholder}
              className="flex flex-col gap-sm"
            />
            <Button type="submit">{loginStrings.submit}</Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
