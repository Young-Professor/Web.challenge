import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Modal = ({shoes}) => {
  const [cartItems, setCartItems] = useState([{shoes}]);
  // console.log(cartItems);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  var formattedTotal=null
  var total=null
  var numItems=null
  var numShoes=null
  if (cartItems[0].shoes) {
    numShoes=parseFloat(cartItems[0].shoes.price.replace('$',''));
    numItems = parseInt(cartItems[0].shoes.quantity);
     total = numShoes * numItems;
     formattedTotal = formatter.format(total);
  }
  
  console.log(shoes);

  const handleDelete = () => {
    setCartItems([{shoes:null}]);
    console.log(cartItems);
  };
  
  return (
    <div className="absolute top-20 z-10 bg-white text-gray-800 shadow-lg w-[250px] h-[200px]">
      <div className="h-10 border">
        <h1>Cart</h1>
       {!cartItems[0].shoes ?<div className="flex w-full h-44 justify-center items-center"><p>Your cart is empty</p></div> : <div>
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
            <h2 className="font-bold">{cartItems[0].shoes.price}*{cartItems[0].shoes.quantity} = {formattedTotal}</h2>
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