import { ReactNode } from "react";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";

function Index(): ReactNode {
  return (
    <Layout>
      <Banner title="conduit" description="A place to share your knowledge." />
      <h1>Home</h1>
    </Layout>
  );
}

export default Index;
