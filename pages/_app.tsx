import Layout from "@/components/Layout";
import { barlow } from "@/styles/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${barlow.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
