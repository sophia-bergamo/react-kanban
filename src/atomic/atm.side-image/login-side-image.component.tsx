import { ImgHTMLAttributes } from "react";

type LoginSideImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export default function LoginSideImage({
  src,
  alt,
  ...props
}: LoginSideImageProps) {
  return (
    <img
      className="w-[708px] h-[972px] object-fill"
      src={src}
      alt={alt}
      {...props}
    />
  );
}
