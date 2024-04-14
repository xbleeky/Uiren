import nis from "../../../img/icons/nis.png";
import lang from "../../../img/icons/language.png";

import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: any) => {
    setIsOpen(state.isOpen);
  };

  const [isDropped, setIsDropped] = useState("no-drop");
  const [isDropped2, setIsDropped2] = useState("no-drop2");

  function handleClick() {
    if (isDropped == "no-drop") {
      setIsDropped("drop");
      setIsDropped2("drop2");
    } else {
      setIsDropped("no-drop");
      setIsDropped2("no-drop2");
    }
  }

  return (
    <nav className="z-50 fixed top-0 left-0 w-full p-5 pr-0 bg-white flex justify-between items-center">
      <div className="text-shadow mx-auto pl-12 md:pl-0 md:ml-0 font-PtSerif text-darkGreen text-4xl lg:text-5xl font-bold italic lg:pr-3">
        Ü<span className="text-orange1">İREN</span>
      </div>
      <Menu
        className="block text-shadow lg:hidden font-Preahvihear"
        isOpen={isOpen}
        onStateChange={handleStateChange}
        right // Optional: open menu from the right
        width={"250px"} // Set menu width
      >
        <a href="">About us</a>
        <a href="">Courses</a>
        <a href="">Learning Process</a>
        <a href="">FAQs</a>
        <a href="">Reviews</a>
        <a href="">Contacts</a>
      </Menu>

      <ul className="mx-auto justify-between hidden text-center text-shadow nav_links text-base lg:text-xl md:flex md:items-center">
        <li className=" mx-3">
          <a
            href="#intro"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            About us
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#subjects"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Courses
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#process"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Learning Process
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#special"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            FAQs
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#reviews"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Reviews
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#footer"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Contacts
          </a>
        </li>
      </ul>

      <div className="md:ml-auto flex items-center justify-end">
        <div className="dropdown">
          <div onClick={handleClick} className={isDropped2}>
            <img src={lang} alt="" />
          </div>
          <div className={isDropped}>
            <div className="dropdown__child">
              <Link to="/ru">Русский</Link>
            </div>
            <div className="dropdown__child">
              <Link to="/kz">Қазақ</Link>
            </div>
          </div>
        </div>

        <div className="nav__icon w-12 md:w-14 lg:w-20 mr-3">
          <img src={nis} alt="" />
        </div>
      </div>
    </nav>
  );
};
