import { robo } from "../assets";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const people = [
    {
      name: "Affan Nazir",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/affan-nazir/",
    },
    {
      name: "Katifa Memoon",
      role: "Front-End Developer",
      linkedin: "https://www.linkedin.com/in/katifa-memoon/",
    },
    {
      name: "Haseeba Yasin",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/haseeba-yasin-975251230/",
    },
  ];

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
        <a className="button hidden mr-8 text-xl text-n-1/100 transition-colors hover:text-n-1 lg:block">
          Chats.ai
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        ></nav>

        <Button className="hidden lg:flex" onClick={handleOpenPopup}>
          Meet the team
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        ></Button>
      </div>
      {isPopupOpen && (
        <div
          className=" fixed inset-0 flex items-center justify-center z-50 mt-60 !mt-60"
          // style={{marginTop:"5em !important"}}
          onClick={handleClosePopup}
        >
          <div
            className="bg-slate-200 rounded-lg shadow-white p-6 w-11/12 sm:w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700"
            >
              x
            </button>
            <br />
            <h2 className=" text-gray-900 text-xl font-bold mb-4">
              ---------- Meet the Team ---------
            </h2>
            <div>
              <ul className="list-disc pl-5">
                {people.map((person, index) => (
                  <li key={index} className="mb-3">
                    <h3 className="text-black text-lg font-medium">
                      {person.name}
                    </h3>
                    <p className="text-gray-600"> {person.role}</p>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {"  "} LinkedIn Profile
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
