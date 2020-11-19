import { FC, InputHTMLAttributes, DetailedHTMLProps } from "react";
import { InputProps } from "../../interfaces";

export const TextInput: FC<InputProps<HTMLInputElement>> = (props) => (
  <input {...props} />
);
