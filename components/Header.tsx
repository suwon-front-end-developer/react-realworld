import Link from "next/link";
import { styled } from "twin.macro";
import Logo from "@/components/Logo";

export default function Header(): JSX.Element {
  return (
    <StyledHeader>
      <div tw="px-4 h-12 mx-auto max-w-screen-lg flex items-center">
        <Logo tw="flex-1" text="conduit" />
        <nav tw="flex-1 text-right">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/login">
            <a>Sign in</a>
          </Link>
          <Link href="/register">
            <a>Sign up</a>
          </Link>
        </nav>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled("header")``;
