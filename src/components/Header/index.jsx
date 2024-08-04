import { useState } from "react";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header>
      <div className="flex p-6 lg:px-0 lg:py-10 lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1440px] mx-auto border-b border-gray-light justify-between">
        <div className="flex items-center">
          <div className="flex items-center lg:mr-12">
            <button
              className="lg:hidden mr-4"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <img src="src/assets/images/icon-menu.svg" />
            </button>
            <img src="src/assets/images/logo.svg" />
          </div>
          <div className="hidden lg:flex gap-6 text-gray-default">
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="flex items-center gap-6 lg:gap-10">
          <div className="flex">
            <button>
              <img src="src/assets/images/icon-cart.svg" />
            </button>
          </div>
          <div className="w-6 lg:w-12">
            <img src="src/assets/images/image-avatar.png" alt="" />
          </div>
        </div>
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
