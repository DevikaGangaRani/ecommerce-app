import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { ApiSlides } from '../apifolder/SliderApi';
import './Slider.css';
function Slider() {
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const arrowStyle =
    'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer';

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: '50px' }} onClick={prevSlide} />
      </div>
      {/* <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative bg-[# ]">
        <div className="slide flex items-center justify-center h-[100%]">
          <div className="forImage flex flex-1 justify-center items-center h-[100%]">
            <img
              className="h-[100%] object-cover"
              src="https://media.istockphoto.com/id/1261066254/photo/summer-portrait-of-smiling-african-american-woman-wearing-sunglasses-holding-shopping-bags.jpg?s=612x612&w=0&k=20&c=o6fid1ovwNhPHBy3Wtu2lHdwMmrfV8xubb15aPGA7hg="
              alt="slideImage"
            />
          </div>
          <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
            <h2 className="text-[55px]">hey this is an awesome deal today</h2>
            <p className="text-[30px]">Upto 40% off</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div> */}

      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ` +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="slideImage"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]"> {slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: '50px' }} onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Slider;
