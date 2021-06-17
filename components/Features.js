export default function Features() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Supporting the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            finest
          </span>{" "}
          and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            richest
          </span>{" "}
          features.
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-lg">
          We&apos;re introducing a new wave of template designs that sky-rocket
          the interaction between users and <b>your</b> app.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Next.js 11
            </h1>
            <div className="h-auto">
              <a
                href="https://unsplash.com/photos/ymVslcVAzg8"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/placeholder-2.webp"
                  alt="Placeholder for Next.js"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Conformance</span>: A system
                  that provides carefully crafted solutions to support optimal
                  UX.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Improved Performance</span>:
                  Further optimizations to improve cold startup time so you can
                  start coding faster.
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    `next/script`
                  </span>{" "}
                  updates
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    `next/image`
                  </span>{" "}
                  updates
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              TailwindCSS JIT
            </h1>
            <div className="h-auto">
              <a
                href="https://unsplash.com/photos/qOEiV-8w-MQ"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/placeholder-3.webp"
                  alt="Placeholder for TailwindCSS JIT"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <span className="font-semibold">Just-in-Time Mode</span>: A
                  faster, more powerful, on-demand engine for Tailwind CSS
                  v2.1+.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Lightning fast build times
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Identical CSS in development and production
                  </span>
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Better browser performance in development
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    `mode: &apos;jit&apos;`
                  </span>
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Dark Mode
            </h1>
            <div className="h-auto">
              <a
                href="https://unsplash.com/photos/p7o0qrl8hv8"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/placeholder-4.webp"
                  alt="Placeholder for Dark Mode"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <a
                    href="https://github.com/pacocoursey/next-themes"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                  >
                    next-themes
                  </a>
                  : An abstraction for themes in your Next.js app.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">System settings</span>: Uses
                  system settings to activate dark mode/light mode.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">No flash</span>: No flash on
                  switching themes or load in both SSG and SSR.
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    `useTheme`
                  </span>{" "}
                  hook
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Next-SEO
            </h1>
            <div className="h-auto">
              <a
                href="https://unsplash.com/photos/_CrD1UmfWqc"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/placeholder-5.webp"
                  alt="Placeholder for Next-SEO"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  <a
                    href="https://github.com/garmeeh/next-seo"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                  >
                    next-seo
                  </a>
                  : A plugin that makes managing your SEO easier in Next.js
                  projects.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Renders to head</span>: All
                  props passed into{" "}
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    `next-seo`
                  </span>{" "}
                  will render tags into the{" "}
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    {"`<head>`"}
                  </span>{" "}
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Bare minimum</span>: Next-SEO
                  should at least have access to a description & a title.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
