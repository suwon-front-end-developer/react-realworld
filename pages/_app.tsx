/**
 * MEMO:
 * https://github.com/vercel/next.js/tree/master/examples/with-emotion
 */
import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";
import Layout from "@/components/Layout";

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";
import "tailwindcss/dist/base.min.css";

// import { globalStyles } from "../shared/styles";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {/* {globalStyles} */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    );
  }
}
