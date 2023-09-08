import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className="m-4">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>

          <div className="flex  underline text-lg hover:cursor-pointer ">
            <p>Items in your cart : 3</p>
            <p className="ml-5">WhishList Items : 0</p>
          </div>

          <button className="btn">Check Out</button>
        </div>
        {/* centeral div  */}
        <div className="flex mt-7 ">
          <div className="flex flex-col flex-1 border-2 rounded-lg bg-blue-200">
            {/* List of Products */}
            <div className="flex w-[100%] h-auto items-center border-2 rounded-lg bg-yellow-500 ">
              <div className="product flex self-start pl-5 ">
                <img
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b>1234456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Darzilng Sky Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> lg
                  </p>
                </div>
              </div>
              <div className="bg-green-400 flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />

            {/* 2nd product  */}

            <div className="flex w-[100%] h-auto items-center border-2 rounded-lg bg-yellow-500">
              <div className="product flex self-start pl-5 ">
                <img
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779"
                  alt="product_img"
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b>1234456
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Darzilng Sky Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer bg-white-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> lg
                  </p>
                </div>
              </div>
              <div className="bg-green-400 flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70$</b>
                </p>
              </div>
            </div>

            <hr className="mt-7 mb-7" />
          </div>
          <div className="bg-red-300 flex-[0.4] w-auto h-[40vh] first-letter:capitalize border-2 border-[#8a4af3] rounded-lg shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">summary</h1>
            <div className="flex  justify-between mt-3 w-[100%]">
              <p>SubTotal</p>
              <p>$140</p>
            </div>
            <div>
              <p>Shipping Charges</p>
              <p>$40</p>
            </div>
            <div>
              <p>Shipping Discount</p>
              <p>- $40</p>
            </div>
            <div>
              <p>Total</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Cart;
