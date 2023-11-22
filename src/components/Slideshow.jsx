/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { slideCaptions, signup } from "../constants/index";
import { slideImages } from "../constants/images";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        nextSlide()
      }, 100);
    }, 5000);
    return () => clearInterval(interval);
  },);

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

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group pt-20 ">
      <div
        style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 items-center flex justify-center flex-col"
      >
        <h1 className="text-[50px] md:flex justify-center md:text-[90px] font-bold [text-shadow:_0_7px_0_rgb(0_0_0_/_40%)]">
          {slideCaptions[0].main}
        </h1>
        <p className="flex justify-center text-[20px] [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
          {slideCaptions[0].subtext}
        </p>
        {
          <button
            className="bg-white py-3 px-8 outline-none w-fit 
            text-tertiary font-bold shadow-md shadow-primary
            rounded-xl mt-8 animate-bounce hover:bg-white hover:text-black"
          >
            <Link
              to={`${signup}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Sign Up
            </Link>
          </button>
        }
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slideImages.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow