import { useState, useEffect } from "react";

export default function HomeWorldMap() {
  const [shoeData, setShoeData] = useState(10000000);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 1000000);
      setShoeData((prevShoeData) => {
        const newShoeData = prevShoeData + randomNumber;
        return newShoeData > 11658467 ? 11658467 : newShoeData;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[-1px] bg-[#78350F] xl:px-[196px] xl:py-[42px]">
      <div
        className="relative 
      ms-[21px] flex md:justify-center"
      >
        <img
          className="absolute -mt-10 ms-3 md:ms-[-740px] md:mt-[-45px]"
          src="/mapShoes.png"
          alt="map-shoes"
        />
        <div className="flex md:justify-center">
          <img
            className="h-[633px] w-[1049px] flex-shrink-0 object-cover object-left md:object-cover"
            src="/chart.png"
            alt="chart"
          />
          <img
            className="absolute ms-[212px] mt-[65px] h-[456px] w-[724px] flex-shrink-0 animate-pulse object-cover object-left md:ms-[88px] md:mt-[65px] md:object-cover"
            src="/ellipses.png"
            alt="ellipses"
          />
          <div className="absolute px-[50px] py-[276px] text-center text-[#FFFBEB] md:py-[228.5px]">
            <h1 className="cursor-default select-none text-[48px] font-extrabold leading-[52.8px] md:text-[96px] md:font-extrabold  md:leading-[105.6px]">
              {shoeData.toLocaleString()}
            </h1>
            <p className="select-none text-[32px] font-bold leading-[35.2px] md:text-[56px] md:font-extrabold md:leading-[61.6px]">
              Shoes Collected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
