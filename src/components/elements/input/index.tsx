import { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  onChange: () => void;
  placeHolder: string;
}
export const Input = (props: InputProps) => {
  const { id, value, onChange, placeHolder, ...rest } = props;
  return (
    <S.Wrapper
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      {...rest}
    />
  );
};
