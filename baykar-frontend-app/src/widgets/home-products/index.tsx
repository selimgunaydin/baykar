import ProductCard from "../../components/product-card";
import Button from "../../components/button";

export default function HomeProducts() {
  return (
    <div className="relative z-0 gap-10  bg-blue py-12 md:py-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[32px] font-bold leading-[35.2px] text-white lg:text-[56px] lg:font-extrabold lg:leading-[61.6px]">
            The best of the best
          </h2>
          <div>
            <Button
              title="Sign up now"
              className="rounded-lg !px-12 py-5 text-2xl font-medium leading-6 tracking-[0.5px] text-white ring-[2px] ring-white hover:bg-white hover:text-blue"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-20">
          <ProductCard />
        </div>
      </div>
      <div className="absolute top-1/4 z-0 mt-[140px] flex h-screen w-full rotate-90 justify-center p-0 lg:left-[45px] lg:top-56 lg:mt-[-31px] lg:h-auto lg:rotate-0 lg:pe-24">
        <img
          src="/backlights.png"
          alt="backlights"
          className="max-h-[522px] w-full object-contain md:p-0"
        />
      </div>
    </div>
  );
}
