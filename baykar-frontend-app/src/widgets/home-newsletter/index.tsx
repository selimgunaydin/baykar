import Button from "../../components/button";

export default function HomeNewsletter() {
  return (
    <div className="container mx-auto flex justify-center py-4 lg:py-[160px] ">
      <div
        className="relative w-full rounded-[30px] bg-white py-8 md:px-20  md:py-10"
        style={{
          boxShadow: "0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A",
        }}
      >
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10 ">
          <div className="z-20 grid w-full grid-cols-1 place-items-center gap-6 lg:me-10 lg:place-items-start">
            <div>
              <h2 className="text-center text-[32px] font-bold leading-[35.2px] text-black md:text-[56px] md:font-extrabold md:leading-[61.6px] lg:text-start">
                Why join us
              </h2>
            </div>
            <div className="grid gap-2">
              <div className="flex items-start space-x-2 lg:items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z"
                    fill="#15803D"
                  />
                </svg>

                <p className=" text-base font-normal text-blue md:text-xl md:font-normal md:leading-9">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </div>
              <div className="flex items-start space-x-2 lg:items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z"
                    fill="#15803D"
                  />
                </svg>

                <p className=" text-base font-normal leading-[22.4px] text-blue md:text-xl md:font-normal md:leading-9">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </p>
              </div>
              <div className="flex items-start space-x-2 lg:items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z"
                    fill="#15803D"
                  />
                </svg>

                <p className=" text-base font-normal leading-[22.4px] text-blue md:text-xl md:font-normal md:leading-9">
                  Ullamcorper ornare in et egestas dolor orci.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start ">
              <Button
                title="Sign up now"
                className="px-8 py-4 text-xl ring-secondary hover:bg-secondary hover:text-white"
              />
            </div>
          </div>
          <div className="z-10 w-full">
            <img
              className="relative z-20 rounded-3xl px-4 lg:px-0"
              src="/thumbnail-2.png"
              alt="thumbnail-2"
            />

            <img
              className="relative bottom-12 left-16 z-20 w-[86px]"
              src="./newsletter-dot.png"
              alt="newsletter-dot"
            />

            <img
              className="absolute top-[290px] ms-[-10px] object-cover drop-shadow-xl md:top-[290px] md:ms-[-65px] lg:top-[-60px] lg:ms-[-90px] lg:w-[58%]"
              src="/newsletter-bg.png"
              alt="newsletter-bg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
