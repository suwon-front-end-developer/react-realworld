import { NextPage } from "next";
import Head from "next/head";
import Banner from "@/components/Banner";
import FeedItem from "@/components/Feed/Item";
import "twin.macro";

const Index: NextPage = () => {
  const feedList = new Array(10).fill("");
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Banner title="conduit" description="A place to share your knowledge." />

      <div tw="py-4 flex mx-auto max-w-screen-lg">
        <div tw="px-4 flex-auto">
          {feedList && (
            <div role="list">
              {feedList.map((val, idx) => (
                <FeedItem
                  key={idx}
                  title="제목"
                  description="내용"
                  role="listitem"
                />
              ))}
            </div>
          )}
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
