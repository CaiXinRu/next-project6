import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/layout";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(App);
