import { Button } from "@/atomic/atm-button";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/atomic/mol.input-fields/input-field.component";

const formSchema = z.object({
  useremail: z
    .string({ message: "Insira seu email" })
    .email({ message: "Email inválido" }),
  userpassword: z
    .string({ message: "Insira a senha" })
    .min(7, { message: "A senha deve conter no mínimo 7 dígitos" }),
});

export default function LoginPage() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
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
          className="w-xxxl p-6 bg-white shadow-md rounded-lg"
        >
          <div className="flex flex-col gap-md">
            <InputField
              name="useremail"
              label="Email"
              type="email"
              placeholder="Digite seu email"
              className="flex flex-col gap-sm"
            />
            <InputField
              name="userpassword"
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              className="flex flex-col gap-sm"
            />
            <Button type="submit">Entrar</Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
