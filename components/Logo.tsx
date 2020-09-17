import Link from "next/link";
import tw, { styled } from "twin.macro";

type Props = {
  text: string;
};

function Logo({ text }: Props) {
  return (
    <Link href="/">
      <a>
        <StyledLogo>{text}</StyledLogo>
      </a>
    </Link>
  );
}

export default Logo;

const StyledLogo = styled("strong")`
  ${tw`font-bold text-2xl`}

  /* TODO: tailwind.config 색상값 정의 */
  color: #5cb85c;
  font-family: "Titillium Web";
`;
