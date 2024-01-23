import Image from "next/image";

// RED #b50000 ff6600

export default function Home() {
  return (
      <main>
          <div className="flex flex-wrap">
              <div className="bg-white w-full h-[50vh] md:w-1/2 md:h-screen ">
                  <div className="flex flex-col items-center">
                      <div
                          className="flex justify-center h-[35vh] md:h-[50vh] align-middle content-center items-center">
                          <img className="w-3/4 h-auto xl:h-1/3 xl:w-auto" src="/RE-TO.png" alt="image description"/>
                      </div>
                      <div
                          className="flex justify-center h-[15vh] md:h-[50vh] content-center items-start w-3/4 md:w-1/2">

                          <a href={'https://royalenfieldtoronto.com'}
                             className="w-3/4 sm:w-1/2 md:w-3/4 bg-primaryRed text-white font-bold py-4 px-4 text-center">
                              ENTER
                          </a>
                      </div>

                  </div>
              </div>
              <div className="bg-black w-full h-[50vh] md:w-1/2 md:h-screen ">
                  <div className="flex flex-col items-center">
                      <div
                          className="flex h-[35vh] md:h-[50vh] justify-center  align-middle content-center items-center">
                          <img className="w-3/5 md:w-3/4 md:h-auto xl:h-3/4 xl:w-auto " src="/Classy-Chassis-Circle-Logo.png"
                               alt="image description"/>
                      </div>
                      <div
                          className="flex justify-center h-[15vh] md:h-[50vh]  content-center items-start w-3/4 md:w-1/2">
                          <a href={'https://www.usedhd.ca/'} className="w-3/4 sm:w-1/2 md:w-3/4 bg-primaryOrange text-black font-bold py-4 px-4 text-center">
                             ENTER
                          </a>
                      </div>

                  </div>
              </div>
          </div>
      </main>
  );
}
