const Modal = () => {
  return (
    <div className="absolute top-20 bg-white text-gray-800 shadow-lg w-[250px] h-[200px]">
      <div className="h-10 border">
        <h1>Cart</h1>
        <div className="flex justify-between px-2 pt-7">
            <div className="14 h-14 rounded bg-slate-500">
              <img
                id="1"
                className="w-14 h-14 rounded"
                src={require("../images/image-product-1-thumbnail.jpg")}
                alt="Shoes"
              />
          </div>
          <div className="w-40">
            <h2>Fall Limited Edition</h2>
            <h2>$125.00 </h2>
          </div>
        </div>
        <button className="bg-orange-500 text-white w-52 py-2 rounded-md mt-3 ml-2">Checkout</button>
      </div>
    </div>
  );
};
export default Modal;
