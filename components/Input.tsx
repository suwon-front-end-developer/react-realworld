import { FunctionComponent } from "react";
import tw from "twin.macro";

type Props = {
  type: string;
  placeholder?: string;
  block?: boolean;
} & typeof defaultProps;

const defaultProps = {};

const Input: FunctionComponent<Props> = ({ type, placeholder, block }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      css={[
        tw`py-3 px-6 text-lg border rounded-md outline-none focus:border-blue-400`,
        block && tw`block w-full`,
      ]}
    />
  );
};

Input.defaultProps = defaultProps;

export default Input;
