import PropTypes from "prop-types";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  console.log(isMobileMenuOpen);
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        isMobileMenuOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute w-full h-full bg-black opacity-60 z-10"></div>
      <div
        className={`absolute w-2/3 h-full bg-white p-6 z-20 transition-[left] ${
          isMobileMenuOpen ? "left-0" : "-left-[1500px]"
        }`}
      >
        <button onClick={() => setIsMobileMenuOpen(false)}>
          <img src="src/assets/images/icon-close.svg" />
        </button>
        <div className="flex flex-col mt-10 gap-4 font-bold">
          <div>Collections</div>
          <div>Men</div>
          <div>Women</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  setIsMobileMenuOpen: PropTypes.func,
};

export default MobileMenu;
