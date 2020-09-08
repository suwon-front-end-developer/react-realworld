import Header from "@/components/Header";
import { styled } from "twin.macro";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
}

export default Layout;

const Body = styled("div")``;
