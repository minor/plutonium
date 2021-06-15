import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
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
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Bringing darkness
              <br />
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 lg:inline">
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
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center">Learn More</span>
              </a>
              <br className="sm:hidden" />
              <a
                className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                aria-label="learn more"
                href="#"
              >
                <span className="flex justify-center">See a Demo</span>
              </a>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
              <a target="_blank" href="https://unsplash.com/photos/e9TrFZZ72DQ">
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
        />
      </section>
      <section className="py-2" id="sponsors">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-20 text-3xl font-bold tracking-tight text-center text-gray-700 dark:text-gray-300 md:text-4xl">
            Sponsored with forward-thinking companies.
          </h1>
          <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-4">
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img className="h-24" src="/logos/amazon.svg" alt="Tuple" />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img className="h-24" src="/logos/google.svg" alt="Mirage" />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <img className="h-24" src="/logos/intel.svg" alt="StaticKit" />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1">
              <img className="h-24" src="/logos/apple.svg" alt="Transistor" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
