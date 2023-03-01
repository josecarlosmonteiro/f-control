import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="p-2 border rounded-sm duration-150 hover:bg-slate-600" />
  );
}
