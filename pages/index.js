import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="min-h-screen text-black bg-white dark:bg-black">
      <NextSeo
        title="Plutonium"
        description="Plutonium – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutionium.vercel.app/",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section></section>
      <Footer />
    </div>
  );
}
