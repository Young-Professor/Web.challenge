import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Modal = ({shoes, handleDelete}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  var formattedTotal=null
  var total=null
  var numItems=null
  var numShoes=null
  if (shoes) {
    numShoes=parseFloat(shoes.price.replace('$',''));
    numItems = parseInt(shoes.quantity);
     total = numShoes * numItems;
     formattedTotal = formatter.format(total);
  }
  return (
    <div className="absolute left-[0%] top-32 sm:left-[50%] md:left-[65%] sm:top-20 z-10 bg-white text-gray-800 shadow-lg w-[300px] h-[250px] md:w-[250px] md:h-[200px] rounded-md">
      <div className="h-10 border">
        <h1>Cart</h1>
       {!shoes ?<div className="flex w-full h-44 justify-center items-center"><p>Your cart is empty</p></div> : <div>
        <div className="flex justify-between px-2 pt-7">
            <div className="14 h-14 rounded bg-slate-500">
              <img
                id="1"
                className="w-14 h-14 rounded"
                src={shoes.src}
                alt="Shoes"
              />
          </div>
          <div className="w-40">
            <h2>Fall Limited Edition</h2>
            <h2 className="font-bold">{shoes.price}*{shoes.quantity} = {formattedTotal}</h2>
          </div>
        <AiFillDelete onClick={handleDelete} size={20} className='text-slate-500 cursor-pointer'/>
        </div>
        <button className="bg-orange-500 text-white w-52 py-2 rounded-md mt-3 ml-2">Checkout</button>
        </div>
        }
      </div>
    </div>
  );
};
export default Modal;
