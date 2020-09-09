import Link from "next/link";
import tw, { styled } from "twin.macro";

type Props = {
  text: string;
};

function Logo({ text }: Props) {
  return (
    <StyledLogo>
      <Link href="/">
        <a>{text}</a>
      </Link>
    </StyledLogo>
  );
}

export default Logo;

const StyledLogo = styled("h1")`
  ${tw`font-bold text-2xl`}

  /* TODO: tailwind.config 색상값 정의 */
  color: #5cb85c;
  font-family: "Titillium Web";
`;
