import { useEffect, useState } from "react";
import Button from "../../components/button";
import HomeBadges from "../home-badges";

export default function HomeHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white lg:bg-primary">
      <div
        style={{
          background:
            "linear-gradient(to top left, #FEF3C7 50%, transparent 50%)",
          ...(isMobile && {
            backgroundPosition: "60% 100%",
            backgroundSize: "2000px 100%",
          }),
        }}
      >
        <div className="container mx-auto flex flex-col items-center gap-[82px] px-4 py-12 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pb-20 lg:pt-40">
          <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-start">
            <div className="text-[56px] font-extrabold text-primary-100 md:text-[72px]">
              Collectible Sneakers
            </div>
            <div className="text-lg font-normal leading-[28.8px] text-primary-100 max-w-[714px]">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </div>

            <div className="flex">
              <Button
                title="Sign up now"
                className="ring-secondary hover:bg-secondary hover:text-white"
              />
              <button className="ml-4 flex rounded-lg px-2 py-3 text-base font-medium leading-6 tracking-[0.5px] ring-secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z"
                    fill="#78350F"
                  />
                </svg>

                <p className="border-b-2 border-transparent ps-2 text-secondary transition hover:border-secondary">
                  Watch Demo
                </p>
              </button>
            </div>
          </div>

          <div className="relative z-0 min-h-[276px] min-w-[272px] rounded-[50px] bg-[#FBBF24] md:min-h-[372px] md:min-w-[367px] lg:me-16">
            <div className="absolute ms-[-38px] mt-[-38px] w-[361px] md:ms-[-60px] md:mt-[-48px] md:h-[388px] md:w-[486px]">
              <img src="/sneaker.png" alt="sneaker" />
            </div>
          </div>
        </div>

        <HomeBadges />
      </div>
    </div>
  );
}
