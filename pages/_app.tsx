/**
 * MEMO:
 * https://github.com/vercel/next.js/tree/master/examples/with-emotion
 */
import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";

// import { globalStyles } from "../shared/styles";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {/* {globalStyles} */}
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}
