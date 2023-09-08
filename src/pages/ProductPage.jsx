import React, { useState } from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Counter from '../components/Counter';
function ProductPAge() {
  const [currentData, setCurrentData] = useState({
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216',
    price: '70',
    desc: ` Cream Hoodie is the softest and most comfortable hoodie you will
            ever own. It’s the perfect piece to wear while you are playing your
            favorite game or on your next adventure. 100% Cotton, Transfer print
            Loose fit for ultimate comfort, Made in India`,
    title: 'Creamy Hoodie original',
  });
  const onColorClick = (imgUrl, price, desc, title) =>
    setCurrentData({ imgUrl, price, desc, title });

  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center h-[600px]">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={currentData.imgUrl}
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-start flex-col mt-10">
          <h1 className="title text-[40px]">{currentData.title} </h1>
          <p className="pr-[4rem] text-justify">{currentData.desc}</p>
          <p className="mt-7 text-3xl">
            Price: <b>${currentData.price}</b>
          </p>
          {/* color variants  */}
          <div className="flex text-2xl mt-7  gap-[5px]">
            Colors
            <div
              className="bg-red-600 hover:border-[#8a4af3] w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer"
              onClick={() =>
                onColorClick(
                  'https://m.media-amazon.com/images/I/41RnAglTvxL._AC_UY1100_.jpg',
                  60,
                  ` Basic red essential hoodie with Deadbear branding at the front. We suggest you to go 2 sizes down from your regular size.Specifications - Unisex, Heavy-Weight Cotton Fleece, 360 Gsm, Fits Oversized, High-Density Print.`,
                  'Red Hoddie'
                )
              }
            ></div>
            <div
              className="bg-green-600 hover:border-[#8a4af3] w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer onClick={redHoddie}"
              onClick={() =>
                onColorClick(
                  'https://img01.ztat.net/article/spp-media-p1/2e462220fec74b8cba429a1aa9e5207c/351881f84ec941288f3b1e9bc514dfa5.jpg',
                  50,
                  `Looking for a sweatshirt hoodie that will keep you warm all winter long? Look no further than the Customized Forest Green Hoodie!
                   This hoodie has long sleeves and a pulled-on hood, making it comfortable to wear all day long.Whether you're headed to the office or out on a recreational trip, this relaxed-fit hoodie will keep you warm and comfortable.`,
                  'Olive Green Hoddie'
                )
              }
            ></div>
            <div
              className="bg-blue-600 hover:border-[#8a4af3] w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer"
              onClick={() =>
                onColorClick(
                  'https://uniformtailor.in/image/cache/catalog/data/Sweatshirts/hoodie/modern-royal-blue-hoodie/modern-royal-blue-hoodie-back-670x760.jpg',
                  90,
                  `Free Spirit Mantra to get the public buzzing. An electric blue colour to electrify the circuit. Faded sweatshirt fabric for even more comfort. Men’s electric blue baggy hoodie
                  Round neck, hood, short sleeves
                  Sweatshirt fabric with slogan printed on chest, faded look
                  1 XL kangaroo pocket, ribbing on collar, cuffs`,
                  ` MEN’S ELECTRIC BLUE HOODIE`
                )
              }
            ></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2 ">
              <option value="" selected disabled>
                Select
              </option>
              <option value="">Small</option>
              <option value="">Mediun</option>
              <option value="">Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5">Add to Cart</button>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

export default ProductPAge;
