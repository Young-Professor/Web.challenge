import { useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "./modal";
const Menu = ({ items }) => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    if (!modal) setModal(true);
    else setModal(!true);
  };
  return (
    <div className="flex justify-between items-center mx-7 md:justify-evenly md:border-b-2 h-20 ">
      <div className="flex">
        <h2>
          <AiOutlineMenu className="md:hidden mt-2 mr-2" size={26} />
        </h2>
        <h1 className="text-2xl md:text-xl font-bold mt-1 md:mt-2 md:mr-6">
          Sneakers
        </h1>
        <ul className="hidden md:flex list-none space-x-3 mt-3">
          <li>Collections</li>
          <li>Mens</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className=" md:ml-20 lg:ml-96 flex space-x-10">
        <div onClick={handleClick} class="flex items-center">
          <AiOutlineShoppingCart
            className="mt-2 cursor-pointer"
            size={26}
          />
          <div className="-ml-2 bg-orange-500 rounded-lg h-4 w-5 flex justify-center items-center">
            <p className="text-xs cursor-pointer">{items}</p>
          </div>
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
        {modal ? <Modal /> : null}
      </div>
    </div>
  );
};

export default Menu;
