/**
 * MEMO:
 * https://github.com/vercel/next.js/tree/master/examples/with-emotion
 */
import NextApp from "next/app";
import { cache } from "emotion";
import { CacheProvider } from "@emotion/core";
import Layout from "@/components/Layout";

import "tailwindcss/dist/base.min.css";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    );
  }
}
