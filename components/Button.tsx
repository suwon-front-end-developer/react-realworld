import { FunctionComponent, ReactNode } from "react";
import tw from "twin.macro";

type Props = {
  children: ReactNode;
  block?: boolean;
} & typeof defaultProps;

const defaultProps = {};

const Button: FunctionComponent<Props> = ({ children, block }) => {
  return (
    <button
      css={[
        tw`py-3 px-6 text-white bg-green-600 text-lg rounded-md hover:bg-green-700 focus:bg-green-700 focus:outline-none`,
        block && tw`block w-full`,
      ]}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
