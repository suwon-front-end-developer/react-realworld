import Link from "next/link";
import Logo from "@/components/Logo";
import "twin.macro";

export default function Header(): JSX.Element {
  return (
    <header>
      <div tw="p-4 mx-auto max-w-screen-lg flex items-center">
        <Logo tw="flex-1" text="conduit" />
        <nav tw="flex-1 text-right">
          <Link href="/" passHref>
            <a tw="mx-1 text-gray-500 hover:text-gray-900">Home</a>
          </Link>
          <Link href="/login" passHref>
            <a tw="mx-1 text-gray-500 hover:text-gray-900">Sign in</a>
          </Link>
          <Link href="/register" passHref>
            <a tw="ml-1 text-gray-500 hover:text-gray-900">Sign up</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
