/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"

import { slideImages } from "../contants";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideCaptions = [
    <>
      <h1 className="flex justify-center text-[90px] pt-[200px]">Compete in Phoenix Hacks 3.0</h1>
      <p className="flex justify-center text-[20px]">Attend workshops to learn new skills and technology. We offer a variety for all levels</p>
    </>,
    <>        
      <h1 className="flex justify-center text-[90px] pt-[200px]">Win hundreds in prizes</h1>
      <p className="flex justify-center text-[20px]">Including: Gaming Monitor, Airpods, Speakers, Gift Cards, etc.</p>
    </>
  ]

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group pt-20'>
      <div
        style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
        {slideCaptions[currentIndex]}
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slideImages.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow