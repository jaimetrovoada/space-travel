import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Barlow_Condensed } from "@next/font/google";
import type { AppProps } from "next/app";

const barlow = Barlow_Condensed({ weight: "400", subsets: ["latin"] });

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
