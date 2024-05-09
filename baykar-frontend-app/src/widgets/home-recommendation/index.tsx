import clsx from "clsx";
import React, { useState } from "react";

type RecommendationButtonProps = {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
  tabName: string;
  icon: string;
};

const buttons = [
  {
    tabName: "Bibendum tellus",
    icon: "/search.png",
  },
  {
    tabName: "Cras eget",
    icon: "/shield-check.png",
  },
  {
    tabName: "Dolor pharetra",
    icon: "/rocket.png",
  },
  {
    tabName: "Amet, fringilla",
    icon: "/screen.png",
  },
  {
    tabName: "Amet nibh",
    icon: "/podcast.png",
  },
  {
    tabName: "Sed velit",
    icon: "/settings-alt.png",
  },
];

function RecommendationButton(props: RecommendationButtonProps) {
  return (
    <button
      className="flex w-full items-center justify-between rounded-lg  p-4 text-blue md:w-[256px]"
      onClick={() => props.setActiveTab(props.tabName)}
      style={{
        boxShadow:
          props.activeTab === props.tabName
            ? "0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A"
            : "",
      }}
    >
      <div className="flex pe-4">
        <img src={props.icon} alt="icon" />
        <p className="px-4 text-xl font-medium leading-6 tracking-[0.5px] md:pe-2 md:ps-4">
          {props.tabName}
        </p>
      </div>
      {props.activeTab === props.tabName ? (
        <img className="hidden md:flex" src="/arrow-right.png" alt="arrow-right" />
      ) : (
        ""
      )}
    </button>
  );
}

export default function HomeRecommendation() {
  const [activeTab, setActiveTab] = useState("Bibendum tellus");
  const [imageStyle, setImageStyle] = useState({
    opacity: 1,
    filter: "brightness(100%)",
  });

  const handleButtonClick = (tabName: string) => {
    setActiveTab(tabName);
    setImageStyle({ opacity: 0.6, filter: "brightness(90%)" });
    setTimeout(
      () => setImageStyle({ opacity: 1, filter: "brightness(100%)" }),
      300,
    );
  };

  return (
    <div className="flex flex-col ">
      <div className="container mx-auto grid gap-8 px-4 pb-8 pt-12 md:pb-20 md:pt-20">
        <h2 className="text-center text-[32px] font-extrabold leading-[35.2px] text-blue md:text-start md:text-[56px] md:leading-[61.6px]">
          Grow your collection
        </h2>
        <p className="text-center text-base font-normal leading-[22.4px] text-blue md:text-start md:text-lg md:leading-[28.8px]">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="relative flex justify-center">
        <div className="container absolute mx-auto">
          <div className="flex flex-col md:flex-row">
            <div
              className="flex h-[60px] !min-w-[270px] flex-row items-start gap-4 overflow-x-scroll text-nowrap md:flex-col lg:h-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {buttons.map((button, index) => (
                <RecommendationButton
                  key={index}
                  activeTab={activeTab}
                  setActiveTab={handleButtonClick}
                  {...button}
                />
              ))}
            </div>

            <div className="flex w-full">
              <img
                className="mt-8 w-full transition md:mt-0 md:ps-20"
                src="/product-banner.png"
                alt="product-banner"
                style={imageStyle}
              />
            </div>
          </div>
        </div>
        <img className="w-full min-w-[845px]" src="/bg-waves.png" alt="waves" />
      </div>
    </div>
  );
}
