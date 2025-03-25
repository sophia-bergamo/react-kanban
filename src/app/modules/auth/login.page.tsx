import { Typography } from "../../../atomic/atm-typography";

export default function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <Typography variant="display">Display</Typography>
      <Typography variant="heading1">Heading 1</Typography>
      <Typography variant="heading2">Heading 2</Typography>
      <Typography variant="heading3">Heading 3</Typography>
      <Typography variant="heading4">Heading 4</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="link">Link</Typography>
      <Typography variant="linkSmall">Link Small</Typography>
      <Typography variant="inputLabel">Input Label</Typography>
      <Typography variant="inputValue">Input Value</Typography>
      <Typography variant="inputCaption">Input Caption</Typography>
    </div>
  );
}
