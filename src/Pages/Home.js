import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const photos = [
  {
    id: 1,
    src: "https://frabjous-gumdrop-8e4148.netlify.app/images/image-product-1.jpg",
    price: "125.0",
  },
  {
    id: 2,
    src: "https://frabjous-gumdrop-8e4148.netlify.app/images/image-product-2.jpg",
    price: "125.0",
  },
  { id: 3, src: require("../images/image-product-3.jpg"), price: "125.0" },
  { id: 4, src: require("../images/image-product-4.jpg"), price: "125.0" },
];

const Home = ({ setShoes }) => {
  const [imageSrc, setimageSrc] = useState(
    require("../images/image-product-1-thumbnail.jpg")
  );
  const [ShoePrice, setShoePrice] = useState(photos[0].price);

  const [imageId, setImageId] = useState("1");
  const [imageIndex, setImageIndex] = useState(0);
  const [items, setItems] = useState(0);
  const [Nullitems, setNullitems] = useState(false);
  const [Success, setSuccess] = useState(false);

  const handleImageClick = (event) => {
    const imgId = event.target.id;
    setImageId(imgId);
    setShoePrice(photos[imgId - 1].price);
    const src = event.target.src;
    setimageSrc(src);
  };
  // Add number of shoes
  const handleIncrement = () => {
    setItems(items + 1);
    // setItem((prevItems) => prevItems + 1);
  };
  const handleDecrement = () => {
    setItems(items - 1);
    // setItem((prevItems) => prevItems - 1);
  };

  //when one adds items to cart
  const handleAddToCart = () => {
    let timer;
    if (items === 0) {
      setNullitems(true);
      timer = setTimeout(() => {
        setNullitems(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
    const selectedShoe = photos.find((shoe) => shoe.id.toString() === imageId);
    const shoeData = {
      ...selectedShoe,
      quantity: items,
    };
    setShoes(shoeData);
    setSuccess(true);
    timer = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleRightArrowClick = () => {
    const nextIndex = (imageIndex + 1) % photos.length;
    setImageIndex(nextIndex);
    setimageSrc(photos[nextIndex].src);
    setShoePrice(photos[nextIndex].price);
  };

  const handleLeftArrowClick = () => {
    const prevIndex = (imageIndex - 1 + photos.length) % photos.length;
    setImageIndex(prevIndex);
    setimageSrc(photos[prevIndex].src);
    setShoePrice(photos[prevIndex].price);
  };

  return (
    <section className="">
      <div className="block md:flex mt-2 md:mt-12 lg:space-x-24">
        <div>
          <div className="w-full h-80 md:w-80 bg-slate-400 rounded-md">
            <img
              className=" h-full w-full object-cover md:h-80 md:w-80 md:rounded-md"
              src={imageSrc}
              alt="Shoes"
            />
            <FaAngleRight
              onClick={handleRightArrowClick}
              size={26}
              className="absolute md:hidden top-56 right-0  sm:right-16 cursor-pointer"
            />
            <FaAngleLeft
              onClick={handleLeftArrowClick}
              size={26}
              className="absolute md:hidden top-56 cursor-pointer"
            />
          </div>
        </div>
        <div className="px-10">
          <p className=" text-orange-500 pt-7">Sneakers Company</p>
          <h2 className="text-3xl font-bold pt-2">
            Fall Limited Edition <br /> Sneakers
          </h2>
          <p className="pb-2 pt-4 ">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>

          <div className="flex space-x-5 mt-2">
            <p id="price" className="text-2xl font-bold ">
              {ShoePrice}
            </p>
            <p className="mt-1 rounded-lg  bg-slate-200 px-2 h-6  text-orange-500">
              50%
            </p>
          </div>
          <p className="mt-1 text-gray-500 text-sm line-through">$250.00</p>
          <div className="md:flex space-x-2 pt-3">
            <div className="flex w-60 md:w-44 rounded h-auto bg-gray-300 justify-between p-2 py-2 mb-2 ml-2">
              <button
                onClick={handleDecrement}
                className=" text-orange-500 text-xl"
                disabled={items === 0}
              >
                -
              </button>
              <h2 className=" text-xl">{items}</h2>
              <button
                onClick={handleIncrement}
                className=" text-orange-500 text-xl"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 w-60 py-2 md:w-48 rounded-md shadow-xl shadow-orange-200"
              >
                Add to cart
              </button>
            </div>
          </div>
          {Nullitems && (
            <h3 className="text-red-600 font-bold">
              select number of items please
            </h3>
          )}
          {Success && (
            <h3 className="text-green-700 font-bold">
              Items successfully added to the cart
            </h3>
          )}
        </div>
      </div>
      <div className="hidden md:flex mt-1 space-x-5">
        <div
          className={`${
            imageId === "1" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500" cursor-pointer`}
        >
          <img
            id="1"
            className="w-14 h-14 rounded"
            src={photos[0].src}
            alt="Shoes"
            onClick={handleImageClick}
          />
        </div>
        <div
          className={`${
            imageId === "2" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500" cursor-pointer`}
        >
          <img
            id="2"
            className="w-14 h-14 rounded"
            src={photos[1].src}
            onClick={handleImageClick}
            alt=""
          />
        </div>
        <div
          className={`${
            imageId === "3" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500" cursor-pointer`}
        >
          <img
            id="3"
            className="w-14 h-14 rounded"
            src={photos[2].src}
            alt=""
            onClick={handleImageClick}
          />
        </div>
        <div
          className={`${
            imageId === "4" ? "opacity-60" : ""
          } w-14 h-14 rounded bg-slate-500" cursor-pointer`}
        >
          <img
            id={photos[3].id}
            className="w-14 h-14 rounded"
            src={photos[3].src}
            alt=""
            onClick={handleImageClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
