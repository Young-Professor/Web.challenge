import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import Modal from "./modal";
const Menu = ({ shoes, handleDelete }) => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    if (!modal) setModal(true);
    else setModal(!true);
  };
  const handleShowMenu = () => {
    const test = document.querySelector(".navlinks");
    test.classList.add("show");
  };
  const handleHideMenu = () => {
    const test = document.querySelector(".show");
    test.classList.remove("show");
  };
  return (
    <div className="flex justify-between items-center mx-7 md:justify-evenly md:border-b-2 h-[80px] ">
      <div className="flex">
        <AiOutlineMenu
          onClick={handleShowMenu}
          id="menu-icon"
          className="md:hidden mt-2 mr-2"
          size={26}
        />
        <h1 className="text-2xl md:text-xl font-bold mt-1 md:mt-2 md:mr-6">
          Sneakers
        </h1>
        <ul className="navlinks">
          <AiOutlineClose
            onClick={handleHideMenu}
            size={26}
            className="cursor-pointer md:hidden"
          />
          <li><a href="">Collections</a></li>
          <li>Mens</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className=" md:ml-20 lg:ml-96 flex space-x-10">
        <div onClick={handleClick} className="flex items-center">
          <AiOutlineShoppingCart className="mt-2 cursor-pointer" size={26} />
          {shoes && (
            <div className="-ml-2 bg-orange-500 rounded-lg h-4 w-5 flex justify-center items-center">
              <p className="text-xs cursor-pointer">{shoes.quantity}</p>
            </div>
          )}
        </div>

        <div className="rounded-full h-10 w-10 bg-gray-400">
          <img
            className="h-10 w-10 rounded-full"
            src={require("../images/image-avatar.png")}
            alt="avatar"
            aria-hidden="true"
          />
        </div>
        {/* modal */}
        {modal ? <Modal shoes={shoes} handleDelete={handleDelete} /> : null}
      </div>
    </div>
  );
};

export default Menu;
