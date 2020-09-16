import { NextPage } from "next";
import Head from "next/head";
import ArticleAPI from "@/api/article";
import Banner from "@/components/Banner";
import "twin.macro";

const Index: NextPage = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Banner title="conduit" description="A place to share your knowledge." />

      <div tw="py-4 flex mx-auto max-w-screen-lg">
        <div tw="px-4 flex-auto">
          {articles?.map((article) => (
            <div key={article.slug}>{article.title}</div>
          ))}
        </div>

        {/* Popular Tags 템플릿 컴포넌트 */}
        <div tw="px-4 last:px-0 flex-none max-w-xs w-full">
          <h2>Popular Tags</h2>
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const { articles } = await ArticleAPI.all();
  return {
    props: {
      articles,
    },
  };
}
