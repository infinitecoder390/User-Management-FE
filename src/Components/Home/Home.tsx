const Home = () => {
  return (
    <div>
      <div className="flex w-full py-5 px-14 bg-grey-lighter ">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Upload a file</span>
          <input type="file" className="hidden" />
        </label>
      </div>
      <div className=" relative flex min-h-screen flex-col  overflow-hidden  py-4 sm:py-10">
        <div className="mx-auto max-w-screen-xl px-4 w-full">
          <h2 className="mb-4 font-bold text-xl text-gray-600">
            User Documents Inventory
          </h2>
          <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
              <a
                href=""
                className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </a>
              <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
                &nbsp;
              </a>
              <div className="h-auto overflow-hidden">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4477/4477917.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white py-4 px-3">
                <h3 className="text-xs mb-2 font-medium">
                  Des cadeaux incroyables prêts à être utilisés dans votre
                  prochain projet
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400">
                    Lorem, ipsum dolor sit amet
                  </p>
                  <div className="relative z-40 flex items-center gap-2">
                    <a className="text-orange-600 hover:text-blue-500" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
              <a
                href=""
                className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </a>
              <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
                &nbsp;
              </a>
              <div className="h-auto overflow-hidden">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4477/4477917.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white py-4 px-3">
                <h3 className="text-xs mb-2 font-medium">
                  Des cadeaux incroyables prêts à être utilisés dans votre
                  prochain projet
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400">
                    Lorem, ipsum dolor sit amet
                  </p>
                  <div className="relative z-40 flex items-center gap-2">
                    <a className="text-orange-600 hover:text-blue-500" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
              <a
                href=""
                className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </a>
              <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">
                &nbsp;
              </a>
              <div className="h-auto overflow-hidden">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4477/4477917.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-white py-4 px-3">
                <h3 className="text-xs mb-2 font-medium">
                  Des cadeaux incroyables prêts à être utilisés dans votre
                  prochain projet
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400">
                    Lorem, ipsum dolor sit amet
                  </p>
                  <div className="relative z-40 flex items-center gap-2">
                    <a className="text-orange-600 hover:text-blue-500" href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
