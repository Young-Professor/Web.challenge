const Home = () => {
  return (
    <section className="">
    <div className="block md:flex mt-2 md:mt-12 md:space-x-24">
      <div>
        <div className="w-full h-80 md:w-80 bg-slate-400 rounded-md">
          <img
            className=" h-full w-full object-cover md:h-80 md:w-80 md:rounded-md"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEYD-X3t1AoRI2dLmAN2RzBHufpEwyGwr6mpjRyF20TsCdjC6X"
            alt="Shoes"
          />
        </div>
      </div>
      <div className="px-10">
        <p className=" text-orange-500 pt-7">Sneakers Company</p>
        <h2 className="text-3xl font-bold pt-2">
          Fall Limited Edition <br /> Sneakers
        </h2>
        <p className="pb-2 pt-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          rerum nisi quibusdam id eligendi a dolore fuga ab esse excepturi omnis
          rerum nisi quibusdam id eligendi a dolore
        </p>

        <div className="flex space-x-5 mt-2">
          <p className="text-2xl font-bold ">$125.00</p>
          <p className="mt-1 rounded-lg  bg-slate-200 px-2 h-6  text-orange-500">
            50%
          </p>
        </div>
        <p className="mt-1 text-gray-500 text-sm">$250.00</p>
        <div className="md:flex space-x-2 pt-3">
          <div className="flex w-60 md:w-44 rounded h-auto bg-gray-300 justify-between p-2 py-2 mb-2 ml-2">
            <button className=" text-orange-500 text-xl">-</button>
            <h2 className=" text-xl">0</h2>
           <button className=" text-orange-500 text-xl">+</button>
          </div>
          <div>
            <button type="submit" className="bg-orange-500 w-60 py-2 md:w-48 rounded-md shadow-xl shadow-orange-200">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden md:flex mt-1 space-x-5">
        <div className="w-14 h-14 rounded bg-slate-500">
        <img
            className="w-14 h-14 rounded"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEYD-X3t1AoRI2dLmAN2RzBHufpEwyGwr6mpjRyF20TsCdjC6X"
            alt="Shoes"
          />
        </div>
        <div className="w-14 h-14 rounded bg-slate-500">
            <img className="w-14 h-14 rounded" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3wzRblhYi9Wsk1RkWQP-GV-9EKngoVWfdkZ5QozetdMKP5z-9" alt="" />
        </div>
        <div className="w-14 h-14 rounded bg-slate-500">
        <img className="w-14 h-14 rounded" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_pVvbEiqxeKN9ylum0UNO9F-QZ6TxGawlMVV9Zxr9H9HvSZRM" alt="" />
        </div>
        <div className="w-14 h-14 rounded bg-slate-500">
        <img className="w-14 h-14 rounded" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbtOYlpeGL2AEschmxxIUbe4nRTDUMl5VjR4vRGyz0Ls8p4D6D" alt="" />
        </div>
    </div>
    </section>
  );
};

export default Home;
