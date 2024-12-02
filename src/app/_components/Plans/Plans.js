export const Pricing = () => {
  return (
    <div className="container overflow-x-auto h-[75vh] sm:h-[85vh] px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between p-2 border border-t-0 rounded-b text-black">
            <div>
              <div className="text-lg font-semibold">Basic</div>
              <div className="my-4 flex flex-col gap-2">
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  Play terabox videos without Ads
                </p>
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  No Access to Video Gallery
                </p>
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  No Video Chat
                </p>
              </div>
              <div className="mt-1 mb-4 mr-1 text-2xl font-bold sm:text-5xl">
                ₹0/month
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue-400 hover:bg-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Basic
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between p-2 border border-t-0 rounded-b text-black">
            <div>
              <div className="text-lg font-semibold">Advanced</div>
              <div className="my-4 flex flex-col gap-2">
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  Play terabox videos without Ads
                </p>
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  Access to Full Video Gallery
                </p>
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  No Video Chat
                </p>
              </div>
              <div className="mt-1 mb-4 mr-1 text-2xl font-bold sm:text-5xl">
                ₹49/month
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue-400 hover:bg-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Advanced
            </a>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between p-2 border border-t-0 rounded-b text-black">
            <div>
              <div className="text-lg font-semibold">Pro</div>
              <div className="my-4 flex flex-col gap-2">
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  Play terabox videos without Ads
                </p>
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  Access to Full Video Gallery
                </p>
                <p className="text-sm text-gray-900 flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  1 Video Chat
                </p>
              </div>
              <div className="mt-1 mb-4 mr-1 text-2xl font-bold sm:text-5xl">
                ₹69/month
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue-400 hover:bg-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Buy Pro
            </a>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
