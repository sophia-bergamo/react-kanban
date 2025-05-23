import { Button } from "@/atomic/atm-button";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/atomic/mol.input-fields/input-field.component";
import { loginStrings } from "./login.strings";
import ArrowBack from "@/app/assets/arrow-back";
import { Text } from "@/atomic/atm-typography";
import LoginLine from "@/app/assets/login-line";
import LoginSideImage from "@/atomic/atm.side-image/login-side-image.component";
import LoginImage from "../../assets/login-img.png";
import { PasswordField } from "@/atomic/mol.password-input/password-field.component";

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
    console.log("aqui");
  };

  return (
    <div className="items-center h-screen flex flex-rol w-full">
      <div className="flex flex-1 flex-col h-full">
        <nav className="py-lg px-lg">
          <Button variant="link">
            <div className="flex gap-sm">
              <ArrowBack /> {loginStrings.loginNav}
            </div>
          </Button>
        </nav>

        <div className="flex justify-center w-full h-full px-lg">
          <div className="flex flex-1 flex-col items-center justify-center gap-sm max-w-[448px] px-xl">
            <Text variant="heading1">{loginStrings.enterOrSignIn}</Text>

            <div className="text-center">
              <Text variant="body1">{loginStrings.loginDescription}</Text>
            </div>

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="w-full max-w-[400px] py-lg"
              >
                <div className="flex flex-col gap-md w-full">
                  <InputField
                    name="userEmail"
                    type="email"
                    label={loginStrings.labelEmail}
                    placeholder={loginStrings.emailPlacheholder}
                    className="flex w-full flex-col gap-sm"
                  />
                  <PasswordField
                    name="userPassword"
                    label={loginStrings.labelPassword}
                    placeholder={loginStrings.passwordPlaceholder}
                    className="flex w-full flex-col gap-sm"
                  />

                  <div className="flex justify-end">
                    <Button type="button" variant="link">
                      {loginStrings.forgotPassword}
                    </Button>
                  </div>

                  <Button type="submit">{loginStrings.submit}</Button>
                </div>
              </form>
            </FormProvider>

            <div className="flex items-center gap-sm">
              <LoginLine />
              <Text variant="body2">{loginStrings.or}</Text>
              <LoginLine />
            </div>

            <div className="flex items-center">
              <Text variant="body1">{loginStrings.signInQuestion}</Text>
              <Button variant="link">{loginStrings.signIn}</Button>
            </div>
          </div>
        </div>
      </div>
      <LoginSideImage src={LoginImage} alt="Imagem do login" />
    </div>
  );
}
