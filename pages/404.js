import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Error() {
  return (
    <div className="bg-white dark:bg-black">
      <Header />
      <Head>
        <title>404: Page was not found.</title>
      </Head>
      <div className="flex flex-col items-center justify-center px-10 bg-white h-[90vh] dark:bg-black md:flex-row md:space-x-6">
        <div className="space-x-2">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 md:text-8xl md:border-r-2 md:px-6">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            There was an error finding your page.
          </p>
          <p className="max-w-sm mb-8 text-md">
            Plutonium doesn&apos;t do well with generic 404 pages. Hence: this
            page. If you&apos;re here from clicking demo: it was on purpose!
          </p>
          <Link href="/">
            <a className="px-4 py-2.5 text-black dark:text-white border dark:hover:bg-white dark:hover:text-black rounded-lg shadow transition duration-300 hover:shadow-md">
              Return Home
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
