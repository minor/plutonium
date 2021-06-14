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
      <section className="relative">
        <div className="px-4 py-10 mx-auto max-w-7xl md:py-32">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Bringing darkness
              <br />
              <span className="block w-full text-transparent bg-clip-text gradient-bg lg:inline">
                straight to the web.
              </span>
            </h1>
            <p className="max-w-xl pt-3 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              Plutonium is a Next.js template styled with TailwindCSS. It boasts
              built-in dark-mode support, configured Next-SEO for the best SEO
              optimizations, and clean, organized, easy-to-edit code.
            </p>
            <div className="mt-6 ml-6 text-center">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 bg-black rounded dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center">Learn More</span>
              </a>
              <br className="sm:hidden" />
              <a
                className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 border rounded md:ml-2 dark:text-gray-300"
                aria-label="learn more"
                href="#"
              >
                <span className="flex justify-center">See a Demo</span>
              </a>
            </div>
          </div>
          <div className="relative w-full mx-auto text-center md:my-12 md:w-10/12">
            <div className="relative z-10">
              <a href="https://unsplash.com/photos/e9TrFZZ72DQ">
                <img
                  className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                  src="/images/placeholder.jpeg"
                  alt="Placeholder Image"
                />
              </a>
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Maybe we're bringing brightness too?
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        ></div>
      </section>
      <Footer />
    </div>
  );
}
