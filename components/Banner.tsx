import tw, { styled } from "twin.macro";

type Props = {
  title: string;
  description: string;
};

function Banner({ title, description }: Props) {
  return (
    <StyledBanner>
      {title && <Title>{title}</Title>}
      {description && <Text>{description}</Text>}
    </StyledBanner>
  );
}

export default Banner;

const StyledBanner = styled("div")`
  background-color: #5cb85c;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
  ${tw`py-10 text-center text-white leading-none`}
`;

const Title = styled("h1")`
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  ${tw`mb-4 text-6xl font-bold`};
`;

const Text = styled("p")`
  font-family: "Source Sans Pro";
  font-weight: 200;
  ${tw`text-2xl`}
`;
