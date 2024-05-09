export default function Footer() {
  return (
    <div className="bg-blue">
      <div className="container mx-auto w-full py-12">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-4 sm:gap-0 sm:text-start">
          <div className="flex flex-col">
            <ul>
              <li className="py-3 text-base font-medium leading-4 text-white">
                <a href="#">Product</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Pricing</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Overview</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Browse</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Accessibility</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Five</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="text-whitetext-gray-100 py-3  text-base font-medium leading-4 text-white">
                <a href="#">Solutions</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Brainstorming</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Ideation</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Wireframing</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Research</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Design</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="py-3 text-base font-medium leading-4 text-white">
                <a href="#">Support</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Contact Us</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Developers</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Documentation</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Integrations</a>
              </li>
              <li className="py-3 text-base font-normal leading-4 text-gray-100">
                <a href="#">Reports</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <ul>
              <li className="py-3 text-base font-medium leading-4 text-white">
                <a href="#">Get the App</a>
              </li>
              <li className="mb-[11px] flex justify-center pt-3 text-base font-normal leading-4 sm:justify-start ">
                <a href="#">
                  <img src="/app-store.png" alt="app-store" />
                </a>
              </li>
              <li className=" flex justify-center text-base font-normal leading-4 sm:justify-start">
                <a href="#">
                  <img src="/google-play.png" alt="google-play" />
                </a>
              </li>
              <li className="mb-3 pt-12 text-base font-medium leading-4 text-gray-100 sm:mb-0">
                <a href="#">Follow Us</a>
              </li>
              <div className="flex space-x-4 py-3 text-base font-normal leading-4 ">
                <a href="#">
                  <img src="/youtube.png" alt="youtube" />
                </a>
                <a href="#">
                  <img src="/facebook.png" alt="facebook" />
                </a>
                <a href="#">
                  <img src="/twitter.png" alt="twitter" />
                </a>
                <a href="#">
                  <img src="/instagram.png" alt="instagram" />
                </a>
                <a href="#">
                  <img src="/linkedin.png" alt="linkedin" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex w-full flex-col items-center justify-between gap-6 border-t border-[#334155] py-12 text-base font-normal leading-[22.4px] text-gray-100 sm:flex-row sm:gap-0 ">
        <p>Collers @ 2023. All rights reserved.</p>
        <ul className="flex items-center space-x-8">
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/world.png" alt="world" />
            <div className="pt-1">
              <a href="#">EN</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
