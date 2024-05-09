import { useState } from "react";
import Button from "../button";
import clsx from "clsx";

const navItems = ["Products", "Solutions", "Pricing", "Resources", "Log In"];

const NavItem = ({ title }: { title: string }) => {
  return (
    <div className="gap-2 px-2 py-3">
      <a
        href={`#${title.toLocaleLowerCase()}`}
        className="rounded- border-b-2 border-transparent pb-0.5 text-base font-medium leading-6 tracking-[0.5px] text-secondary transition hover:border-secondary"
      >
        {title}
      </a>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div className="sticky z-50 h-[96px] bg-white py-6 lg:bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-row-reverse items-center justify-between ">
          <div
            className={`cursor-pointer transition duration-300 ease-in lg:hidden ${
              isMenuOpen ? "rotate-0" : "rotate-180"
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <div className="max-h-6 max-w-6">
                <img src="/close-icon.png" />
              </div>
            ) : (
              <img src="/menu-scale.png" />
            )}
          </div>
          <div className="lg:hidden">
            <div className="h-[35px] w-[102px]">
              <a href="#" className="text-[32px] font-bold text-secondary ">
                Collers
              </a>
            </div>
          </div>
        </div>
        <div
          className={clsx("lg:block", isMenuOpen ? "block" : "hidden")}
          id="menu"
        >
          <div className="flex justify-between">
            <div className="hidden lg:block">
              <a href="#" className="text-[32px] font-bold text-secondary ">
                Collers
              </a>
            </div>
            <div className={clsx("lg:h-12", isMenuOpen && "w-full")}>
              <div
                className={clsx(
                  "flex-col gap-4 border-t-0 pb-5 text-center lg:flex lg:flex-row lg:justify-between",
                  isMenuOpen && "mt-4 h-screen w-full bg-white text-start",
                )}
              >
                {navItems.map((item, index) => (
                  <NavItem key={index} title={item} />
                ))}
                <Button
                  title="Sign up now"
                  className="!px-2 ring-0 hover:text-white lg:!px-7 lg:ring-2 lg:ring-secondary lg:hover:bg-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
