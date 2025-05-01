import { Input } from "@/atomic/atm-input/input.component";

export default function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full gap-4">
      <Input variant="primary" placeholder="Input Value" />
      <Input disabled={true} placeholder="Input Disabled" />
    </div>
  );
}
