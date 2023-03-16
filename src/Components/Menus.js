import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
const Menu = () => {
  return (
    <div className="flex justify-between mx-7 md:justify-evenly md:border-b-2 py-5 ">
      <div className="flex">
      <h2>
        <AiOutlineMenu className="md:hidden mt-2 mr-2" size={26} />
      </h2>
      <h1 className="text-2xl md:text-xl font-bold mt-1 md:mr-6">Sneakers</h1>
      <ul className="hidden md:flex list-none space-x-3 mt-3">
        <li>Collections</li>
        <li>Mens</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className=" md:ml-96 flex space-x-10">
        <AiOutlineShoppingCart className="mt-2" size={26} />
        <div className="rounded-full h-10 w-10 bg-gray-400">
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/113968776?v=4"
            alt="avatar"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
