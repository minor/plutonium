import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Header />
      <Head>
        <title>404: Page was not found.</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-[50vh] px-10 md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 md:text-8xl md:border-r-2 md:px-6">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            There was an error finding your page.
          </p>
          <p className="mb-8 text-md">Please return home & try again!</p>
          <Link href="/">
            <a className="px-4 py-2.5 text-white transition-colors border border-transparent rounded-lg shadow bg-cyan-600 hover:bg-cyan-700 dark:hover:bg-blue-500">
              Return Home
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
