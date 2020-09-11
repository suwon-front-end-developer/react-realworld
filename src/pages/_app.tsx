/**
 * MEMO:
 * https://github.com/vercel/next.js/tree/master/examples/with-emotion
 */
import NextApp from "next/app";
import Head from "next/head";
import { cache } from "emotion";
import { CacheProvider } from "@emotion/core";
import Layout from "@/components/Layout";

import "tailwindcss/dist/base.min.css";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&family=Source+Sans+Pro:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Titillium+Web:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        {/* TODO: globalStyle 로 분류 */}
        <style jsx global>{`
          html {
            font-family: -apple-system, BlinkMacSystemFont, "Source Sans Pro",
              "Noto Sans KR", "Segoe UI", Roboto, "Helvetica Neue", Arial,
              "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol", "Noto Color Emoji";
          }
        `}</style>
      </CacheProvider>
    );
  }
}
