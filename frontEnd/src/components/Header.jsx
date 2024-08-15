// import { useLocation } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";

import  {robo}  from "../assets";
// import { navigation } from "../constants";
import Button from "./Button";
// import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const Header = () => {
//   const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    //   enablePageScroll();
    } else {
      setOpenNavigation(true);
    //   disablePageScroll();
    }
  };

//   const handleClick = () => {
//     if (!openNavigation) return;

//     // enablePageScroll();
//     setOpenNavigation(false);
//   };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm flex flex-col ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[9rem] l:mr-1" href="#hero">
          <img src={robo} width={170} height={20} alt="robo" />
        </a>
        <a
          
          className="button hidden mr-8 text-xl text-n-1/100 transition-colors hover:text-n-1 lg:block"
        >
          Chats.ai
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          

        </nav>

        
        <Button className="hidden lg:flex" href="#home">
          Meet the team 
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
        
        </Button>
      </div>
    </div>
  );
};

export default Header;