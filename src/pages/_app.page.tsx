import { Layout } from "@/modules/layout";
import { Notify } from "@/modules/notify";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>next-daisyui-fire-starter</title>
      </Head>

      <Notify />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
