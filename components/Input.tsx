import { ChangeEvent, FunctionComponent } from "react";
import tw from "twin.macro";

type Props = {
  type: "text" | "password";
  name?: string;
  value?: string;
  placeholder?: string;
  block?: boolean;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
};

const Input: FunctionComponent<Props> = ({
  type,
  name,
  value,
  placeholder,
  block,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      css={[
        tw`py-3 px-6 text-lg border rounded-md outline-none focus:border-blue-400`,
        block && tw`block w-full`,
      ]}
    />
  );
};

export default Input;
